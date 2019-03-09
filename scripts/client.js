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
    totalMonthly = totalMonthly + Number(roster[i].salary);
  }
  return totalMonthly = totalMonthly.toFixed(0) / 12;
}

function ifMonthlyExceeds() {
  let totalMonthly = 0;

  if (totalMonthly > 20000) {
    return $('#monthlySum').css('color', 'red').append(`<span id="total">${totalMonthly.toFixed(2)}</span>`);
  } else {
    return $('#monthlySum').append(`<span id="total">${totalMonthly.toFixed(2)}</span>`);
  }
}
 

function updateTable() {
  $('#taco').remove();
  for (let i = 0; i < roster.length; i++) {
    $('#tableBody').append(`<tr id='taco'><td>${roster[i].firstName}</td><td>${roster[i].lastName}</td><td>${roster[i].id}</td><td>${roster[i].title}</td><td>${roster[i].salary}</td><td><button id="clearButton">CLEAR</button></td></tr>`)
  }
}