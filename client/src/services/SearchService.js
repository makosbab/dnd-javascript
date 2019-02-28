// A search endpoint-ot fogja érinteni
import Api from '@/services/Api';


// Exportálunk egy objektumot mely tartalmaz egy kereső függvényt
export default {
    searchCreatures(criteria){
        //post to searh endpoint on backend side
        return Api().post('api/search', criteria)
    }
}

// SearchService.searchCreatures(criteria)