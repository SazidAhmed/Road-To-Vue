import { createStore } from 'vuex'

export default createStore({
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

  mutations: {
    INCREMENT_LIKE(state) {
      state.like += 1
    },
    DECREMENT_LIKE(state, payload) {
      state.like -= payload
    },
    DECREMENT_MERIT(state, payload) {
      state.merit -= payload
    }
  },

  actions: {
  },

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
