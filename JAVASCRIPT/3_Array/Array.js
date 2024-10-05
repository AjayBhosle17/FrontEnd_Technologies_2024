
var arr = [];

document.writeln(`Array length: ${arr.length}<br>`);

var arr1 = new Array(10,20,30,40);
document.writeln(`Array length: ${arr1.length}<br>`);


arr = [10,20,30,40];
document.writeln(`Array length: ${arr.length}<br>`);

document.write("<br>Elements are in array: <br>");

arr.forEach(element => {
   document.write(`${element} <br>`); 
});

document.write("<br>Elements are in array: <br>");

for (var item of arr) {
   document.write(`${item} <br>`); 
    

}

document.write("<br>Elements are in array: <br>");

for (var item=0 ; item<4 ; item++) {
   document.write(`${arr[item]} <br>`); 
    

}

document.write("<br>Elements are in array: <br>");

for (var item in arr) {
    document.write(`${arr[item]} <br>`); 
     
 
 }


 document.write('<br>Mix Array <br>');
 
 var mixArray= ["Ajay",10,'A',10.5];

 for(var i=0 ; i<mixArray.length ;i++){

    document.write(`${mixArray[i]} <br>`);

 }

 document.write(`<br>Using Foreach: <br> `);
 mixArray.forEach(element=>{

    document.write(`${element} <br>`);


 });



// some Array Function

var arr4 = [10,20,30,40];

document.write('<br>Array Elements Are:<br>');

for(var item of arr4){

    document.write(`${item} `);
}

// push

arr4.push(50);

document.write("<br>Push: push(50)  <br>")
for(var item of arr4){

    document.write(`${item} `);
}

// pop

arr4.pop();

document.write("<br>pop: pop()  <br>")
for(var item of arr4){

    document.write(`${item} `);
}

// unshift

arr4.unshift('Ajay');

document.write("<br>unshift: unshift(5)  <br>")
for(var item of arr4){

    document.write(`${item} `);
}

// shift

arr4.shift();

document.write("<br>shift: shift()  <br>")
for(var item of arr4){

    document.write(`${item} `);
}

// splice

arr4.splice(5,0,50,60,70,80);

document.write("<br>splice: splice()  <br>")
for(var item of arr4){

    document.write(`${item} `);
}

arr4.splice(0,0,1,2,3);

document.write("<br>splice: splice()  <br>")
for(var item of arr4){

    document.write(`${item} `);
}
arr4.splice(9,2);

document.write("<br>splice: splice()  <br>")
for(var item of arr4){

    document.write(`${item} `);
}

arr4.splice(0,3);

document.write("<br>splice: splice()  <br>")
for(var item of arr4){

    document.write(`${item} `);
}

//Reverse
arr4.reverse();

document.write("<br>Reverse: reverse()  <br>")
for(var item of arr4){

    document.write(`${item} `);
}



document.write('<br><br>')

// sort



arr4.sort();
document.write('sort: ');

for(var item of arr4){

    document.write(`${item} `);
}

document.write("<br><br>Elements are: ");
var numbers = [4,5,1,2,6];
for(var item of numbers){

    document.write(`${item} `);
}
var index= numbers.indexOf(2);
document.write(`<br>index of 2 is : ${index} <br>`);

index = numbers.at(4);
document.write(`<br>index at 4 is : ${index} <br>`);

numbers.splice(1,2);
for(var item of numbers){

    document.write(`${item} `);
}
document.write('<br>');

numbers.sort();
for(var item of numbers){

    document.write(`${item} `);
}

document.write('<br>');


numbers.sort((a,b)=>b-a);
for(var item of numbers){

    document.write(`${item} `);
}

document.write('<br> <br>');

numbers.splice(2,0,6,8,1,5,9);

document.write('<br> Elements Are: <br>');

for(var item of numbers){

    document.write(`${item} `);
}


document.write('<br>Every <br>');

var everyEle= numbers.every((v,i,numbers)=>v>3);
document.write(`${everyEle} <br>`);



document.write('<br>Some <br>');

var some1= numbers.some((v,i,array)=>v>3);
document.write(`${some1} <br>`);




document.write('<br>Filter <br>');

var odd= numbers.filter((v,i,arr)=>v%2==0);

for (const element of odd) {
    
    document.write(`${element} `);
}


var str = numbers.toString();

document.write(`to string convert : ${str}`);

document.write('<br>map <br>');

var odd= numbers.map((v,i,arr)=>v+10);

for (const element of odd) {
    
    document.write(`${element} `);
}

document.write(`<br>---------------- filter() function / unique items -------------------------<br/>`);

numbers.push(2);

for(var i of numbers){

    document.write(`${i} `);

}
document.write(`<br>`);

var unique = numbers.filter((v,i,arr)=>arr.indexOf(v)==i);

for(var i of unique){

    document.write(`${i} `);

}





