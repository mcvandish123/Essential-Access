const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      { id: 4, name: 'Benjamin Asjali', age: 23, department: 'IT', salary: 80000 },
      { id: 5, name: 'Brandon Santos', age: 28, department: 'Finance', salary: 70000 },
      { id: 6, name: 'Benz Pilapil', age: 22, department: 'HR', salary: 60000 },
    ];

function displayEmployees() {
  const totalEmployees = employees.map(employee => `<p>${employee.id} - ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function displayEmployees() {

}

function calculateTotalSalaries() {
  const calculateSalary = employees.reduce((commission, employee) => commission + employee.salary, 0);
  alert(`Total Salary: ${calculateSalary}`)
}

function displayHREmployees() {
  const findEmployee = employees.filter(employee => employee.department === 'HR')
  const readEmployee = findEmployee.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - ${employee.salary}</p>`);
  document.getElementById('employeesDetails').innerHTML = readEmployee;
}

function findEmployeeById(employeeId) {
  const findEmployee = employees.find(employee => employee.id === employeeId);
  if (findEmployee) {
    document.getElementById('employeesDetails').innerHTML = `<p>${findEmployee.id}: ${findEmployee.name}: ${findEmployee.age} - ${findEmployee.department} - ${findEmployee.salary}</p>`;
  } else {
    document.getElementById('employeesDetails').innerHTML = 'There are no employees with the number you placed';
  }
}