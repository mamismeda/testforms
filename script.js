const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result')
const wrapper = document.querySelector('.wrapper');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    wrapper.classList.add('none');
    resultDiv.classList.remove('none')
})