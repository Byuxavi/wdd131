const currentYear = new Date().getFullYear();


const copyrightElement = document.querySelector('footer p:first-of-type'); 
if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} Javier Andres Manosalva Leon, Colombia`;
}


const lastModifiedElement = document.querySelector('footer p:last-of-type'); 
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}
