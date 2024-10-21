// Show And Hide

$(function() {
    $('#btn1').click(function() {
        var result = $('#btn1').val(); 

        if(result === 'Show') {
            $('#div1').hide();
            $('#btn1').val('Hide');  
        } else {
            $('#div1').show();
            $('#btn1').val('Show');  
        }
    });
});
