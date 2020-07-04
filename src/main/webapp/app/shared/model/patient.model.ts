import { IEVENT } from '@/shared/model/event.model';

export interface IPATIENT {
  id?: number;
  nAME?: string;
  bIRTHDATE?: Date;
  sEX?: string;
  cPF?: string;
  rG?: string;
  rGRELEASER?: string;
  rESIDENCE?: string;
  nUMBER?: string;
  cOMPLEMENT?: string;
  cITY?: string;
  sTATE?: string;
  zIP?: string;
  mOBILEDDD?: string;
  mOBILENUM?: string;
  eMAIL?: string;
  oCCUPATION?: string;
  rEFERRER?: string;
  oBS?: string;
  nFPAYERNAME?: string;
  nFPAYERCPF?: string;
  aCTIVE?: boolean;
  eVENTS?: IEVENT[];
}

export class PATIENT implements IPATIENT {
  constructor(
    public id?: number,
    public nAME?: string,
    public bIRTHDATE?: Date,
    public sEX?: string,
    public cPF?: string,
    public rG?: string,
    public rGRELEASER?: string,
    public rESIDENCE?: string,
    public nUMBER?: string,
    public cOMPLEMENT?: string,
    public cITY?: string,
    public sTATE?: string,
    public zIP?: string,
    public mOBILEDDD?: string,
    public mOBILENUM?: string,
    public eMAIL?: string,
    public oCCUPATION?: string,
    public rEFERRER?: string,
    public oBS?: string,
    public nFPAYERNAME?: string,
    public nFPAYERCPF?: string,
    public aCTIVE?: boolean,
    public eVENTS?: IEVENT[]
  ) {
    this.aCTIVE = this.aCTIVE || false;
  }
}
