const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav-link')
const sectionList = document.querySelectorAll('section')

const scrollHandler = () => {
  let current = ''
  const pageOffset = window.pageYOffset
  sectionList.forEach(sect => {
    if (pageOffset >= sect.offsetTop - 105) {
      current = sect.dataset.name
    }
  })
  navLinks.forEach(link => {
    if (link.classList.contains('active')) {
      link.classList.remove('active')
    }
  })
  navLinks.forEach(link => {
    if (link.dataset.name === current) {
      link.classList.add('active')
    }
  })
}

const toggleMenu = () => {
  nav.classList.toggle('active')
}

const closeMenu = () => {
  nav.classList.remove('active')
}



menu.addEventListener('click', toggleMenu)
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu)
})
window.addEventListener('scroll', scrollHandler)