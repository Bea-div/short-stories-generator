function generateStory(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "Story goes here",
    autoStart: true,
    delay: 1,
  });
}

let storyForm = document.querySelector("#story-generator-form");
storyForm.addEventListener("submit", generateStory);
