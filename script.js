const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")



const apiKey = "sLNVlzFYMQYrqW06VsO48A==9A5fC18h7hixeVwn";
const options = {
    method:"GET",
    headers: {
        "X-Api-Key" : apiKey
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke() {
    jokeEl.innerText = "Generating...";
    btnEl.disabled = true;
    btnEl.innerText ="Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText ="Tell Me A Joke";

    jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke)