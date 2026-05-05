const items = document.querySelectorAll('.faq-question');

items.forEach(item => {
  const answer = item.parentElement.querySelector('.answer');
  const image = item.querySelector('.icon');
  const text = item.querySelector('h3');

  item.addEventListener('click', () => {
    answer.classList.toggle('hidden');

    image.src = image.src.includes('plus')
      ? 'images/icon-minus.svg'
      : 'images/icon-plus.svg';

    text.classList.toggle('question-active');
  });
});
