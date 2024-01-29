//MODAL

const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'

}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}

modalTriggerButton.onclick = () => {
    openModal()
    clearInterval(setTimerModal);

}

closeModalButton.onclick = () => {
    closeModal()
}

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }

}


// dz3
 const openBottom = () => {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
 }
const bottomPage = () => {
    if (openBottom()){
        openModal()
        window.removeEventListener("scroll", bottomPage)
    }

}

//
const setTimerModal = setTimeout(openModal, 10000);
