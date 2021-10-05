const axios = require('axios');

const BASE_URL = 'http://localhost:30350'

test('Should return 200 success with array of drivers', async () => {
  const resp = await axios.get(`${BASE_URL}/drivers?latitude=1.285194&longitude=103.8522982`);

  expect(resp.status).toBe(200);
  expect(resp.data.drivers.length).toBeGreaterThanOrEqual(1);
})

test('Should return success with 4 drivers only', async () => {
  const resp = await axios.get(`${BASE_URL}/drivers?latitude=1.285194&longitude=103.8522982&count=4`);

  expect(resp.status).toEqual(200);
  expect(resp.data.drivers.length).toEqual(4);
})

test.todo('Should return error missing latitude parameter',)

test.todo('Should return error missing longitude parameter',)
