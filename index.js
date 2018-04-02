var vijay = document.getElementById("vijay")

function randColor() {
    return "hsl(" + String(Math.random() * 360) + ",100%,50%)"
}

function changeVijay() {
    vijay.style.color = randColor()
}

changeVijay()
setInterval(changeVijay, 100)
