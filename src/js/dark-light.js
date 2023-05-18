const mainToggle = document.querySelector('#content')
const submitToggle = document.querySelector('#submit-bnt')
const themeToggle = document.querySelector('#themeToggle')
const themeLabel = document.querySelector('#themeLabel')
const answerToggles = document.querySelectorAll('.answer-txt')
const footerToggle = document.querySelector('footer')

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light')
  mainToggle.classList.toggle('light')
  submitToggle.classList.toggle('light')
  themeToggle.classList.toggle('light')
  themeLabel.classList.toggle('light')
  footerToggle.classList.toggle('light')
  answerToggles.forEach(toggle => {
    toggle.classList.toggle('light')
  })

  themeLabel.textContent = themeToggle.checked ? '☀️' : '🌙'
})
