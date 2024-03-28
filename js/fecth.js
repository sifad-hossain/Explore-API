// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) //.JSON is not similar but close to JSON.Parse
//       .then(json => console.log(json))






// const url = ('https://jsonplaceholder.typicode.com/todos/1')
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData() {
    const url = ('https://jsonplaceholder.typicode.com/todos/1');
    fetch(url)
    .then(response => response.json()) 
    .then(json => console.log(json))
}



