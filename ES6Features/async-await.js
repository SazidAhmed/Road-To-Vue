const getTodo = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(res)
    const data = await res.json()
    console.log(data)
}
//invoke
getTodo()