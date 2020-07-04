import { mixins } from 'vue-class-component';

import { Component, Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IPATIENT } from '@/shared/model/patient.model';
import AlertMixin from '@/shared/alert/alert.mixin';

import PATIENTService from './patient.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
export default class PATIENT extends mixins(AlertMixin) {
  @Inject('pATIENTService') private pATIENTService: () => PATIENTService;
  private removeId: number = null;

  public pATIENTS: IPATIENT[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllPATIENTs();
  }

  public clear(): void {
    this.retrieveAllPATIENTs();
  }

  public retrieveAllPATIENTs(): void {
    this.isFetching = true;

    this.pATIENTService()
      .retrieve()
      .then(
        res => {
          this.pATIENTS = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IPATIENT): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removePATIENT(): void {
    this.pATIENTService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A PATIENT is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();
        this.removeId = null;
        this.retrieveAllPATIENTs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
