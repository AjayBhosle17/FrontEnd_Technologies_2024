
// document.addEventListener('mousedown',(event)=>match(event));

// document.addEventListener('mousedown',match);
// function match(event){

//     alert(event.which);
//     if(event.which===1) {
//         alert('Left mouse button Clicked')
    
//     }else if(event.which===2){
//         alert('middle mouse button Clicked')
//     }else if(event.which===3){
//         alert('right mouse button Clicked')
//     }else{

//         alert('plz enter correct button');
//     }
// }


var val=document.getElementById('btn1').addEventListener('click',bubble,false);

var val=document.getElementById('btn2').addEventListener('click',bubble1,false);

var val=document.getElementById('btn3').addEventListener('click',bubble2,false);


function bubble(event){
    event.stopPropagation();
    console.log('outer div clicked')
}

function bubble1(event){
    event.stopPropagation();

    console.log('inner div clicked')
}

function bubble2(event){
    console.log('Buttonclicked')
}