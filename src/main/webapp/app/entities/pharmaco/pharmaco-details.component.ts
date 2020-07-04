import { Component, Vue, Inject } from 'vue-property-decorator';

import { IPHARMACO } from '@/shared/model/pharmaco.model';
import PHARMACOService from './pharmaco.service';

@Component
export default class PHARMACODetails extends Vue {
  @Inject('pHARMACOService') private pHARMACOService: () => PHARMACOService;
  public pHARMACO: IPHARMACO = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.pHARMACOId) {
        vm.retrievePHARMACO(to.params.pHARMACOId);
      }
    });
  }

  public retrievePHARMACO(pHARMACOId) {
    this.pHARMACOService()
      .find(pHARMACOId)
      .then(res => {
        this.pHARMACO = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
