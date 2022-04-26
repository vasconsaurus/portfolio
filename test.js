// find the div I want to show
const about = document.querySelector('.about')
const inner_text = document.querySelector('.about__inner-text')
const knowhow = document.querySelector('.knowhow')
// listen for scroll to show
// after intro__text translateX(0)

function obCallback(payload) {
  if(payload[0].intersectionRatio === 1) {
    inner_text.classList.remove("outside")
  }
}

const ob = new IntersectionObserver(obCallback, {
  // root: about,
  // threshold: 1,
});

ob.observe(about.lastElementChild)
