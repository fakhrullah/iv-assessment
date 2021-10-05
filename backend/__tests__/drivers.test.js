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

test('Should return error missing latitude parameter', async () => {
  expect.assertions(2);
  try {
    const resp = await axios.get(`${BASE_URL}/drivers?longitude=103.8522982&count=4`);

  } catch (e) {
    const errResp = e.response;
    
    expect(errResp.status).toEqual(400);
    expect(errResp.data.message).toMatch(/latitude is required/i);
  }
})

test('Should return error missing longitude parameter', async () => {
  expect.assertions(2);
  try {
    const resp = await axios.get(`${BASE_URL}/drivers?latitude=1.285194`);
    
  } catch (e) {
   const errResp = e.response;
   
   expect(errResp.status).toBe(400);
   expect(errResp.data.message).toMatch(/Longitude is required/)
  }
})

test('Should return error missing both latitude & longitude parameter', async () => {
  expect.assertions(2);
  try {
    const resp = await axios.get(`${BASE_URL}/drivers?count=6`);

  } catch (e) {
    const errResp = e.response;
    
    expect(errResp.status).toEqual(400);
    expect(errResp.data.message).toMatch(/longitude & latitude is required/i);
  }
})
