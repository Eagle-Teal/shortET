const input = document.getElementById('input');
const parent = document.getElementById('parent');
input.addEventListener('click', function(e) {
    window.location = e.target.innerText;
//    console.log(e.target.innerText);
//    let link = document.createElement("li");
//     link.className = "output";
//     link.innerHTML = `<a href="${e.target.innerText}" target="_blank"> ${e.target.innerText} </a>`;
//     parent.prepend(link);
});