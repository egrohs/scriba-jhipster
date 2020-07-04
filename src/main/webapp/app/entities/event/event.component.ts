import { mixins } from 'vue-class-component';

import { Component, Vue, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IEVENT } from '@/shared/model/event.model';
import AlertMixin from '@/shared/alert/alert.mixin';

import EVENTService from './event.service';

@Component({
  mixins: [Vue2Filters.mixin],
})
export default class EVENT extends mixins(AlertMixin) {
  @Inject('eVENTService') private eVENTService: () => EVENTService;
  private removeId: number = null;

  public eVENTS: IEVENT[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllEVENTs();
  }

  public clear(): void {
    this.retrieveAllEVENTs();
  }

  public retrieveAllEVENTs(): void {
    this.isFetching = true;

    this.eVENTService()
      .retrieve()
      .then(
        res => {
          this.eVENTS = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IEVENT): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removeEVENT(): void {
    this.eVENTService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A EVENT is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();
        this.removeId = null;
        this.retrieveAllEVENTs();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
