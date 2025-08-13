const mb = document.getElementById('menuButton');
const bd = document.getElementById('buttonDiv');
const menu = document.getElementById('menuDiv');
const close = document.getElementById('closeButton');

mb.addEventListener('click', () => {
    menu.classList.remove('hidden')
    menu.classList.add('show')
    bd.classList.remove('show')
    bd.classList.add('hidden')
    console.log('test')
})

close.addEventListener('click', () => {
    menu.classList.remove('show')
    menu.classList.add('hidden')
    bd.classList.remove('hidden')
    bd.classList.add('show')
})