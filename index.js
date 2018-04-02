const vijay = document.getElementById("vijay")

const setVijayColor = () => {
    vijay.style.color = `hsl(${Math.random() * 360},100%,50%)`
}

setVijayColor()
setInterval(setVijayColor, 100)
