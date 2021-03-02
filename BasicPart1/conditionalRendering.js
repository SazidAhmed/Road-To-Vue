const app = Vue.createApp({
    data(){
        return{
            shop:'Awesome Food Court',
            name : 'Fired Chicken',
            price:'750',
            qty:'1',
            showItem:false
        }
    },
    methods:{
        changeName(){
            this.name='Pen Pizza'
            this.price='1000'
        },
        showMenuItems(){
            // this.showItem=true
            this.showItem=!this.showItem
        }
    }
})

app.mount('#app')
