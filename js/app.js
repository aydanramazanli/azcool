const miniBar = document.querySelector('.mini-navbar')
const miniBarClose = document.querySelector('.mini-navbar-close')
const list = document.querySelectorAll('.list')
const open = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-times')
const listDesktop = document.querySelectorAll('.list-item')
const nav = document.querySelector('.nav-list')
const link = document.querySelectorAll('link')

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

miniBarClose.addEventListener('click', function() {
    miniBarClose.classList.add('none')
    open.classList.remove('none')
    close.classList.add('none')
})