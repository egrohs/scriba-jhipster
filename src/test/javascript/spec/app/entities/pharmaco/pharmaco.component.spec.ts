/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import PHARMACOComponent from '@/entities/pharmaco/pharmaco.vue';
import PHARMACOClass from '@/entities/pharmaco/pharmaco.component';
import PHARMACOService from '@/entities/pharmaco/pharmaco.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('b-alert', {});
localVue.component('b-badge', {});
localVue.directive('b-modal', {});
localVue.component('b-button', {});
localVue.component('router-link', {});

const bModalStub = {
  render: () => {},
  methods: {
    hide: () => {},
    show: () => {},
  },
};

describe('Component Tests', () => {
  describe('PHARMACO Management Component', () => {
    let wrapper: Wrapper<PHARMACOClass>;
    let comp: PHARMACOClass;
    let pHARMACOServiceStub: SinonStubbedInstance<PHARMACOService>;

    beforeEach(() => {
      pHARMACOServiceStub = sinon.createStubInstance<PHARMACOService>(PHARMACOService);
      pHARMACOServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<PHARMACOClass>(PHARMACOComponent, {
        store,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          pHARMACOService: () => pHARMACOServiceStub,
        },
      });
      comp = wrapper.vm;
    });

    it('Should call load all on init', async () => {
      // GIVEN
      pHARMACOServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllPHARMACOs();
      await comp.$nextTick();

      // THEN
      expect(pHARMACOServiceStub.retrieve.called).toBeTruthy();
      expect(comp.pHARMACOS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      pHARMACOServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removePHARMACO();
      await comp.$nextTick();

      // THEN
      expect(pHARMACOServiceStub.delete.called).toBeTruthy();
      expect(pHARMACOServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
