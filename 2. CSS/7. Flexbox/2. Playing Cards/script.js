const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 30;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;

    const baseRotate = 10;
    const baseScale = 1.2;
    const baseTranslateY = 20;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      rotate(${baseRotate}deg)
      scale(${baseScale})
      translateY(${baseTranslateY}px)
    `;

    // Rainbow holo movement (opposite to tilt)
    const holoTranslateX = -rotateY * 2;
    const holoTranslateY = -rotateX * 2;
    card.style.setProperty('--holo-translate-x', `${holoTranslateX}px`);
    card.style.setProperty('--holo-translate-y', `${holoTranslateY}px`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotate(0deg) scale(1) translateY(0)';
    card.style.setProperty('--holo-translate-x', `0px`);
    card.style.setProperty('--holo-translate-y', `0px`);
  });
});