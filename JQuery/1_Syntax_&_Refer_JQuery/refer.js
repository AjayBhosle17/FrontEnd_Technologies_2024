

//  function changeBackground(){

//     var val=document.getElementsByTagName('h1');

//     for(var heading of val){

//         if(heading.style.display=='block'){

//             heading.style.display='none';
//         }else{
//             heading.style.display='block';
//         }
//     }
// }


// above simplifies using jQuery
$('button[type="button"]').click(function(){

    $('h1').toggle();
    
    
});