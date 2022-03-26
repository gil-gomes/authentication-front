import { variables } from "../../variables/index";
import axios from "axios";

export default {

    login(login: string, password:string): any{
        const url = `${variables.baseUrl}/auth/login`;
        
        return axios.post(url, {email: login, password: password});
    }
}