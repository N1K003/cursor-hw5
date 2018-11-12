function generateBlock(number, color) {
    const block = document.createElement('div');

    block.className += ' ' + 'block-style';
    block.style.background = color;
    block.style.width = '50px';
    block.style.height = '50px';
    block.innerText = number + '';

    return block;
}

function getRandomColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    const a = (Math.random() * (1.1 - 0.1) + 0.1).toFixed(1);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

function appendBlocks() {
    const container = document.querySelector('.blocks');

    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        container.append(generateBlock(i + 1, getRandomColor()));
    }
}