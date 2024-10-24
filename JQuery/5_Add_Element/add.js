$(document).ready(function() {
    // Adding a header before the paragraph when the page loads
    $('#p1').before('<h3>Hey, What Happened?</h3>');
    
    // Button click event to add a new div inside the container
    $('#btn1').click(function() {
        $('.container').append('<div style="border:3px solid blue; height:100px;">Main div</div>');
        $('#p1').append('Appended Text');
                $('#p1').after('After Text');

                $('#p1').prepend('Prepended Text');
                $('#p1').before('Before Text');
    });

    $('#contains').prepend('<li>prepend</li>');
    $('#contains').before('<li>before</li>');
    $('#contains').after('<li>after</li>');
    $('#contains').append('<li>append</li>');



});
