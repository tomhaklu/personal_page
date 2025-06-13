// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    
    // Add any initialization code here
    const container = document.querySelector('.container');
    
    // Example of adding a click event listener
    container.addEventListener('click', () => {
        console.log('Container clicked!');
    });
}); 