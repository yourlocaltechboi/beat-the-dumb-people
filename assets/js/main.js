// Buttons

const aboutBtn = document.querySelector("#aboutButton");
const projectsBtn = document.querySelector("#projectsButton");
const workBtn = document.querySelector("#workButton");
const contactBtn = document.querySelector("#contactButton");

// Boxes

const aboutBox = document.querySelector("#aboutContentCard");
const projectsBox = document.querySelector("#projectsContentCard");
const workBox = document.querySelector("#workContentCard");
const contactBox = document.querySelector("#contactContentCard");

// Button Event Listeners

aboutBtn.addEventListener('click', () => {
    // Switch Boxes

    aboutBox.style.display = 'flex';
    projectsBox.style.display = 'none';
    workBox.style.display = 'none';
    contactBox.style.display = 'none';

    // Switch Active Button

    aboutBtn.classList.remove('menuItem', 'menuItemActive');
    projectsBtn.classList.remove('menuItem', 'menuItemActive');
    workBtn.classList.remove('menuItem', 'menuItemActive');
    contactBtn.classList.remove('menuItem', 'menuItemActive');

    aboutBtn.classList.add('menuItemActive');
    projectsBtn.classList.add('menuItem');
    workBtn.classList.add('menuItem');
    contactBtn.classList.add('menuItem');
})
projectsBtn.addEventListener('click', () => {
    aboutBox.style.display = 'none';
    projectsBox.style.display = 'flex';
    workBox.style.display = 'none';
    contactBox.style.display = 'none';
    
    // Switch Active Button

    aboutBtn.classList.remove('menuItem', 'menuItemActive');
    projectsBtn.classList.remove('menuItem', 'menuItemActive');
    workBtn.classList.remove('menuItem', 'menuItemActive');
    contactBtn.classList.remove('menuItem', 'menuItemActive');

    aboutBtn.classList.add('menuItem');
    projectsBtn.classList.add('menuItemActive');
    workBtn.classList.add('menuItem');
    contactBtn.classList.add('menuItem');
})
workBtn.addEventListener('click', () => {
    aboutBox.style.display = 'none';
    projectsBox.style.display = 'none';
    workBox.style.display = 'flex';
    contactBox.style.display = 'none';
    
    // Switch Active Button

    aboutBtn.classList.remove('menuItem', 'menuItemActive');
    projectsBtn.classList.remove('menuItem', 'menuItemActive');
    workBtn.classList.remove('menuItem', 'menuItemActive');
    contactBtn.classList.remove('menuItem', 'menuItemActive');

    aboutBtn.classList.add('menuItem');
    projectsBtn.classList.add('menuItem');
    workBtn.classList.add('menuItemActive');
    contactBtn.classList.add('menuItem');
})
contactBtn.addEventListener('click', () => {
    aboutBox.style.display = 'none';
    projectsBox.style.display = 'none';
    workBox.style.display = 'none';
    contactBox.style.display = 'flex';

    // Switch Active Button

    aboutBtn.classList.remove('menuItem', 'menuItemActive');
    projectsBtn.classList.remove('menuItem', 'menuItemActive');
    workBtn.classList.remove('menuItem', 'menuItemActive');
    contactBtn.classList.remove('menuItem', 'menuItemActive');

    aboutBtn.classList.add('menuItem');
    projectsBtn.classList.add('menuItem');
    workBtn.classList.add('menuItem');
    contactBtn.classList.add('menuItemActive');
})