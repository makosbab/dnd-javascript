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
    res.send(await creatures.find({name: 'Aboleth'}).toArray());

})

module.exports = router;