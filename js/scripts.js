let headLevel1 = document.querySelector("#myHeader");

headLevel1.addEventListener("click", changeTextContent);

function changeTextContent(){
	headLevel1.classList.toggle("flash");
}
