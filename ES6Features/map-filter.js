const ninjas = [
    {name:'sazid', belt:'black'},
    {name:'sadia', belt:'green'},
    {name:'ahmed', belt:'orange'},
    {name:'jolly', belt:'black'},
]

//filter method (creates new array)
const blackBelts = ninjas.filter((ninja)=>{
    return ninja.belt == 'black'
})
console.log("Black-Belts:", blackBelts)


//map method (creates new array)
const names = ninjas.map((ninja)=>{
    return ninja.name
})
console.log("Name:", names)