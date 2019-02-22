import Api from '@/services/Api';

export default {
    searchForCreature(criteria){
        //post to searh endpoint on backend side
        return Api().get('search', criteria)
    }
}