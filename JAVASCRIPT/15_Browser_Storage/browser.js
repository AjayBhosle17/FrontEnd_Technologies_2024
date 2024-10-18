function show(){
    var val1 = document.getElementById('name').value;

    var val2 = document.getElementById('Email').value;

    // sessionStorage.setItem('StudentName',val1);
    // sessionStorage.setItem('Email',val2);
    
    localStorage.setItem('StudentName',val1);
    localStorage.setItem('Email',val2);

    window.open('details.html','_self');
   
}
