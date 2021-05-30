import Vue from 'vue'
import App from './components/App.vue'

import ApolloClient from 'apollo-boost'
import VueApollo from "vue-apollo";

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql'
  })
});

Vue.use(VueApollo); // use middleware

new Vue({
  el: '#app',
  apolloProvider, // add option
  render: h => h(App)
})