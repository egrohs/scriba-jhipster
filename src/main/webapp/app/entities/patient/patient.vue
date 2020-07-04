<template>
    <div>
        <h2 id="page-heading">
            <span id="patient-heading">PATIENTS</span>
            <router-link :to="{name: 'PATIENTCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-patient">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create a new PATIENT
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
        <div class="alert alert-warning" v-if="!isFetching && pATIENTS && pATIENTS.length === 0">
            <span>No pATIENTS found</span>
        </div>
        <div class="table-responsive" v-if="pATIENTS && pATIENTS.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span>ID</span></th>
                    <th><span>N AME</span></th>
                    <th><span>B IRTHDATE</span></th>
                    <th><span>S EX</span></th>
                    <th><span>C PF</span></th>
                    <th><span>R G</span></th>
                    <th><span>R GRELEASER</span></th>
                    <th><span>R ESIDENCE</span></th>
                    <th><span>N UMBER</span></th>
                    <th><span>C OMPLEMENT</span></th>
                    <th><span>C ITY</span></th>
                    <th><span>S TATE</span></th>
                    <th><span>Z IP</span></th>
                    <th><span>M OBILEDDD</span></th>
                    <th><span>M OBILENUM</span></th>
                    <th><span>E MAIL</span></th>
                    <th><span>O CCUPATION</span></th>
                    <th><span>R EFERRER</span></th>
                    <th><span>O BS</span></th>
                    <th><span>N FPAYERNAME</span></th>
                    <th><span>N FPAYERCPF</span></th>
                    <th><span>A CTIVE</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="pATIENT in pATIENTS"
                    :key="pATIENT.id">
                    <td>
                        <router-link :to="{name: 'PATIENTView', params: {pATIENTId: pATIENT.id}}">{{pATIENT.id}}</router-link>
                    </td>
                    <td>{{pATIENT.nAME}}</td>
                    <td>{{pATIENT.bIRTHDATE | formatDate}}</td>
                    <td>{{pATIENT.sEX}}</td>
                    <td>{{pATIENT.cPF}}</td>
                    <td>{{pATIENT.rG}}</td>
                    <td>{{pATIENT.rGRELEASER}}</td>
                    <td>{{pATIENT.rESIDENCE}}</td>
                    <td>{{pATIENT.nUMBER}}</td>
                    <td>{{pATIENT.cOMPLEMENT}}</td>
                    <td>{{pATIENT.cITY}}</td>
                    <td>{{pATIENT.sTATE}}</td>
                    <td>{{pATIENT.zIP}}</td>
                    <td>{{pATIENT.mOBILEDDD}}</td>
                    <td>{{pATIENT.mOBILENUM}}</td>
                    <td>{{pATIENT.eMAIL}}</td>
                    <td>{{pATIENT.oCCUPATION}}</td>
                    <td>{{pATIENT.rEFERRER}}</td>
                    <td>{{pATIENT.oBS}}</td>
                    <td>{{pATIENT.nFPAYERNAME}}</td>
                    <td>{{pATIENT.nFPAYERCPF}}</td>
                    <td>{{pATIENT.aCTIVE}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'PATIENTView', params: {pATIENTId: pATIENT.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'PATIENTEdit', params: {pATIENTId: pATIENT.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(pATIENT)"
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
            <span slot="modal-title"><span id="medApp.pATIENT.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-pATIENT-heading">Are you sure you want to delete this PATIENT?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-pATIENT" v-on:click="removePATIENT()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./patient.component.ts">
</script>
