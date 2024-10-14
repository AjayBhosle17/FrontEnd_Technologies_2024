
function myfunc(){
    var val1 = document.getElementsByTagName('p');
    // item.style.backgroundColor='yellow';
   
    for(var item of val1){
        item.style.backgroundColor='yellow';
    }

}

function selectedCity(){

    var val1=document.getElementById('f1');

    val1.style.visibility='hidden';
    // val1.style.display='none';
}