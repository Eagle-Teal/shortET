const form = document.getElementById("form");
const linkInput = document.getElementById("link");
const nameInput = document.getElementById("name");
const parent = document.getElementById("parent");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const originalLink = linkInput.value;
  const aliasCustom = nameInput.value;
  const apiUrl = `https://1shorten.com/api?api=d79eed951c420020bdb236a49273a4950c8b0c02&url=${originalLink}&alias=${aliasCustom}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    let link = document.createElement("li");
    link.className = "output";
    link.innerHTML = `<a href="${data.shortenedUrl}" target="_blank">${data.shortenedUrl} </a>`;
    parent.prepend(link);
    output.value = data.shortenedUrl;
  } catch (e) {
    console.error(e);
  }
});
// function copied() {
//   let copyLink=document.getElementsByTagName("li")[0].innerText;
//   navigator.clipboard.writeText(copyLink);
// }