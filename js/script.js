const INPUTBOX = document.querySelector("#inputBox");
const NUMBERBOX = document.querySelector(".numberBox");
const OPERATORBOX = document.querySelector(".operatorBox");
const EQUALBTN = document.querySelector("#result");

let op1;
let operator;

function createNumbers() {
    for(let i = 0; i < 10; i++){
        const digitBtn = document.createElement("button");
        digitBtn.textContent = i;
        NUMBERBOX.appendChild(digitBtn);
        digitBtn.addEventListener("click", (event) => {
            if(INPUTBOX.value == "0")
                INPUTBOX.value = "";
            INPUTBOX.value += event.target.textContent;
        });
    }
}

function createOperators() {
    const operators = ["+", "-", "*", "/"];
    operators.forEach((item) => {
        const opBtn = document.createElement("button");
        opBtn.textContent = item;
        OPERATORBOX.appendChild(opBtn);
        opBtn.addEventListener("click", (e) => {
            op1 = parseInt(INPUTBOX.value);
            console.log(op1);
            INPUTBOX.value = "";
            operator = e.target.textContent;
        });
    })
}

EQUALBTN.addEventListener("click", () => {
    let result = op1 + operator + INPUTBOX.value;
    INPUTBOX.value = eval(result);
})



createNumbers();
createOperators();