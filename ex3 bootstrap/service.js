document.getElementById('form-user').addEventListener('submit', function(event) {
    event.preventDefault();
    const user = {};
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value;
    user.age = document.getElementById('age').value;
    addUserInTable(user)
})

function addUserInTable (user) {
    const tbody = document.querySelector('tbody')
    let row = '<tr>'
    
    row += '<td>' + user.name + '</td>'
    row += '<td>' + user.email + '</td>'
    row += '<td>' + user.age + '</td>'
    row += '<td> <button onclick="removeUserInTable()" class="btn btn-danger">Remover</button> </td>'

    row += '</tr>'
    $(tbody).append(row);
}

function removeUserInTable(e) {
    const isToRemove = confirm("Tem certeza que deseja remover?")
    if (isToRemove) {
        e.target.parentElement.parentElement.remove()
    }
}

function resetForm () {
    document.getElementsByTagName('form')[0].reset()
}