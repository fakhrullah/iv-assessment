const { default: axios } = require('axios');

require('dotenv').config();
const fastify = require('fastify')({
  logger: true
})

const {PORT} = process.env;

// Declare a route
fastify.get('/drivers', async (request, reply) => {
  const externalAPI = 'https://qa-interview-test.splytech.dev/api/drivers';

  let errorMessage;
  const { latitude, longitude, count } = request.query;

  // Validation:
  // Latitude & Longitude is required
  if (latitude === undefined) {
    errorMessage = 'Missing latitude. Latitude is required.';
  }

  const resp = await axios.get(`${externalAPI}`, {
    params: {
      latitude,
      longitude,
      count
    }
  })

  if (errorMessage) {
    // When have error
    reply
      .code(400)
      .send(new Error(errorMessage));
  } else {
    reply.send(resp.data);
  }
})

// Run the server!
fastify.listen(PORT, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})