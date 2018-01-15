import {Sensor} from "./sensor";
export class UserTreatment {
  public email: string;
  public password: string;
  public name: string;
  public phoneNumber: string;
  public emergencyPhone: string;
  public isDoctor: boolean;
  public ownsSensors: Sensor[];
}
