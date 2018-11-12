function generateBlock(number, color) {
    const block = document.createElement('div');

    block.className += ' ' + 'block-style';
    block.style.background = color;
    block.innerText = number + '';

    const deg = number % 2 === 0 ? getDegrees() : -1 * getDegrees();
    block.style.transform = 'rotate(' + deg + 'deg)';

    return block;
}

function getDegrees() {
    return Math.random() * 90;
}

function getRandomColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    const a = (Math.random() * (1.1 - 0.1) + 0.1).toFixed(1);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

function createBlocks() {
    const container = document.querySelector('.blocks');

    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        container.append(generateBlock(i + 1, getRandomColor()));
    }
}

let garlandInterval;

function garland() {
    const garlandBtn = document.querySelector('#garland');
    if (garlandInterval) {
        clearInterval(garlandInterval);
        garlandInterval = undefined;
        garlandBtn.innerHTML = "Christmas Garland [Turn On]";
    }
    else {
        garlandInterval = setInterval(createBlocks, 350);
        garlandBtn.innerHTML = "Christmas Garland [Turn Off]";
    }
}