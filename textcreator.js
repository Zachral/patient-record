
document.getElementById("submit").addEventListener("click", produceText);

function produceText() {
let select = document.getElementById('therapy');
let text = select.options[select.selectedIndex].text;
console.log(text); 
}