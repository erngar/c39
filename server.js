const express = require('express')
const app = express() //now app can use all methods in express
const cors = require('cors')
const PORT = 8000

app.use(cors())

//simple object to use for our json response
const rappers  = {

    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa',
        'birthLocation': 'London, England'
},

'chance the rapper': {
    'age': 29,
    'birthName': 'Chacelor',
    'birthLocation': 'Chicago, Illinois'
},

'cap g': {
    'age':40,
    'birthName': 'CAP',
    'birthLocation': 'Atlanta, Georgia'
},

'unknown': {
    'age': 0,
    'birthName': 'rapper not in dataset',
    'birthLocation': 'unknown'

}

}

//serve up a file to make sure all is working

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

//another route
app.get('/api/:name', (request,response) =>{
    console.log(request.params.name);
    const rapperName = request.params.name.toLocaleLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }  
   
})

//tell the server which port to listen from
//use PORT variable instead of port #
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`);
})

