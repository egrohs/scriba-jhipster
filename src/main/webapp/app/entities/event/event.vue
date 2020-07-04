<template>
    <div>
        <h2 id="page-heading">
            <span id="event-heading">EVENTS</span>
            <router-link :to="{name: 'EVENTCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-event">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create a new EVENT
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
        <div class="alert alert-warning" v-if="!isFetching && eVENTS && eVENTS.length === 0">
            <span>No eVENTS found</span>
        </div>
        <div class="table-responsive" v-if="eVENTS && eVENTS.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span>ID</span></th>
                    <th><span>I DPATIENT</span></th>
                    <th><span>E VENTDT</span></th>
                    <th><span>O BS</span></th>
                    <th><span>Events</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="eVENT in eVENTS"
                    :key="eVENT.id">
                    <td>
                        <router-link :to="{name: 'EVENTView', params: {eVENTId: eVENT.id}}">{{eVENT.id}}</router-link>
                    </td>
                    <td>{{eVENT.iDPATIENT}}</td>
                    <td>{{eVENT.eVENTDT | formatDate}}</td>
                    <td>{{eVENT.oBS}}</td>
                    <td>
                        <div v-if="eVENT.events">
                            <router-link :to="{name: 'PATIENTView', params: {pATIENTId: eVENT.events.id}}">{{eVENT.events.id}}</router-link>
                        </div>
                    </td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'EVENTView', params: {eVENTId: eVENT.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'EVENTEdit', params: {eVENTId: eVENT.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(eVENT)"
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
            <span slot="modal-title"><span id="medApp.eVENT.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-eVENT-heading">Are you sure you want to delete this EVENT?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-eVENT" v-on:click="removeEVENT()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./event.component.ts">
</script>
