import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength, minValue, maxValue } from 'vuelidate/lib/validators';

import PRESCRIPTIONService from '../prescription/prescription.service';
import { IPRESCRIPTION } from '@/shared/model/prescription.model';

import AlertService from '@/shared/alert/alert.service';
import { IPHARMACO, PHARMACO } from '@/shared/model/pharmaco.model';
import PHARMACOService from './pharmaco.service';

const validations: any = {
  pHARMACO: {
    substance: {},
    commercialName: {},
    concentration: {},
    mETRIC: {},
    units: {},
    packing: {},
  },
};

@Component({
  validations,
})
export default class PHARMACOUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('pHARMACOService') private pHARMACOService: () => PHARMACOService;
  public pHARMACO: IPHARMACO = new PHARMACO();

  @Inject('pRESCRIPTIONService') private pRESCRIPTIONService: () => PRESCRIPTIONService;

  public pRESCRIPTIONS: IPRESCRIPTION[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.pHARMACOId) {
        vm.retrievePHARMACO(to.params.pHARMACOId);
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
    if (this.pHARMACO.id) {
      this.pHARMACOService()
        .update(this.pHARMACO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A PHARMACO is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.pHARMACOService()
        .create(this.pHARMACO)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A PHARMACO is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrievePHARMACO(pHARMACOId): void {
    this.pHARMACOService()
      .find(pHARMACOId)
      .then(res => {
        this.pHARMACO = res;
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
  }
}
