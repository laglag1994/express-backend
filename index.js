const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
   console.log('hello')
   res.render('index', { text: "جعلها تجلس على وجهي" })
})

const userRouter= require('./routes/users')

app.use('./users', userRouter)

app.listen(5000)