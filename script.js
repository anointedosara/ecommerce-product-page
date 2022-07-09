let imgDiv = document.querySelector(".img-div")
let dropdown = document.querySelector(".dropdown")

imgDiv.addEventListener("click", () => {
    dropdown.classList.toggle("cart")
    outsideDiv.style.display = "block"
})

let imageToShow = 0;

let showImage = () => {
    productImages.forEach((productImage, i) => {
        if (i != imageToShow) {
            productImage.classList.remove("opacity")
        } else {
            productImage.classList.add("opacity")
        }
    })
}

let thumbnails = document.querySelectorAll(".thumbnail")
let productImages = document.querySelectorAll(".product")

thumbnails.forEach((thumbnail, i) => {
    thumbnail.onclick = () => {
        imageToShow = i;
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove("outline")
            thumbnail.classList.remove("bg")
        })
        if (i === imageToShow) {
            thumbnail.classList.add("outline")
            thumbnail.classList.add("bg")
        }
        showImage()

    }
})

showImage()


let minusImg = document.querySelector(".minus-img")
let plusImg = document.querySelector(".plus-img")
let number = document.querySelector(".number")
let value = 0

plusImg.addEventListener("click", () => {
    value += 1
    number.innerHTML = value
})
minusImg.addEventListener("click", () => {
    if (number.innerHTML != 0) {
        value -= 1
        number.innerHTML = value
    } else {
        number.innerHTML = 0
    }
})


let modalImageToShow = 0;

let modalShowImage = () => {
    bigImgs.forEach((bigImg, i) => {
        if (i != modalImageToShow) {
            bigImg.classList.remove("opacity")
        } else {
            bigImg.classList.add("opacity")
        }
    })
}

let smallImgs = document.querySelectorAll(".small-img")
let bigImgs = document.querySelectorAll(".big-img")

smallImgs.forEach((smallImg, i) => {
    smallImg.onclick = () => {
        modalImageToShow = i;
        smallImgs.forEach(smallImg => {
            smallImg.classList.remove("outline")
            smallImg.classList.remove("bg")
        })
        if (i === modalImageToShow) {
            smallImg.classList.add("outline")
            smallImg.classList.add("bg")
        }
        modalShowImage()

    }
})

modalShowImage()


let outsideDiv = document.querySelector(".outsideDiv")

outsideDiv.addEventListener("click", () => {
    dropdown.classList.remove("cart")
    outsideDiv.style.display = "none"
})


let slide = document.querySelector(".sliding")
let modal = document.querySelector(".modal")

slide.addEventListener("click", () => {
    modal.classList.add("top")
})

let close = document.querySelector(".close")

close.addEventListener("click", () => {
    modal.classList.remove("top")
})


let arrowImageToShow = 0;

let arrowShowImage = () => {
    bigImgs.forEach((bigImg, i) => {
        if (i != arrowImageToShow) {
            bigImg.classList.remove("opacity")
        } else {
            bigImg.classList.add("opacity")
        }
    })
}

let next = document.querySelector(".next")
let previous = document.querySelector(".previous")


next.onclick = () => {
    if (arrowImageToShow === 3) {
        arrowImageToShow -= 4;
    }
    arrowImageToShow += 1;
    arrowShowImage()
}

previous.onclick = () => {
    if (arrowImageToShow === 0) {
        arrowImageToShow += 4;
    }
    arrowImageToShow -= 1;
    arrowShowImage()
}

arrowShowImage()

let btn = document.querySelector(".btn")
let num = document.querySelector(".num")
let empty = document.querySelector(".empty")
let cartItemsCount = 0

btn.addEventListener("click", () => {
    if (value !== 0) {
        cartItemsCount += 1
        num.innerHTML = cartItemsCount
        value = 0;
        number.innerHTML = value
        num.style.display = "block"
        empty.style.display = none;
    }
})

let menu = document.querySelector(".menu")
let drop = document.querySelector(".drop")
let body = document.querySelector(".body")
let closeMenu = document.querySelector(".close-menu")

menu.addEventListener("click", () => {
    drop.classList.add("open")
    body.style.overflow = "hidden"
})

closeMenu.addEventListener("click", () => {
    drop.classList.remove("open")
    body.style.overflow = ""
})