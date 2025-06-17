function goHome() {
  window.location.href = "index.html";
}

// نجوم ذهبية عشوائية
function createGoldenStar() {
  const container = document.querySelector('.golden-stars-container');
  if (!container) return;

  const star = document.createElement('div');
  star.className = 'golden-star';
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';

  container.appendChild(star);
  setTimeout(() => star.remove(), 3000);
}
setInterval(createGoldenStar, 150);

// النجوم البيضاء الخلفية
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    velocity: Math.random() * 0.2 + 0.05
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.velocity;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();
