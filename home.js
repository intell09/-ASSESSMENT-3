const dogImg = document.querySelector('img');
let form = document.querySelector('#contact');

function handleSubmit(evt) {
    evt.preventDefault();

    alert('form submitted');
}



form.addEventListener('submit', handleSubmit, );

dogImg.addEventListener('mouseover', () => {
    alert('stay alive');
})