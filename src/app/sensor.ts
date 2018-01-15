import {Observation} from "./observation";
export class Sensor {
  id: number;
  type: string;
  unit: string;
  regularFrom: string;
  regularTo: string;
  usedInObservations: Observation[];
}
