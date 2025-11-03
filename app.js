var cars = {};
var count = 0;

document.getElementById("addBtn").addEventListener("click", addCar);
document.getElementById("showBtn").addEventListener("click", showCars);

function addCar() {
  var name = document.getElementById("carName").value;
  var model = document.getElementById("carModel").value;
  var year = document.getElementById("carYear").value;
  var price = document.getElementById("carPrice").value;

  if (!name || !model || !year || !price) {
    alert("Please fill all fields!");
    return;
  }

  count++;
  var key = "car" + count;
  cars[key] = { name, model, year, price };

  document.getElementById("carName").value = "";
  document.getElementById("carModel").value = "";
  document.getElementById("carYear").value = "";
  document.getElementById("carPrice").value = "";

  alert("Car added successfully!");
}

function showCars() {
  var tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  for (var key in cars) {
    var car = cars[key];
    var row = document.createElement("tr");
    row.classList.add("border-b", "hover:bg-gray-100");

    row.innerHTML = `
      <td class="py-3 px-4">${car.name}</td>
      <td class="py-3 px-4">${car.model}</td>
      <td class="py-3 px-4">${car.year}</td>
      <td class="py-3 px-4">${car.price}</td>
    `;
    tableBody.appendChild(row);
  }
}
