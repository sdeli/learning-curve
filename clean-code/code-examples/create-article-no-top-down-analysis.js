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
        try {
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
        } catch (err) {
            next(err)
        }

        validationErrs.forEach(validationErr => {
            res.flash.toNext(res.flash.WARNING, validationErr.msg);
        });

        req.session.body = req.body;
        res.redirect(CREATE_EDIT_ARTICLE_VIEW__EP);
        return;
    }

    saveArticleData(req)
        .then(() => {
            let successMsg = ARTICLE_PUBLISHED__SUCC_FLASH;
            res.flash.toNext(res.flash.SUCCESS, successMsg);

            res.redirect(ARTICLES_LIST__EP);
        }).catch(e => {
        next(e);
    });
}
