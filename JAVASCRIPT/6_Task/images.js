var images = [
    'Images/1.jpg',
    'Images/3.jpg',
    'Images/4.jpg',
    'Images/6.jpg',
    'Images/8.jpeg'
];

let index = 0;
let intervalID;

function setTime() {
   if(images.length==index){
    index=0;
   }
    document.getElementById('slideshowImage').src = images[index]; 
    index++;
}

function startSlide() {
    intervalID = setInterval(setTime, 3000); 
}

function stopSlide() {
    if (intervalID != null) { 
        clearInterval(intervalID); 
        intervalID = null; 
    }
}
