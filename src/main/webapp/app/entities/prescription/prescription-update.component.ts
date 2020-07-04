import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength, minValue, maxValue } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import parseISO from 'date-fns/parseISO';
import { DATE_TIME_LONG_FORMAT } from '@/shared/date/filters';

import PHARMACOService from '../pharmaco/pharmaco.service';
import { IPHARMACO } from '@/shared/model/pharmaco.model';

import EVENTService from '../event/event.service';
import { IEVENT } from '@/shared/model/event.model';

import AlertService from '@/shared/alert/alert.service';
import { IPRESCRIPTION, PRESCRIPTION } from '@/shared/model/prescription.model';
import PRESCRIPTIONService from './prescription.service';

const validations: any = {
  pRESCRIPTION: {
    dATAIN: {},
    dATAOUT: {},
    qNT: {},
    oBS: {},
  },
};

@Component({
  validations,
})
export default class PRESCRIPTIONUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('pRESCRIPTIONService') private pRESCRIPTIONService: () => PRESCRIPTIONService;
  public pRESCRIPTION: IPRESCRIPTION = new PRESCRIPTION();

  @Inject('pHARMACOService') private pHARMACOService: () => PHARMACOService;

  public pHARMACOS: IPHARMACO[] = [];

  @Inject('eVENTService') private eVENTService: () => EVENTService;

  public eVENTS: IEVENT[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.pRESCRIPTIONId) {
        vm.retrievePRESCRIPTION(to.params.pRESCRIPTIONId);
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
    if (this.pRESCRIPTION.id) {
      this.pRESCRIPTIONService()
        .update(this.pRESCRIPTION)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A PRESCRIPTION is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.pRESCRIPTIONService()
        .create(this.pRESCRIPTION)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A PRESCRIPTION is created with identifier ' + param.id;
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
      this.pRESCRIPTION[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.pRESCRIPTION[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.pRESCRIPTION[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.pRESCRIPTION[field] = null;
    }
  }

  public retrievePRESCRIPTION(pRESCRIPTIONId): void {
    this.pRESCRIPTIONService()
      .find(pRESCRIPTIONId)
      .then(res => {
        res.dATAIN = new Date(res.dATAIN);
        res.dATAOUT = new Date(res.dATAOUT);
        this.pRESCRIPTION = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.pHARMACOService()
      .retrieve()
      .then(res => {
        this.pHARMACOS = res.data;
      });
    this.eVENTService()
      .retrieve()
      .then(res => {
        this.eVENTS = res.data;
      });
  }
}
