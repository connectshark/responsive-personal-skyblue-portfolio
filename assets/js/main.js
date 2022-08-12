const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')

const toggleMenu = () => {
  nav.classList.toggle('active')
}



menu.addEventListener('click', toggleMenu)