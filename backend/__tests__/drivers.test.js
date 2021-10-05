const axios = require('axios');

const BASE_URL = 'http://localhost:30350'

test('Should return 200 success with array of drivers', async () => {
  const resp = await axios.get(`${BASE_URL}/drivers?latitude=1.285194&longitude=103.8522982`);
  console.log(resp);
  expect(resp.status).toBe(200);
  expect(resp.data.drivers.length).toBeGreaterThanOrEqual(1);
})

test.todo('Should return success with 4 drivers only',)

test.todo('Should return error missing latitude parameter',)

test.todo('Should return error missing longitude parameter',)
