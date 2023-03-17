import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  name?: string;
  dayOfBirth?: string;
  gender?: boolean;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
