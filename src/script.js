function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateStory(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "c7a3ao9c003944df4a53b6c4t134dbd3";
  let prompt = `User instructions: Generate a short story about ${instructionsInput.value}`;
  let context =
    "You are a story teller and you love telling short and concise stories. Your mission is to generate a story that contains 100 words by following user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `Generating Story about ${instructionsInput.value}`;

  axios.get(apiURL).then(displayStory);
}

let storyForm = document.querySelector("#story-generator-form");
storyForm.addEventListener("submit", generateStory);
