const body = document.querySelector('body');
const cursor = document.querySelector('#cursor');
const toggle = document.querySelector('#toggle');

const Labels = {
    LIGHT_OFF: 'Turn Lights off!',
    LIGHT_ON: 'Turn Lights on!',
}

let isDark = body.classList.contains('dark');;

function positionElement(e) {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement);

function toggleDarkMode() {
    isDark = body.classList.contains('dark');

    if (isDark) {
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