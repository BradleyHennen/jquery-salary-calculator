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
  ifMonthlyExceeds();
  
}

function clearInput() {
  $('#firstNameIn').val('');
  $('#lastNameIn').val('');
  $('#idIn').val('');
  $('#titleIn').val('');
  $('#salaryIn').val('');
}


function ifMonthlyExceeds() {
  let totalMonthly = 0;
  for (let i = 0; i < roster.length; i++) {
    totalMonthly = totalMonthly + Number(roster[i].salary);
  }
  totalMonthly = totalMonthly.toFixed(0) / 12;

  if (totalMonthly > 20000) {
    return $('#monthlySum').css({"background-color": "rgba(255, 0, 0, 0.5)"}).append(`<span id="total">$ ${totalMonthly.toFixed(2)}</span>`);
  } else {
    return $('#monthlySum').append(`<span id="total">$ ${totalMonthly.toFixed(2)}</span>`);
  }
}
 

function updateTable() {
  $('.taco').remove();
  for (let i = 0; i < roster.length; i++) {
    $('#tableBody').append(
      `<tr class='taco'>
        <td class="tdStyle">${roster[i].firstName}</td>
        <td class="tdStyle">${roster[i].lastName}</td>
        <td class="tdStyle">${roster[i].id}</td>
        <td class="tdStyle">${roster[i].title}</td>
        <td class="tdStyle">${roster[i].salary}</td>
        <td class="tdStyle"><button id="clearButton">CLEAR</button></td>
      </tr>`)
  }
}