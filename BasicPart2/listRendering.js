const app = Vue.createApp({
    data(){
        return{
         items:[
            {name: 'burger', price:'20'},
            {name: 'pizza', price:'120'},
            {name: 'chicken', price:'80'},
         ]
        }
    },
    methods:{
       
    }
})

app.mount('#app')