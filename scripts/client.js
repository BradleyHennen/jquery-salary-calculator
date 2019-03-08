console.log('js');

class Employee {
  constructor(firstNameIn, lastNameIn, idIn, titleIn, salaryIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.id = idIn;
    this.title = titleIn;
    this.salary = salaryIn;
  }
}

const roster = [];
let totalMonthly = 0;

$(document).ready(readyNow);

function readyNow() {
  $('#submitButton').on('click', addEmployee);
  // $('#clearButton').on('click', removeEmployee)
}

function addEmployee() {
  $('#total').remove();
  
  let newEmployee = new Employee ($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val())

  roster.push(newEmployee);

  clearInput();
  updateTable();
  addSalaries();
  ifMonthlyExceeds();
  
}

function clearInput() {
  $('#firstNameIn').val('');
  $('#lastNameIn').val('');
  $('#idIn').val('');
  $('#titleIn').val('');
  $('#salaryIn').val('');
}

function addSalaries() {
  for (let i = 0; i < roster.length; i++) {
    totalMonthly = Number(totalMonthly) + Number(roster[i].salary);
  }
  return totalMonthly = totalMonthly / 12;
}

function ifMonthlyExceeds() {
  if (totalMonthly > 20000) {
    $('#monthlySum').css('color', 'red').append(`<span id="total">${(totalMonthly).toFixed(2)}</span>`);
  } else {
    $('#monthlySum').append(`<span id="total">${(totalMonthly).toFixed(2)}</span>`);
  }
}
 

function updateTable() {
  $('#taco').remove();
  for (let i = 0; i < roster.length; i++) {
    $('#tableBody').append(`<tr id='taco'><td>${roster[i].firstName}</td><td>${roster[i].lastName}</td><td>${roster[i].id}</td><td>${roster[i].title}</td><td>${roster[i].salary}</td><td><button id="clearButton">CLEAR</button></td></tr>`)
  }
}