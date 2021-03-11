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
let saveCalc = []

function display() {
    
    numbers.forEach((button) => {
        
        button.addEventListener('click', (e) => {
            if (displayed.textContent == "ERROR") {
                cleardisplay()
            }
            if (displayed.textContent == "0") {
                displayed.textContent = ""
            }
            if (saveCalc.length > 1) {
                if (displayed.textContent.includes(".")) {
                    if (e.target.innerText == ".") {
                        return
                    } else {
                        b += e.target.innerText
                        displayed.textContent = b
                        return
                    }
                }
                b += e.target.innerText
                displayed.textContent = b
            } else {
                if (displayed.textContent.includes(".")) {
                    if (e.target.innerText == ".") {
                        return
                    } else {
                        a += e.target.innerText
                        displayed.textContent = a
                        return
                    }
                }
                a += e.target.innerText
                displayed.textContent = a
            }
                
        })
    })
    operators.forEach((button) => {
        
        button.addEventListener('click', (e) => {
            console.log(saveCalc.length)
            if (displayed.textContent == "ERROR") {
                cleardisplay()
            }
            if (saveCalc.length >= 1) {
                if (b == "") {
                    return
                }
                saveCalc[2] = b
                console.log(saveCalc)
                a = Number(saveCalc[0])
                b = Number(saveCalc[2])
                if (b == 0) {
                    displayed.textContent = "ERROR"
                    return
                }
                if (saveCalc[1] == "+") {
                    displayed.textContent = operate(add, a, b)
                    displayed.textContent = decimals(displayed.textContent)
                    saveCalc[1] = ""
                    saveCalc[0] = displayed.textContent
                    a = ""
                    b = ""
                } else if (saveCalc[1] == "-") {
                    displayed.textContent = operate(subtract, a, b)
                    displayed.textContent = decimals(displayed.textContent)
                    saveCalc[1] = ""
                    saveCalc[0] = displayed.textContent
                    a = ""
                    b = ""
                } else if (saveCalc[1] == "x") {
                    displayed.textContent = operate(multiply, a, b)
                    displayed.textContent = decimals(displayed.textContent)
                    saveCalc[0] = displayed.textContent
                    a = ""
                    b = ""
                } else if (saveCalc[1] == "÷") {
                    displayed.textContent = operate(divide, a, b)
                    displayed.textContent = decimals(displayed.textContent)
                    saveCalc[0] = displayed.textContent
                    a = ""
                    b = ""
                }
                saveCalc[1] = e.target.innerText
            } else {
                saveCalc[0] = displayed.textContent
                operator = e.target.innerText
                saveCalc[1] = operator
                console.log(saveCalc)
            }
        })
    })
}
display()

const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')
const deleteBtn = document.querySelector('#delete')

function calculate() {
    
    equals.addEventListener('click', (e) => {        
        if (displayed.textContent == "ERROR") {
            cleardisplay()
        }
        if (saveCalc.length < 1) {
            return
        }
        if (b == "") {
            return
        }
        if (b == 0) {
            displayed.textContent = "ERROR"
            return
        }
        console.log(saveCalc.length)
        a = Number(saveCalc[0])
        console.log(a)
        saveCalc[2] = displayed.textContent
        b = Number(saveCalc[2])
        if (saveCalc[1] == "+") {
            displayed.textContent = operate(add, a, b)
            displayed.textContent = decimals(displayed.textContent)
        } else if (saveCalc[1] == "-") {
            displayed.textContent = operate(subtract, a, b)
            displayed.textContent = decimals(displayed.textContent)
        } else if (saveCalc[1] == "x") {
            displayed.textContent = operate(multiply, a, b)
            displayed.textContent = decimals(displayed.textContent)
        } else if (saveCalc[1] == "÷") {
            displayed.textContent = operate(divide, a, b)
            displayed.textContent = decimals(displayed.textContent)
        }
    })
}
calculate()

function cleardisplay() {
    displayed.textContent = 0
    a = ""
    b = ""
    operator = ""
    saveCalc = []
    }

clear.addEventListener('click', () => {
    cleardisplay()
})

function decimals(int) {
    if (int.includes(".") == true) {
        let ans = int.split(".")
        if ((ans[0].length + ans[1].length) > 12) {
            int = Number(int)
            int = int.toPrecision(12)
            int = parseFloat(int)
            return int
        } else return int
    } else {
        let ans = int.split("")
        if (ans.length > 12) {
            int = Number(int)
            int = int.toPrecision(12)
            int = parseFloat(int)
            return int
        } else return int
    }
}

function deletetion() {
    let ans = displayed.textContent.split("")
    ans.pop()
    ans = ans.join("")
    console.log(saveCalc)
    return ans
}

deleteBtn.addEventListener('click', (e) => {
    displayed.textContent = deletetion()
    if (saveCalc.length < 1) {
        a = displayed.textContent

    } else {
        b = displayed.textContent
    }
})

