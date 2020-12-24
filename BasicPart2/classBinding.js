const app = Vue.createApp({
    data(){
        return{
            items:[
                {name: 'burger', price:'20', img:'assets/burger.jpg', isFav:true},
                {name: 'pizza', price:'120', img:'assets/pizza.jpg', isFfav:false},
                {name: 'chicken', price:'80', img:'assets/chicken.jpg',isFav: true},
             ]
        }
    },
    methods:{
        toggleFav(item){
            item.isFav= !item.isFav
        }
    }
})
app.mount('#app')