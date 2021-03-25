//Promise
const todo = fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(todo)

//fetch (Non blocking)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data=>console.log(data))

console.log('hello')