const mainImage = document.getElementById('img-preview');
const imagePannels = document.getElementById('img-pannels');

imagePannels.addEventListener('click',(event)=>{
    let imagePath = event.target.getAttribute('src');
    mainImage.setAttribute('src',imagePath);

});