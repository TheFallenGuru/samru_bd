const startConfetti = () => {
  const confettiSettings = { target: 'confetti-canvas' };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
};
