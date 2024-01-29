// //  DZ1
// const emailRegexp = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
// const input = document.querySelector('input');
//
// function onInput() {
//     if (isEmailValid(input.value)) {
//         input.style.borderColor = 'green';
//     } else {
//         input.style.borderColor = 'red';
//     }
// }
//
// input.addEventListener('input', onInput);
//
// function isEmailValid(value) {
//     return emailRegexp.test(value);
// }
//


// DZ2.1

const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const maxWidthParentBlock = 449

const moveChildBlock = () => {
    if (positionX < maxWidthParentBlock && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveChildBlock)
    } else if (positionX === maxWidthParentBlock && positionY < maxWidthParentBlock) {
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveChildBlock)
    } else if (positionY === maxWidthParentBlock && positionX !== 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveChildBlock)
    } else if (positionY !== 0 && positionX === 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveChildBlock)

    }

}


moveChildBlock()


// DZ2.2

const seconds = document.querySelector('#seconds')
const startButton =document.querySelector('#start')
const stopButton =document.querySelector('#stop')
const resetButton =document.querySelector('#reset')

let interval = null,
    secondsCount = 0

startButton.onclick = () => {
    clearInterval(interval)
    interval = setInterval(() => {
        secondsCount++
        seconds.innerHTML = secondsCount
    }, 1000)
}

stopButton.onclick = () => clearInterval(interval)

resetButton.onclick = () => {
    clearInterval(interval)
    secondsCount = 0
    seconds.innerHTML = secondsCount
}



