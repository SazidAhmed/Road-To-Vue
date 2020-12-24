const app = Vue.createApp({
    data(){
        return{
            url: 'https://www.google.com',
            items:[
                {name: 'burger', price:'20', img:'assets/burger.jpg'},
                {name: 'pizza', price:'120', img:'assets/pizza.jpg'},
                {name: 'chicken', price:'80', img:'assets/chicken.jpg'},
             ]
        }
    },
    methods:{
       
    }
})
app.mount('#app')