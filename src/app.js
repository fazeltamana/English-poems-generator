function poemDisplay(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatepoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "f3e8359e69270d55det3ac4b4dc0of3a";
  let prompt = `Generate an English poem about ${instructionInput.value}`;
  let context =
    "You are a romantic poet and love to write 4 line short poems in HTMl format and seperate each line with <br/>. Make sure to follow the user instruction. Do not give title for the poem and sign with SheCodes AI inside <strong> element ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(poemDisplay);
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛Generating an English poem about ${instructionInput.value}</div>`;
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatepoem);
