// SO SUCH A THING SHOULDNT BE DONE
if (carouselDiv.css('width') > 400) {
    column.style.width = '50%';
} else {
    column.style.width = '100%';
}
// Here you have no idea why exactly over 400 needs to be done column.style.width = '50%

// INSTEAD
const carouselHasMobileViewWidth = carouselDiv.css('width') > 400;
if (carouselHasMobileViewWidth) {
    column.style.width = '50%';
} else {
    column.style.width = '100%';
}

// FURTHER EXAMPLES
const maxConcurrentRequestsCount = 5;
const canStartNewRequest = ongoingRequestsArr.length < maxConcurrentRequestsCount;
if (canStartNewRequest) ...

const homeworks = ['1 +1', '2 + 2', '3 + 1', '4 + 11'];
const shouldDoHomework = homeworks.length !== 0;
if (shouldDoHomework) ...

const responseObject = await someInsertionIntoDb(someDataToSave);
const wasSaveSuccesfull = responseObject.affectedRowsArr.length > 0;
const nextTask = wasSaveSuccesfull ? 'have a fun christmas' : 'stay in office until 2 o clock in the night';
