const inputName = document.getElementById("name");
const inputCost = document.getElementById("cost");
const submitButton = document.getElementById("submit");
const listLogs = document.getElementById("listLogs");
const log = document.getElementById("log").content;
const fragment = document.createDocumentFragment();
const total = document.getElementById("totalCost");
const average = document.getElementById("averageCost");

let peopleName = "";
let cost = 0;

const logs = [];
let totalCost = 0;
let averageCost = 0;

inputName.addEventListener("change", (evt) => catchName(evt));
inputCost.addEventListener("change", (evt) => catchCost(evt));
submitButton.addEventListener("click", () => execute());
listLogs.addEventListener("click", (e) => deleteElement(e));

const catchName = (evt) => {
  peopleName = evt.target.value;
  evt.stopPropagation();
};

const catchCost = (evt) => {
  cost = evt.target.value;
  evt.stopPropagation();
};

const deleteElement = (e) => {
  console.log(e.target.parentElement);
  if (e.target.classList.contains("btn-danger")) {
    deletePeople(e.target.parentElement);
  }
  e.stopPropagation();
};

const restartValues = () => {
  inputName.value = null;
  inputCost.value = null;
  peopleName = null;
  cost = null;
};

const drawLogs = (obj) => {
  log.querySelector("h5").textContent = obj.name;
  log.querySelector("span").textContent = `$${obj.cost}`;
  log.querySelector("button").dataset.id = obj.id;
  const clone = log.cloneNode(true);
  fragment.appendChild(clone);
  listLogs.appendChild(fragment);
};

const execute = () => {
  if (peopleName && cost > 0) {
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
  const newLog = { id: Math.random(), name: _name, cost: _cost };
  logs.push(newLog);
  drawLogs(newLog);
  totalCost = totalCost + parseInt(_cost);
  averageCost = totalCost / logs.length;
  total.innerHTML = `$${totalCost}`;
  average.innerHTML = `$${averageCost}`;
};
