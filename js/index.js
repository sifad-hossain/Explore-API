//**Step:-01 */
// function loadUsers2() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }


//**Step:-02 */
// function loadUsers2() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayUsers(data))
// }

// function displayUsers(data) {
//     console.log(data);
// }


//Step:-3
// function loadUsers2() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayUsers(data))
// }

// function displayUsers(data) {
//     for (const user of data) {
//         // console.log(user);
//         console.log(user.email);
//         console.log(user.name);
//     }
// }














//** */
function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}