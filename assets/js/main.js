// Import Buttons and Links

const aboutBtn = document.querySelector("#aboutButton");
const projectsBtn = document.querySelector("#projectsButton");
const workBtn = document.querySelector("#workButton");
const contactBtn = document.querySelector("#contactButton");

const profileFramerLink = document.querySelector("#profileFramerLink");
const walkthroughLink = document.querySelector("#walkthroughLink");
const challengeLink = document.querySelector("#webDevChallengeLink");
const toggleLink = document.querySelector("#toggleLink");

const dsuWorkLink = document.querySelector("#dsuWorkLink");
const globeWorkLink = document.querySelector("#globeWorkLink");
const arborCareWorkLink = document.querySelector("#arborCareWorkLink");
const ccnWorkLink = document.querySelector("#ccnWorkLink");

// Import Boxes

const aboutBox = document.querySelector("#aboutContentCard");
const projectsBox = document.querySelector("#projectsContentCard");
const workBox = document.querySelector("#workContentCard");
const contactBox = document.querySelector("#contactContentCard");

// Card Button Event Listeners

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
});
projectsBtn.addEventListener('click', () => {
    // Switch Boxes

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
});
workBtn.addEventListener('click', () => {
    // Switch Boxes

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
});
contactBtn.addEventListener('click', () => {
    // Switch Boxes

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
});

// External Link Event Listeners

profileFramerLink.addEventListener('click', () => {
    window.location.href = 'https://www.yltboi.me/framer/public/';
});
walkthroughLink.addEventListener('click', () => {
    window.location.href = 'https://walkthrough.yltboi.me';
});
challengeLink.addEventListener('click', () => {
    window.location.href = 'https://gp.yltboi.me/web-dev-challenge';
});
toggleLink.addEventListener('click', () => {
    alert('Toggle Bot Framework site coming soon! Check out the GitHub page!');
    window.location.href = 'https://www.github.com/ZedTek/toggle-base';
});

dsuWorkLink.addEventListener('click', () => {
    alert('Page coming soon!');
});
globeWorkLink.addEventListener('click', () => {
    alert('Page coming soon!');
});
arborCareWorkLink.addEventListener('click', () => {
    alert('Page coming soon!');
});
ccnWorkLink.addEventListener('click', () => {
    alert('Page coming soon!');
});

phoneLink.addEventListener('click', () => {
    window.location.href = 'tel:+16057772007';
});
domainEmailLink.addEventListener('click', () => {
    window.location.href = 'mailto:hi@yltboi.me';
});
dsuEmailLink.addEventListener('click', () => {
    window.location.href = 'mailto:anden.wieseler@trojans.dsu.edu';
});
discordLink.addEventListener('click', () => {
    window.location.href = 'https://www.discord.com/users/558458639845818368';
});