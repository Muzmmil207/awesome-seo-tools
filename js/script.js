const btn = document.getElementById('menu-btn')
const labelBtn = document.getElementById('label-btn')
const nav = document.getElementById('sidebar')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  labelBtn.classList.toggle('active')
  nav.classList.toggle('active')
})
