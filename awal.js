document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image');
    
    image.addEventListener('click', function() {
        if (image.src.includes('button hover (atas).png')) {
            image.src = 'button polos (atas).png';
        } else {
            image.src = 'button hover (atas).png';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image-two');
    
    image.addEventListener('click', function() {
        if (image.src.includes('button hover (bawah).png')) {
            image.src = 'button polos (bawah).png';
        } else {
            image.src = 'button hover (bawah).png';
        }
    });
});
