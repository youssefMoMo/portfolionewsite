// حذف التنقل التلقائي للصفحة الرئيسية
function goHome() {
    window.location.href = "index.html";
}

// النجوم الذهبية المتحركة
function createGoldenStar() {
  const container = document.querySelector('.golden-stars-container');
  if (!container) return;

  const star = document.createElement('div');
  star.className = 'golden-star';

  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';

  container.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000); // نخلي النجم يختفي بعد فترة
}

// تشغيل النجوم بدون توقف
setInterval(createGoldenStar, 150);

// النجوم الخلفية البيضاء (الطبيعية)
const canvas = document.createElement('canvas');
canvas.id = 'stars-canvas';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.5 + 0.2,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();
