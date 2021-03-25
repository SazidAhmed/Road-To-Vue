const ninjas = ['sazid', 'ahmed', 'sadia', 'jolly']

const formatNinjas = () =>{
    let val = ''
    ninjas.forEach(ninja => val += ninja + ', ')
}
const greet = () => {
    console.log(ninjas[0] + ' Says Hello')
}

//export
export { ninjas, formatNinjas, greet }

//default export
export default ninjas