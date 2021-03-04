function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(operator, a, b) {
    return operator(a,b)
}

let displayed = document.getElementById("screendisplay").innerHTML

let btn1 = document.getElementById("1").onclick

function type() {
    if (btn1) {
        displayed = "1"
    }
}

type()