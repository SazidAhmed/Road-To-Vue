new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
        return {
            name:'',
            email:'',
            password:'',
            password2:'',
            search: '',
            color:'',
            loading: false,
            snackbar: false,
            text: '',
            createDialog:false,
            updateDialog:false,
            deleteDialog: false,
            headers: [
                { text: 'ID', align: 'start', sortable: true, value: 'id'},
                { text: 'Name', align: 'start', sortable: false, value: 'name'},
                { text: 'Email', align: 'start', sortable: true, value: 'email'},
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            users: [],
            category: [],
            actionData:[],
            breadcrumbItems: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: '/#/admin',
                },
                 {
                    text: 'Users',
                    disabled: false,
                    href: '/#/users',
                },
                {
                    text: 'Roles',
                    disabled: false,
                    href: '/#/roles',
                },
                {
                    text: 'Permissions',
                    disabled: true,
                },
            ],
            valid: true,
            titleRules: [],
        }
    },

    mounted() {
        this.getUsers();
        this.getCategory();
    },

    methods:{
        getCategory(){
            fetch('http://localhost:8000/category')
            .then(res => res.json())
            .then((data) => {
                this.category = data;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        getUsers(){
            fetch('http://localhost:8000/users')
            .then(res => res.json())
            .then((data) => {
                this.users = data;
                this.loading = false;
            })
            .catch((error) => {
                console.log(error);
                this.loading = false;
            });
        },
        createBtn() {
            this.createDialog = true;
        },
        createBlogs() {
            this.loading = true;
            if(this.password !== this.password2){
                this.color = 'red';
                this.snackbar = true;
                this.text = "Password was not matched! Try again!";
            }else{
                let formdata = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    id: Math.floor(Math.random() * 10000)
                };
                fetch('http://localhost:8000/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formdata)
                })
                .then(() => {
                    this.color = 'green';
                    this.snackbar = true;
                    this.text = "Record Added Successfully!";
                    this.users.push(formdata)
                    this.name='';
                    this.email='';
                    this.password='';
                    this.createDialog=false;
                    this.loading = false;
                    
                })
                .catch((err) => {
                    console.log(err)
                    this.color = 'red';
                    this.snackbar = true;
                    this.text = "Something is Wrong! Try Again!";
                    this.createDialog=false;
                    this.loading = false;
                });
            }
        },

        editBtn(id) {
            fetch('http://localhost:8000/users/' + id )
            .then(res => res.json())
            .then((data) => {
                this.actionData = data;
                this.updateDialog=true;
                console.log('edit data:',this.actionData);
            })
            .catch((error) => {
                alert("unable to get action data");
            });
        },
        updateBlogs() {
            this.loading = true;
            let formdata = {
                name: this.actionData.name,
                email: this.actionData.email
            };
            fetch('http://localhost:8000/users/'+ this.actionData.id, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formdata)
            })
            .then(() => {
                this.color = 'green';
                this.snackbar = true;
                this.text = "Record Updated Successfully!";
                this.getUsers();
                this.updateDialog=false;
                this.loading = false;
                
            })
            .catch((err) => {
                console.log(err)
                this.color = 'red';
                this.snackbar = true;
                this.text = "Something is Wrong! Try Again!";
                this.updateDialog=false;
                this.loading = false;
            });
        },

        deleteBtn(id) {
            fetch('http://localhost:8000/users/' + id )
            .then(res => res.json())
            .then((data) => {
                this.actionData = data;
                console.log('delete data:',this.actionData);
                this.deleteDialog = true;
            })
            .catch((error) => {
                alert("unable to get action data");
            });
        },
        deleteData(){
            this.loading = true;
            fetch('http://localhost:8000/users/' + this.actionData.id, { method: 'DELETE' })
                .then(() => {
                    this.color = 'green';
                    this.snackbar = true;
                    this.text = "Record Deleted Successfully!";
                    this.users = this.users.filter(user => {
                        return user.id !== this.actionData.id
                    })
                    this.deleteDialog = false;
                    this.loading = false;
                })
                .catch(() => {
                    this.color = 'red';
                    this.snackbar = true;
                    this.text = "Something is Wrong! Try Again!";
                    this.deleteDialog = false;
                    this.loading = false;
                })
        }
    }
  })