const pic = document.querySelector('.nice');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'me';
console.log(pic.alt)
