const app = Vue.createApp({
    data(){
        return{
            brand:'KFC !',
            name : 'Fired Chicken',
            price:'750',
            qty:'1',
        }
    },
    methods:{
        changeName(){
            this.name='Pen Pizza'
            this.price='1000'
        },
    }
})

app.mount('#app')
