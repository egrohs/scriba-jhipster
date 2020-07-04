<template>
    <div>
        <h2 id="page-heading">
            <span id="prescription-heading">PRESCRIPTIONS</span>
            <router-link :to="{name: 'PRESCRIPTIONCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-prescription">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create a new PRESCRIPTION
                </span>
            </router-link>
        </h2>
        <b-alert :show="dismissCountDown"
            dismissible
            :variant="alertType"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{alertMessage}}
        </b-alert>
        <br/>
        <div class="alert alert-warning" v-if="!isFetching && pRESCRIPTIONS && pRESCRIPTIONS.length === 0">
            <span>No pRESCRIPTIONS found</span>
        </div>
        <div class="table-responsive" v-if="pRESCRIPTIONS && pRESCRIPTIONS.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span>ID</span></th>
                    <th><span>D ATAIN</span></th>
                    <th><span>D ATAOUT</span></th>
                    <th><span>Q NT</span></th>
                    <th><span>O BS</span></th>
                    <th><span>P HARMACO</span></th>
                    <th><span>Prescriptions</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="pRESCRIPTION in pRESCRIPTIONS"
                    :key="pRESCRIPTION.id">
                    <td>
                        <router-link :to="{name: 'PRESCRIPTIONView', params: {pRESCRIPTIONId: pRESCRIPTION.id}}">{{pRESCRIPTION.id}}</router-link>
                    </td>
                    <td>{{pRESCRIPTION.dATAIN | formatDate}}</td>
                    <td>{{pRESCRIPTION.dATAOUT | formatDate}}</td>
                    <td>{{pRESCRIPTION.qNT}}</td>
                    <td>{{pRESCRIPTION.oBS}}</td>
                    <td>
                        <div v-if="pRESCRIPTION.pHARMACO">
                            <router-link :to="{name: 'PHARMACOView', params: {pHARMACOId: pRESCRIPTION.pHARMACO.id}}">{{pRESCRIPTION.pHARMACO.id}}</router-link>
                        </div>
                    </td>
                    <td>
                        <div v-if="pRESCRIPTION.prescriptions">
                            <router-link :to="{name: 'EVENTView', params: {eVENTId: pRESCRIPTION.prescriptions.id}}">{{pRESCRIPTION.prescriptions.id}}</router-link>
                        </div>
                    </td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'PRESCRIPTIONView', params: {pRESCRIPTIONId: pRESCRIPTION.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'PRESCRIPTIONEdit', params: {pRESCRIPTIONId: pRESCRIPTION.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(pRESCRIPTION)"
                                   variant="danger"
                                   class="btn btn-sm"
                                   v-b-modal.removeEntity>
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                <span class="d-none d-md-inline">Delete</span>
                            </b-button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <b-modal ref="removeEntity" id="removeEntity" >
            <span slot="modal-title"><span id="medApp.pRESCRIPTION.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-pRESCRIPTION-heading">Are you sure you want to delete this PRESCRIPTION?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-pRESCRIPTION" v-on:click="removePRESCRIPTION()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./prescription.component.ts">
</script>
