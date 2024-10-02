

var x = 10;
document.write(`x = ${x}`);
document.write(` </br> type of x = ${typeof x} <br>`);



var name1 = "Ajay Bhosle";
document.write(`</br>Name= ${name1}`);
document.write(` </br> type of Name = ${typeof name1} </br></br>`);


var value = true;

document.write(`value is : ${value} <br>`);
document.write(`type of value = ${typeof (value)} </br></br>`);

var x = 1234.321;

document.write(`x = ${x}`);
document.write(` </br> type of x = ${typeof x} <br>`);


// Operation On String

document.write(`</br>Operation On String </br>`);
document.write(`</br>`);

var name1 = "Ajay";
document.write(`Name is: ${name1} </br>`);

document.write(`length is : ${name1.length} </br>`);

document.write(`In Uppercase: ${name1.toUpperCase()}<br>`);

document.write(`In LowerCase: ${name1.toLowerCase()}</br>`);

name1= "Ajay";
document.write(`Name is: ${name1} </br>`);

name1+="           Bhosle";
document.write(`Name is: ${name1} </br>`);


var firstName = "Ajay";
var LastName = "Bhosle";

document.write(`FirstName : ${firstName}  ${LastName} <br>`);

var fullName= firstName + ' ' +LastName  ;
document.write(`FullName : ${fullName}`);


name1 = "Ajay";

document.write(`<br>index of a is: ${name1.indexOf("a")}`);

name1="AJAY";
document.write(`<br> last index of a is: ${name1.lastIndexOf("A")}<br>`);


fullName =firstName.concat(' ').concat(LastName);
document.write(`fullName: ${fullName}<br>`);

name1="\"Ajay\"";
document.write(`Name is : ${name1}<br>`);


name1="'Ajay'";
document.write(`Name is : ${name1}<br>`);


name1='"Ajay"';
document.write(`Name is : ${name1}<br>`)

var email='ajaybhosle.comp@gmail.com';
document.write(`My Email is : ${email}<br>`);

var username = email.substring(0,10);
var domain = email.substring(11,);

document.write(`UserName: ${username}<br>`);
document.write(`Domain: ${domain}<br>`);


var username = email.substring(10,0);
var domain = email.substring(11,);

document.write(`UserName: ${username}<br>`);
document.write(`Domain: ${domain}<br>`);



var username = email.slice(1,4);
var domain = email.slice(14,1);

document.write(`UserName: ${username}<br>`);
document.write(`Domain: ${domain}<br>`);
















