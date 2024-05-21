/* //printing hello world
console.log("Hello World") */

/* //value of PI
console.log("Original pie value",Math.PI)

//value of PI simple method
const PI=3.14
console.log(PI) */

//Compute the sum of the two given integers. If the two values are the same, then return triple their sum
// 1. Writing const to identify using prompt
// 2. Creating a function.
// 3. if/else statement
// 4. Specifying the condition
/* const num1=Number(prompt("Enter the first number"))
const num2=Number(prompt("Enter the second number"))
function sum(num1,num2){
    const sum=num1+num2;
if(num1===num2){
    return (sum)*3;
} else{
    return sum;
}
}
const result=sum(num1,num2);
console.log("Result is: ",result)  */

//To check wheather the number is multiple of 3 or 7
/* const Mul = (num) => {
  if (num <= 0) {
    return false;
  }
  return num % 3 === 0 || num % 7 === 0;
}
const res = Number(prompt("Enter the number"));
if (Mul(res)) {
  console.log(`${res} is multiple of 3 or 7`);
} else {
  console.log(`${res} is not a multiple of 3 or 7`);
}  */

/* //To get the current date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth()+1;
const day = currentDate.getDay();
console.log(`Current Date:${year}-${month}-${day}`); */

//To calculate multiplication and division of two numbers.(use same function to achieve this)
/* const num1 = Number(prompt("Enter the first number"));
const num2 = Number(prompt("Enter the second number"));



const calculate = (num1, num2, result = "*") => {
  if (result === "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
};
console.log(calculate(num1, num2, "*")); */

/* 
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => (num2 !== 0 ? num1 / num2 : "Cannot divide by zero");

const product = mul(num1, num2);
const quotient = div(num1, num2);

console.log("Sum is: " + sum);
console.log("Difference is: " + difference);
console.log("Product is: " + product);
console.log("Quotient is: " + quotient); */


/*
const option=Number(prompt("Enter what you wanna perform\n1-Multiplication\n2-Division"));
switch(option){
    case 1:
        return num1*num2;
        break;
    case 2:
        return num1/num2;
        break;
        default:
            return "Invalid";
            console.log(option)
} */

/* const multiplication=num1*num2;
const division=num1/num2;
console.log(multiplication,division)  */

//function that reverses a number. Example x = 32243; Expected Output : 34223
const reverse=(num)=>{
const data=String(num)
const length0fData=data.length;
for(let i=length0fData;i>0;i++)
console.log(data[i])
}

