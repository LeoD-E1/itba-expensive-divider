const inputName = document.getElementById("name");
const inputCost = document.getElementById("cost");
const submitButton = document.getElementById("submit");
const listaNombreYmonto = document.querySelector("#nombreYmonto");

let peopleName = "";
let cost = 0;

inputName.addEventListener("change", (evt) => catchName(evt));
inputCost.addEventListener("change", (evt) => catchCost(evt));

const catchName = (evt) => (peopleName = evt.target.value);
const catchCost = (evt) => (cost = evt.target.value);

const ejecutar = () => {
  mostrarNombreYmonto(peopleName, cost);
  inputName.value = "";
  inputCost.value = 0;
};

function mostrarNombreYmonto(_nombre, _monto) {
  listaNombreYmonto.innerHTML += `<li class="list-group-item">${_nombre}: $${_monto}</li>`;
}
