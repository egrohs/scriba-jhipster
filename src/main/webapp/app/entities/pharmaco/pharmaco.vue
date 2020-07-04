<template>
    <div>
        <h2 id="page-heading">
            <span id="pharmaco-heading">PHARMACOS</span>
            <router-link :to="{name: 'PHARMACOCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-pharmaco">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create a new PHARMACO
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
        <div class="alert alert-warning" v-if="!isFetching && pHARMACOS && pHARMACOS.length === 0">
            <span>No pHARMACOS found</span>
        </div>
        <div class="table-responsive" v-if="pHARMACOS && pHARMACOS.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span>ID</span></th>
                    <th><span>Substance</span></th>
                    <th><span>Commercial Name</span></th>
                    <th><span>Concentration</span></th>
                    <th><span>M ETRIC</span></th>
                    <th><span>Units</span></th>
                    <th><span>Packing</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="pHARMACO in pHARMACOS"
                    :key="pHARMACO.id">
                    <td>
                        <router-link :to="{name: 'PHARMACOView', params: {pHARMACOId: pHARMACO.id}}">{{pHARMACO.id}}</router-link>
                    </td>
                    <td>{{pHARMACO.substance}}</td>
                    <td>{{pHARMACO.commercialName}}</td>
                    <td>{{pHARMACO.concentration}}</td>
                    <td>{{pHARMACO.mETRIC}}</td>
                    <td>{{pHARMACO.units}}</td>
                    <td>{{pHARMACO.packing}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'PHARMACOView', params: {pHARMACOId: pHARMACO.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'PHARMACOEdit', params: {pHARMACOId: pHARMACO.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(pHARMACO)"
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
            <span slot="modal-title"><span id="medApp.pHARMACO.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-pHARMACO-heading">Are you sure you want to delete this PHARMACO?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-pHARMACO" v-on:click="removePHARMACO()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./pharmaco.component.ts">
</script>
