window.addEventListener('scroll', () => {
  if (this.scrollY > this.innerHeight / 3) {
    document.body.classList.add('bg-active');
  } else {
    document.body.classList.remove('bg-active');
  }
});
