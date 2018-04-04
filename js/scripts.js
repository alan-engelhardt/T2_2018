let job = "web dev";
let where = "Copenhagen";
let partner = "Julio";
let children = 5;
let future = "I will be a " + job + " in " + where + ". I will marry " + partner + " and we will have " + children + " children";

let headLevel1 = document.querySelector("#myHeader");

headLevel1.addEventListener("click", changeTextContent);

console.log(headLevel1.textContent);

//headLevel1.textContent = future;

function changeTextContent(){
	headLevel1.textContent = future;
}
