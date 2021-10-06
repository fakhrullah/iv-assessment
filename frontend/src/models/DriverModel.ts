import { CoordinateModel } from "./CoordinateModel";

export interface DriverModel {
  id: string,
  // Coordinate driver on map in {latitude, longitude}
  location: CoordinateModel,
  // Driver facing angle in clockwise. North: 0 degree, easet: 90 degree, south: 180 deg, west: 270 deg
  bearing: number
}
