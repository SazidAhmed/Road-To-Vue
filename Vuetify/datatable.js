new Vue({
    el: '#app',
    vuetify: new Vuetify(),
      data () {
          return {
            search: '',
            createDialog:false,
            deleteDialog: false,
            headers: [
              { text: 'Index', align: 'start', sortable: true, value: 'id'},
              { text: 'Image', align: 'start', sortable: false, value: 'image'},
              { text: 'Name', align: 'start', sortable: true, value: 'name'},
              { text: 'Date', align: 'start', sortable: true, value: 'created_at'},
              { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [
              {
                id: 1,
                image: 'default.jpg',
                name: 'Capsules',
                created_at: '15-01-2021',
              },
              {
                  id: 2,
                  image: 'default.jpg',
                  name: 'Injections',
                  created_at: '15-01-2021',
              },
              {
                id: 3,
                image: 'default.jpg',
                name: 'Tablets',
                created_at: '15-01-2021',
              },
              {
                  id: 4,
                  image: 'default.jpg',
                  name: 'Inhalers',
                  created_at: '15-01-2021',
              },
              
            ],
          }
      },
      methods:{
        createItem() {
          this.createDialog = true;
        },
        editItem (item) {
          this.createDialog = true;
          console.log(item.id);
          console.log(item.name);
        },
    
        deleteItem (item) {
          this.deleteDialog = true;
          console.log(item.id);
          console.log(item.name);
        },
      }
  })