const input = document.getElementById("input");
const bigBox = document.querySelector(".bigBox");
const button = document.querySelector(".button");
const ul = document.querySelector("ul");
const sunIcon = document.querySelector(".sunIcon");
const body = document.querySelector("body");
const active = document.querySelector(".Active");
const completed = document.querySelector(".completed");
const cc = document.querySelector(".cc");
const All = document.querySelector(".All");
const lastText = document.querySelector(".lastText");
const count = document.querySelector(".count");

let counter = 0;

button.addEventListener("click", () => {
  let inputInfo = input.value;
  input.value = "";
  const list = document.createElement("li");
  list.setAttribute("class", "list");
  const span = document.createElement("span");
  span.setAttribute("class", "span");
  const checkIcon = document.createElement("INPUT");
  checkIcon.setAttribute("type", "checkbox");
  checkIcon.setAttribute("class", "checkBoxButton");
  const crossImg = document.createElement("img");
  crossImg.src = "images/icon-cross.svg";
  crossImg.setAttribute("class", "crossImg");
  const divLine = document.createElement("div");
  divLine.setAttribute("class", "divLine");
  list.appendChild(crossImg);
  list.appendChild(checkIcon);
  list.appendChild(span);
  list.appendChild(divLine);
  ul.appendChild(list);

  span.textContent = inputInfo;
  input.focus();
  const height = bigBox.offsetHeight;
  const newHeight = height + 37;
  bigBox.style.height = newHeight + "px";
  // lastText.style.marginTop =  "100px";
  checkIcon.addEventListener("click", () => {
    if (checkIcon.checked == true) {
      list.style.textDecoration = "line-through";
    } else {
      list.style.textDecoration = "none";
    }
  });
  crossImg.addEventListener("click", () => {
    list.remove();
    counter -= 1;
    count.textContent = counter + " Items left";
    const height = bigBox.offsetHeight;
    const newHeight = height - 37;
    bigBox.style.height = newHeight + "px";
  });
  cc.addEventListener("click", () => {
    if (checkIcon.checked === true) {
      list.remove();
    }
  });
  completed.addEventListener("click", () => {
    if (checkIcon.checked === false) {
      list.style.display = "none";
    }
  });
  active.addEventListener("click", () => {
    if (checkIcon.checked === true) {
      list.style.display = "none";
    }
  });
  All.addEventListener("click", () => {
    list.style.display = "block";
  });
  counter += 1;
  count.textContent = counter + " Items left";
});
sunIcon.addEventListener("click", () => {
  //src.match allows you to use conditionals with src
  if (sunIcon.src.match("images/icon-sun.svg")) {
    sunIcon.src = "images/icon-moon.svg";
    input.style.backgroundColor = "white";
    input.style.color = "black";
    bigBox.style.backgroundColor = "hsl(233, 11%, 84%)";
    body.style.backgroundColor = "hsl(0, 0%, 98%)";
    body.style.backgroundImage = "url('images/bg-desktop-light.jpg')";
    button.style.backgroundColor = "white";
    button.style.color = "black";
  } else {
    sunIcon.src = "images/icon-sun.svg";
    input.style.backgroundColor = "hsl(235, 21%, 11%)";
    input.style.color = "white";
    bigBox.style.backgroundColor = "hsl(235, 24%, 19%)";
    body.style.backgroundImage = "url('images/bg-mobile-dark.jpg')";
    body.style.backgroundRepeat = "space no-repeat";
    body.style.backgroundSize = "100% 100%";
    body.style.backgroundColor = "rgb(31, 29, 29)";
    body.style.backgroundPosition = "top";
    button.style.backgroundColor = "hsl(235, 21%, 11%)";
    button.style.color = "white";
  }
});
