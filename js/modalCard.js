/*
	<div id="modal-card" class="modal" data-animation="slideInOutTop">
			<div class="modal-dialog">
					<header class="modal-header">
							<h3 id="modal-h3">Web Project 1</h3>
							<i class="fas fa-times" data-close></i>
					</header>
					<div class="modal-body">
							<div class="img-wrapper">
									<img id="modal-img" src="./assets/images/portfolio-1.jpg" alt="portfolio">
							</div>
							<div class="text-wrapper">
									<p id="modal-p1"><strong>My first awesome website</strong></p>
									<p id="modal-p2">Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
									<p id="modal-p3">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
					</div>
			</div>
	</div>
*/

const h3s = ["Web Project 1", "Web Project 2", "Web Project 3", "UI Project 1", "App Project 1", "App Project 2", "App Project 3", "UI Project 2"];
const p1s = ["My first awesome website", "My second awesome website", "My third awesome website", "My first awesome UI design", "My first awesome app", "My second awesome app", "My third awesome app", "My second awesome UI design"];
const p2s = [
    "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
];
const p3s = [
    "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
];

function modalCardObject(src, h3, p1, p2, p3) {
    this.src = src;
    this.h3 = h3;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
}

let modalCardObjects = {};

for (let i = 0; i < dataModalCards.length; i++) {
    const src = srcs[i];
    const h3 = h3s[i];
    const p1 = p1s[i];
    const p2 = p2s[i];
    const p3 = p3s[i];
    const dataModalCard = dataModalCards[i];
    let tempNamespace = {};
    tempNamespace[dataModalCard] = new modalCardObject(src, h3, p1, p2, p3);
    modalCardObjects = {...modalCardObjects, ...tempNamespace };
}

function modalTemplate({ src, h3, p1, p2, p3 }) {
    const modalH3 = document.getElementById("modal-h3");
    const modalImg = document.getElementById("modal-img");
    const modalP1 = document.getElementById("modal-p1");
    const modalP2 = document.getElementById("modal-p2");
    const modalP3 = document.getElementById("modal-p3");

    modalH3.innerHTML = h3;
    modalImg.src = src;
    modalP1.innerHTML = `<strong>${p1}</strong>`;
    modalP2.innerHTML = p2;
    modalP3.innerHTML = p3;
}

function buildModal() {
    const main = document.getElementById("main");
    const div1 = document.createElement("div");
    div1.setAttribute("id", "modal-card");
    div1.setAttribute("class", "modal");
    div1.setAttribute("data-animation", "slideInOutTop");

    const div2 = document.createElement("div");
    div2.setAttribute("class", "modal-dialog");

    const header = document.createElement("header");
    header.setAttribute("class", "modal-header");

    const h3 = document.createElement("h3");
    h3.setAttribute("id", "modal-h3");

    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-times");
    i.setAttribute("data-close", "");

    const div3 = document.createElement("div");
    div3.setAttribute("class", "modal-body");

    const div4 = document.createElement("div");
    div4.setAttribute("class", "img-wrapper");

    const img = document.createElement("img");
    img.setAttribute("id", "modal-img");
    img.setAttribute("src", "");
    img.setAttribute("alt", "portfolio");

    const div5 = document.createElement("div");
    div5.setAttribute("class", "text-wrapper");

    const p1 = document.createElement("p");
    p1.setAttribute("id", "modal-p1");

    const p2 = document.createElement("p");
    p2.setAttribute("id", "modal-p2");

    const p3 = document.createElement("p");
    p3.setAttribute("id", "modal-p3");

    div5.appendChild(p1);
    div5.appendChild(p2);
    div5.appendChild(p3);
    div4.appendChild(img);
    div3.appendChild(div4);
    div3.appendChild(div5);
    header.appendChild(h3);
    header.appendChild(i);
    div2.appendChild(header);
    div2.appendChild(div3);
    div1.appendChild(div2);
    main.appendChild(div1);
}


exports = { modalCardObjects, modalTemplate, buildModal };