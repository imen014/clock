/*setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minutes-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hoursRatio =  (minutesRatio + currentDate.getHours()) / 12+;

    setRotation(secondHand , secondRatio);
    setRotation(minuteHand , minutesRatio);
    setRotation(hourHand , secondRatio);
    

}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();
*/

setInterval(setClock,1000);

const HourHand = document.querySelector('[data-hour-hand]');
const MinutesHand = document.querySelector('[data-minutes-hand]');
const SecondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const CurrentDate = new Date();
    const secondRatio = CurrentDate.getSeconds() / 60;
    const MinutesRatio = (secondRatio + CurrentDate.getMinutes()) / 60;
    const hoursRatio = (MinutesRatio + CurrentDate.getHours()) / 12;

    setRotation(SecondHand,secondRatio);
    setRotation( MinutesHand,MinutesRatio);
    setRotation(HourHand,hoursRatio);
    
}

function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);

}
setClock();

