function startHearts() {
  const body = document.body;

  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';

    const size = Math.random() * 10 + 15;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

    body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
