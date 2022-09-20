alert("hello world");



function handleSubmit(evt) {
    evt.preventDefault();

    console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit, );
document.querySelector('#contact').addEventListener('mouseover');