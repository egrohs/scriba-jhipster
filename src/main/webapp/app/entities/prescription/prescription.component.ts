import { mixins } from 'vue-class-component';

import { Component, Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IPRESCRIPTION } from '@/shared/model/prescription.model';
import AlertMixin from '@/shared/alert/alert.mixin';

import PRESCRIPTIONService from './prescription.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
export default class PRESCRIPTION extends mixins(AlertMixin) {
  @Inject('pRESCRIPTIONService') private pRESCRIPTIONService: () => PRESCRIPTIONService;
  private removeId: number = null;

  public pRESCRIPTIONS: IPRESCRIPTION[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllPRESCRIPTIONs();
  }

  public clear(): void {
    this.retrieveAllPRESCRIPTIONs();
  }

  public retrieveAllPRESCRIPTIONs(): void {
    this.isFetching = true;

    this.pRESCRIPTIONService()
      .retrieve()
      .then(
        res => {
          this.pRESCRIPTIONS = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IPRESCRIPTION): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removePRESCRIPTION(): void {
    this.pRESCRIPTIONService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A PRESCRIPTION is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();
        this.removeId = null;
        this.retrieveAllPRESCRIPTIONs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
