const card = document.getElementById("card");
const green = document.getElementById("green");
const pink = document.getElementById("pink");
const brown = document.getElementById("brown");
const boxes = document.getElementsByClassName("box");

const colors = [green, pink, brown];

for (let color of colors) {
  color.addEventListener("click", (e) => {
    let bgColor = getComputedStyle(e.target).backgroundColor;
    let temp = getComputedStyle(card).backgroundColor;
    card.style.backgroundColor = bgColor;
    color.style.backgroundColor = temp;
  });
}

card.addEventListener("dragstart", () => {
  for (let box of boxes) {
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    box.addEventListener("drop", (e) => {
      let parent = card.parentElement;
      parent.innerHTML = "Drop here";
      box.innerHTML = "";
      box.append(card);
    });
  }
});
