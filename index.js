const tshirts = [
    {
        id: 1,
        src: "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_amarilla_lisa_2.jpg",
        label: "Yellow T-shirt"
    },
    {
        id: 2,
        src: "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg",
        label: "Black T-shirt"
    },
    {
        id: 3,
        src: "https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_azul_lisa_3.jpg",
        label: "Blue T-shirt"
    }
]


let theImg
let number = 0
theImg = document.querySelector("#img-card");
theImg.setAttribute("src", tshirts[0].src)
let myH5 = document.querySelector(".card-container h5")

const array = [tshirts[0].src, tshirts[1].src, tshirts[2].src]

let title
title = document.querySelector("h3").innerHTML = tshirts[0].label

let anim = 0

function move(params) {
    if (params === "next") {
        number++
        anim++
        if (number == 0) {
            theImg.setAttribute("src", tshirts[0].src)
            myH5.style.visibility = "hidden"
        } else if (number == 1) {
            theImg.setAttribute("src", tshirts[1].src)
            myH5.style.visibility = "hidden"
            title = document.querySelector("h3").innerHTML = tshirts[1].label
        } else if (number == 2) {
            theImg.setAttribute("src", tshirts[2].src)
            myH5.style.visibility = "hidden"
            title = document.querySelector("h3").innerHTML = tshirts[2].label
        } else if (number >= 3) {
            myH5.style.visibility = "visible"
            number = 2
        }
}
    if (params === "back") {
        number--
        anim++
        if (number == 2) {
            theImg.setAttribute("src", tshirts[2].src)
            myH5.style.visibility = "hidden"
            title = document.querySelector("h3").innerHTML = tshirts[2].label
        } else if (number == 1) {
            theImg.setAttribute("src", tshirts[1].src)
            myH5.style.visibility = "hidden"
            title = document.querySelector("h3").innerHTML = tshirts[1].label
        } else if (number == 0) {
            theImg.setAttribute("src", tshirts[0].src)
            myH5.style.visibility = "hidden"
            title = document.querySelector("h3").innerHTML = tshirts[0].label
        } else if (number == -1) {
            myH5.style.visibility = "visible"
            number = 0
        }
    }
}

if (anim == 0) {
    setTimeout((params2) => {
        params2 = "next"
        move2(params2)
    }, 3000);
    setTimeout((params2) => {
        params2 = "next"
        move2(params2)
    }, 6000);
    setTimeout((params2) => {
        params2 = "back"
        move2(params2)
    }, 9000);
    setTimeout((params2) => {
        params2 = "back"
        move2(params2)
    }, 12000);
} 


function move2(params) {
    if (anim == 0) {
        if (params === "next") {
            number++
            if (number == 0) {
                theImg.setAttribute("src", tshirts[0].src)
                myH5.style.visibility = "hidden"
            } else if (number == 1) {
                theImg.setAttribute("src", tshirts[1].src)
                myH5.style.visibility = "hidden"
                title = document.querySelector("h3").innerHTML = tshirts[1].label
            } else if (number == 2) {
                theImg.setAttribute("src", tshirts[2].src)
                myH5.style.visibility = "hidden"
                title = document.querySelector("h3").innerHTML = tshirts[2].label
            } else if (number >= 3) {
                myH5.style.visibility = "visible"
                number = 2
            }
        }

        if (params === "back") {
            number--
            if (number == 2) {
                theImg.setAttribute("src", tshirts[2].src)
                myH5.style.visibility = "hidden"
                title = document.querySelector("h3").innerHTML = tshirts[2].label
            } else if (number == 1) {
                theImg.setAttribute("src", tshirts[1].src)
                myH5.style.visibility = "hidden"
                title = document.querySelector("h3").innerHTML = tshirts[1].label
            } else if (number == 0) {
                theImg.setAttribute("src", tshirts[0].src)
                myH5.style.visibility = "hidden"
                title = document.querySelector("h3").innerHTML = tshirts[0].label
            } else if (number == -1) {
                myH5.style.visibility = "visible"
                number = 0
            }
        }
    }
}
