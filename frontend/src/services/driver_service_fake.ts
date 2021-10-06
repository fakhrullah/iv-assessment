import { DriverModel } from "../models/DriverModel"

export async function getDrivers(): Promise<DriverModel[]> {
  const driverNearSingaporeOffice = [
    {
      "driver_id": "0-sfs2qhlu2w",
      "location": {
        "latitude": 1.2856081043063396,
        "longitude": 103.82566671895567,
        "bearing": 14
      }
    },
    {
      "driver_id": "1-h41navme1c",
      "location": {
        "latitude": 1.2825725146370361,
        "longitude": 103.82209844711643,
        "bearing": 343
      }
    },
    {
      "driver_id": "2-zajphww6w1",
      "location": {
        "latitude": 1.291911844563353,
        "longitude": 103.83695927448251,
        "bearing": 345
      }
    },
    {
      "driver_id": "3-p9cf897pev8",
      "location": {
        "latitude": 1.290323524183153,
        "longitude": 103.8328137143477,
        "bearing": 317
      }
    },
    {
      "driver_id": "4-r8icafh17pr",
      "location": {
        "latitude": 1.2822545341280112,
        "longitude": 103.82667181237599,
        "bearing": 318
      }
    },
    {
      "driver_id": "5-4xo2rjosyce",
      "location": {
        "latitude": 1.2816778069863788,
        "longitude": 103.84917101679488,
        "bearing": 256
      }
    },
    {
      "driver_id": "6-o64ojb6llt",
      "location": {
        "latitude": 1.291635436843172,
        "longitude": 103.8444346863211,
        "bearing": 174
      }
    },
    {
      "driver_id": "7-o979wkw8k3",
      "location": {
        "latitude": 1.2883760496973915,
        "longitude": 103.87046200563958,
        "bearing": 297
      }
    },
    {
      "driver_id": "8-bm341p38hqc",
      "location": {
        "latitude": 1.2854086334458668,
        "longitude": 103.85393641796604,
        "bearing": 109
      }
    },
    {
      "driver_id": "9-xuwonauxc7d",
      "location": {
        "latitude": 1.2814735294560398,
        "longitude": 103.82685624003234,
        "bearing": 38
      }
    }
  ];

  const mapDataToDriverModel = (driversData: any[]): DriverModel[] => {
    return driversData.map((driver) => ({
      id: driver['driver_id'],
      location: {
        lat: driver.location.latitude,
        lng: driver.location.longitude
      },
      bearing: driver.location.bearing
    }))
  }
  return mapDataToDriverModel(driverNearSingaporeOffice);
}

export async function getDriverById(): Promise<DriverModel> {
  return ({
    id: 'vaef90ef',
    location: {
      lat: 1.2856081043063396,
      lng: 103.82566671895567,
    },
    bearing: 14,
  });
}