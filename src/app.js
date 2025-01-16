function generatepoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "I love you",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
  alert("Generating poem....");
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatepoem);
