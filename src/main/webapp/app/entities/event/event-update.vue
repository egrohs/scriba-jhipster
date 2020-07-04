<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="medApp.eVENT.home.createOrEditLabel">Create or edit a EVENT</h2>
                <div>
                    <div class="form-group" v-if="eVENT.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="eVENT.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="event-iDPATIENT">I DPATIENT</label>
                        <input type="number" class="form-control" name="iDPATIENT" id="event-iDPATIENT"
                            :class="{'valid': !$v.eVENT.iDPATIENT.$invalid, 'invalid': $v.eVENT.iDPATIENT.$invalid }" v-model.number="$v.eVENT.iDPATIENT.$model"  required/>
                        <div v-if="$v.eVENT.iDPATIENT.$anyDirty && $v.eVENT.iDPATIENT.$invalid">
                            <small class="form-text text-danger" v-if="!$v.eVENT.iDPATIENT.required">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.eVENT.iDPATIENT.numeric">
                                This field should be a number.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="event-eVENTDT">E VENTDT</label>
                        <div class="d-flex">
                            <input id="event-eVENTDT" type="datetime-local" class="form-control" name="eVENTDT" :class="{'valid': !$v.eVENT.eVENTDT.$invalid, 'invalid': $v.eVENT.eVENTDT.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.eVENT.eVENTDT.$model)"
                            @change="updateInstantField('eVENTDT', $event)"/>
                        </div>
                        <div v-if="$v.eVENT.eVENTDT.$anyDirty && $v.eVENT.eVENTDT.$invalid">
                            <small class="form-text text-danger" v-if="!$v.eVENT.eVENTDT.required">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.eVENT.eVENTDT.ZonedDateTimelocal">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="event-oBS">O BS</label>
                        <input type="text" class="form-control" name="oBS" id="event-oBS"
                            :class="{'valid': !$v.eVENT.oBS.$invalid, 'invalid': $v.eVENT.oBS.$invalid }" v-model="$v.eVENT.oBS.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="event-events">Events</label>
                        <select class="form-control" id="event-events" name="events" v-model="eVENT.events">
                            <option v-bind:value="null"></option>
                            <option v-bind:value="eVENT.events && pATIENTOption.id === eVENT.events.id ? eVENT.events : pATIENTOption" v-for="pATIENTOption in pATIENTS" :key="pATIENTOption.id">{{pATIENTOption.id}}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.eVENT.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./event-update.component.ts">
</script>
