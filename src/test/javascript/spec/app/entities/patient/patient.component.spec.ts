/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import PATIENTComponent from '@/entities/patient/patient.vue';
import PATIENTClass from '@/entities/patient/patient.component';
import PATIENTService from '@/entities/patient/patient.service';

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
  describe('PATIENT Management Component', () => {
    let wrapper: Wrapper<PATIENTClass>;
    let comp: PATIENTClass;
    let pATIENTServiceStub: SinonStubbedInstance<PATIENTService>;

    beforeEach(() => {
      pATIENTServiceStub = sinon.createStubInstance<PATIENTService>(PATIENTService);
      pATIENTServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<PATIENTClass>(PATIENTComponent, {
        store,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          pATIENTService: () => pATIENTServiceStub,
        },
      });
      comp = wrapper.vm;
    });

    it('Should call load all on init', async () => {
      // GIVEN
      pATIENTServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllPATIENTs();
      await comp.$nextTick();

      // THEN
      expect(pATIENTServiceStub.retrieve.called).toBeTruthy();
      expect(comp.pATIENTS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      pATIENTServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removePATIENT();
      await comp.$nextTick();

      // THEN
      expect(pATIENTServiceStub.delete.called).toBeTruthy();
      expect(pATIENTServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
