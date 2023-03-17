import {Location} from "./location";
import {CoachType} from "./coach-type";

export interface Coach {
  id?: number;
  coachType?: CoachType;
  companyName?: string;
  departure?: Location;
  destination?: Location;
  phoneNumber?: string;
  email?: string;
  departureTime?: string;
  destinationTime?: string;
}
