import { CoordinateModel } from "../models/CoordinateModel";
import { DriverModel } from "../models/DriverModel"

export async function getDrivers(officeLocation: CoordinateModel, count?: number): Promise<DriverModel[]> {

  const queryString = new URLSearchParams();

  queryString.append('latitude', officeLocation.lat.toString());
  queryString.append('longitude', officeLocation.lng.toString());

  if (count) {
    queryString.append('count', count?.toString());
  }

  const getDriversUrl = `${process.env.REACT_APP_BACKEND_API_URL}/drivers?` + queryString;

  const myRequest = new Request(getDriversUrl, {
    method: 'GET',
  });

  const response = await fetch(myRequest);
  const respJson = await response.json();
  const fetchedDriversData = respJson.drivers;

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

  return mapDataToDriverModel(fetchedDriversData);
}

export async function getDriverById(): Promise<DriverModel> {
  throw new Error('Not implement yet');
}