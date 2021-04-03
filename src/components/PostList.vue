<template>
  <div>
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
// components
import SinglePost from './SinglePost.vue'

export default {
    components:{ SinglePost },

    props: ['posts'],

    setup(){
       
    }
}
</script>

<style>

</style>