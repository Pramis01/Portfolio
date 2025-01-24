// Selects the side menu element with the ID 'sideMenu'.
const sideMenu = document.querySelector('#sideMenu');

// Selects the navigation bar element.
const navBar = document.querySelector("nav");

// Selects the unordered list (nav links) inside the navigation bar.
const navLinks = document.querySelector("nav ul");

// Function to open the side menu.
function openMenu(){
    // Moves the side menu into view by applying a CSS transform.
    sideMenu.style.transform ='translateX(-16rem)';
    // 'translateX(-16rem)': Moves the menu 16 rem units to the left, making it visible.
}

// Function to close the side menu.
function closeMenu(){
     // Moves the side menu out of view by applying a CSS transform.
    sideMenu.style.transform = 'translateX(16rem)';
     // 'translateX(16rem)': Moves the menu 16 rem units to the right, hiding it.

}

// Adds an event listener to the window for the 'scroll' event.
window.addEventListener('scroll', ()=>{

    // Checks if the page has been scrolled down more than 40 pixels.
    if(scrollY > 40){

        // Adds classes to the navBar to style it when scrolled.
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm')
        
        // Removes specific classes from navLinks for styling adjustments.
            navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
        }else{  
         // Removes the scroll-specific styles from navBar when at the top of the page.
            navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
                'shadow-sm')
        // Ensures navLinks also reverts to its original style when at the top of the page.
             navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
    }
})


