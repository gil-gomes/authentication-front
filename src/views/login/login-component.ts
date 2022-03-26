import { defineComponent } from "vue";
import Auth from "@/services/auth/auth";

export default defineComponent({
    name: "Login",

    data() {
        return {
           user: '',
           password: '',
        }
    },

    methods: {
        async login(){
            const login = this.user;
            const password = this.password;
            return Auth.login(login, password).then( (res: any) => {
                const token = res.data.token;
                localStorage.setItem('token', token);
                this.$router.push('/home');
            }).catch( (err: any) => {
                console.log(err);
            })
        }
    }
});