const shareBtn = document.getElementById('share-btn');
const shareContainer = document.getElementById('share-container');
const person = document.querySelector('.person');

shareBtn.addEventListener('click', () => {
  shareContainer.classList.toggle('display-none');

  if (window.innerWidth <= 767) {
    person.classList.toggle('display-none');
    shareBtn.classList.toggle('display-none');
  }
});
