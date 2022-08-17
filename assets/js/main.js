const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('section')

const options = {
  rootMargin: '0px 0px -88% 0px',
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    const sectionName = entry.target.dataset.name
    navLinks.forEach(link => {
      link.classList.remove('active')
      if (link.dataset.name === sectionName) {
        link.classList.add('active')
      }
    })
  })
}, options)

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
sections.forEach(section => {
  observer.observe(section)
})
