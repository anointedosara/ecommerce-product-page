let imgDiv = document.querySelector(".img-div")
let dropdown = document.querySelector(".dropdown")

imgDiv.addEventListener("click", () => {
    dropdown.classList.toggle("cart")
    outsideDiv.style.display = "block"
    if (outsideDiv.style.display === "block") {
        body.style.overflow = "hidden"
    }

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
    drop.classList.remove("open")
    body.style.overflow = ""
})


let slide = document.querySelector(".sliding")
let modal = document.querySelector(".modal")

slide.addEventListener("click", () => {
    modal.classList.add("top")
})

let close = document.querySelector(".close img")

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

let mobileArrowImageToShow = 0;

let mobileArrowShowImage = () => {
    mobileBigImgs.forEach((mobileBigImg, i) => {
        if (i != mobileArrowImageToShow) {
            mobileBigImg.classList.remove("opacity")
        } else {
            mobileBigImg.classList.add("opacity")
        }
    })
}

let mobileNext = document.querySelector(".mobile-next")
let mobileBigImgs = document.querySelectorAll(".mobile-big-img")
let mobilePrevious = document.querySelector(".mobile-previous")


mobileNext.onclick = () => {
    if (mobileArrowImageToShow === 3) {
        mobileArrowImageToShow -= 4;
    }
    mobileArrowImageToShow += 1;
    mobileArrowShowImage()
}

mobilePrevious.onclick = () => {
    if (mobileArrowImageToShow === 0) {
        mobileArrowImageToShow += 4;
    }
    mobileArrowImageToShow -= 1;
    mobileArrowShowImage()
}

mobileArrowShowImage()

let btn = document.querySelector(".btn")
let num = document.querySelector(".num")
let empty = document.querySelector(".empty")
let cartItem = document.querySelector(".cart-item")
let cartItemsCount = 0

btn.addEventListener("click", () => {
    if (value !== 0) {
        cartItemsCount += 1
        num.innerHTML = cartItemsCount
        num.style.display = "block"
        empty.style.display = "none";

        document.querySelector(".cart-item").innerHTML +=
            `<div class="checkout-div">
                <div class="checkout-quantity">
                   <div class="checkout-img"><img src="./images/image-product-1.jpg" alt="">
                        <div class="amount">
                            <p>Fall Limited Edition Sneakers</p>
                            <p><span class="first-span">$125.00 x ${number.innerHTML}</span> <span class="last-span">$${eval(125*number.innerHTML)}.00</span>
                        </div>
                   </div>
                   <img class="trash" src="./images/icon-delete.svg" alt="">
                </div>
                <button class="checkout-btn">Checkout</button>
             </div>`;
        value = 0;
        number.innerHTML = value
    }

})

let menu = document.querySelector(".menu")
let drop = document.querySelector(".drop")
let body = document.querySelector(".body")
let closeMenu = document.querySelector(".close-menu")

menu.addEventListener("click", () => {
    drop.classList.add("open")
    body.style.overflow = "hidden"
    outsideDiv.style.display = "block"
})

closeMenu.addEventListener("click", () => {
    drop.classList.remove("open")
    body.style.overflow = ""
    outsideDiv.style.display = "none"
})