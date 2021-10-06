import { CoordinateModel } from "../models/CoordinateModel";
import { DriverModel } from "../models/DriverModel"

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getDrivers(officeLocation: CoordinateModel, count?: number): Promise<DriverModel[]> {
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

  const driversNearLondonOffice = [
    {
      "driver_id": "0-vozntsc4by",
      "location": {
        "latitude": 51.512192325712064,
        "longitude": -0.08240413854333889,
        "bearing": 103
      }
    },
    {
      "driver_id": "1-9k29jys80ju",
      "location": {
        "latitude": 51.510895247522164,
        "longitude": -0.08100901140110656,
        "bearing": 230
      }
    },
    {
      "driver_id": "2-ozymqkzt0sq",
      "location": {
        "latitude": 51.4986624978152,
        "longitude": -0.08285136338669187,
        "bearing": 28
      }
    },
    {
      "driver_id": "3-w3o0ia1dkx9",
      "location": {
        "latitude": 51.49913107433367,
        "longitude": -0.10716388275151553,
        "bearing": 12
      }
    },
    {
      "driver_id": "4-22uxre9bmcv",
      "location": {
        "latitude": 51.503399154258254,
        "longitude": -0.10174807579488047,
        "bearing": 168
      }
    },
    {
      "driver_id": "5-p7wldpfpdcm",
      "location": {
        "latitude": 51.497419886284646,
        "longitude": -0.09027769176943733,
        "bearing": 145
      }
    },
    {
      "driver_id": "6-hejmlu1fu9",
      "location": {
        "latitude": 51.50159387012347,
        "longitude": -0.11258613360809294,
        "bearing": 260
      }
    },
    {
      "driver_id": "7-qd8l8t5ibkd",
      "location": {
        "latitude": 51.508563110609984,
        "longitude": -0.08172786711918799,
        "bearing": 111
      }
    },
    {
      "driver_id": "8-2x2mu6myrkj",
      "location": {
        "latitude": 51.50064821124252,
        "longitude": -0.07817501922966526,
        "bearing": 348
      }
    },
    {
      "driver_id": "9-iz55actbbz",
      "location": {
        "latitude": 51.506294325995796,
        "longitude": -0.07327656698402732,
        "bearing": 117
      }
    }
  ];

  let fetchedDriversData = [];
  // Singapore latitude is 1.28
  // Londong latitude is 51.5
  if (officeLocation.lat < 2) {
    fetchedDriversData = driverNearSingaporeOffice;
  } else {
    fetchedDriversData = driversNearLondonOffice;
  }
  
  if (count) {
    fetchedDriversData = fetchedDriversData.slice(0, count);
  }


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

  // Delay
  await sleep(2000);

  return mapDataToDriverModel(fetchedDriversData);
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