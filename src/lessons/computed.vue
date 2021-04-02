<template>
  <div class="home">
    <h1>Composition Api with Computed Property</h1>
    <input type="text" name="search" v-model="search">
    <p>search result for - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'Home',
  components: {},
  // Composition Api
  setup(){
    console.log("setup hook")
    const search = ref('')
    const names = ref(['sazid', 'ahmed', 'recca', 'sadia', 'hinabishi','sakin', 'dhrubo'])
    
    const matchingNames = computed(()=>{
      return names.value.filter( (name) => name.includes(search.value))
    })
    return {
      names,
      search,
      matchingNames
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
