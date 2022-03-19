function showEmployee(employeeObj){
   const html = `<ul>${destructureAttrs(employeeObj)}</ul>`
   document.getElementById('employee').innerHTML = html;
}

function destructureAttrs(employeeObj){
    let fragment = '';
    for( const attr in employeeObj){
        fragment = fragment.concat(`
        <li>
            <strong>${attr}:</strong>
            ${String(employeeObj[attr])}
        </li>`);
    }
    return fragment
}
function showTodos(todos){
    document.getElementById('todos').innerHTML = 
 '<ol>'+   
todos.reduce((fragment, todo, index)=> index === 1 ? `
<li>
    ${String(fragment)}
</li>
<li>
    ${String(todo)}
</li>
`:
fragment.concat(`
<li>
    ${String(todo)}
</li>`));
+'</ol>'
}