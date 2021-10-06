import { CoordinateModel } from "./CoordinateModel";

export interface OfficeModel {
  name: string
  slug: string
  location: CoordinateModel
}