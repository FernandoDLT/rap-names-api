const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
   '21 savage': {
      'age': 29,
      'birthName': 'Sheyaa Bin Abraham-Joseph',
      'birthLocation': 'London, England'
   },
   'ice cube': {
      'age': 54,
      'birthName': 'O\'Shea Jackson',
      'birthLocation': 'The CPT'
   },
   'unknown': {
      'age': 'Who knows',
      'birthName': 'unknown',
      'birthLocation': 'unknown'
   }
}
app.get('/', (request, response) => {
   response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
   const rapperName = request.params.name.toLowerCase()

   if (rappers[rapperName]) {
      response.json(rappers[rapperName])
   } else {
      response.json(rappers['unknown'])
   }
})

app.listen(PORT, () => {
   console.log(`The server is now running on port ${PORT}! Go catch it!`)
})