# Splyt Full Stack Interview Task

The task is to create a Typescript SPA using React, as well as a small “backend for frontend” NodeJS API for e.g. validation and error handling, the requirements of the SPA are listed below:

- Feature an interactive map.
- You should centre the map on the location of the nearest Splyt office to the user’s
current location. There should be the ability to manually switch between the office
locations, or return to the nearest.
  - Singapore: (1.285194, 103.8522982)
  - London: (51.5049375, -0.0964509)
- The map should show the most recent locations of taxis in the surrounding area,
you should choose an appropriate refresh interval.
- Feature a UI slider, that enables you to change the number of taxis displayed on
the map. You should choose a sensible lower and upper bound for the range.
- Your solution should include a README, for example explaining how to run the
project.
- You should include unit tests where appropriate.

We are interested in your **preferred approach**, **design patterns** and choice of **third-party
libraries** to achieve this. We will discuss these in the technical interview. Note that we
_**will not** be judging for a "pixel perfect UI"_.

Please submit your entire project for review. Online repository submissions via Gitlab,
Github or BitBucket, etc. are preferred.

In order to find the location of local Taxis, you will need to contact our task API.

You can make a GET request to this endpoint, using the below schema. This endpoint
will return a list of driver locations, nearby to the location you send.

Your implementation should consider how the user will interact with the slider, and how
that affects the performance of your app.

GET 
https://qa-interview-test.splytech.dev/api/drivers

| Parameter | Required | Description                |
| --------- | -------- | ------------------------   |
| latitude  | Y        | Latitude of the location   |
| longitude | Y        | Longitude of the location  |
| count     | N        | Number of cars to retrieve |


