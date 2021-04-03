<template>
  <div class="home">
    <h1>Fetch In Composition Api</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading . . .</div>
  </div>
</template>

<script>
// components
import PostList from '../components/PostList.vue'
//composables
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  
  components: { PostList },

  setup(){
    const { posts, error, load } = getPosts()
    load()

    return { posts, error }
  }
}
</script>
