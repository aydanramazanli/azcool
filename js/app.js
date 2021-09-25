const miniBar = document.querySelector('.mini-navbar')
const miniBarClose = document.querySelector('.mini-navbar-close')
const listItem = document.querySelectorAll('.list-item')

const open = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-times')

open.addEventListener('click', function() {
    open.classList.add('none')
    miniBarClose.classList.toggle('none')
    close.classList.remove('none')
})
close.addEventListener('click', function() {
    close.classList.add('none')
    miniBarClose.classList.toggle('none')
    open.classList.remove('none')
})

listItem.addEventListener('click', function() {
    listItem.classList.add('active')
})