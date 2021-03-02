new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data(){
        return{
            shop:'Awesome Food Court !',
            name : '',
            price:'',
            qty:'',
            menuBtn:true,
            selectItems:false,
            showItem: false,
            orderConfirmed:false,
            greetings:false,
        }
    },
    methods:{
        showMenuItems(){
            this.selectItems = !this.selectItems
        },
        pizza(){
            this.name='Pen Pizza'
            this.price='10'
            this.qty = '1'
            this.showItem= true
        },
        burger(name, price, qty){
            this.name = name
            this.price = price
            this.qty = qty
            this.showItem= true
        },
        order(){
            this.orderConfirmed=true
            this.showItem= false
            this.menuBtn = false
            this.selectItems=false
        },
        orderMore(){
            this.orderConfirmed=false
            this.menuBtn=true
            this.selectItems=true
        },
        exit(){
            this.orderConfirmed=false
            this.menuBtn=false
            this.greetings=true
        }
    }
})
