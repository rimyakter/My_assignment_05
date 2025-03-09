
//function to generate a random background color

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//function to change background color

function changeBackgroundColor() {
    const randomBackgroundColor = document.getElementById('random-bg-color');
    randomBackgroundColor.style.backgroundColor = getRandomColor();
}


const imageButton = document.getElementById('img-btn');
imageButton.addEventListener('click', changeBackgroundColor);