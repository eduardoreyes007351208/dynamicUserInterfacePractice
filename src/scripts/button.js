const mb = document.getElementById('menuButton');
const menu = document.getElementById('menuDiv');

mb.addEventListener('click', () => {
    menu.classList.remove('hidden')
    menu.classList.add('show')
    console.log('test')
})