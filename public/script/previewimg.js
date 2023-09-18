function previewImage(event) {
    const input = event.target;
    const previewImage = document.getElementById('previewImage');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
        };

        reader.readAsDataURL(input.files[0]);
    }
    }

    const imageInput = document.getElementById('image');
    imageInput.addEventListener('change', previewImage);