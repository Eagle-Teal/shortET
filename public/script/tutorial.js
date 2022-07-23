const input = document.getElementById('input');
const getLink = document.getElementById('getLink');
getLink.addEventListener('click', function(e) {
    window.location = input.innerText;
});