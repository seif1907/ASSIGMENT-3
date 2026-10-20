const users = [
    { name: 'seif ', age: 25, city: 'Cairo' },
    { name: 'body ', age: 22, city: 'Alexandria' },
    { name: 'osama ', age: 30, city: 'New York' },
    { name: 'magdy ', age: 28, city: 'Giza' },
    { name: 'samir ', age: 19, city: 'Mansoura' }
];

function displayTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; 
    data.forEach(item => {
        
        const row = document.createElement('tr');
        
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.city}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

document.getElementById('searchBox').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchTerm) || 
               user.age.toString().includes(searchTerm) || 
               user.city.toLowerCase().includes(searchTerm);
    });
    
    displayTable(filteredUsers);
});

document.getElementById('sortNameBtn').addEventListener('click', function() {
    users.sort((a, b) => a.name.localeCompare(b.name));
    displayTable(users);
});

document.getElementById('sortAgeBtn').addEventListener('click', function() {
    users.sort((a, b) => a.age - b.age);
    displayTable(users);
});

displayTable(users);
