<template>
  <div class="home">
    <h1>Composition Api with Props</h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <!-- component unmount -->
    <button @click="showPosts = !showPosts">toggle posts</button>
    <!-- component updated -->
    <button @click="posts.pop()">delete post</button>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  // Composition Api
  setup(){
    const posts = ref([
      {id: 1, title: 'title one', body: "tsasdad lorem dsadj sad asdj alsdklasdk oa a ldlakd oa sd sdadk aldk asd kooeri sds lasdlk sde asd "},
      {id: 2, title: 'title one', body: "tsasdad lorem dsadj sad asdj alsdklasdk oa a ldlakd oa sd sdadk aldk asd kooeri sds lasdlk sde asd "}
    ])

    const showPosts = ref(true)
    return {
     posts,
     showPosts
    }
  }
}
</script>
