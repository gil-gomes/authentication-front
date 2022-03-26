import { variables } from "../../variables/index";
import axios from "axios";

export default {

     getUsers(){
         const url = `${variables.baseUrl}/users`;
         const tokenJwt = localStorage.getItem('token');

         return axios.get(url,{
             headers: {
                 Authorization: 'Bearer ' + tokenJwt,
             },
         });
     }
}