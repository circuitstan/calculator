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

let displayed = document.querySelector("#screendisplay")
displayed.textContent = "0"

const numbers = document.querySelectorAll('button.numbers')
const operators = document.querySelectorAll('button.operators')

let a = ""
let b = ""
let operator = ""

function display() {
    
    numbers.forEach((button) => {
        
        button.addEventListener('click', (e) => {
            if (displayed.textContent == "0") {
                displayed.textContent = ""
            }
            if (displayed.textContent.includes(" ")) {
                b += e.target.innerText
            } else {
                a += e.target.innerText
            }
            displayed.textContent = a + operator + b
                
        })
    })
    operators.forEach((button) => {
        
        button.addEventListener('click', (e) => {
            operator = " " + e.target.innerText + " "
            displayed.textContent = a + operator + b
        })
    })
}
display()

const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')

function calculate() {
    
    equals.addEventListener('click', (e) => {
        let ans = displayed.textContent.split(" ")
        a = parseInt(ans[0])
        b = parseInt(ans[2])
        if (ans[1] == "+") {
            displayed.textContent = operate(add, a, b)
        } else if (ans[1] == "-") {
            displayed.textContent = operate(subtract, a, b)
        } else if (ans[1] == "x") {
            displayed.textContent = operate(multiply, a, b)
        } else if (ans[1] == "÷") {
            displayed.textContent = operate(divide, a, b)
        }

    })
}
calculate()

function cleardisplay() {
    clear.addEventListener('click', () => {
        displayed.textContent = 0
        a = ""
        b = ""
        operator = ""
    })
}
cleardisplay()