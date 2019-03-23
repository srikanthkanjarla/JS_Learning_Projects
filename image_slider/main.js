let sliderImages = ['img_1','img_2','img_3','img_4','img_5'];
const imageElement = document.getElementById('image');
const prevSlideButton =document.getElementById('prev');
const nextSlideButton = document.getElementById('next');
const jumpToSlideButtons = document.getElementById('bullet-btns');
let active = document.getElementsByClassName('active');
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
    if(currentIndex > 0 && currentIndex < sliderImages.length){
        currentIndex--;
    }
    else{
        currentIndex = sliderImages.length -1;
    }
}

//change slide and add active class to the current slide's bullet link
const changeSlide = () => {
    let key = currentIndex+1;
    imageElement.setAttribute('src',`images/${sliderImages[currentIndex]}.jpg`);
    active[0].className = active[0].className.replace('active','');
    document.querySelector(`.jump-btn:nth-child(${key})`).classList.add('active');

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

//jump to the slide
  jumpToSlideButtons.addEventListener('click',(event)=>{
  currentIndex = parseInt(event.target.getAttribute('data-index'),10);
  changeSlide();
  })

//auto run the slider

 