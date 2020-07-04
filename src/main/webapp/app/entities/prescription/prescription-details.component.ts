import { Component, Vue, Inject } from 'vue-property-decorator';

import { IPRESCRIPTION } from '@/shared/model/prescription.model';
import PRESCRIPTIONService from './prescription.service';

@Component
export default class PRESCRIPTIONDetails extends Vue {
  @Inject('pRESCRIPTIONService') private pRESCRIPTIONService: () => PRESCRIPTIONService;
  public pRESCRIPTION: IPRESCRIPTION = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.pRESCRIPTIONId) {
        vm.retrievePRESCRIPTION(to.params.pRESCRIPTIONId);
      }
    });
  }

  public retrievePRESCRIPTION(pRESCRIPTIONId) {
    this.pRESCRIPTIONService()
      .find(pRESCRIPTIONId)
      .then(res => {
        this.pRESCRIPTION = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
