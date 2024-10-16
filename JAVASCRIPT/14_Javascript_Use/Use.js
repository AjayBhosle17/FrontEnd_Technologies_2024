function showHidePassword() {
    var pwd = document.getElementById('Password');
    var button1 = document.getElementById('btn1');
    var typeAttr = pwd.getAttribute('type');

    if (typeAttr === 'password') {
        pwd.setAttribute('type', 'text');
        button1.setAttribute('value', 'Hide');
    } else {
        pwd.setAttribute('type', 'password'); 
        button1.setAttribute('value', 'Show');
    }
}