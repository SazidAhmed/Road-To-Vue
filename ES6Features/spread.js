const ninjas = ['sazid', 'ahmed', 'sadia', 'jolly']
const blog = { title: 'new blog', author: 'sazid'}

console.log(ninjas)
//spread operator
console.log(...ninjas)


//spread operator
const idBlog = {...blog, id:1}
console.log(idBlog)