const location_btn = document.getElementById('location');
const enquiry_btn = document.getElementById('enquiry');
const location_container = document.getElementById('locations');
const form_container = document.getElementById('form');

form_container.style.display = 'none';

location_btn.addEventListener('click', function() {
    location_container.style.display = 'flex';
    form_container.style.display = 'none';
});

enquiry_btn.addEventListener('click', function() {
    form_container.style.display = 'flex';
    location_container.style.display = 'none';
});


const textarea = document.getElementById('textarea');
const charCount = document.getElementById('char-count');

textarea.addEventListener('input', function() {
    const maxLength = 250;
    const currentLength = textarea.value.length;
    
    if (currentLength > maxLength) {
        textarea.value = textarea.value.slice(0, maxLength);
    }
    
    charCount.textContent = `(${maxLength - currentLength} Characters)`;
});
