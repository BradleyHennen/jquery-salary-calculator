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
  
}

function addEmployee() {
  $('#total').remove();

  let newEmployee = new Employee ($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val())

  $('#tableBody').append(`<tr><td>${newEmployee.firstName}</td><td>${newEmployee.lastName}</td><td>${newEmployee.id}</td><td>${newEmployee.title}</td><td>${newEmployee.salary}</td></tr>`)

  roster.push(newEmployee);
  clearInput();
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
 