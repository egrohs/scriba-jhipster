import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength, minValue, maxValue } from 'vuelidate/lib/validators';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import parseISO from 'date-fns/parseISO';
import { DATE_TIME_LONG_FORMAT } from '@/shared/date/filters';

import EVENTService from '../event/event.service';
import { IEVENT } from '@/shared/model/event.model';

import AlertService from '@/shared/alert/alert.service';
import { IPATIENT, PATIENT } from '@/shared/model/patient.model';
import PATIENTService from './patient.service';

const validations: any = {
  pATIENT: {
    nAME: {
      required,
    },
    bIRTHDATE: {
      required,
    },
    sEX: {
      required,
    },
    cPF: {
      required,
      minLength: minLength(14),
      maxLength: maxLength(14),
    },
    rG: {
      required,
    },
    rGRELEASER: {},
    rESIDENCE: {
      required,
    },
    nUMBER: {
      required,
    },
    cOMPLEMENT: {},
    cITY: {
      required,
    },
    sTATE: {
      required,
    },
    zIP: {
      required,
    },
    mOBILEDDD: {
      required,
    },
    mOBILENUM: {
      required,
    },
    eMAIL: {
      required,
    },
    oCCUPATION: {},
    rEFERRER: {},
    oBS: {},
    nFPAYERNAME: {
      required,
    },
    nFPAYERCPF: {
      required,
    },
    aCTIVE: {
      required,
    },
  },
};

@Component({
  validations,
})
export default class PATIENTUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('pATIENTService') private pATIENTService: () => PATIENTService;
  public pATIENT: IPATIENT = new PATIENT();

  @Inject('eVENTService') private eVENTService: () => EVENTService;

  public eVENTS: IEVENT[] = [];
  public isSaving = false;
  public currentLanguage = '';

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.pATIENTId) {
        vm.retrievePATIENT(to.params.pATIENTId);
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
    if (this.pATIENT.id) {
      this.pATIENTService()
        .update(this.pATIENT)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A PATIENT is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.pATIENTService()
        .create(this.pATIENT)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A PATIENT is created with identifier ' + param.id;
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
      this.pATIENT[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.pATIENT[field] = null;
    }
  }

  public updateZonedDateTimeField(field, event) {
    if (event.target.value) {
      this.pATIENT[field] = parse(event.target.value, DATE_TIME_LONG_FORMAT, new Date());
    } else {
      this.pATIENT[field] = null;
    }
  }

  public retrievePATIENT(pATIENTId): void {
    this.pATIENTService()
      .find(pATIENTId)
      .then(res => {
        res.bIRTHDATE = new Date(res.bIRTHDATE);
        this.pATIENT = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.eVENTService()
      .retrieve()
      .then(res => {
        this.eVENTS = res.data;
      });
  }
}
