import { Component, Vue, Inject } from 'vue-property-decorator';

import { IPATIENT } from '@/shared/model/patient.model';
import PATIENTService from './patient.service';

@Component
export default class PATIENTDetails extends Vue {
  @Inject('pATIENTService') private pATIENTService: () => PATIENTService;
  public pATIENT: IPATIENT = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.pATIENTId) {
        vm.retrievePATIENT(to.params.pATIENTId);
      }
    });
  }

  public retrievePATIENT(pATIENTId) {
    this.pATIENTService()
      .find(pATIENTId)
      .then(res => {
        this.pATIENT = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
