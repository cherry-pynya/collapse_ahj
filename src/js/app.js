const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  if (document.querySelector('.text-container').style.maxHeight) {
    document.querySelector('.text-container').style.maxHeight = null;
  } else {
    document.querySelector('.text-container').style.maxHeight = `${document.querySelector('.text-container').scrollHeight}px`;
  }
});
