function loadQuote() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
}
const displayQuotes = function (quote) {
  const blockQuote = document.getElementById("quote");
  blockQuote.innerText = quote.quote;
};
