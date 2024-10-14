

var button1 = document.getElementById('btn1');

button1.onclick = buton1;


function buton1(){
    alert('Button 1 clicked');
}
button1.onclick=buton2;
function buton2(){
    alert('Button 2 clicked');
}

button1.onclick=()=>alert("button 3 Clicked");


var button2 = document.getElementById('btn2');


button2.addEventListener('click',buton2,false);

const alertHandler = () => alert('button3 called');
button2.addEventListener('click',alertHandler,false)
button2.removeEventListener('click',alertHandler,false);


var val3 = document.getElementById('btn3');

val3.addEventListener('click',function(event){
    buton3(event);
});

function buton3(event){

    alert('Button 3 clicked');
    console.log('Event object:', event);
    console.log('Event target:', event.target); 
    console.log('Event Type:', event.type); 
}