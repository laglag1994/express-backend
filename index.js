const express = require('express');
const app = express();
const logger =require('./middleware/logger')

app.set('view engine', 'ejs')



//init middleware
app.use(logger)

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//marina api routes
app.use('/api/marinas', require('./routes/api/marina'))





app.get('/', (req, res) => {
   console.log('hello')
   res.download('index.js')
})




const userRouter= require('./routes/users')

app.use('/users', userRouter)

app.listen(5000)