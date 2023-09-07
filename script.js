const section = document.querySelector("section");
const fill = document.querySelector(".fill");
const next = document.querySelector("h1");
const btn = document.querySelector(".button");

section.addEventListener("mousemove", () => {
  fill.classList.remove("animation");
});

btn.addEventListener("click", () => {
  next.classList.add("active");
  btn.classList.add("inactive");
});
fill.addEventListener("animationend", () => {
  next.classList.add("active");
  btn.classList.add("inactive");
});
