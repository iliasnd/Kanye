//mes selecteurs
var quote = document.getElementById("quote");
var mybutton = document.getElementById("mybutton");
//mes variables

var citation = "";

//mes événement

window.onload = async () => {
  await fetch("https://api.kanye.rest/")
    .then((reponse) => reponse.json())
    .then(data => citation = data.quote);
  quote.textContent = citation;
}

// mybutton.addEventListener('click' , async() =>{​​​​​
//     await fetch("https://api.kanye.rest/")
//     .then(reponse => reponse.json())
//     .then(data => citation = data.quote);
//     quote.textContent = citation;
// }​​​​​)

mybutton.addEventListener("click", async() => {
  await fetch ("https://api.kanye.rest")
  .then( reponse => reponse.json())
  .then(data => citation =data.quote);
  quote.textContent = citation;
})