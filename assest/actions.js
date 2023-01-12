// const x = document.querySelector("span.top-right");
// x.addEventListener("click", clearInput);

// function clearInput(e) {
//   e.target.previousElementSibling.value = "";
//   e.target.nextElementSibling.innerHTML = "";
// }
const textWarning = document.querySelectorAll(".text-warning");
const borderWarning = document.querySelectorAll(".border-warning");
const btnOutlineWarning = document.querySelectorAll(".btn-outline-warning");
const warning = [...textWarning, ...borderWarning, ...btnOutlineWarning];

console.log(textWarning);
console.log(borderWarning);
console.log(btnOutlineWarning);
console.log(warning);
