
$(function(){

    $('#btn1').click(function(){
       
        // $('#mainDiv').parent().css({
        //     'color':'red',
        //     'border':'2px solid red'
        // });

        // $('#mainDiv').parents().css({
        //     'color':'yellow',
        //     'border':'2px solid yellow'
        // });

        // $('p:last').parentsUntil('html').css({
        //     'color':'blue',
        //     'border':'2px solid blue'
        // });
    
        $('h3').parents().css({
            'color':'blue',
            'border':'2px solid blue'
        });
    
    });
});