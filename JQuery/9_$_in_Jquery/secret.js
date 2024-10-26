
// you can replace $ with jQuery

//$.noConflict();   // this line remove $ work


// jQuery(function(){

//     var i=1;
//     var interval;
//     jQuery('#btn1').click(function(){

//         clearInterval(interval);
//         interval=setInterval(function(){
//             $('#output').text(i++);
//         },1000);
//     });

//     $('#btn2').click(function(){
//         clearInterval(interval);
//        i=0;
//        $('#output').text('Start from 1');
//     });
// });


var Ajju=$.noConflict();

Ajju(function(){
    var i=1;
    var interval;
    Ajju('#btn1').click(function(){

        clearInterval(interval);
        interval=setInterval(function(){
            Ajju('#output').text(i++);
        },1000);
    });

    Ajju('#btn2').click(function(){
        clearInterval(interval);
        i=0;
        Ajju('#output').text('Start from 1');
    });
});