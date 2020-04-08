const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const fileSystem = require('fs')
const path = require('path')
const filePath = '../store/initial_data.json'
const initialData = require(filePath)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // calling middleware providing functionnality
  // before handling request
  app.use(bodyParser.json())

  app.get('/api/posts', function (request, response) {
    return response.json({
      posts: 'Just some testing data'
    })
  })

  app.post('/api/posts', function (request, response) {
    const data = request.body
    initialData.push(post)

    fs.writeFile(
      path.join(__dirname, filePath),
      JSON.stringify(initialData, nul, 2),
      function(error) {
        if (error) {
          return response.status(422).send(error)
        }
        return response.json('File successfully updated')
      })


    return response.json({
      data
    })
  })

  app.patch('/api/posts/:id', function (request, response) {
    const id = request.params.id
    return response.json({
      posts: 'Data updated ' + id
    })
  })

  app.delete('/api/posts/:id', function (request, response) {
    const id = request.params.id
    return response.json({
      posts: 'Data deleted ' + id
    })
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
