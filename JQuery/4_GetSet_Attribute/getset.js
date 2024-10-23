
$(function(){
    
    // var attr_value = $('[href]').attr('href');
    var attr_value = $('#g1').attr('href');
    console.log(`attr_value = ${attr_value}`);

    $('[name =button]').click(function(){

        $('#g1').text('Youtube');
        // $('#g1').attr('href','https://www.youtube.com');
        $('#g1').attr({
        
            'href':'https://www.youtube.com',
            'target':'_blank',
            'background-color':'yellow'

        });


    });
});