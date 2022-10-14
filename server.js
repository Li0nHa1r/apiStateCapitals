const express = require('express')
const app = express()
const PORT = 8000

const states = {
    'texas': {
        'capitalCity': 'Austin',
        'population': '964,254'
    },
    'alabama':{
        'capitalCity': 'Montgomery',
        'population': 'unknown'
    },    
    'alaska':{
        'capitalCity': 'Juneau',
        'population': 'unknown'
    },    
    'arkansas':{
        'capitalCity': 'Little Rock',
        'population': 'unknown'
    },    
    'california':{
        'capitalCity': 'Sacramento',
        'population': Number('508,529')
    },    
    'colorado':{
        'capitalCity': 'Denver',
        'population': '716,492'
    },    
    'connecticut':{
        'capitalCity': 'Hartford',
        'population': 'unknown'
    },    
    'delaware':{
        'capitalCity': 'Dover',
        'population': 'unknown'
    },    
    'florida':{
        'capitalCity': 'Tallahassee',
        'population': 'unknown'
    },    
    'georgia':{
        'capitalCity': 'Atlanta',
        'population': '498,044'
    },    
    'hawaii':{
        'capitalCity': 'Honolulu',
        'population': 'unknown'
    },
    'idaho':{
        'capitalCity': 'Boise',
        'population': 'unknown'
    },
    'illinois':{
        'capitalCity': 'Springfield',
        'population': 'unknown'
    },
    'indiana':{
        'capitalCity': 'Indianapolis',
        'population': '867,125'
    },
    'iowa':{
        'capitalCity': 'Des Moines',
        'population': 'unknown'
    },
    'kansas':{
        'capitalCity': 'Topeka',
        'population': 'unknown'
    },
    'kentucky':{
        'capitalCity': 'Frankfurt',
        'population': 'unknown'
    },
    'louisiana':{
        'capitalCity': 'Baton Rouge',
        'population': 'unknown'
    },
    'maine':{
        'capitalCity': 'Augusta',
        'population': 'unknown'
    },
    'maryland':{
        'capitalCity': 'Annapolis',
        'population': 'unknown'
    },
    'massachusetts':{
        'capitalCity': 'Boston',
        'population': '694,583'
    },
    'michigan':{
        'capitalCity': 'Lansing',
        'population': 'unknown'
    },
    'minnesota':{
        'capitalCity': 'St. Paul',
        'population': 'unknown'
    },
    'mississippi':{
        'capitalCity': 'Jackson',
        'population': 'unknown'
    },
    'missouri':{
        'capitalCity': 'Jefferson City',
        'population': 'unknown'
    },
    'montana':{
        'capitalCity': 'Helena',
        'population': 'unknown'
    },
    'nebraska':{
        'capitalCity': 'Lincoln',
        'population': 'unknown'
    },
    'nevada':{
        'capitalCity': 'Carson City',
        'population': 'unknown'
    },
    'new hampshire':{
        'capitalCity': 'Concord',
        'population': 'unknown'
    },
    'new jersey':{
        'capitalCity': 'Trenton',
        'population': 'unknown'
    },
    'new mexico':{
        'capitalCity': 'Santa Fe',
        'population': 'unknown'
    },
    'new york':{
        'capitalCity': 'Albany',
        'population': 'unknown'
    },
    'north carolina':{
        'capitalCity': 'Raleigh',
        'population': 'unknown'
    },
    'north dakota':{
        'capitalCity': 'Bismarck',
        'population': 'unknown'
    },
    'ohio':{
        'capitalCity': 'Columbus',
        'population': 'unknown'
    },
    'oklahoma':{
        'capitalCity': 'Oklahoma City',
        'population': 'unknown'
    },
    'oregon':{
        'capitalCity': 'Salem',
        'population': 'unknown'
    },
    'pennsylvania':{
        'capitalCity': 'Harrisburg',
        'population': 'unknown'
    },
    'rhode island':{
        'capitalCity': 'Providence',
        'population': 'unknown'
    },
    'south carolina':{
        'capitalCity': 'Columbia',
        'population': 'unknown'
    },
    'south dakota':{
        'capitalCity': 'Pierre',
        'population': 'unknown'
    },
    'tennessee':{
        'capitalCity': 'Nashville',
        'population': 'unknown'
    },
    'utah':{
        'capitalCity': 'Salt Lake City',
        'population': 'unknown'
    },
    'vermont':{
        'capitalCity': 'Montpelier',
        'population': 'unknown'
    },
    'virginia':{
        'capitalCity': 'Richmond',
        'population': 'unknown'
    },
    'washington':{
        'capitalCity': 'Olympia',
        'population': 'unknown'
    },
    'west virginia':{
        'capitalCity': 'Charleston',
        'population': 'unknown'
    },
    'wisconsin':{
        'capitalCity': 'Madison',
        'population': 'unknown'
    },
    'wyoming':{
        'capitalCity': 'Cheyenne',
        'population': 'unknown'
    },
}


app.get('/', (_request, response) => {
    response.sendFile(__dirname + '/index.html')
})

//app.get('/api',(request, response)=>{
//    response.json(states)
//})

app.get('/api/:name',(request,response)=>{
    const stateName = request.params.name.toLowerCase()
    //console.log(states[stateName])
    if(states[stateName]){
        response.json(states[stateName])
    }else{
        response.json('unknown')
    }    
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`The server is now running on port ${PORT}!`)
})