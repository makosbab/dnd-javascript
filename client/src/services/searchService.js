import Api from '@/services/Api';

export default {
    register(credentials){
        //post to searh endpoint on backend side
        return Api.post('api/search', searchEntry)
    }
}