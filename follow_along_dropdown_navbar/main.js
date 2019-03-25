const menuItems = document.querySelectorAll('.menu-item');
const dropdownBackground = document.querySelector('.dropdown-background');
 
 

//handle mouse over on menu item
function handleMouseEnter(){     
    let dropdown = this.querySelector('.dropdown'); //get active menu item's dropdown 
    dropdownBackground.classList.add('open'); // change opacity:0 to opacity:1
    this.classList.add('trigger'); // change display:none to display:flex
    // change opacity:0 to opacity:1 after 2seconds
    setTimeout(()=>this.classList.contains('trigger')&&this.classList.add('trigger-active'),200);
    let dropdownCoords = dropdown.getBoundingClientRect(); //get size and position of a dropdown menu

    let coords = {
        height:dropdownCoords.height,
        width:dropdownCoords.width,
        top:dropdownCoords.top,
        left:dropdownCoords.left
    } 
    // set size and position of dropdown background div
    dropdownBackground.style.setProperty('height',`${coords.height}px`);
    dropdownBackground.style.setProperty('width',`${coords.width}px`);
    dropdownBackground.style.setProperty('top',`${coords.top}px`);
    dropdownBackground.style.setProperty('left',`${coords.left}px`);
     
}

//handle mouse leave from menu item
function handleMouseLeave(){     
    dropdownBackground.classList.remove('open');
    this.classList.remove('trigger','trigger-active');
}

//event listeners
menuItems.forEach( item =>{
    item.addEventListener('mouseenter',handleMouseEnter);
    item.addEventListener('mouseleave',handleMouseLeave);
});

