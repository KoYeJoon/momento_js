const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad() {
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
   
}


function genRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER);
    // Math.random() 랜덤 숫자 생성
    // Math.ceil() 소수점 올림
    // Math.floor() 소수점 내림
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();