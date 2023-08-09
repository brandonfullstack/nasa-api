import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APOD from './apod.js';
import Quote from './quote.js';

//Business Logic

async function getAPOD(date) {
  const [responseA, responseQ] = await Promise.all([
    APOD.getPic(date),
    Quote.getQuote()
  ])

  appendPic(responseA);
  appendQuote(responseQ);
}

// function getAPOD() {
//   APOD.getPic()
//     .then(function (response) {
//       if (response.url) {
//         appendPic(response);
//       } else {
//         printError(response);
//       }
//     })
// }

//UI Logic

function appendPic(response) {
  let titleDiv = document.getElementById('titlediv');
  let picDiv = document.getElementById('spacediv');
  let img = document.createElement('img');
  img.src = response.url;
  titleDiv.innerText = response.title;
  picDiv.innerText = "";
  picDiv.append(img);
}

function appendQuote(response) {
  let quoteDiv = document.getElementById('quote');
  // quoteDiv.innerText = response.content + "\n~ " + response.author;
  quoteDiv.innerText = response.text + "\n~ " + response.author;

}

// function printError(error) {
//   document.getElementById("spacediv").innerText = error.message;
// }

function handleFormSubmission(e) {
  e.preventDefault();
  let date = document.getElementById("picDate").value;
  getAPOD(date);

}

window.addEventListener("load", function () {
  let picDate = document.getElementById("picDate");
  picDate.max = new Date().toISOString().split("T")[0];
  document.querySelector("form").addEventListener("submit", handleFormSubmission)
})
