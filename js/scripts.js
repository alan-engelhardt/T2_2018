let header1 = document.querySelector("#header1");
let header2 = document.querySelector("#header2");
let hero = document.querySelector("#hero");
let counter = 0;

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

function changeHero() {
	counter++;
	console.log(counter);
	hero.classList = "";
	if (counter == 1) {
		hero.classList.add("red");
	} else if (counter == 2) {
		hero.classList.add("green");
	} else if (counter == 3) {
		hero.classList.add("blue");
	} else if (counter == 4) {
		hero.classList.add("orange");
	} else if (counter == 5) {
		hero.classList.add("purple");
	}else{
		counter=0;
	}
}
