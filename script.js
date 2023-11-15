let openButtons = document.querySelectorAll('.myButton');
let wrapper = document.querySelector('.modalWrapper');
let closeButton = document.querySelector('.closeButton');

document.addEventListener('keyup',(h)=>{

    if(h.key==='Escape'){
        wrapper.classList.add('hidden');
    }
})

const openCloseModal = function(){
    wrapper.classList.toggle('hidden');
}

wrapper.addEventListener('click', function(e){
    if(e.target == wrapper){
        wrapper.classList.add('hidden')
    }
})

openButtons.forEach((button)=>{
    button.addEventListener('click', openCloseModal)
})

closeButton.addEventListener('click', openCloseModal)



