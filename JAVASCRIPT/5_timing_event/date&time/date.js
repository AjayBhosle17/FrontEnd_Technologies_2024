
var date = new Date();
document.write(`${date} <br>`);

var today=date.getDay();
document.write(`today = ${today} <br>`);


var hour=date.getHours();
document.write(`hour = ${hour} <br>`);


var minute=date.getMinutes();
document.write(`minute = ${minute} <br>`);


var seconds=date.getSeconds();

if (seconds < 10) {
    seconds = '0' + seconds;
}
document.write(`seconds = ${seconds} <br>`);

var year=date.getFullYear();
document.write(`year = ${year} <br>`);