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
const NUMBER_OF_MONTHS = 12;
const MONTHLY_SALARY_LIMIT = 20000;

$(document).ready(readyNow);


function readyNow() {
  $('#submitButton').on('click', handleSubmit);
  $('#tableBody').on('click', 'button.clearButton', removeEmployee);
}

function handleSubmit(event) {
  event.preventDefault();
  addEmployee();
}

//Adds employee information to the array and table as well as checks inputs
function addEmployee() {

  if (validateForm()) {    
    let newEmployee = new Employee ($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val())
    roster.push(newEmployee);

    clearInput();
    ifMonthlyExceeds();
    render();
  } else {
    alert('Please fill out all fields.')
  }
} //addEmployee End

//Checks if all inputs are filled out
function validateForm() {
    if ($('#firstNameIn').val() !== '' && $('#lastNameIn').val() !== '' && $('#idIn').val() !== '' && $('#titleIn').val() !== '' &&  $('#salaryIn').val() !== '') {
      return true;
    } else {
      return false;
    }
} //validateForm End


//Clears inputs when submitted
function clearInput() {
  $('#firstNameIn').val('');
  $('#lastNameIn').val('');
  $('#idIn').val('');
  $('#titleIn').val('');
  $('#salaryIn').val('');
} //clearInput End

//Checks if monthly costs exceed $20,000 returns red alert if so. 
function ifMonthlyExceeds() {
  let totalMonthly = 0;
  $('#total').remove();
  for (let i = 0; i < roster.length; i++) {
    totalMonthly = totalMonthly + Number(roster[i].salary);
  }
  totalMonthly = totalMonthly.toFixed(0) / NUMBER_OF_MONTHS;

  if (totalMonthly > MONTHLY_SALARY_LIMIT) {
    return $('#monthlySum').css({"background-color": "rgba(255, 0, 0, 0.5)"}).append(`<span id="total">$ ${addCommasToNumbers(totalMonthly.toFixed(2))}</span>`);
  } else {
    return $('#monthlySum').css('background-color', 'transparent').append(`<span id="total">$ ${addCommasToNumbers(totalMonthly.toFixed(2))}</span>`);
  }
}//ifMonthlyExceeds End

//Adds employee information to the DOM via table 
function render() {
  $('#tableBody').empty();

      for (let employee of roster) {
        let $employee = $(`<tr class='taco'>
            <td class="tdStyle">${employee.firstName}</td>
            <td class="tdStyle">${employee.lastName}</td>
            <td class="tdStyle">${employee.id}</td>
            <td class="tdStyle">${employee.title}</td>
            <td class="tdStyle">$ ${addCommasToNumbers(employee.salary)}</td>
            <td class="tdStyle"><button class="clearButton">CLEAR</button></td></tr>`)
          $employee.data(employee);
          $('#tableBody').append($employee);
      }
} //render End


//Removes employee from DOM table and array if user hits the clear button
function removeEmployee() {
  let employeeData = $(this).closest("tr").data();
  //console.log('On Click Employee Data:', employeeData);
  
  for (let i = 0; i < roster.length; i++) {
    let employee = roster[i];
    //console.log('Roster:', employee);
    
    
    if (employee.firstName === employeeData.firstName && 
      employee.lastName === employeeData.lastName && 
      employee.id === employeeData.id && 
      employee.title === employeeData.title && 
      employee.salary === employeeData.salary) {

        console.log('Employee Removed: ', employee.firstName, employee.lastName);
        roster.splice(i, 1);
        ifMonthlyExceeds();
          
    } 
  }
  render();
} //removeEmployee End

//Adds commas to numbers
function addCommasToNumbers(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //addCommasToNumbers End (Found on StackOverflow)