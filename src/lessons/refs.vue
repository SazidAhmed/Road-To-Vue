<template>
  <div class="home">
    <h1>Composition Api</h1>
    <p>My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click Here</button>

    <!-- ref object -->
    <h1>Template Refs</h1>
    <p ref="refer">My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleRef">Click Here</button>

    <!-- ref for reactivity -->
    <h1>Ref for Reactivity</h1>
    <p>My name is {{ name2 }} and age is {{ age2 }}</p>
    <input type="text" v-model="name2">
    <button @click="age2++">Inc Age</button>
    <button @click="reactivRefs">Click Here</button>

    <!-- Reactive -->
    <h1>Ref vs Reactive</h1>
    <p>My name is {{ codeMan.name3 }} and age is {{ codeMan.age3 }}</p>
    <p>My name is {{ codeMan2.name3 }} and age is {{ codeMan2.age3 }}</p>
    <button @click="updateCodeMan">Update CodeMan</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'Home',
  components: {},
  // Composition Api
  setup(){
    console.log("setup hook")

    let name = "Sazid"
    let age = 30
    const handleClick = () =>{
      console.log('Click Event')
    }

    // Template Refs
    const refer = ref(null)
    const handleRef = () =>{
      console.log(refer, refer.value)
      refer.value.classList.add('test')
      refer.value.textContent = "Learning Composition Api"
    }

    // Refs for Reactivity
    const name2 = ref("Sadia")
    const age2 = ref(25)
    const reactivRefs = () =>{
      name2.value = "Sami"
      age2.value = 10
    }

    //Reactive (Primitive value cannot be changed with reactive)
    const codeMan = ref({name3:"SazidAhmed", age3:35})
    const codeMan2 = reactive({name3:"Recca", age3:30})
    const updateCodeMan = () =>{
      codeMan.value.age3 = 40 //ref
      codeMan2.age3 = 35 //reactive
    }

    return {
      name,
      name2,
      age,
      age2,
      handleClick,
      handleRef,
      refer,
      reactivRefs,
      codeMan,
      codeMan2,
      updateCodeMan
    }
  },

  //Option Api
  data(){
    return{
      
    }
  },
  created(){
    console.log("created hook")
  },
  mounted(){
    console.log("mounted hook")
  }
}
</script>
