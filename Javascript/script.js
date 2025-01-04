const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
})

let image = document.getElementsByClassName("slide")
let dot = document.getElementsByTagName("span")

function x(y) {
    currentSlide = 0
    change(y)
}

currentSlide = 0

change(currentSlide)

function change(x) {

    currentSlide += x

    if (currentSlide > 2) {
        currentSlide = 0
    }
    if (currentSlide < 0) {
        currentSlide = 2
    }

    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none"
    }
    image[currentSlide].style.display = "block"

    for (let i = 0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace("activex", "")
    }
    dot[currentSlide].className = "activex";
}