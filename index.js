const menu = document.querySelector('.menu')
const ul = document.querySelector('ul')

menu.addEventListener('click', () =>{
    menu.classList.toggle('active')
    ul.classList.toggle('strech')
})