import axios from 'axios';

//Give back connector 
export default () =>{
    return axios.create({
        baseURL : `http://localhost:5000`
    });
}