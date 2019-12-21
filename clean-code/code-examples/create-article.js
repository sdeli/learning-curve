// This file is an express controller for creating articles (saving articles into the db)
// BUT NOW SERVES AS A DEMONSTRATION FOR:
//  - top down analysis - stepwise refinement
//  - Top down narrative of functions

// TERMINOLIGIES:
//  'SUCC_FLASH' => flash message to show on the front end about a successful action
//  'EP' => end-point

const config = require('config');
const {deleteFile} = require('widgets/server-utils');
const {validateArticleFormData} = require('widgets/router-utils');
let saveArticleData = require('./moduls/save-article-data/save-article-data.js');

const ARTICLE_PUBLISHED__SUCC_FLASH = config.flashMsgs.admin.article.create.succ,
    CREATE_EDIT_ARTICLE_VIEW__EP = config.restEndpoints.admin.article.createView,
    ARTICLES_LIST__EP = config.restEndpoints.admin.article.ListView,
    ARTICLES__PATH = config.relativePathes.articlesPath,
    TEASERS__PATH = config.relativePathes.teasersPath,
    ARTICLE_PROFILE_IMAGES__PATH = config.relativePathes.public.img.article.profile;

saveArticleData = saveArticleData({
    ARTICLES__PATH,
    TEASERS__PATH,
});

module.exports = createArticle;

function createArticle(req, res, next) {
    let validationErrs = validateArticleFormData(req, true);
    let isArticleDataCorrect = validationErrs.length === 0;

    if (!isArticleDataCorrect) {
        denyPublishArticle(req, res, validationErrs, next).catch(err => next(err));
        return;
    }

    saveArticleData(req)
    .then(() => {
        notifAboutPublishedArticle(res);
    }).catch(e => {
        next(e);
    });
}

async function denyPublishArticle(req, res, validationErrs, next) {
    try {
        await deleteUploadedProfImages(req)
    } catch (err) {
        next(err)
    }

    validationErrs.forEach(validationErr => {
        res.flash.toNext(res.flash.WARNING, validationErr.msg);
    });

    req.session.body = req.body;
    res.redirect(CREATE_EDIT_ARTICLE_VIEW__EP);
}

function deleteUploadedProfImages(req) {
    let deleteImagesProms = [];

    let uploadedSquareProfImg = Boolean(req.files) && Boolean(req.files.squareArticleProfileImg);
    if (uploadedSquareProfImg) {
        let imgFileName = req.files.squareArticleProfileImg[0].filename;
        deleteImagesProms.push(deleteFile(`${ARTICLE_PROFILE_IMAGES__PATH}/${imgFileName}`))
    }

    let uploadedFlatProfImg = Boolean(req.files) && Boolean(req.files.flatArticleProfileImg);
    if (uploadedFlatProfImg) {
        let imgFileName = req.files.flatArticleProfileImg[0].filename;
        deleteImagesProms.push(deleteFile(`${ARTICLE_PROFILE_IMAGES__PATH}/${imgFileName}`))
    }

    return Promise.all(deleteImagesProms);
}

function notifAboutPublishedArticle(res) {
    let successMsg = ARTICLE_PUBLISHED__SUCC_FLASH;
    res.flash.toNext(res.flash.SUCCESS, successMsg);

    res.redirect(ARTICLES_LIST__EP);
}
