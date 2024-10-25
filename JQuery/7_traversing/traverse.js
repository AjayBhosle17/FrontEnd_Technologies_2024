
$(function(){

    $('#btn1').click(function(){

        //parent

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
    
        // $('h3').parents().css({
        //     'color':'blue',
        //     'border':'2px solid blue'
        // });
    
        // Child

        // $('#Div1').children().css({

        //     'color':'red',
        //     'border':'2px solid blue'
        // });

        // $('#mainDiv').find('p').css({

        //     'color':'red',
        //     'border':'2px solid blue'
        // });


        // sibling

        // $('#Div1').siblings().css({

        //     'color':'red',
        //     'border':'2px solid yellow'
        // });

        // $('h5').prev().css({

        //     'color':'red',
        //     'border':'2px solid green'
        // });

        // $('p').next().css({

        //     'color':'red',
        //     'border':'2px solid pink'
        // });

        // $('h5').prevAll().css({

        //     'color':'red',
        //     'border':'2px solid pink'
        // });

        // $('h5').prevUntil('#mainDiv').css({

        //     'color':'red',
        //     'border':'2px solid pink'
        // });

        // $('p').nextAll().css({
        //     'color':'red',
        //     'border':'2px solid pink'
                
        // })
        $('p').nextUntil('h5').css({
            'color':'red',
            'border':'2px solid pink'
          
        })
    });
});