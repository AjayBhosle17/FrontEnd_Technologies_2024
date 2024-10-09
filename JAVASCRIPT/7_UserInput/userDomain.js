function showDomain() {
   
    var data = document.getElementById('email').value;

    
    const index = data.indexOf('@');

    if (index !== -1) {
       
        const username = data.substring(0, index); 
        const domain = data.substring(index); 

        document.getElementById('username').value = username; 
        document.getElementById('domain').value = domain; 
    } else {
        alert('Please enter a valid email address.');
    }
}
