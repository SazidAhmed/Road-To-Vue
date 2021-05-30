<template>
  <div id="app">
    <p class="username">Contacts :</p>
    <ul>
      <li v-for="contact in allContacts" :key="contact.id">{{ contact.name }}</li>
    </ul>
    Contact Details : 
    <ul>
      <li>{{detailsContact.id}}</li>
      <li>{{detailsContact.name}}</li>
      <li>{{detailsContact.email}}</li>
      <li>{{detailsContact.phone}}</li>
    </ul>
    <div>
      <input placeholder="name" v-model="name"><br><br>
      <input placeholder="email" v-model="email"><br><br>
      <input placeholder="phone" v-model="phone"><br><br>
      <button @click="createContact()">Add Post</button>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag'

const allContacts = gql`query{
  allContacts{
    name
    email
    phone
  }
}`;

const detailsContact = gql`query{
  detailsContact(id:13){
    id
    name
    email
    phone
  }
}`;

const createContact = gql`mutation ($name: String!, $email: String!, $phone: String!){
  createContact(name: $name, email: $email, phone: $phone){
    contact{
      id
      name
      email
      phone
    }
  }
}`;


export default {
  name: 'app',
  data: function(){
    return {
      id:null,
      name:'',
      email:"",
      phone:'',
      detailsContact:'',
      allContacts: [],
    }
  },
  methods: {
    createContact() {
      this.$apollo.mutate({
        mutation: createContact, 
        variables: { 
          name: this.name,
          email: this.email,
          phone: this.phone
        },
        update: (cache, result) => {
        // the new post returned from the server
        let newPost = result.data.createContact
        console.log(newPost)
        // an "identification" needed to locate the right data in the cache
        let cacheId = {
          query: allContacts, 
          variables: { 
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
          },
        }
    
        // get the cached data
        const data = cache.readQuery(cacheId)

        const newData = [ ...data.allContacts, newPost ]

        // update the cache with the new data
        cache.writeQuery({
          ...cacheId,
          data: { allContacts: newData }
        })
      }
      })
      this.name = ''
      this.email = ''
      this.phone = ''
    }
  },
  // Apollo
  apollo: {
    allContacts: allContacts,
    detailsContact:detailsContact,
  }
}
</script>
