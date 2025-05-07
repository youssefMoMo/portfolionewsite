const starsContainer = document.querySelector(".stars-container");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  starsContainer.appendChild(star);

  setTimeout(() => {
    starsContainer.removeChild(star);
  }, 2000);
}

setInterval(createStar, 450);

// إنشاء overlay popup
const popupOverlay = document.createElement("div");
popupOverlay.className = "popup-overlay";
document.body.appendChild(popupOverlay);

const popupImg = document.createElement("img");
popupOverlay.appendChild(popupImg);

// لما المستخدم يضغط على صورة الريفيو
document.querySelectorAll(".review-popup").forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popupOverlay.style.display = "flex";
  });
});

// إعادة تعيين الحالة عشان الأنيميشن تشتغل كل مرة
requestAnimationFrame(() => {
  popupImg.style.opacity = "1";
  popupImg.style.transform = "scale(1)";
});

// لما يضغط خارج الصورة، نغلق العرض بانسيابية
popupOverlay.addEventListener("click", () => {
  popupImg.style.opacity = "0";
  popupImg.style.transform = "scale(0.8)";
  setTimeout(() => {
    popupOverlay.style.display = "none";
  }, 300);
});
