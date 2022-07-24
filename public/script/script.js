const form = document.getElementById("form");
const linkInput = document.getElementById("link");
const nameInput = document.getElementById("name");
const parent = document.getElementById("parent");
const copied = document.getElementById("bar");
const shortet = 'http://localhost:3000/';

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const originalLink = linkInput.value;
  const aliasCustom = nameInput.value;
  const apiUrl = `https://1shorten.com/api?api=d79eed951c420020bdb236a49273a4950c8b0c02&url=${originalLink}&alias=${aliasCustom}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const tailLink = data.shortenedUrl.split('com/')[1];
    let link = document.createElement("li");
    link.className = "output";
    link.innerHTML = `<a href="${shortet + tailLink}" class="link-light" target="_blank"> ${shortet + tailLink} </a>`;
    parent.prepend(link);
    copied.value = shortet + tailLink;
  } catch (e) {
    console.error(e);
  }
});
// function copied() {
//   let copyLink=document.getElementsByTagName("li")[0].innerText;
//   navigator.clipboard.writeText(copyLink);
// }