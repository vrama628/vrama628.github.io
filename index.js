var vijay = document.getElementById("vijay")

function randomColor() {
    return "hsl(" + String(Math.random() * 360) + ",100%,50%)"
}

function setVijayColor() {
    vijay.style.color = randomColor()
}

setVijayColor()
setInterval(setVijayColor, 100)
