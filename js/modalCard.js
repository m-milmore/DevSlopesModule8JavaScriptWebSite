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
const modalH3 = document.getElementById("modal-h3");
const modalImg = document.getElementById("modal-img");
const modalP1 = document.getElementById("modal-p1");
const modalP2 = document.getElementById("modal-p2");
const modalP3 = document.getElementById("modal-p3");

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
    modalH3.innerHTML = h3;
    modalImg.src = src;
    modalP1.innerHTML = `<strong>${p1}</strong>`;
    modalP2.innerHTML = p2;
    modalP3.innerHTML = p3;
}

exports = { modalCardObjects, modalTemplate };