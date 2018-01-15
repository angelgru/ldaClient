import {User} from "./user";
export class TreatmentDetails {
  id: number;
  from: Date;
  to: Date;
  patientRequest: string;
  diagnosis: string;
  forPatient: User;
  hasDoctor: User;
}
