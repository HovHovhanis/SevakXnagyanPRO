const button = document.querySelectorAll('.btn');
const form = document.querySelector('.form');
const clous = document.querySelector('.clous')

button.forEach( function (item) {
    item.addEventListener('click', function () {
        form.classList.toggle('none');
    })
})

clous.addEventListener('click', function () {
    form.classList.add('none')
})