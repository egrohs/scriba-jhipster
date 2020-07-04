/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import EVENTComponent from '@/entities/event/event.vue';
import EVENTClass from '@/entities/event/event.component';
import EVENTService from '@/entities/event/event.service';

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
  describe('EVENT Management Component', () => {
    let wrapper: Wrapper<EVENTClass>;
    let comp: EVENTClass;
    let eVENTServiceStub: SinonStubbedInstance<EVENTService>;

    beforeEach(() => {
      eVENTServiceStub = sinon.createStubInstance<EVENTService>(EVENTService);
      eVENTServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<EVENTClass>(EVENTComponent, {
        store,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          eVENTService: () => eVENTServiceStub,
        },
      });
      comp = wrapper.vm;
    });

    it('Should call load all on init', async () => {
      // GIVEN
      eVENTServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllEVENTs();
      await comp.$nextTick();

      // THEN
      expect(eVENTServiceStub.retrieve.called).toBeTruthy();
      expect(comp.eVENTS[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      eVENTServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeEVENT();
      await comp.$nextTick();

      // THEN
      expect(eVENTServiceStub.delete.called).toBeTruthy();
      expect(eVENTServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
