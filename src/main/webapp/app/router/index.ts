import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
]);
import Router from 'vue-router';
import { Authority } from '@/shared/security/authority';
const Home = () => import('../core/home/home.vue');
const Error = () => import('../core/error/error.vue');
const Register = () => import('../account/register/register.vue');
const Activate = () => import('../account/activate/activate.vue');
const ResetPasswordInit = () => import('../account/reset-password/init/reset-password-init.vue');
const ResetPasswordFinish = () => import('../account/reset-password/finish/reset-password-finish.vue');
const ChangePassword = () => import('../account/change-password/change-password.vue');
const Settings = () => import('../account/settings/settings.vue');
const JhiUserManagementComponent = () => import('../admin/user-management/user-management.vue');
const JhiUserManagementViewComponent = () => import('../admin/user-management/user-management-view.vue');
const JhiUserManagementEditComponent = () => import('../admin/user-management/user-management-edit.vue');
const JhiConfigurationComponent = () => import('../admin/configuration/configuration.vue');
const JhiDocsComponent = () => import('../admin/docs/docs.vue');
const JhiHealthComponent = () => import('../admin/health/health.vue');
const JhiLogsComponent = () => import('../admin/logs/logs.vue');
const JhiAuditsComponent = () => import('../admin/audits/audits.vue');
const JhiMetricsComponent = () => import('../admin/metrics/metrics.vue');
/* tslint:disable */
// prettier-ignore
const PATIENT = () => import('../entities/patient/patient.vue');
// prettier-ignore
const PATIENTUpdate = () => import('../entities/patient/patient-update.vue');
// prettier-ignore
const PATIENTDetails = () => import('../entities/patient/patient-details.vue');
// prettier-ignore
const EVENT = () => import('../entities/event/event.vue');
// prettier-ignore
const EVENTUpdate = () => import('../entities/event/event-update.vue');
// prettier-ignore
const EVENTDetails = () => import('../entities/event/event-details.vue');
// prettier-ignore
const PRESCRIPTION = () => import('../entities/prescription/prescription.vue');
// prettier-ignore
const PRESCRIPTIONUpdate = () => import('../entities/prescription/prescription-update.vue');
// prettier-ignore
const PRESCRIPTIONDetails = () => import('../entities/prescription/prescription-details.vue');
// prettier-ignore
const PHARMACO = () => import('../entities/pharmaco/pharmaco.vue');
// prettier-ignore
const PHARMACOUpdate = () => import('../entities/pharmaco/pharmaco-update.vue');
// prettier-ignore
const PHARMACODetails = () => import('../entities/pharmaco/pharmaco-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

Vue.use(Router);

// prettier-ignore
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/account/activate',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/account/reset/request',
      name: 'ResetPasswordInit',
      component: ResetPasswordInit
    },
    {
      path: '/account/reset/finish',
      name: 'ResetPasswordFinish',
      component: ResetPasswordFinish
    },
    {
      path: '/account/password',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/account/settings',
      name: 'Settings',
      component: Settings,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/admin/user-management',
      name: 'JhiUser',
      component: JhiUserManagementComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/user-management/new',
      name: 'JhiUserCreate',
      component: JhiUserManagementEditComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/user-management/:userId/edit',
      name: 'JhiUserEdit',
      component: JhiUserManagementEditComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/user-management/:userId/view',
      name: 'JhiUserView',
      component: JhiUserManagementViewComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/docs',
      name: 'JhiDocsComponent',
      component: JhiDocsComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/audits',
      name: 'JhiAuditsComponent',
      component: JhiAuditsComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/jhi-health',
      name: 'JhiHealthComponent',
      component: JhiHealthComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/logs',
      name: 'JhiLogsComponent',
      component: JhiLogsComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/jhi-metrics',
      name: 'JhiMetricsComponent',
      component: JhiMetricsComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/jhi-configuration',
      name: 'JhiConfigurationComponent',
      component: JhiConfigurationComponent,
      meta: { authorities: [Authority.ADMIN] }
    }
    ,
    {
      path: '/patient',
      name: 'PATIENT',
      component: PATIENT,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/patient/new',
      name: 'PATIENTCreate',
      component: PATIENTUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/patient/:pATIENTId/edit',
      name: 'PATIENTEdit',
      component: PATIENTUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/patient/:pATIENTId/view',
      name: 'PATIENTView',
      component: PATIENTDetails,
      meta: { authorities: [Authority.USER] }
    }
    ,
    {
      path: '/event',
      name: 'EVENT',
      component: EVENT,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/event/new',
      name: 'EVENTCreate',
      component: EVENTUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/event/:eVENTId/edit',
      name: 'EVENTEdit',
      component: EVENTUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/event/:eVENTId/view',
      name: 'EVENTView',
      component: EVENTDetails,
      meta: { authorities: [Authority.USER] }
    }
    ,
    {
      path: '/prescription',
      name: 'PRESCRIPTION',
      component: PRESCRIPTION,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/prescription/new',
      name: 'PRESCRIPTIONCreate',
      component: PRESCRIPTIONUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/prescription/:pRESCRIPTIONId/edit',
      name: 'PRESCRIPTIONEdit',
      component: PRESCRIPTIONUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/prescription/:pRESCRIPTIONId/view',
      name: 'PRESCRIPTIONView',
      component: PRESCRIPTIONDetails,
      meta: { authorities: [Authority.USER] }
    }
    ,
    {
      path: '/pharmaco',
      name: 'PHARMACO',
      component: PHARMACO,
      //meta: { authorities: [Authority.USER] }
    },
    {
      path: '/pharmaco/new',
      name: 'PHARMACOCreate',
      component: PHARMACOUpdate,
      //meta: { authorities: [Authority.USER] }
    },
    {
      path: '/pharmaco/:pHARMACOId/edit',
      name: 'PHARMACOEdit',
      component: PHARMACOUpdate,
      //meta: { authorities: [Authority.USER] }
    },
    {
      path: '/pharmaco/:pHARMACOId/view',
      name: 'PHARMACOView',
      component: PHARMACODetails,
      //meta: { authorities: [Authority.USER] }
    }
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ]
});
