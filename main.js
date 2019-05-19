console.log('js ok');
let cat = document.getElementById('cat');
let catEye = document.getElementsByClassName('eye');
let catEyeLeft = document.getElementsByClassName('left-eye');
let catEyeRight = document.getElementsByClassName('right-eye');
let catLentilleLeft = document.getElementsByClassName('left-lentille');
let catLentilleRight = document.getElementsByClassName('right-lentille');
let fantom = document.getElementById("fantom");
let fantomBody = document.getElementsByClassName('fantom-body');
    //initial position of eyes set to left
// catLentilleLeft[0].style.transform = `translateX(-30px)`;
// catLentilleRight[0].style.transform = `translateX(-10px)`;
document.addEventListener("keydown", press);
let x = 0;
let lentille = document.getElementsByClassName('lentille');

function press(e) {
    if (e.key === 'ArrowLeft') {
        x -= 50;
        fantom.style.transform = `translateX(${x}px)`;
    }
    if (e.key === 'ArrowRight') {
        x += 50;
        fantom.style.transform = `translateX(${x}px)`;
    }
    if (e.key === ' ') {
        // fantomBody[0].style.transform= 'translateY(-100px)';
        fantomBody[0].classList.add('jump');
    }
    fantom.style.transition = 'transform linear .3s';
    let fantomPositionX = fantom.getBoundingClientRect().x;
    let windowWidth = window.innerWidth;
    let fantomPositionXPercent = fantomPositionX / windowWidth * 100;
    let fantomPositionXCenter = fantomPositionX + (fantom.getBoundingClientRect().width / 2);
    let fantomPositionXCenterPercent = fantomPositionXCenter / windowWidth * 100
    let catWidth = cat.getBoundingClientRect().width;
    let eyeWidth = catEye[0].getBoundingClientRect().width;
    let catEyeLeftPosition = catEyeLeft[0].getBoundingClientRect().x;
    let catEyeRightPosition = catEyeRight[0].getBoundingClientRect().x;
    let catLentilleLeftPosition = catLentilleLeft[0].getBoundingClientRect().x;
    let catLentilleRightPosition = catLentilleRight[0].getBoundingClientRect().x;
    let diffLentilleEyeLeft = catLentilleLeftPosition - catEyeLeftPosition;
    let positionEye = fantomPositionXCenterPercent * eyeWidth / 100;
    console.log(catEyeLeftPosition, catLentilleLeftPosition, diffLentilleEyeLeft, fantomPositionXCenterPercent);
    let catLentilleLeftRange= 50;
    let catLentilleRightRange= 50;
    let catLentilleLeftMove= (fantomPositionXCenterPercent*catLentilleLeftRange/100)-30;
    let catLentilleRightMove= (fantomPositionXCenterPercent*catLentilleRightRange/100)-15;
    console.log(catLentilleLeftMove);
    catLentilleLeft[0].style.transform=`translateX(${catLentilleLeftMove}px)`;
    catLentilleRight[0].style.transform=`translateX(${catLentilleRightMove}px)`;
}
document.addEventListener("keyup", unpress);

function unpress(e) {
    if (e.key === ' ') {
        console.log('unpressed');
        fantomBody[0].classList.remove('jump');
    }
}