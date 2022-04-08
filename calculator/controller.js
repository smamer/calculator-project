// setup variables and get a calculator instance
var firstNumber = document.getElementByClassName("textbox")
var secondNumber = document.getElementByClassName("textbox2")
var add = document.getElementByID("add")
var subtract = document.getElementByID("subtract")
var multiply = document.getElementByID("multiply")
var divide = document.getElementByID("divide")
var results = document.querySelector("results")
function CreateCalculator() {
}

// perform a calculation when the operator button is clicked
function calculate() {}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    results.innerText = "The result of " + Calculator.firstNumber + "and " + 
    Calculator.secondNumber + "by using the operator " + Calculator.operator + 
    "is " + Calculator.value
}

// should clear input text values and focus the first number input
function clearValues() {
    firstNumber = ""
    secondNumber = ""
    firstNumber.focus();
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    if (add.checked)
    return this.operator = add();
    if (subtract.checked)
    return this.operator = subtract();
    if (multiply.checked)
    return this.operator = multiply();
    if (divide.checked)
    return this.operator = divide();
}
