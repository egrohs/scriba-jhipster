/* tslint:disable max-line-length */
import axios from 'axios';
import { format } from 'date-fns';

import * as config from '@/shared/config/config';
import { DATE_TIME_FORMAT } from '@/shared/date/filters';
import PRESCRIPTIONService from '@/entities/prescription/prescription.service';
import { PRESCRIPTION } from '@/shared/model/prescription.model';

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
  describe('PRESCRIPTION Service', () => {
    let service: PRESCRIPTIONService;
    let elemDefault;
    let currentDate: Date;
    beforeEach(() => {
      service = new PRESCRIPTIONService();
      currentDate = new Date();

      elemDefault = new PRESCRIPTION(0, currentDate, currentDate, 0, 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', async () => {
        const returnedFromService = Object.assign(
          {
            dATAIN: format(currentDate, DATE_TIME_FORMAT),
            dATAOUT: format(currentDate, DATE_TIME_FORMAT),
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

      it('should create a PRESCRIPTION', async () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            dATAIN: format(currentDate, DATE_TIME_FORMAT),
            dATAOUT: format(currentDate, DATE_TIME_FORMAT),
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            dATAIN: currentDate,
            dATAOUT: currentDate,
          },
          returnedFromService
        );

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnedFromService }));
        return service.create({}).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should not create a PRESCRIPTION', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject(error));

        return service
          .create({})
          .then()
          .catch(err => {
            expect(err).toMatchObject(error);
          });
      });

      it('should update a PRESCRIPTION', async () => {
        const returnedFromService = Object.assign(
          {
            dATAIN: format(currentDate, DATE_TIME_FORMAT),
            dATAOUT: format(currentDate, DATE_TIME_FORMAT),
            qNT: 1,
            oBS: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            dATAIN: currentDate,
            dATAOUT: currentDate,
          },
          returnedFromService
        );
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: returnedFromService }));

        return service.update(expected).then(res => {
          expect(res).toMatchObject(expected);
        });
      });

      it('should not update a PRESCRIPTION', async () => {
        mockedAxios.put.mockReturnValue(Promise.reject(error));

        return service
          .update({})
          .then()
          .catch(err => {
            expect(err).toMatchObject(error);
          });
      });

      it('should return a list of PRESCRIPTION', async () => {
        const returnedFromService = Object.assign(
          {
            dATAIN: format(currentDate, DATE_TIME_FORMAT),
            dATAOUT: format(currentDate, DATE_TIME_FORMAT),
            qNT: 1,
            oBS: 'BBBBBB',
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            dATAIN: currentDate,
            dATAOUT: currentDate,
          },
          returnedFromService
        );
        mockedAxios.get.mockReturnValue(Promise.resolve([returnedFromService]));
        return service.retrieve().then(res => {
          expect(res).toContainEqual(expected);
        });
      });

      it('should not return a list of PRESCRIPTION', async () => {
        mockedAxios.get.mockReturnValue(Promise.reject(error));

        return service
          .retrieve()
          .then()
          .catch(err => {
            expect(err).toMatchObject(error);
          });
      });

      it('should delete a PRESCRIPTION', async () => {
        mockedAxios.delete.mockReturnValue(Promise.resolve({ ok: true }));
        return service.delete(123).then(res => {
          expect(res.ok).toBeTruthy();
        });
      });

      it('should not delete a PRESCRIPTION', async () => {
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
