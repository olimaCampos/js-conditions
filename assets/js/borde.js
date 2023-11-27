const img = document.getElementById('ippoDR');

img.addEventListener('click', function() {
    const container = document.querySelector('.borde-img-container');
    container.classList.toggle('bordered');
});