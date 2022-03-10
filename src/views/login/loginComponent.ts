import { defineComponent } from "vue";

export default defineComponent({
    name: "Login",

    data() {
        return {
           user: '',
           password: '',
        }
    },

    methods: {
        login(){
            const login = this.user;
            const password = this.password;
            console.log(login);
            console.log(password);
            
        }
    }
});