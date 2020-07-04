/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import PHARMACOUpdateComponent from '@/entities/pharmaco/pharmaco-update.vue';
import PHARMACOClass from '@/entities/pharmaco/pharmaco-update.component';
import PHARMACOService from '@/entities/pharmaco/pharmaco.service';

import PRESCRIPTIONService from '@/entities/prescription/prescription.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('PHARMACO Management Update Component', () => {
    let wrapper: Wrapper<PHARMACOClass>;
    let comp: PHARMACOClass;
    let pHARMACOServiceStub: SinonStubbedInstance<PHARMACOService>;

    beforeEach(() => {
      pHARMACOServiceStub = sinon.createStubInstance<PHARMACOService>(PHARMACOService);

      wrapper = shallowMount<PHARMACOClass>(PHARMACOUpdateComponent, {
        store,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          pHARMACOService: () => pHARMACOServiceStub,

          pRESCRIPTIONService: () => new PRESCRIPTIONService(),
        },
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.pHARMACO = entity;
        pHARMACOServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(pHARMACOServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.pHARMACO = entity;
        pHARMACOServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(pHARMACOServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
