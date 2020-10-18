// menu animation

const menu = document.getElementById('menu');
const menuopen = document.getElementById('menu-open');
menu.addEventListener('click', () => {
    if(menu.classList.contains('--isclose')) {
        menu.classList.replace('--isclose', '--isopen');
        menuopen.classList.replace('--isopen', '--isclose');
    } else {
        menu.classList.replace('--isopen', '--isclose');
        menuopen.classList.replace('--isclose', '--isopen');
    }
});

