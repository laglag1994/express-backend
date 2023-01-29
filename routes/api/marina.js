const express = require('express');
const marina = require('../../Marinas');
const router = express.Router();
const uuid = require('uuid')


// random marina
router.get('/random', (req, res) => {
    res.json(marina[Math.floor(Math.random()*marina.length)])
})



//get all marinas
router.get('/', (req, res) => {
    res.json(marina)
})


//get single marina

router.get('/:id', (req, res) => {
    const found = marina.some(song =>song.id === parseInt(req.params.id))

    if(found){
        res.json(marina.find(song =>song.id === parseInt(req.params.id)))
    }else{
        res.status(404).json ({msg : `no song with the id of ${req.params.id}`})
    }
})

// add single marina
router.post('/', (req,res)=>{
    const newSong = {
        id:uuid.v4(),
        song:req.body.song,
        lyrics:req.body.lyrics
    }

    marina.push(newSong)
    res.json(marina)
})


module.exports = router;