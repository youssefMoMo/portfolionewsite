document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const sections = document.querySelectorAll(".section");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // تأثير بسيط عند الضغط
      btn.classList.add("clicked");
      setTimeout(() => {
        btn.classList.remove("clicked");
      }, 300);

      // نخفي كل الأقسام
      sections.forEach((section) => {
        section.style.display = "none";
      });

      // نحدد أي قسم نعرضه بناءً على ID الزر
      switch (btn.id) {
        case "start":
          document.getElementById("section-start").style.display = "block";
          break;
        case "commission":
          document.getElementById("section-commission").style.display = "block";
          break;
        case "rules":
          document.getElementById("section-rules").style.display = "block";
          break;
        case "prices":
          document.getElementById("section-prices").style.display = "block";
          break;
        case "works":
          document.getElementById("section-works").style.display = "block";
          break;
      }
    });
  });
});
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';  
canvas.style.width = '100% !important';
canvas.style.height = '100vh !important';  


function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight +467;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 1.2 + 0.3,
  speed: Math.random() * 0.1 + 0.02
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
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
function updateCairoTime() {
  const cairoClock = document.getElementById("cairoClock");
  const now = new Date();

  // نحول لتوقيت القاهرة (UTC+2)
  const options = {
    timeZone: 'Africa/Cairo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };

  const cairoTime = new Intl.DateTimeFormat('en-GB', options).format(now);
  cairoClock.textContent = cairoTime;
}

// نحدث الوقت كل ثانية
setInterval(updateCairoTime, 1000);
updateCairoTime();