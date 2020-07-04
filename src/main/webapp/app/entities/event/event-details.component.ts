import { Component, Vue, Inject } from 'vue-property-decorator';

import { IEVENT } from '@/shared/model/event.model';
import EVENTService from './event.service';

@Component
export default class EVENTDetails extends Vue {
  @Inject('eVENTService') private eVENTService: () => EVENTService;
  public eVENT: IEVENT = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.eVENTId) {
        vm.retrieveEVENT(to.params.eVENTId);
      }
    });
  }

  public retrieveEVENT(eVENTId) {
    this.eVENTService()
      .find(eVENTId)
      .then(res => {
        this.eVENT = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
