const xButton = document.querySelector(".close-sidebar");
const hamburgerMenu = document.querySelector('i[title="Menu"]');
const sidebar = document.querySelector(".aside");
const homeButton = document.querySelector(".btn-home");
const themeButton = document.querySelector(
  `div.col-1 span.text-light i.fa-circle-half-stroke[title="Theme"]`
);
const root = document.querySelector(":root");

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

let coll = document.querySelectorAll(".collapsible");
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

themeButton.addEventListener("click", function (e) {
  const getR = getComputedStyle(root);
  //getR stand for get root style
  if (getR.getPropertyValue("--blue") === "#3b3b4f") {
    root.style.setProperty("--blue", "#744e3b");
    // root.style.setProperty("--blue", "#744e3b");
    root.style.setProperty("--bluer", "#241b1e");
    // root.style.setProperty("--bluer", "#c67756");
    root.style.setProperty("--bluest", "#c67756");
    // root.style.setProperty("--bluest", "#241b1e");
    root.style.setProperty("--light", "#241b1e");
  } else {
    root.style.setProperty("--blue", "#3b3b4f");
    root.style.setProperty("--bluer", "#1b1b32");
    root.style.setProperty("--bluest", "#0a0a23");
    root.style.setProperty("--light", "#f8f9fa");
  }
});
//section to change website theme between light and dark with button click
