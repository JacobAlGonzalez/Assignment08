// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: '10000001', name: 'John Doe', extension: '1234', email: 'johndoe@example.com', department: 'Administrative' },
    { id: '10000002', name: 'Jane Smith', extension: '5678', email: 'janesmith@example.com', department: 'Engineering' },
    { id: '10000003', name: 'George Johnson', extension: '9101', email: 'george.johnson@example.com', department: 'Sales' },
    { id: '10000004', name: 'Emily Davis', extension: '1122', email: 'emily.davis@example.com', department: 'Marketing' },
    { id: '10000005', name: 'Michael Brown', extension: '3344', email: 'michael.brown@example.com', department: 'Quality Assurance' }
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}

// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const empTable = document.getElementById('empTable');
const empCount = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.onload = () => {
    buildGrid();
};

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault(); // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = { id, name, extension, email, department };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        // CONFIRM THE DELETE
        const confirmDelete = confirm('Are you sure you want to delete this employee?');
        if (confirmDelete) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const rowIndex = e.target.closest('tr').rowIndex - 1; // Adjust index to match the array position

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex, 1);

            // BUILD THE GRID
            buildGrid();

            // STORE THE ARRAY IN STORAGE
            localStorage.setItem('employees', JSON.stringify(employees));
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const tbody = empTable.querySelector('tbody');
    tbody.innerHTML = ''; // Clear existing rows

    // REBUILD THE TBODY FROM SCRATCH
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    employees.forEach((employee, index) => {
        const row = document.createElement('tr');

        // REBUILDING THE ROW STRUCTURE
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
        `;

        // BIND THE TBODY TO THE EMPLOYEE TABLE
        tbody.appendChild(row);
    });

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = employees.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
}