var vijay = document.getElementById("vijay")

function randColor() {
    return "hsl(" + String(Math.random() * 360) + ",100%,50%)"
}

var x = {a : 0, b : 0, c : false}
function randOffset() {
    x.c = !x.c
    if (x.c)
      x.a = x.a + Math.random() * 4 - 2;
    else
      x.b = x.b + Math.random() * 4 - 2

    return String(x.c ? x.a : x.b) + "px"
}

function changeVijay() {
    vijay.style.color = randColor()
    vijay.style.top = randOffset()
    vijay.style.left = randOffset()
}

changeVijay()
setInterval(changeVijay, 50)
