let firstPara = document.querySelector("#firstPara")
let secondPara = document.querySelector("#secondPara")
let thirdPara = document.querySelector("#thirdPara")

function showpara(show) {


    if (show == 1) {
        secondPara.style.display = "none";
        thirdPara.style.display = "none";

        if (firstPara.style.display == "block") {
            firstPara.style.display = "none"
        } else {
            firstPara.style.display = "block"
        }
    }

    else if (show == 2) {
        firstPara.style.display = "none";
        thirdPara.style.display = "none";

        if (secondPara.style.display = "block") {
            secondPara.style.display = "none"

        } else {
            secondPara.style.display = "block"
        }

    }

    else if (show == 3) {
        firstPara.style.display = "none";
        secondPara.style.display = "none";

        if (thirdPara.style.display = "block") {
            thirdPara.style.display = "none"
        } else {
            thirdPara.style.display = "block"
        }

    }
}

let firstItem = document.querySelector("#firstItem")
let secondItem = document.querySelector("#secondItem")
let thirdItem = document.querySelector("#thirdItem")
let fourthItem = document.querySelector("#fourthItem")
let fifthItem = document.querySelector("#fifthItem")
let lastItem = document.querySelector("#lastItem")

let currentNum = 0;



function downArrow() {

    currentNum++
    showImg()
}

function upwardarrow() {

    currentNum--
    showImg()
}

function showImg() {
    if (currentNum == 0) {
        firstItem.classList.remove("hide")
        secondItem.classList.add("hide")
    }
    else if (currentNum == 1) {
        secondItem.classList.remove("hide")
        firstItem.classList.add("hide")
        thirdItem.classList.add("hide")
    }
    else if (currentNum == 2) {
        thirdItem.classList.remove("hide")
        secondItem.classList.add("hide")
        fourthItem.classList.add("hide")
    }
    else if (currentNum == 3) {
        fourthItem.classList.remove("hide")
        thirdItem.classList.add("hide")
        fifthItem.classList.add("hide")
    }

    else if (currentNum == 4) {
        fifthItem.classList.remove("hide")
        fourthItem.classList.add("hide")
        lastItem.classList.add("hide")
    }

    else if (currentNum == 5) {
        lastItem.classList.remove("hide")
        fifthItem.classList.add("hide")
    }
}

function arrow1() {
    currentNum++
    showImg2()
    console.log("arrow1")

}

function arrow2() {
    currentNum--
    showImg2()
}

function showImg2() {
    let images3 = document.querySelector(".images3")
    let c = currentNum * 250
    images3.style.transform = "translateY("+ c + "px)"
    
}