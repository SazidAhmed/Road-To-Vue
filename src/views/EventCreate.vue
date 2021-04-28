<template>
  <div>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="event.title" type="text" placeholder="Add an event title"/>
      </div>
      <div class="field">
        <label>Description</label>
        <input v-model="event.description" type="text" placeholder="Add a description"/>
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="event.location" type="text" placeholder="Add a location"/>
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <input type="date" v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data() {
      const times = []
        for (let i = 1; i <= 24; i++) {
          times.push(i + ':00')
        }
      return {
        decreamentBy: 5,
        event: this.createFreshEvent(),
        times,
      }
    },
    computed: {
      ...mapState(['categories', 'user', 'like', 'merit']), // <-- using object spread operator

      ...mapGetters(['catLength','getEventById']) // <-- using object spread operator
    },
    methods:{
      createFreshEvent() {
          const user = this.$store.state.user
          const id = Math.floor(Math.random() * 10000000)
          return {
            id: id,
            category: '',
            organizer: user,
            title: '',
            description: '',
            location: '',
            date: '',
            time: '',
            attendees: []
          }
        },
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

      createEvent() {
      this.$store.dispatch('createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
          console.log('There was a problem creating your event.')
        })
      }
    }
}
</script>
<style scoped>
.field {
  margin-bottom: 24px;
}
</style>