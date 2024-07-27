const body = document.querySelector('body');
const cursor = document.querySelector('#cursor');
const toggle = document.querySelector('#toggle');

const Labels = {
    LIGHT_OFF: 'Turn Lights off!',
    LIGHT_ON: 'Turn Lights on!',
}

const isDark = () => body.classList.contains('dark');;

function positionElement(e) {
    const mouseY = e.layerY;
    const mouseX = e.layerX;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement);
window.addEventListener('touchstart', positionElement);
window.addEventListener('touchmove', positionElement);

function toggleDarkMode() {
    if (isDark()) {
        body.classList.remove('dark');
        toggle.innerText = Labels.LIGHT_OFF
    }
    else {
        body.classList.add('dark');
        toggle.innerText = Labels.LIGHT_ON
    }
}

toggle.innerText = Labels.LIGHT_ON;

toggle.addEventListener('click', toggleDarkMode);