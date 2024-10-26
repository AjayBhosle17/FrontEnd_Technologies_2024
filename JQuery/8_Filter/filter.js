
$(function(){

    $('#btn1').click(function(){

        // $('p').first().css({

        //     'background-color':'yellow',
        //     'color':'white'
        // });

        // $('p').last().css({

        //     'background-color':'yellow',
        //     'color':'white'
        // });

        // $('p').eq(1).css({

        //     'background-color':'yellow',
        //     'color':'white'
        // });

        // $('p').filter('.active').css({
        //     'color': 'yellow',
        //     'border': '2px solid pink'
        // });

        $('p').not('.active').css({
            'color': 'yellow',
            'border': '2px solid pink'
        });
    });
});