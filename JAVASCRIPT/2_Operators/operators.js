var name1 = "Ajay";

name1= name1.replace('ja','jaa');

document.write(`${name1} <br>`);


// == && === Operator

var num1 = "10";
var num2 = 10;

document.write("Using == Operator <br>");
if(num1==num2){

    document.write(`num1 is "${num1}" && num2 is ${num2} Both num are same <br>`);

}else{
    document.write(`num1 is ${num1} && num2 is ${num2}Both num are not same <br>`);

}

document.write("Using === Operator <br>");
if(num1===num2){

    document.write(`num1 is "${num1}" && num2 is ${num2} Both num are same`);

}else{
    document.write(`num1 is ${num1} && num2 is ${num2}Both num are not same`);


}

num1 =30;
num2=30;


document.write("Using === Operator <br>");
if(num1===num2){

    document.write(`num1 is "${num1}" && num2 is ${num2} Both num are same`);

}else{
    document.write(`num1 is ${num1} && num2 is ${num2}Both num are not same`);
}


