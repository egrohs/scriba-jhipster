import { IPHARMACO } from '@/shared/model/pharmaco.model';
import { IEVENT } from '@/shared/model/event.model';

export interface IPRESCRIPTION {
  id?: number;
  dATAIN?: Date;
  dATAOUT?: Date;
  qNT?: number;
  oBS?: string;
  pHARMACO?: IPHARMACO;
  prescriptions?: IEVENT;
}

export class PRESCRIPTION implements IPRESCRIPTION {
  constructor(
    public id?: number,
    public dATAIN?: Date,
    public dATAOUT?: Date,
    public qNT?: number,
    public oBS?: string,
    public pHARMACO?: IPHARMACO,
    public prescriptions?: IEVENT
  ) {}
}
