const output = document.querySelector(".screen__value");

const numbaList = document.querySelectorAll(".pure__number");

for (let index = 0; index < numbaList.length; index++) {
  const element = numbaList[index];
  const value = element.innerHTML;
  element.onclick = () => {
    output.innerHTML += value;
  };
}

const operandList = document.querySelectorAll(".operand");
let firstValue;
let operand;
let secondValue;
for (let index = 0; index < operandList.length; index++) {
  const element = operandList[index];
  const value = element.innerHTML;
  element.onclick = () => {
    firstValue = output.innerHTML;
    if (firstValue.slice(-1) === "*") {
      output.innerHTML = firstValue.replace("*", "");
      operand = "*";
    } else if (firstValue.slice(-1) === "-") {
      output.innerHTML = firstValue.replace("-", "");
      operand = "-";
    } else if (firstValue.slice(-1) === "+") {
      output.innerHTML = firstValue.replace("+", "");
      operand = "+";
    } else if (firstValue.slice(-1) === "/") {
      output.innerHTML = firstValue.replace("/", "");
      operand = "/";
    }
    output.innerHTML += value;
  };
}
const equal = document.querySelector(".equal");
equal.onclick = () => {
  let index;
  if (output.innerHTML.indexOf("*") !== -1) {
    index = output.innerHTML.indexOf("*");
  } else if (output.innerHTML.indexOf("-") !== -1) {
    index = output.innerHTML.indexOf("-");
  } else if (output.innerHTML.indexOf("+") !== -1) {
    index = output.innerHTML.indexOf("+");
  }
  else if (output.innerHTML.indexOf("/") !== (-1)) 
  {
      index = output.innerHTML.indexOf("/");
  }
 secondValue =  output.innerHTML.slice(index+1);
 const newOperand = output.innerHTML[index];
  if (newOperand === "*") {
     let count = (firstValue * secondValue);
     output.innerHTML = count;  
  }
  if (newOperand === "+") {
    let count = (Number(firstValue) + Number(secondValue));
    output.innerHTML = count;  
 }
 if (newOperand === "-") {
    let count = (firstValue - secondValue);
    output.innerHTML = count;  
 }
 if (newOperand === "/") {
    let count = (firstValue / secondValue);
    output.innerHTML = count;  
 }
};



const AC = document.querySelector("#AC");
AC.onclick = () => {
  output.innerHTML = " ";
};
