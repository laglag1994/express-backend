const express = require('express');
const marina = require('../../Marinas');
const router = express.Router();



//get all marinas
router.get('/api/marinas', (req, res) => {
    res.json(marinas)
})


//get single member

router.get('/:id', (req, res) => {
    
})



module.exports = router;