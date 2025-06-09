function goHome() {
    window.location.href = "index.html";
  }
  
  // رسم تأثير خاص بالأسعار باستخدام canvas
  const canvas = document.getElementById('specialEffects');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let particles = [];
  
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      opacity: Math.random() * 0.5 + 0.3,
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(255, 215, 0, ${p.opacity})`;
      ctx.fill();
  
      p.x += p.dx;
      p.y += p.dy;
  
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
  
    requestAnimationFrame(animate);
  }
  
  animate();
  