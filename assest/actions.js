const xButton = document.querySelector(".close-sidebar");
const hamburgerMenu = document.querySelector('i[title="Menu"]');
const sidebar = document.querySelector(".aside");
const homeButton = document.querySelector(".btn-home");
hamburgerMenu.onclick = () => {
  sidebar.style.width = "100%";
  sidebar.style.maxWidth = "300px";
};
xButton.onclick = () => {
  sidebar.style.width = "0";
};
homeButton.onclick = () => {
  sidebar.style.width = "0";
};
//section to expand hamburger menu when click
const textWarning = document.querySelectorAll(".text-warning");
const borderWarning = document.querySelectorAll(".border-warning");
const btnOutlineWarning = document.querySelectorAll(".btn-outline-warning");
const warning = [...textWarning, ...borderWarning, ...btnOutlineWarning];
//section to change website theme when button theme is clicked
let coll = document.querySelectorAll(".collapsible");
console.log(coll);
coll.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
//section to expand when buttons in sidebar is clicked
