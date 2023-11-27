const inputs = document.querySelectorAll('.count-input');
const totalStickers = document.getElementById('totalStickers');

document.getElementById('submitBtn').addEventListener('click', function() {
    let sum = 0;
    inputs.forEach(input => {
        sum += parseInt(input.value) || 0;
    });

    if (sum > 10) {
        totalStickers.textContent = 'Llevas demasiados stickers';
    } else {
        totalStickers.textContent = `Lleva ${sum} stickers`;
    }
});