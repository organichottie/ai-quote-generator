//alert("Hellowwwww!");
//Link the Axios & Typewriter Plugin
//Create Function for generating the API
//Create Function for displaying results
//Remove console logs
//Blinking text

function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generateQuote(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "11cb60e5ofea031ab3tc8e1af4a45bbb";
  let context =
    "You are a very smart wordsmith and love the art of writing. Your mandate is to generate short consice quotes. Each line is separated by <br/> element and on a new line. At the end of your quote, please sign <strong>Wordsmith AI</strong>";
  let prompt = `User Input: Generate a quote about ${userInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let quoteBlock = document.querySelector("#quote");
  quoteBlock.innerHTML;

  axios.get(apiUrl).then(displayQuote);
}

let quoteForm = document.querySelector("#quote-form");
quoteForm.addEventListener("submit", generateQuote);
