const submitBtn = document.getElementById('submitBtn');
        const overlay = document.getElementById('overlay');
        const closeBtn = document.getElementById('closeBtn');

        submitBtn.addEventListener('click', () => {
            overlay.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
