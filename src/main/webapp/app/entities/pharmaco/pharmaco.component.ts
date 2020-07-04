import { mixins } from 'vue-class-component';

import { Component, Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IPHARMACO } from '@/shared/model/pharmaco.model';
import AlertMixin from '@/shared/alert/alert.mixin';

import PHARMACOService from './pharmaco.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
export default class PHARMACO extends mixins(AlertMixin) {
  @Inject('pHARMACOService') private pHARMACOService: () => PHARMACOService;
  private removeId: number = null;

  public pHARMACOS: IPHARMACO[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllPHARMACOs();
  }

  public clear(): void {
    this.retrieveAllPHARMACOs();
  }

  public retrieveAllPHARMACOs(): void {
    this.isFetching = true;

    this.pHARMACOService()
      .retrieve()
      .then(
        res => {
          this.pHARMACOS = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IPHARMACO): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removePHARMACO(): void {
    this.pHARMACOService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A PHARMACO is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();
        this.removeId = null;
        this.retrieveAllPHARMACOs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
