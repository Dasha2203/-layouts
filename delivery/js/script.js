let cartButton = document.querySelector('#cart-button');
let modal = document.querySelector('.modal');
let closeModalButton = document.querySelector('.close')

cartButton.addEventListener('click',toggleModal)

closeModalButton.addEventListener('click', toggleModal)

function toggleModal () {
    modal.classList.toggle('is-open')
}

new WOW().init();