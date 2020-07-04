/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import PATIENTDetailComponent from '@/entities/patient/patient-details.vue';
import PATIENTClass from '@/entities/patient/patient-details.component';
import PATIENTService from '@/entities/patient/patient.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('PATIENT Management Detail Component', () => {
    let wrapper: Wrapper<PATIENTClass>;
    let comp: PATIENTClass;
    let pATIENTServiceStub: SinonStubbedInstance<PATIENTService>;

    beforeEach(() => {
      pATIENTServiceStub = sinon.createStubInstance<PATIENTService>(PATIENTService);

      wrapper = shallowMount<PATIENTClass>(PATIENTDetailComponent, {
        store,
        localVue,
        provide: { pATIENTService: () => pATIENTServiceStub },
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundPATIENT = { id: 123 };
        pATIENTServiceStub.find.resolves(foundPATIENT);

        // WHEN
        comp.retrievePATIENT(123);
        await comp.$nextTick();

        // THEN
        expect(comp.pATIENT).toBe(foundPATIENT);
      });
    });
  });
});
