/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_TIME_FORMAT } from '@/shared/date/filters';
import PATIENTService from '@/entities/patient/patient.service';
import { PATIENT } from '@/shared/model/patient.model';

const mockedAxios: any = axios;
const error = {
  response: {
    status: null,
    data: {
      type: null,
    },
  },
};

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}));

describe('Service Tests', () => {
  describe('PATIENT Service', () => {
    let service: PATIENTService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new PATIENTService();
      currentDate = new Date();

      elemDefault = new PATIENT(
        0,
        'AAAAAAA',
        currentDate,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        false
      );
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign(
          {
            bIRTHDATE: format(currentDate, DATE_TIME_FORMAT),
          },
          elemDefault
        );
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.find(123).then(res => {
          expect(res).toMatchObject(elemDefault);
        });
      });

      it('should not find an element', async () => {
        mockedAxios.get.mockReturnValue(Promise.reject(error));
        return service
          .find(123)
          .then()
          .catch(err => {
            expect(err).toMatchObject(error);
          });
      });

      it('should create a PATIENT', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            bIRTHDATE: format(currentDate, DATE_TIME_FORMAT),
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            bIRTHDATE: currentDate,
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should not create a PATIENT', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject(error));

        return service
          .create({})
          .then()
          .catch(err => {
            expect(err).toMatchObject(error);
          });
      });

      it('should update a PATIENT', async () => {
        const returnedFromService = Object.assign(
          {
            nAME: 'BBBBBB',
            bIRTHDATE: format(currentDate, DATE_TIME_FORMAT),
            sEX: 'BBBBBB',
            cPF: 'BBBBBB',
            rG: 'BBBBBB',
            rGRELEASER: 'BBBBBB',
            rESIDENCE: 'BBBBBB',
            nUMBER: 'BBBBBB',
            cOMPLEMENT: 'BBBBBB',
            cITY: 'BBBBBB',
            sTATE: 'BBBBBB',
            zIP: 'BBBBBB',
            mOBILEDDD: 'BBBBBB',
            mOBILENUM: 'BBBBBB',
            eMAIL: 'BBBBBB',
            oCCUPATION: 'BBBBBB',
            rEFERRER: 'BBBBBB',
            oBS: 'BBBBBB',
            nFPAYERNAME: 'BBBBBB',
            nFPAYERCPF: 'BBBBBB',
            aCTIVE: true,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            bIRTHDATE: currentDate,
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should not update a PATIENT', async () => {
        mockedAxios.put.mockReturnValue(Promise.reject(error));

        return service
          .update({})
          .then()
          .catch(err => {
            expect(err).toMatchObject(error);
          });
      });

      it('should return a list of PATIENT', async () => {
        const returnedFromService = Object.assign(
          {
            nAME: 'BBBBBB',
            bIRTHDATE: format(currentDate, DATE_TIME_FORMAT),
            sEX: 'BBBBBB',
            cPF: 'BBBBBB',
            rG: 'BBBBBB',
            rGRELEASER: 'BBBBBB',
            rESIDENCE: 'BBBBBB',
            nUMBER: 'BBBBBB',
            cOMPLEMENT: 'BBBBBB',
            cITY: 'BBBBBB',
            sTATE: 'BBBBBB',
            zIP: 'BBBBBB',
            mOBILEDDD: 'BBBBBB',
            mOBILENUM: 'BBBBBB',
            eMAIL: 'BBBBBB',
            oCCUPATION: 'BBBBBB',
            rEFERRER: 'BBBBBB',
            oBS: 'BBBBBB',
            nFPAYERNAME: 'BBBBBB',
            nFPAYERCPF: 'BBBBBB',
            aCTIVE: true,
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            bIRTHDATE: currentDate,
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve().then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should not return a list of PATIENT', async () => {
        mockedAxios.get.mockReturnValue(Promise.reject(error));

        return service
          .retrieve()
          .then()
          .catch(err => {
            expect(err).toMatchObject(error);
          });
      });

      it('should delete a PATIENT', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });

      it('should not delete a PATIENT', async () => {
        mockedAxios.delete.mockReturnValue(Promise.reject(error));

        return service
          .delete(123)
          .then()
          .catch(err => {
            expect(err).toMatchObject(error);
          });
      });
    });
  });
});
