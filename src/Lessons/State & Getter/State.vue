<template>
  <p>Username : {{ user.name }}</p>
  <ul>
    <li v-for="cat in categories" :key="cat">{{ cat }}</li>
  </ul>
</template>

<script>
export default {
  computed:{
    userName(){
      return this.$store.state.user.name
    },
    userId(){
      return this.$store.state.user.id
    }
  }
}
</script>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
      userName: state => state.user.name,
      categories: state => state.categories
    })
}
</script>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
      userName: 'user',
      categories: 'categories'
    })
}
</script>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['categories', 'user'])
}
</script>
//using spread operator
<script>
import { mapState } from 'vuex'
export default {
    computed: {
      localComputed() {
        return something
      },
      ...mapState(['categories', 'user']) // <-- using object spread operator
    }
}
</script>