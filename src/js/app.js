const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  document.querySelector('.text-container').classList.toggle('invalid');
});
