export async function loadEmployees() {
    const response = await fetch("../data/employees.json");
    const employees = await response.json();
    return employees;
}