<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
// components
import Spinner from '../components/Spinner.vue'

//composables
import getPost from '@/composables/getPost'

//router
import { useRoute } from 'vue-router'

export default {
  props: ['id'],

  components: { Spinner },

  setup(props) {
    //route
    const route = useRoute()
    console.log(route)

    //destructure from composable
    const { post, error, load } = getPost(route.params.id)

    load()
    
    return { error, post }
  },
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>