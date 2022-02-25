
let newQuoteButton = document.querySelector('#js-new-quote')

newQuoteButton.addEventListener('click', getQuote);

async function getQuote() {
  // The 'try' block executes the statements within it as usual.
  // If an exception is thrown, the statements definde in
  // the 'catch' block will be executed.

  const endPoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

  try {
    const response = await fetch(endPoint);
    // if the reponse is not 200 OK...
    if (!response.ok) {
      // ... throw an error. This causes control flow
      // to skip to the 'catch' block below.
      throw Error(response.statusText);
    }

    const json = await response.json();
    displayQuote(json.message)
  } catch (err) {
    console.log(err);
    alert('Failed to fetch new quote');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-qoute-text');
  quoteText.textContent = quote;
}

getQuote();
