<template>
  <div class="home">
    <h1>Composition Api with watchEffect Hook</h1>
    <input type="text" name="search" v-model="search">
    <p>search result for - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleWatch">Stop Watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'
export default {
  name: 'Home',
  components: {},
  // Composition Api
  setup(){
    const search = ref('')
    const names = ref(['sazid', 'ahmed', 'recca', 'sadia', 'hinabishi','sakin', 'dhrubo'])
    
    //watch hook
    const stopWatch = watch(search, ()=> {
      console.log("watch function run")
    })
    //runs initially  //watchs any value that changes
    const stopEffect = watchEffect(()=>{
      console.log("watchEffect function run", search.value)
    })

    const handleWatch = () => {
      stopWatch()
      stopEffect()
    }
    const matchingNames = computed(()=>{
      return names.value.filter( (name) => name.includes(search.value))
    })
    return {
      names,
      search,
      matchingNames,
      handleWatch
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
