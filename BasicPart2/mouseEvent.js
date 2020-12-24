const app = Vue.createApp({
    data(){
        return{
           x:0,
           y:0,
        }
    },
    methods:{
        handleEvent(e, param){
            console.log(e, e.type)
            if(param){
                console.log(param)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')