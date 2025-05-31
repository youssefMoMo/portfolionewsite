// portfolio.js

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.portfolio-image');
    const popup = document.querySelector('.popup');
    const popupImg = document.querySelector('.popup img');
    const closeBtn = document.querySelector('.close-btn');
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImg.src = img.src;
      });
    });
  
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      popupImg.src = '';
    });
  
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
        popupImg.src = '';
      }
    });
  });
  