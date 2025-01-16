const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


const nav = document.querySelector('nav'); 
const hamburgerButton = document.createElement('button'); 
hamburgerButton.setAttribute('id', 'hamburger'); 
hamburgerButton.textContent = '☰'; 
document.querySelector('header').appendChild(hamburgerButton); 


hamburgerButton.addEventListener('click', () => {
nav.classList.toggle('visible'); 
hamburgerButton.textContent = nav.classList.contains('visible') ? '✖' : '☰'; });
