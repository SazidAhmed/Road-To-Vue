new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
        return {
            drawer: null,
            items: [
            { icon: "mdi-view-dashboard", text: "Dashboard", url: '/'},
            { icon: "mdi-account-supervisor-circle", 'icon-alt': 'mdi-account-supervisor-circle', 
                text: 'User Management', model: false,
                children: [
                    { icon: "mdi-chevron-right", text: 'User List' },
                    { icon: "mdi-chevron-right", text: 'User Roles' },
                    { icon: "mdi-chevron-right", text: 'Role Permissions' },
                ],
            },
            { icon: "mdi-widgets", 'icon-alt': 'mdi-widgets', 
                text: 'UI Components', model: false,
                children: [
                    { icon: "mdi-chevron-right", text: 'Buttons' },
                    { icon: "mdi-chevron-right", text: 'Tables' },
                    { icon: "mdi-chevron-right", text: 'Forms' },
                ],
            },
            { icon: "mdi-settings", text: "Settings", url: '/'},
            { icon: "mdi-exit-to-app", text: "Sign Out", url: '/signout',},
            ],
        }
    },
    methods:{
        
    }
  })