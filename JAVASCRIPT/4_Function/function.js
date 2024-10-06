
function add(){

    document.write("Add () method Called <br>");
}
add();

function add1(){

    document.write("Add1 () method Called <br>");
}

var result = add1();
document.write(`result is = ${result} <br>`);


//function with para

function multiply(a,b){

    return a*b;
}

result = multiply(10,20);
document.write(`Result is : ${result}<br>`);


result = multiply();
document.write(`Result is : ${result}<br>`);


function add(a,b){

    return a+b;
}

result = add(10,20);
document.write(`Result is : ${result}<br>`);

result = add("10","20");
document.write(`Result is : ${result}<br>`);


var data = 400;

if(isNaN(data)){

    document.write(`It is not a number ${data}<br>`);
}else{

    document.write(`It is a number ${data} <br>`);
}


document.write(`<br> <br>`);

function addition(){
    document.write(`Number of arguments passed : ${arguments.length} <br/>`);
    for (var element of arguments) {
        
        document.write(`${element} `);
    }

    document.write(`<br>`)

    for (var index = 0; index < arguments.length; index++) {
        
        document.write(`${arguments[index]}  <br>`);
        
    }

}
addition(10,20,30,40,50,60);


// var x = 10, y = 11;
var x, y;
if (x == y) {
    document.write(`${x} & ${y} are equal<br/>`);
} else {
    document.write(`${x} & ${y} are not equal<br/>`);
}

//hoisting

gun();

function gun(){

    document.write(`gun method called <br>`)

}

//function Expression

// result1('Ajay');   not work  hoisting
var result1 = function(name){

    document.write(`<br> name is : ${name}`)
}

result1('Ajay');


// Arrow function

var result2 = (name)=>document.write(`<br>name is=  ${name}`);

result2('Ajay Bhosle');

//named function expression


var result3 = function addition(name){

    document.write(`<br>Name is : ${name}`);
}

result3('ajay');


// it achieve recusrion


// factorial


var result4 = function fact(num){

    if(num==1){
        return num;
    }
    return num * fact(num-1);
}

result = result4(5);

document.write(`<br>Factorial of 5 is ${result}`);


// self execution function like iife

var result5 = function fact(num){

    if(num==1){
        return num;
    }
    return num * fact(num-1);
}(3);

document.write(`<br>Factorial of 5 is ${result5}`);
