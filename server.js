const { request, response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'mommas',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffine': true,
        'flavor': 'delicious',
    },

    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 1,
        'caffine': false,
        'flavor': 'unknown',
    },

     'matcha': {
        'type': 'green',
        'origin': 'mommas',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffine': true,
        'flavor': 'delicious',
    },

}
app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName] ){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})
app.listen(process.env.PORT|| PORT,()=>{
    console.log(`The server is running on port ${PORT}!`)
})

app.listen()