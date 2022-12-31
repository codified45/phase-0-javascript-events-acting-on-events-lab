// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }

};

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);


    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
};

document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            moveDodgerLeft();
        }
        if (event.key === 'ArrowRight') {
            moveDodgerRight();
        }
    }
);





// const dodger = document.getElementById('dodger');
// undefined
// dodger.style.backgroundColor = '#000000';
// '#000000'
// dodger.style.backgroundColor = '#FF69B4';
// '#FF69B4'
// dodger.style.bottom = '100px';
// '100px'
// dodger.style.bottom = '0px'
// '0px'
// dodger.style.left = '0px';