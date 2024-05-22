const dropdown = document.getElementById("dropdown");
const about = document.getElementById("newsroom-link");
console.log(dropdown);

if (dropdown.style.display === "block") {
  about.classList.add("on");
} else {
  about.classList.add("on");
}
about.addEventListener("click", () => {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    about.classList.add("on");
    console.log(ok);
  } else {
    dropdown.style.display = "block";
    about.classList.add("on");
    console.log(ok);
  }
});
