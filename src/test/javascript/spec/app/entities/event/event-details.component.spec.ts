/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import EVENTDetailComponent from '@/entities/event/event-details.vue';
import EVENTClass from '@/entities/event/event-details.component';
import EVENTService from '@/entities/event/event.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('EVENT Management Detail Component', () => {
    let wrapper: Wrapper<EVENTClass>;
    let comp: EVENTClass;
    let eVENTServiceStub: SinonStubbedInstance<EVENTService>;

    beforeEach(() => {
      eVENTServiceStub = sinon.createStubInstance<EVENTService>(EVENTService);

      wrapper = shallowMount<EVENTClass>(EVENTDetailComponent, { store, localVue, provide: { eVENTService: () => eVENTServiceStub } });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundEVENT = { id: 123 };
        eVENTServiceStub.find.resolves(foundEVENT);

        // WHEN
        comp.retrieveEVENT(123);
        await comp.$nextTick();

        // THEN
        expect(comp.eVENT).toBe(foundEVENT);
      });
    });
  });
});
