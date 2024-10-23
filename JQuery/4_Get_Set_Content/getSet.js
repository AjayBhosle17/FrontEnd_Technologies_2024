$(function(){

    $('#btn1').click(function(){

        var inputText = $('#input1').val();
        var paragraph = $('#p1').text();
        var whole = $('#content').html();

        console.log(`inputText = ${inputText}`);
        console.log(`Paragraph : ${paragraph}`);
        console.log(`whole : ${whole}`);
    });
});