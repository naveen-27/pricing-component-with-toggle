var toggle    = document.querySelector('.toggle'),
    toggleDiv = document.querySelector('.toggle-wrapper'),
    annually  = document.querySelector('#annual'),
    monthly   = document.querySelector('#monthly');

toggle.style.transform = 'translateX(0%)';

toggleDiv.addEventListener('click', () => {

    if  (toggle.style.transform === 'translateX(0%)') {
        monthly.style.display = 'none';
        annually.style.display = 'flex';
        toggle.style.transform = 'translateX(100%)';
    } else {
        annually.style.display = 'none';
        monthly.style.display = 'flex';
        toggle.style.transform = 'translateX(0%)';
    }
});