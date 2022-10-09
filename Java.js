const mainContainer = document.querySelector(".div")
const thanksContainer = document.querySelector(".thanks")
const submitButton = document.getElementById("submit")

const rate = document.querySelectorAll(".numbers")
const score = document.getElementById("rating")

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hide")
})

rate.forEach((userRating) => {
 userRating.addEventListener("click", () => {
  submitButton.classList.remove("disable")
   score.innerHTML = userRating.innerHTML
   })
})