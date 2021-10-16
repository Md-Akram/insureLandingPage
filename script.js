const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('expand')

  if (hamburger.attributes.src.value === 'images/icon-hamburger.svg') {
    hamburger.attributes.src.value = 'images/icon-close.svg'
  } else {
    hamburger.attributes.src.value = 'images/icon-hamburger.svg'
  }
})
