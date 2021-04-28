<template>
  <p>Username : {{ user.name }}</p>
  <p>There are {{ catLength }} categories</p>
  <p>get event : {{ getEventById(2) }}</p>
  <ul>
    <li v-for="cat in categories" :key="cat">{{ cat }}</li>
  </ul>
  <h2>Like : {{ like }}</h2>
  <h2>Merit : {{ merit }}</h2>
      <button @click="incLike">Like</button>
      <button @click="decLike">disLike</button>
      <p>
        <button @click="incMerit(5)">Give-Merit</button>
        <button @click="decMerit(10)">Minus-Merit</button>
      </p>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data() {
      return {
        decreamentBy: 5
      }
    },
    computed: {
      ...mapState(['categories', 'user', 'like', 'merit']), // <-- using object spread operator

      ...mapGetters(['catLength','getEventById']) // <-- using object spread operator
    },
    methods:{
      //direct mutations
      // incLike() {
      //   this.$store.commit('INCREMENT_LIKE')
      // },
      // decLike() {
      //   this.$store.commit('DECREMENT_LIKE', this.decreamentBy)
      // },
      // decMerit(val) {
      //   this.$store.commit('DECREMENT_MERIT', val)
      // },

      //mutations through actions
      incLike() {
        this.$store.dispatch('inc_like')
      },
      decLike() {
        this.$store.dispatch('dec_like', this.decreamentBy)
      },
      incMerit(val) {
        this.$store.dispatch('inc_merit', val)
      },
      decMerit(val) {
        this.$store.dispatch('dec_merit', val)
      },
    }
}
</script>
