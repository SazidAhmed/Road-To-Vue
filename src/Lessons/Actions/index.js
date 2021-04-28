import { createStore } from 'vuex'

export default createStore({
  //data
  state: {
    user: { id: '120', name: 'Sazid Ahmed' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [
      { id: 1, title: '...' },
      { id: 2, title: '...' },
      { id: 3, title: '...' },
      { id: 4, title: '...' }
    ],
    like:5,
    merit:100,
  },

  //sync data methods
  mutations: {
    INCREMENT_LIKE(state) {
      state.like += 1
    },
    DECREMENT_LIKE(state, payload) {
      state.like -= payload
    },

    INCREMENT_MERIT(state, p) {
      state.merit += p
    },
    DECREMENT_MERIT(state, payload) {
      state.merit -= payload
    },
  },

  //async data methods
  actions: {
    inc_like({state, commit}) {
      if (state.merit >= 90 ) {
        commit('INCREMENT_LIKE')
      }
      else{
        commit('INCREMENT_MERIT', 5)
      }
    },
    dec_like({state, commit}, payload) {
      if (state.like >= 1 ) {
        commit('DECREMENT_LIKE', payload)
      }
      else{
        commit('DECREMENT_MERIT', payload)
      }
    },

    inc_merit(context, payload) {
      context.commit('INCREMENT_MERIT', payload)
    },
    dec_merit(context, payload) {
      if (this.state.merit >= 10 ){
        context.commit('DECREMENT_MERIT', payload)
      }
      else{
        context.commit('INCREMENT_MERIT', 0)
      }
    }
  },

  //computed
  getters:{
    catLength: state =>{
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // activeTodosCount: (state) => {
    //   return state.todos.filter(todo => !todo.done).length
    // }

    //by passing getters
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },

    //dynamic getters
    getEventById: state => (id) => {
      return state.events.find(event => event.id === id)
    }

  },

  modules: {
  }
})
