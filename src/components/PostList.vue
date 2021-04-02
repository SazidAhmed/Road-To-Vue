<template>
  <div>
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'

export default {
    components:{ SinglePost },
    props: ['posts'],
    setup(props){
        onMounted(()=>{
            console.log("component mounted")
        })
        onUnmounted(()=>{
            console.log('component unmounted')
        })
        onUpdated(()=>{
            console.log('component updated')
        })
    }

}
</script>

<style>

</style>