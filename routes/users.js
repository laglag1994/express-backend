
const express =require ('express');
const router = express.router();





router.get('/users', (req, res) => {
    res.send('User List')
 })
 
router.get('/new', (req, res) => {
    res.send('User New Form')
 })
 