
//printA(); // error not found method

try{
    printA();
}catch(Ex){
    document.write("Syntax error ");
}



document.write('<br> Exception Occured <br>');


window.onerror = function(message,url,lineNo){
   document.write(`Error Occurred : 
    ${message}
    ${url}
    ${lineNo} <br/>`);
}

printA();
