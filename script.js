const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')

console.log(mobileNav)

hamburger.addEventListener('click', () => {
  console.log(mobileNav.classList)
  mobileNav.classList.toggle('expand')
})
