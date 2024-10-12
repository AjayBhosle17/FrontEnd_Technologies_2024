document.getElementById('txt1').value="";
function onmouseOver(){

    document.getElementById('txt1').value+="On Mouese Over\n";       
}

// function onmouseMOve(){

//     document.getElementById('txt1').value+="On Mouese move\n";       
// }

function onMouseOut(){

    document.getElementById('txt1').value+="On Mouese Out\n";       
    document.getElementById('txt1').style.backgroundColor='yellow';
}

function onMouseDown(){

    document.getElementById('txt1').value+="On Mouese down\n";       
    
}

function onMouseUp(){

    document.getElementById('txt1').value+="On Mouese UP\n";       
    document.getElementById('txt1').style.backgroundColor='pink';
}

function onClick(){

    document.getElementById('txt1').value+="On Click\n";       
}

function onDblClick(){
    document.getElementById('txt1').value+="On Double Click\n"; 
}

function OnContext(){
    document.getElementById('txt1').value+="On right Click\n"; 
}

function OnFOcus(){
    document.getElementById('txt1').value+="On Focus \n"; 
    document.getElementById('txt1').style.border = "2px solid green";
}

function OnBlur(){
    document.getElementById('txt1').value+="On Blur \n"; 
    document.getElementById('txt1').style.border = "2px solid red";

}

function OnKeyDown(){
    document.getElementById('txt1').value+="On Key Down\n"; 
}


function OnKeyUp(){
    document.getElementById('txt1').value+="On Key UP\n"; 
}

function OnKeyPress(){
    document.getElementById('txt1').value+="On KeyPress\n"; 
}
