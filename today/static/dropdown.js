const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
let country;
const optionsList = document.querySelectorAll(".option");
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    if (country == undefined) {
      country = o.querySelector("label").getAttribute("value");
    }
    window.location = "/country/" + country;
  });
});
