// SO YOU SHOULDNT DO A THING LIKE THIS
if (windowIsOnMobileView) {
    const carouselDiv = document.createElement('div');
    carouselDiv.className = 'carousel';
    const image = document.createElement('image');
    image.src = '/some/image.jpg';
    carouselDiv.appendChild(image);
    const caruoselContaienrDiv = document.querySelector('.for-carousel');
    caruoselContaienrDiv.appendChild(carouselDiv);
} else {
    const caruoselDiv = document.querySelector('carousel')
    carouselDiv.parentElement.removeChild(caruoselDiv);
}
// So what does it do in the first block... it is not difficult to find out, but when you have this pattern all over the place
// and you need to find out from each one what it does because you are try to find out that a certain functionaltiy where
// has been coded out then it is a pain in the ass.

// INSTEAD
if (windowIsOnMobileView) {
    addCaruselToPage()
} else {
    const caruoselDiv = document.querySelector('carousel')
    carouselDiv.parentElement.removeChild(caruoselDiv);
}
// So it is far easier to understand for the first look what logic this if statement manages
// Now if you are looking for where are pop up windows created then you will know straight away that
// this is not your if statement and you can scroll further.

function addCaruselToPage() {
    const carouselDiv = document.createElement('div');
    carouselDiv.className = 'carousel';
    const image = document.createElement('image');
    iamge.src = '/some/iamge.jpg';
    carouselDiv.appendChild(iamge);
    const caruoselContaienrDiv = document.querySelector('.for-carousel');
    caruoselContaienrDiv.appendChild(carouselDiv);
}

// SIDENOTE
// I would even go further and do this =>
if (windowIsOnMobileView) {
    addCaruselToPage();
} else {
    removeCarouselFromPage();
}
// So it is more easier to see what logic this if statement routs and it is better up to scale for additional
// blocks

function removeCarouselFromPage() {
    const caruoselDiv = document.querySelector('carousel')
    carouselDiv.parentElement.removeChild(caruoselDiv);
}
