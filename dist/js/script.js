// navbar fixed
window.onscroll = function() {
  const header = document.querySelector("header")
  const fixedNav = header.offsetTop;
  const btnToTop = document.querySelector("#btn-to-top");
  
  if(window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed")
    btnToTop.classList.remove("hidden")
    btnToTop.classList.add("flex")
  } else {
    header.classList.remove("navbar-fixed")

    btnToTop.classList.remove("flex")
    btnToTop.classList.add("hidden")
  }
}

// hamburger
const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-menu")
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle("hamburger-active")
  navMenu.classList.toggle("hidden")
})

window.addEventListener("click", function(e) {
  if(e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active")
    navMenu.classList.add("hidden")
  }
})

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle")
const html = document.querySelector('html')

darkToggle.addEventListener("click", function() {
  darkToggle.checked ? html.classList.add("dark") : html.classList.remove("dark")
})

// modal button toggle
const openModal = document.querySelectorAll(".btn-modal-open")

for (let i = 0; i < openModal.length; i++) {

  openModal[i].addEventListener('click', function(e){
    e.preventDefault()
    const modalTarget = e.target.getAttribute("data-target")
    
    toggleModal(modalTarget)
  })
}

const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', function(e) {
      const modalTarget = e.target.getAttribute("data-target")
      toggleModal(modalTarget)
    })
    
const closeModal = document.querySelectorAll('.modal-close')
for (let i = 0; i < closeModal.length; i++) {
  console.log(closeModal[i])
  closeModal[i].addEventListener('click', function(e) {
    e.preventDefault()
    const modalTarget = closeModal[i].getAttribute("data-target")
    toggleModal(modalTarget)
  })
}

function toggleModal(target) {
  const body = document.querySelector('body')
  const modal = document.getElementById(target)
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}

// modal image preview
const imgPrev = document.querySelectorAll(".img-prev")
for (let i = 0; i < imgPrev.length; i++) {
  imgPrev[i].addEventListener('click', function(e) {
    const imgUrl = imgPrev[i].getAttribute('src')
    const target = imgPrev[i].getAttribute('data-target')
    console.log(imgUrl, target)

    const modalImg = document.querySelector(target)
    modalImg.setAttribute("src", imgUrl)
  })
}