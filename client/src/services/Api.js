import axios from 'axios';

// Axios konnektor, amely csatlakozik a backendhez a baseURL-en keresztül
export default () =>{
    return axios.create({
        baseURL : `http://localhost:5000`
    });
}