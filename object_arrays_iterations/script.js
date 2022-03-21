// Key Value pairs
const employee = {
    vorname: 'josef',
    nachname: 'test',
    rolle: 'azubi',
    rechtelevel: 1,
}

showEmployee(employee);


const todos = ["abwasch", "bei der vorlesung nichts zocken", "inta abschalten", "js lernen"]
const moreWeirdTodos = [23.75, true, false, [1, 2], {a: "one", b: 'two'}]

showTodos(todos, 'todos');

showTodos(moreWeirdTodos, 'weirdTodos');