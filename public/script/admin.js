const certificateImage = document.querySelector('.certificate-image');
const certificateOverlay = document.getElementById('certificate-overlay');
const certificateCloseButton = document.getElementById('certificate-close-button');

    certificateImage.addEventListener('click', () => {
        certificateOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    });

    certificateCloseButton.addEventListener('click', () => {
        certificateOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    });