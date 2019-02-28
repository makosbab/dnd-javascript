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
    
    // res.send({
    //     message: "hi!"
    // });
    // res.send(await creatures.find(
    //     criteria
    //     ).toArray());

})

// search végpont, amely visszaadja az eredményeket
router.post('/', async (req, res) =>{

    const creatures = await loadCreatures();

    var criteria = {
        //'name': {'$regex' : req.body.name, '$options' : 'i'} || '',
        'type' : req.body.type || ''
        //'challengeRating': {$gt : req.body.challengeRating}
        //'size' : req.body.size || ''
    };




    // res.send({
    //     message: `Your search for ${req.body.name} with type ${req.body.type} was received.`
    // });    
    console.log(criteria)
    res.send(await creatures.find(
        criteria
        ).toArray());
})

module.exports = router;