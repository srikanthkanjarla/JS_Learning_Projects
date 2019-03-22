let sliderImages = ['img_1','img_2','img_3','img_4','img_5'];
const sliderCotainer = document.getElementById('slider');
const imageElement = document.getElementById('image');
const prevSlideLink =document.getElementById('prev');
const nextSlideLink = document.getElementById('next');
let currentIndex = 0;
let intervalID = '';
let timeOutID = '';

//apply filter function

//change slide function


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
    console.log('hello I am a slide' + currentIndex);
}

 
const autoRunSlider = ()=>{
     intervalID = setInterval(()=>{
         nextSlideIndex();
         changeSlide();
     },4000);
    console.log(currentIndex);
}

//pause slider on hover
//imageElement.addEventListener('mouseover',()=> clearInterval(intervalID));
//imageElement.addEventListener('mouseleave',()=> setInterval(changeSlide,4000));

//next slide
nextSlideLink.addEventListener('click',(event)=>{
    event.preventDefault();
    clearInterval(intervalID);
    nextSlideIndex();
    changeSlide();
   let timeOutID = setTimeout(autoRunSlider,1000);
})

//prev slide
prevSlideLink.addEventListener('click',(event)=>{
    event.preventDefault();
    clearInterval(intervalID)
    prevSlideIndex();
    changeSlide();
   let timeOutID = setTimeout(autoRunSlider,1000);
})

//let intervalID = setInterval(changeSlide,4000);
//clearInterval(intervalID);

//jump to slide bullets
clearTimeout(timeOutID);
autoRunSlider();