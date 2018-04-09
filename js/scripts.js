let header1 = document.querySelector("#header1");
let header2 = document.querySelector("#header2");
let header3 = document.querySelector("#header3");
let hero = document.querySelector("#hero");

header1.addEventListener("click", changeHeader);
header2.addEventListener("click", changeHeader);
hero.addEventListener("click", changeHero);

window.addEventListener('scroll', e => {
	header1.textContent = window.scrollX;
	header2.textContent = window.scrollY;
});

function changeHeader() {
	this.classList.toggle("flash");
}

let counter = 0;

function changeHero() {
	header3.textContent = counter;
	counter++; //same as counter=counter+1
	if (counter == 1) {
		hero.style.background="red";
	} else if (counter == 2) {
		hero.style.background="green";
	} else if (counter == 3) {
		hero.style.background="blue";
	} else if (counter == 4) {
		hero.style.background="orange";
	} else if (counter == 5) {
		hero.style.background="purple";
		counter=0;
	}
}
