
// toggle

$(function(){

    $('#btn1').click(function(){

        $('#div1').toggle();
        if($('#div1').is(':visible')){
            $('#btn1').val('Show');
        }else{
            $('#btn1').val('Hide');

        }
    });
});
