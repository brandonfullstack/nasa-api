import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APOD from './apod.js';
import Quote from './quote.js';

//Business Logic

async function getAPOD(date) {
  try {
    const responseA = await APOD.getPic(date);
    if (responseA instanceof Error){
      const errorMessage = `there was a problem with the API: ${responseA.message}`;
      throw new Error(errorMessage);
    }
    appendPic(responseA);
    const responseQ = await Quote.getQuote();
    if (responseQ instanceof Error){
      const errorMessage = `there was a problem with the API: ${responseQ.message}`;
      throw new Error(errorMessage);
    }
    appendQuote(responseQ);

  }
  catch(error){
    printError(error);
  }
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
  let picDiv = document.getElementById('spacediv');
  let titleDiv = document.getElementById('titlediv');
  let img = document.createElement('img');
  img.src = response.url;
  titleDiv.innerText = response.title;
  picDiv.append(img);

}

function appendQuote(response) {
  let quoteDiv = document.getElementById('quote');
  quoteDiv.innerText = response.content + "\n~ " + response.author;

}

function printError(error) {
  document.getElementById("spacediv").innerText = error.message;
}

function handleFormSubmission(e) {
  let date = document.getElementById("picDate").value;
  getAPOD(date);
  e.preventDefault();

}

window.addEventListener("load", function() {
  let picDate = document.getElementById("picDate");
  picDate.max = new Date().toISOString().split("T")[0];
  document.querySelector("form").addEventListener("submit", handleFormSubmission) 
})
