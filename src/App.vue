<template>
  <SignupForm />
</template>

<script>
import Modal from './components/Modal.vue'
import SignupForm from './components/SignupForm'
export default {
  name: 'App',
  components:{ Modal,  SignupForm },
  data(){
    return{
     
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
body {
  margin: 0;
  background: #eee;
}
</style>
