var vijay = document.getElementById("vijay")

function setVijayColor() {
    vijay.style.color = "hsl(" + String(Math.random() * 360) + ",100%,50%)"
}

setVijayColor()
setInterval(setVijayColor, 100)
