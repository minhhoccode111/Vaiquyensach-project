const textWarning = document.querySelectorAll(".text-warning");
const borderWarning = document.querySelectorAll(".border-warning");
const btnOutlineWarning = document.querySelectorAll(".btn-outline-warning");
const warning = [...textWarning, ...borderWarning, ...btnOutlineWarning];

console.log(textWarning);
console.log(borderWarning);
console.log(btnOutlineWarning);
console.log(warning);

const xButton = document.querySelector(".close-sidebar");
const hamburgerMenu = document.querySelector('i[title="Menu"]');
const sidebar = document.querySelector(".aside");
hamburgerMenu.onclick = () => {
  sidebar.style.width = "100%";
  sidebar.style.maxWidth = "300px";
};
xButton.onclick = () => {
  sidebar.style.width = "0";
};
