let modal = document.querySelector('#modal')
let btnClose = document.querySelector('.close')
let img = document.querySelectorAll('.info-pics')
let img2 = document.querySelectorAll('.info-pics skov')
let img3 = document.querySelectorAll('.info-pics four')
let img4 = document.querySelectorAll('.info-pics shop-photo')
let img5 = document.querySelectorAll('.info-pics pic-flaske')
let img6 = document.querySelectorAll('.info-pics pic-miljø')
let imgInModal = document.querySelector('#modal-img')

img.forEach(element => {
    element.addEventListener('click', (e) => {
       let imgSrc = e.target.getAttribute('src')
       imgInModal.setAttribute('src', imgSrc)
       modal.style.display = 'block'
    })
})


function closeModal(){
    modal.style.display = 'none'
}

btnClose.addEventListener('click', closeModal)

function windowCloseModal(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}

window.addEventListener('click', windowCloseModal)