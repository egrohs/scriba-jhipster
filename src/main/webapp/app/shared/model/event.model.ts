import { IPRESCRIPTION } from '@/shared/model/prescription.model';
import { IPATIENT } from '@/shared/model/patient.model';

export interface IEVENT {
  id?: number;
  iDPATIENT?: number;
  eVENTDT?: Date;
  oBS?: string;
  pRESCRIPTIONS?: IPRESCRIPTION[];
  events?: IPATIENT;
}

export class EVENT implements IEVENT {
  constructor(
    public id?: number,
    public iDPATIENT?: number,
    public eVENTDT?: Date,
    public oBS?: string,
    public pRESCRIPTIONS?: IPRESCRIPTION[],
    public events?: IPATIENT
  ) {}
}
