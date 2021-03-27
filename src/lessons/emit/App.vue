<template>
  <h1>{{title}}</h1>
  <div v-if="showModal">
    <p>Welcome</p>
    <Modal :header="headerValue" :text="textValue" theme="red" @close="toggleModal" />
  </div>
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{ Modal },
  data(){
    return{
      showModal:false,
      title:'Vue app',
      headerValue:'Vue JS',
      textValue:'Progressive Web Framework',
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    }
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
