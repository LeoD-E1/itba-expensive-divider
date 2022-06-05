const inputName = document.getElementById("name");
const inputCost = document.getElementById("cost");
const submitButton = document.getElementById("submit");
const listLogs = document.getElementById("listLogs");
const log = document.getElementById("log").content;
const fragment = document.createDocumentFragment();

let peopleName = "";
let cost = 0;

const logs = [];
let totalCost = 0;
// document.addEventListener("DOMContentLoaded", () => {

// })

inputName.addEventListener("change", (evt) => catchName(evt));
inputCost.addEventListener("change", (evt) => catchCost(evt));
submitButton.addEventListener("click", () => execute());

const catchName = (evt) => (peopleName = evt.target.value);
const catchCost = (evt) => (cost = evt.target.value);

const restartValues = () => {
  inputName.value = null;
  inputCost.value = null;
  peopleName = null;
  cost = null;
};

const drawLogs = () => {
  console.log(logs);
  logs.map((item) => {
    log.querySelector("h5").textContent = item.name;
    log.querySelector("span").textContent = `$${item.cost}`;
    log.querySelector("button").dataset.id = item.id;
    const clone = log.cloneNode(true);
    fragment.appendChild(clone);
  });
  listLogs.appendChild(fragment);
};

const execute = () => {
  if (peopleName && cost !== 0) {
    try {
      submitNameAndCost(peopleName, cost);
      restartValues();
    } catch (error) {
      alert(error);
    }
  } else {
    alert(
      `Nombre es ${peopleName}, costo es ${cost}, ingrese valores correctos.`
    );
  }
};

const submitNameAndCost = (_name, _cost) => {
  logs.push({ id: Math.random, name: _name, cost: _cost });
  drawLogs();
  // listLogs.innerHTML += `<li class="list-group-item">${_name}: ${_cost}</li>`;
};
