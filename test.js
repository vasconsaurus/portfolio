const about = document.querySelector('.about')
const inner_text = document.querySelector('.about__inner-text')
const intro_text = document.querySelector('.intro__text')

function obCallback(payload) {
  if(payload[0].intersectionRatio === 1) {
    inner_text.classList.remove("outside")
    intro_text.classList.toggle("send-to-side")
  }
}

const ob = new IntersectionObserver(obCallback, {
  // root: about,
  // threshold: 1,
});

ob.observe(about.firstElementChild)
