$(function(){

    $('#btn1').click(function(){

        $('#div1').addClass('green');
        $('#div2').addClass('yellow');
        $('#div3').addClass('green');
        $('#div4').addClass('yellow');
    });

    $('#btn2').click(function(){

        $('#div1').removeClass('green');
        $('#div2').removeClass('yellow');
        $('#div3').removeClass('green');
        $('#div4').removeClass('yellow');
    });
    $('#btn3').click(function(){

        $('#div1').toggleClass('green');
        $('#div2').toggleClass('yellow');
        $('#div3').toggleClass('green');
        $('#div4').toggleClass('yellow');
    });
   



});