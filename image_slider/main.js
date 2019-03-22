let sliderImages = ['img_1','img_2','img_3','img_4','img_5'];
const imageElement = document.getElementById('image');
const prevSlideButton =document.getElementById('prev');
const nextSlideButton = document.getElementById('next');
let currentIndex = 0;
  
const nextSlideIndex = () => {
    if(currentIndex < (sliderImages.length-1)){
        currentIndex++; 
     }
     else{
         currentIndex = 0;
     }
}

const prevSlideIndex = () =>{
    if(currentIndex>0 && currentIndex <sliderImages.length){
        currentIndex--;
    }
    else{
        currentIndex=sliderImages.length -1;
    }
}

const changeSlide = () => {
        imageElement.setAttribute('src',`images/${sliderImages[currentIndex]}.jpg`);
}
 
//next slide button
nextSlideButton.addEventListener('click',(event)=>{
    nextSlideIndex();
    changeSlide();
});

//prev slide button
prevSlideButton.addEventListener('click',(event)=>{
    prevSlideIndex();
    changeSlide();
});