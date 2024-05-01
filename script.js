// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Function to collect employee information
const collectEmployees = function() {
  // Create an empty array to hold employee data
  const employees = [];
  // Variable to determine whether to continue collecting employees
  let continueAdding = true;

  // Loop to keep asking for employee information until the user decides to stop
  while (continueAdding) {
    // Prompt the user to enter the first name of the employee
    const firstName = prompt("Enter the employee's first name:");
    // Prompt the user to enter the last name of the employee
    const lastName = prompt("Enter the employee's last name:");
    // Prompt the user to enter the salary of the employee and convert it to a number
    const salary = parseFloat(prompt("Enter the employee's salary:"));

    // Add a new employee object to the array with the collected data
    employees.push({ firstName, lastName, salary });

    // Ask if the user wants to add another employee
    // If the user confirms, the loop continues; otherwise, it stops
    continueAdding = confirm("Would you like to add another employee?");
  }

  // Return the array of employee objects
  return employees;
};
 

// Function to display the average salary from an array of employees
const displayAverageSalary = function(employeesArray) {
  // If the array is empty, there's no average salary to calculate
  if (employeesArray.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;  // Exit the function early
  }

  // Use the 'reduce' method to calculate the total of all employee salaries
  const totalSalary = employeesArray.reduce((accum, emp) => accum + emp.salary, 0);
  // Calculate the average salary by dividing the total salary by the number of employees
  const averageSalary = totalSalary / employeesArray.length;

  // Display the average salary in the console, formatted as currency
  console.log(`The average salary is ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
};


// Function to select and display a random employee from an array
const getRandomEmployee = function(employeesArray) {
  // If the array is empty, there's no random employee to select
  if (employeesArray.length === 0) {
    console.log("No employees to select a random employee.");
    return;  // Exit the function early
  }

  // Generate a random index to select an employee from the array
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  // Get the employee at the random index
  const randomEmployee = employeesArray[randomIndex];

  // Display the details of the selected random employee in the console, formatted as currency
  console.log(`Random employee selected: ${randomEmployee.firstName} ${randomEmployee.lastName} with salary of ${randomEmployee.salary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
};



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
