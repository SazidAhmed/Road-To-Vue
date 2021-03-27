<template>
  <h1>{{title}}</h1>
  <Modal :header="headerValue" :text="textValue" theme="red" />
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{ Modal },
  data(){
    return{
      title:'Vue app',
      headerValue:'Vue JS',
      textValue:'Progressive Web Framework',
    }
  },
  methods:{
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
