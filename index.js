var vijay = document.getElementById("vijay")

function randColor() {
    return "hsl(" + String(Math.random() * 360) + ",100%,50%)"
}

function randOffset() {
    return String(Math.random() * 4 - 2) + "px"
}

function changeVijay() {
    vijay.style.color = randColor()
    vijay.style.top = randOffset()
    vijay.style.left = randOffset()
}

changeVijay()
setInterval(changeVijay, 100)
