// Notification variables
const notificationBtn = document.getElementById('notify');
const notificationMenu = document.getElementById('notify-menu');

// User Menu Variables
const userBtn = document.getElementById('user');
const userMenu = document.getElementById('user-menu')

// Alert box close variables
const closeAlertBtn = document.getElementById('close-alert');
const alertBox = document.getElementById('alert');

// Guides variables
const dropGuides = document.getElementById('drop-menu');
const allGuides = document.getElementById('guides')

// Getting the Guides using query selector all 
const guides = document.querySelectorAll('.each-guide');

// Getting the complete icons for each guide
const completeIcons = document.querySelectorAll('.guide-title img');
let counter = 0; // Counter for guides completed


// Toggling the notification bar 
notificationBtn.addEventListener('click', () => {
    notificationMenu.classList.toggle('active')
});

// Toggling the user Menu 
userBtn.addEventListener('click', () => {
    userMenu.classList.toggle('active')
})


// Closing the alert Menu 
closeAlertBtn.addEventListener('click', () => {
    alertBox.style.display = 'none';
})


// Expanding the guides 
dropGuides.addEventListener('click', () => {

    allGuides.classList.toggle('active');
    dropGuides.classList.toggle('open')
})

// Toggling between guides
const toggleGuides = () => {
    for (let i = 0; i < guides.length; i++) {
       guides[i].addEventListener('click', () => {
        let currentGuide = document.querySelectorAll('.active-guide');
        currentGuide[0].className = currentGuide[0].className.replace('active-guide', '');
        guides[i].className += ' active-guide'
       }) 
        
    }
}

toggleGuides();

// Clicking of those round checkboxes
completeIcons.forEach(icon => {
    let originalSrc = './assets/check.svg';
    let clicked = false;
    icon.addEventListener('click', () => {

        clicked = !clicked
        if (clicked) {
            icon.src = './assets/animated-complete.svg';
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'all 1000ms ease-in-out';
            counter++
            // mainBar.style.width = '20%'

            setTimeout(function(){
                icon.src = './assets/guide-completed.svg';
                icon.style.transform = 'rotate(0deg)';
            }, 500)
        } else if(!clicked){
            icon.src = originalSrc;
            icon.style.transform = 'rotate(90deg)';
            icon.style.transition = 'all 1000ms ease-in-out';
            counter--;
        }

        const completeBar = document.getElementById('bar-complete');
        completeBar.innerText = `${counter}/5 completed`;

        // The completion bar
        const mainBar = document.getElementById('black-bar')
        mainBar.style.width = `${20 * counter}%`

    })
})


