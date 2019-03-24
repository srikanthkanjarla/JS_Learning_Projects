const mainImage = document.getElementById('img-preview');
const imagePannels = document.getElementById('img-pannels');

imagePannels.addEventListener('click',(event)=>{
    let imagePath = event.target.getAttribute('src');
    mainImage.classList.add('fade-out');     
    setTimeout(()=>{
        mainImage.setAttribute('src',imagePath);
        mainImage.classList.remove('fade-out');
    },1300)    
});