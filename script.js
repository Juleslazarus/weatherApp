let quoteText = document.querySelector(".quoteText");

let authorText = document.querySelector(".authorText");

let genQuoteBtn = document.querySelector(".genQuoteBtn");

let tagInput = document.querySelector(".tagInput");

function callQuoteApi() {
  fetch(`https://api.quotable.io/random`, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      quoteText.textContent = response.content;
      authorText.textContent = response.author;
    });
}
genQuoteBtn.addEventListener("click", callQuoteApi);
