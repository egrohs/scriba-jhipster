import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength, minValue, maxValue } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import parseISO from 'date-fns/parseISO';
import { DATE_TIME_LONG_FORMAT } from '@/shared/date/filters';

import PRESCRIPTIONService from '../prescription/prescription.service';
import { IPRESCRIPTION } from '@/shared/model/prescription.model';

import PATIENTService from '../patient/patient.service';
import { IPATIENT } from '@/shared/model/patient.model';

import AlertService from '@/shared/alert/alert.service';
import { IEVENT, EVENT } from '@/shared/model/event.model';
import EVENTService from './event.service';

const validations: any = {
  eVENT: {
    iDPATIENT: {
      required,
      numeric,
    },
    eVENTDT: {
      required,
    },
    oBS: {},
  },
};

@Component({
  validations,
})
export default class EVENTUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('eVENTService') private eVENTService: () => EVENTService;
  public eVENT: IEVENT = new EVENT();

  @Inject('pRESCRIPTIONService') private pRESCRIPTIONService: () => PRESCRIPTIONService;

  public pRESCRIPTIONS: IPRESCRIPTION[] = [];

  @Inject('pATIENTService') private pATIENTService: () => PATIENTService;

  public pATIENTS: IPATIENT[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.eVENTId) {
        vm.retrieveEVENT(to.params.eVENTId);
      }
      vm.initRelationships();
    });
  }

  created(): void {
    this.currentLanguage = this.$store.getters.currentLanguage;
    this.$store.watch(
      () => this.$store.getters.currentLanguage,
      () => {
        this.currentLanguage = this.$store.getters.currentLanguage;
      }
    );
  }

  public save(): void {
    this.isSaving = true;
    if (this.eVENT.id) {
      this.eVENTService()
        .update(this.eVENT)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A EVENT is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.eVENTService()
        .create(this.eVENT)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A EVENT is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public convertDateTimeFromServer(date: Date): string {
    if (date) {
      return format(date, DATE_TIME_LONG_FORMAT);
    }
    return null;
  }

  public updateInstantField(field, event) {
    if (event.target.value) {
      this.eVENT[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.eVENT[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.eVENT[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.eVENT[field] = null;
    }
  }

  public retrieveEVENT(eVENTId): void {
    this.eVENTService()
      .find(eVENTId)
      .then(res => {
        res.eVENTDT = new Date(res.eVENTDT);
        this.eVENT = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.pRESCRIPTIONService()
      .retrieve()
      .then(res => {
        this.pRESCRIPTIONS = res.data;
      });
    this.pATIENTService()
      .retrieve()
      .then(res => {
        this.pATIENTS = res.data;
      });
  }
}
