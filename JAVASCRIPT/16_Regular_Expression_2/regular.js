
document.getElementById('txt1').addEventListener('input',function(){

    var output = document.getElementById('txt2');

    var current_val = this.value;

    var regExp = /^[\d+a-zA-Z]+$/;
    if (regExp.test(current_val)) {
        output.innerText = "Valid input (case-insensitive)";
    } else {
        output.innerText = "Invalid input (Only letters allowed)";
    }
});


document.getElementById('txt3').addEventListener('input',function(){

    var output=document.getElementById('txt4');

    var regExp = /^[@0-9a-zA-Z]{8}$/;
    var check = this.value;

    if(regExp.test(check)){
        output.innerText='Valid Password'
    }else{
        output.innerText='InValid Password'

    }

});
