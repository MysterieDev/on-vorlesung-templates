// Key Value pairs
const employee = {
    vorname: 'josef',
    nachname: 'test',
    rolle: 'azubi',
    rechtelevel: 1,
}
for(const attr in employee){
    console.log('name: ' + attr + " | wert: " + employee[attr]);
}
console.table(employee)
showEmployee(employee);


const todos = ["abwasch", "bei der vorlesung nichts zocken", "inta abschalten", "js lernen"]
showTodos(todos);