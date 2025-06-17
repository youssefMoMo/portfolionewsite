const starsContainer = document.querySelector(".stars-container");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  starsContainer.appendChild(star);

  setTimeout(() => {
    starsContainer.removeChild(star);
  }, 2500);
}

setInterval(createStar, 400);

// Popup overlay
const popupOverlay = document.createElement("div");
popupOverlay.className = "popup-overlay";
document.body.appendChild(popupOverlay);

const popupImg = document.createElement("img");
popupOverlay.appendChild(popupImg);

document.querySelectorAll(".review-popup").forEach(img => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popupOverlay.style.display = "flex";
    popupImg.style.opacity = "1";
    popupImg.style.transform = "scale(1)";
  });
});

popupOverlay.addEventListener("click", () => {
  popupImg.style.opacity = "0";
  popupImg.style.transform = "scale(0.8)";
  setTimeout(() => {
    popupOverlay.style.display = "none";
  }, 300);
});
