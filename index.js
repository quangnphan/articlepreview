const shareButton = document.querySelector('#share-img');
const shareBox = document.querySelector('#share-box');

shareButton.addEventListener('click', () => {
    shareBox.classList.toggle('hidden')
})