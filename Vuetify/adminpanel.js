new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
        return {
            drawer: null,
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
            sidenavs: [
                { 
                    icon: "mdi-view-dashboard", 
                    text: "Dashboard",
                    url: '/profile',
                },

                { 
                    icon: "mdi-account-supervisor-circle", 
                    text: "Profile",
                    url: '/profile',
                },

                {
                    icon: "mdi-settings",
                    text: "Settings",
                    url: '/settings',
                },

                { 
                    icon: "mdi-exit-to-app", 
                    text: "Sign Out",
                    url: '/signout',
                },
            ],

            profiles: [
                { 
                    icon: "mdi-account-supervisor-circle", 
                    text: "Profile",
                    url: '/profile',
                },

                {
                    icon: "mdi-settings",
                    text: "Settings",
                    url: '/settings',
                },

                { 
                    icon: "mdi-exit-to-app", 
                    text: "Sign Out",
                    url: '/signout',
                },
            ],
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],

            breadcrumbItems: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: '#',
                },
                {
                    text: 'Profile',
                    disabled: false,
                    href: '#',
                },
                {
                    text: 'Settings',
                    disabled: true,
                    href: '#',
                },
            ],
            items: [
                {
                    color: '#6A1B9A',
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'Lorem',
                    artist: 'Ipsum',
                },
                {
                    color: '#AD1457',
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'Lorem',
                    artist: 'Ipsum',
                },
                {
                    color: '#1F7087',
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'Lorem',
                    artist: 'Ipsum',
                },
                {
                    color: '#952175',
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'Lorem',
                    artist: 'Ipsum',
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