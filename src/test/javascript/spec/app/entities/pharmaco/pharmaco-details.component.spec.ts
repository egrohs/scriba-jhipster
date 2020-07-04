/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import PHARMACODetailComponent from '@/entities/pharmaco/pharmaco-details.vue';
import PHARMACOClass from '@/entities/pharmaco/pharmaco-details.component';
import PHARMACOService from '@/entities/pharmaco/pharmaco.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('PHARMACO Management Detail Component', () => {
    let wrapper: Wrapper<PHARMACOClass>;
    let comp: PHARMACOClass;
    let pHARMACOServiceStub: SinonStubbedInstance<PHARMACOService>;

    beforeEach(() => {
      pHARMACOServiceStub = sinon.createStubInstance<PHARMACOService>(PHARMACOService);

      wrapper = shallowMount<PHARMACOClass>(PHARMACODetailComponent, {
        store,
        localVue,
        provide: { pHARMACOService: () => pHARMACOServiceStub },
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundPHARMACO = { id: 123 };
        pHARMACOServiceStub.find.resolves(foundPHARMACO);

        // WHEN
        comp.retrievePHARMACO(123);
        await comp.$nextTick();

        // THEN
        expect(comp.pHARMACO).toBe(foundPHARMACO);
      });
    });
  });
});
