const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('body2');
    document.querySelector('#title').classList.toggle('title2');
});
