const x = document.querySelector("span.topright");
x.addEventListener("click", clearInput);

function clearInput(e) {
  e.target.previousElementSibling.value = "";
  e.target.nextElementSibling.innerHTML = "";
}
