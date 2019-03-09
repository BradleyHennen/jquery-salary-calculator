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
  $('#employeeList').on('click', '.taco', '.clearButton', removeEmployee);
}

function addEmployee() {
  $('#total').remove();
  
  let newEmployee = new Employee ($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val())
  roster.push(newEmployee);

  clearInput();
  ifMonthlyExceeds();
  render();
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

function render() {
  $('#tableBody').empty();

      for (let employee of roster) {
        let $employee = $(`<tr class='taco'>
            <td class="tdStyle">${employee.firstName}</td>
            <td class="tdStyle">${employee.lastName}</td>
            <td class="tdStyle">${employee.id}</td>
            <td class="tdStyle">${employee.title}</td>
            <td class="tdStyle">$ ${employee.salary}</td>
            <td class="tdStyle"><button class="clearButton">CLEAR</button></td>
          </tr>`)
          $employee.data(employee);
          $('#tableBody').append($employee);
      }
}

function removeEmployee() {
  let employeeData = $(this).data();
  console.log($(this));
  console.log(employeeData);
  
  for (let i = 0; i < roster.length; i++) {
    let employee = roster[i];
    console.log(employee);
    
    
    if (employee.firstName === employeeData.firstName && 
      employee.lastName === employeeData.lastName && 
      employee.id === employeeData.id && 
      employee.title === employeeData.title && 
      employee.salary === employeeData.salary) {

        roster.splice(i, 1);
        console.log('remove');  
    } 
  }
  render();
}
