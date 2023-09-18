const stars = document.querySelectorAll('.fa-star');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                
                stars.forEach((s, i) => {
                    s.classList.remove('checked');
                    s.classList.add('unchecked');
                });
                
                
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.remove('unchecked');
                    stars[i].classList.add('checked');
                }
            });
        });