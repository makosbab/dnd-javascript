const express = require('express');
const mongoDb = require('mongodb');
const router = express.Router();

async function loadCreatures(){
    const db = 'dnd';
    const mongoClient = await mongoDb.MongoClient.connect(
        `mongodb://ds123465.mlab.com:23465/${db}`,
        {
            useNewUrlParser: true,
            auth: {
                user: 'robi',
                password: '86makosGuba'
            }
        }
    );
    return mongoClient.db('dnd').collection('creatures');
}

router.get('/', async (req, res)=>{

    const creatures = await loadCreatures();

    var criteria = {
        'name': {'$regex' : /aboleth/, '$options' : 'i'},
        'type' : '',
        'challengeRating': {$gt : 1},
        'size' : 'Óriási'
    };
    res.send(await creatures.find(
        criteria
        ).toArray());

})

module.exports = router;