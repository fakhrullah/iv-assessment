require('dotenv').config();
const fastify = require('fastify')({
  logger: true
})

const {PORT} = process.env;

// Declare a route
fastify.get('/drivers', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(PORT, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})