<template>
  <h1>{{title}}</h1>
  <!-- create modal -->
  <teleport to=".modals" v-if="showModal">
    <Modal>
      <!-- default slot -->
      <h1>Create Data</h1>
      <p>Insert Data Here</p>
      <!-- name slot -->
      <template v-slot:links>
          <a href="#" @click="submitForm">Submit</a>
          <a href="#" @click="toggleModal">Close</a>
      </template>
      <!-- name slot -->
    </Modal>
  </teleport>
  <!-- delete modal -->
  <div v-if="showModalTwo">
    <Modal>
      <!-- default slot -->
      <h1>Delelte Data</h1>
      <p>Are You Sure ?</p>
      <!-- name slot -->
      <template v-slot:links>
          <a href="#" @click="confimDelete">Confirm</a>
          <a href="#" @click="toggleModalTwo">Close</a>
      </template>
      <!-- name slot -->
    </Modal>
  </div>
  <button @click="toggleModal">Add New</button>
  <button @click="toggleModalTwo">Delete</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{ Modal },
  data(){
    return{
      showModal:false,
      showModalTwo:false,
      title:'Vue app',
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    },
    submitForm(){
      alert("form has been submitted !")
      this.showModal = false;
    },
    confimDelete(){
      alert("Data has been Deleted !")
      this.showModalTwo = false;
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
