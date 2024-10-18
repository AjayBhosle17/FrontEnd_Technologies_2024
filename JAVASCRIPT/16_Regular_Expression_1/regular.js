
document.getElementById('txt1').addEventListener('input',function(){

    var text2 = document.getElementById('txt2');

    var current_val = this.value;
    var regEXP = /^[\+91]\d{10}$/;

    if(regEXP.test(current_val)){
        text2.innerText='Valid Mobile Number';
    }else{
        text2.innerText='Not Valid Mobile Number';
    }


});