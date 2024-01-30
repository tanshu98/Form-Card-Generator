let cards = document.querySelector(".cards");
let image = document.querySelector('.card-image');


const button = document.querySelector("#button");

button.addEventListener("click", function (e) {
  // get input filed data..
  e.preventDefault();

  if (cards.innerHTML) {
    cardsLength = cards.children.length;

    for (let i = 0; i < cardsLength; i++) {
      let image = document.querySelector('.card-image')
      cards.removeChild(image);
    }
    generateCards();
  } else {
    generateCards();
  }
});

const generateCards = function () {
  let inputFeild = document.querySelector("input").value;
  let cards = document.querySelector(".cards");

  for (let i = 0; i < inputFeild; i++) {
    // create image..and give it attributes
    let image = document.createElement("img");
    image.src =
      "https://www.tutorialspoint.com/static/images/simply-easy-learning.png";
    image.setAttribute("class", "card-image");
    image.setAttribute("height", "200px");
    image.setAttribute("width", "200px");
    cards.appendChild(image);
  }
};
