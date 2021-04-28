<template>
  <p>Username : {{ user.name }}</p>
  <p>There are {{ catLength }} categories</p>
  <p>get event : {{ getEvent(1) }}</p>
  <p>get event : {{ getEventById(1) }}</p>
  <ul>
    <li v-for="cat in categories" :key="cat">{{ cat }}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
      catLength() {
        return this.$store.getters.catLength
      },
       getEvent() {
        return this.$store.getters.getEventById
      },
      ...mapState(['categories', 'user']) // <-- using object spread operator
    }
}
</script>

//with mapGetters
<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed: {
      ...mapState(['categories', 'user']), // <-- using object spread operator

      ...mapGetters(['catLength','getEventById']) // <-- using object spread operator
    }
}
</script>
