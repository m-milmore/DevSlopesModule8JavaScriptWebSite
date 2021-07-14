/*
<div class="portfolio-card" data-item="web" data-open='modal-card' data-modalCard='web-1'>
  <div class="card-body">
    <img src="./assets/images/portfolio-1.jpg" alt="portfolio icon">
    <a href="#!" class="card-popup-box">
      <div>Web Development</div>
      <h3>Food Website</h3>
    </a>
  </div>
</div>
*/

const dataItems = ['web', 'web', 'web', 'ui', 'app', 'app', 'app', 'ui'];
const srcs = [
    "./assets/images/portfolio-1.jpg",
    "./assets/images/portfolio-2.jpg",
    "./assets/images/portfolio-3.jpg",
    "./assets/images/portfolio-4.jpg",
    "./assets/images/portfolio-5.jpg",
    "./assets/images/portfolio-6.jpg",
    "./assets/images/portfolio-7.jpg",
    "./assets/images/portfolio-8.jpg",
];
const aDivs = [
    "Web Development",
    "Web Development",
    "Web Development",
    "UI Design",
    "App Development",
    "App Development",
    "App Development",
    "UI Design",
];
const aH3s = [
    "Food Website",
    "Skate Website",
    "Eating Website",
    "Cool Design",
    "Game App",
    "Gambling App",
    "Money App",
    "Fantastic Design"
];
const dataModalCards = ['web-1', 'web-2', 'web-3', 'ui-1', 'app-1', 'app-2', 'app-3', 'ui-2'];

const cardObjects = [];

function cardObject(dataItem, src, aDiv, aH3, dataModalCard) {
    this.dataItem = dataItem;
    this.src = src;
    this.aDiv = aDiv;
    this.aH3 = aH3;
    this.dataModalCard = dataModalCard;
}

for (let i = 0; i < dataItems.length; i++) {
    const dataItem = dataItems[i];
    const src = srcs[i];
    const aDiv = aDivs[i];
    const aH3 = aH3s[i];
    const dataModalCard = dataModalCards[i];
    const newCard = new cardObject(dataItem, src, aDiv, aH3, dataModalCard);
    cardObjects.push(newCard);
}

const portfolioGrid = document.querySelector('.portfolio-grid');

for (const { dataItem, src, aDiv, aH3, dataModalCard }
    of cardObjects) {
    const div1 = document.createElement("div");
    div1.setAttribute("class", "portfolio-card");
    div1.setAttribute("data-item", dataItem);
    div1.setAttribute("data-open", "modal-card");
    div1.setAttribute("data-modalCard", dataModalCard);

    const div2 = document.createElement("div");
    div2.setAttribute("class", "card-body");

    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", "portfolio icon");

    const a = document.createElement("a");
    a.setAttribute("href", "#!");
    a.setAttribute("class", "card-popup-box");

    const div3 = document.createElement("div");
    div3.innerHTML = aDiv;

    const h3 = document.createElement("h3");
    h3.innerHTML = aH3;

    a.appendChild(div3);
    a.appendChild(h3);
    div2.appendChild(img);
    div2.appendChild(a);
    div1.appendChild(div2);
    portfolioGrid.appendChild(div1);
}

exports = { srcs, dataModalCards };