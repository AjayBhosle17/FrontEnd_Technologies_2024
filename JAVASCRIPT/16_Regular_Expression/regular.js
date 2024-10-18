
// check vowel or not
document.getElementById('txt1').addEventListener('input', function() {
   const vowelLabel = document.getElementById('vowel');
   const inputText = this.value; 
   const vowelRegex = /[aeiou]/i; 

   if (vowelRegex.test(inputText)) {
       vowelLabel.innerText = 'Contains Vowel';
   } else {
       vowelLabel.innerText = 'Does not Contain Vowel';
   }
});


// check a to z

document.getElementById('txt2').addEventListener('input',function(){

   var smallChar= document.getElementById('smallChar');
   var current = this.value;

   var regex = /[a-z]/;


   if(regex.test(current)){
      smallChar.innerText='present';
   }else{
      smallChar.innerText='Not present';

   }
});


// replace ajay to vijay

document.getElementById('replaceBtn').addEventListener('click',function(){
   const inputText = document.getElementById('tx1').value;

   const replaceText = inputText.replace(/Ajay/gi,'Vijay');

   document.getElementById('tx2').value=replaceText;
});


//Regex: 6 characters long, must include only a-z, A-Z, @, and $, and contain both @ and $
document.getElementById('password').addEventListener('input', function() {
   const passwordLabel = document.getElementById('passwordLabel');
   const passwordText = this.value;

   
   const passwordRegex = /^(?=.*[0-9])(?=.*[@])[a-zA-Z0-9@]{6}$/;

   if (passwordRegex.test(passwordText)) {
       passwordLabel.innerText = 'Valid Password';
   } else {
       passwordLabel.innerText = 'Invalid Password: Only letters a-z, A-Z, must include @ and $, and exactly 6 characters';
   }
});
