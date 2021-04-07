document.getElementById('form-user').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(document.getElementById('form-user'))
    const user = {}
    for (let pair of formData.entries()) {
        user[pair[0]] = pair[1];
        console.log(pair[0] + ': ' + pair[1]);
    }
    
    addUserInTable(user)
    console.log(e)
})

function addUserInTable (user) {
    const tbody = document.querySelector('#table-users tbody')
    const row = tbody.insertRow();
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    cell0.innerHTML = user.name;    
    cell1.innerHTML = user.email;
    cell2.innerHTML = user.age;
    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = "Remover";
    buttonRemove.className = "btn btn-danger";
    buttonRemove.onclick = removeUserInTable;
    cell3.appendChild(buttonRemove);
}

function removeUserInTable(e) {
    const isToRemove = confirm("Tem certeza que deseja remover?")
    if (isToRemove) e.target.parentElement.parentElement.remove()
}

function resetForm () {
    document.getElementsByTagName('form')[0].reset()
}