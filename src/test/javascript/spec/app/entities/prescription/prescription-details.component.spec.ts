/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import PRESCRIPTIONDetailComponent from '@/entities/prescription/prescription-details.vue';
import PRESCRIPTIONClass from '@/entities/prescription/prescription-details.component';
import PRESCRIPTIONService from '@/entities/prescription/prescription.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('PRESCRIPTION Management Detail Component', () => {
    let wrapper: Wrapper<PRESCRIPTIONClass>;
    let comp: PRESCRIPTIONClass;
    let pRESCRIPTIONServiceStub: SinonStubbedInstance<PRESCRIPTIONService>;

    beforeEach(() => {
      pRESCRIPTIONServiceStub = sinon.createStubInstance<PRESCRIPTIONService>(PRESCRIPTIONService);

      wrapper = shallowMount<PRESCRIPTIONClass>(PRESCRIPTIONDetailComponent, {
        store,
        localVue,
        provide: { pRESCRIPTIONService: () => pRESCRIPTIONServiceStub },
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundPRESCRIPTION = { id: 123 };
        pRESCRIPTIONServiceStub.find.resolves(foundPRESCRIPTION);

        // WHEN
        comp.retrievePRESCRIPTION(123);
        await comp.$nextTick();

        // THEN
        expect(comp.pRESCRIPTION).toBe(foundPRESCRIPTION);
      });
    });
  });
});
