const colors = ["#000000", "#808080", "#800000", "#ff0000", "#800080"];
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  // Single click — random color
  card.addEventListener("click", function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
  });

  // Double click — reset to white
  card.addEventListener("dblclick", function() {
    card.style.backgroundColor = "white";
  });
});