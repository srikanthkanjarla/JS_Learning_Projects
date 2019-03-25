const menuItems = document.querySelectorAll('.menu-item');
const dropdownBackground = document.querySelector('.dropdown-background');
let navbar = document.querySelector('.navbar');
 

//handle mouse over on menu item
function handleMouseEnter(){     
    let dropdown = this.querySelector('.dropdown');
    this.classList.add('menu-active');
    dropdownBackground.classList.add('open');
    this.classList.add('trigger');
    setTimeout(()=>this.classList.contains('trigger')&&this.classList.add('trigger-active'),200);
    let dropdownCoords = dropdown.getBoundingClientRect();
    let navCoords = navbar.getBoundingClientRect();

    let coords = {
        height:dropdownCoords.height,
        width:dropdownCoords.width,
        top:dropdownCoords.top,
        left:dropdownCoords.left
    } 
 
    dropdownBackground.style.setProperty('height',`${coords.height}px`);
    dropdownBackground.style.setProperty('width',`${coords.width}px`);
    dropdownBackground.style.setProperty('top',`${coords.top}px`);
    dropdownBackground.style.setProperty('left',`${coords.left}px`);
     
}

//handle mouse leave from menu item
function handleMouseLeave(){     
    dropdownBackground.classList.remove('open');
    this.classList.remove('menu-active','trigger','trigger-active');
}

//event listeners
menuItems.forEach( item =>{
    item.addEventListener('mouseenter',handleMouseEnter);
    item.addEventListener('mouseleave',handleMouseLeave);
});

