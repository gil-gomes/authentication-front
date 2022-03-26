import { defineComponent } from "vue";
import User from "@/services/user/user";
  export default defineComponent({
    name: "HomeView",

    data() {
      return {
        name: 'Gil',
        users: null,
      }
    },

    mounted() {
      
      User.getUsers().then(res => {
        this.users = res.data;
        console.log(this.users);
      }); 
    },
});