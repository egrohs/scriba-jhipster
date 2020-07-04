import { IPRESCRIPTION } from '@/shared/model/prescription.model';

export interface IPHARMACO {
  id?: number;
  substance?: string;
  commercialName?: string;
  concentration?: number;
  mETRIC?: string;
  units?: string;
  packing?: string;
  pharmacos?: IPRESCRIPTION[];
}

export class PHARMACO implements IPHARMACO {
  constructor(
    public id?: number,
    public substance?: string,
    public commercialName?: string,
    public concentration?: number,
    public mETRIC?: string,
    public units?: string,
    public packing?: string,
    public pharmacos?: IPRESCRIPTION[]
  ) {}
}
