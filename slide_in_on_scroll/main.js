//debounce - to limit the rate at which a function can fire on scroll
function debounce(func, wait=20, immediate=true) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const allImages = document.querySelectorAll('img');
function slideInImages(){
    allImages.forEach(image => {
		 //slide in image when scroll reach this point
		 let slideInImageAt = window.scrollY + window.innerHeight -image.height/3;
		 //get the bottom position of the image
		 const imageBottom = image.offsetTop + image.height;
		 //is scrolled down half way into the image 
		 let isScrolledToImg = slideInImageAt > image.offsetTop;
		 //is not scrolled past the image
		 let isnotScrolledPast = window.scrollY < imageBottom;
		 // add active class when scroll reached halfway to the image and not scrolled past the image
		 if(isScrolledToImg && isnotScrolledPast){			  
			 image.classList.add('active');
		 }
		 else{
			 image.classList.remove('active');
		 }		 
    })
}

window.addEventListener('scroll',debounce(slideInImages));