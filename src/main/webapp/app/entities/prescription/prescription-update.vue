<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="medApp.pRESCRIPTION.home.createOrEditLabel">Create or edit a PRESCRIPTION</h2>
                <div>
                    <div class="form-group" v-if="pRESCRIPTION.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="pRESCRIPTION.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="prescription-dATAIN">D ATAIN</label>
                        <div class="d-flex">
                            <input id="prescription-dATAIN" type="datetime-local" class="form-control" name="dATAIN" :class="{'valid': !$v.pRESCRIPTION.dATAIN.$invalid, 'invalid': $v.pRESCRIPTION.dATAIN.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.pRESCRIPTION.dATAIN.$model)"
                            @change="updateInstantField('dATAIN', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="prescription-dATAOUT">D ATAOUT</label>
                        <div class="d-flex">
                            <input id="prescription-dATAOUT" type="datetime-local" class="form-control" name="dATAOUT" :class="{'valid': !$v.pRESCRIPTION.dATAOUT.$invalid, 'invalid': $v.pRESCRIPTION.dATAOUT.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.pRESCRIPTION.dATAOUT.$model)"
                            @change="updateInstantField('dATAOUT', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="prescription-qNT">Q NT</label>
                        <input type="number" class="form-control" name="qNT" id="prescription-qNT"
                            :class="{'valid': !$v.pRESCRIPTION.qNT.$invalid, 'invalid': $v.pRESCRIPTION.qNT.$invalid }" v-model.number="$v.pRESCRIPTION.qNT.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="prescription-oBS">O BS</label>
                        <input type="text" class="form-control" name="oBS" id="prescription-oBS"
                            :class="{'valid': !$v.pRESCRIPTION.oBS.$invalid, 'invalid': $v.pRESCRIPTION.oBS.$invalid }" v-model="$v.pRESCRIPTION.oBS.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="prescription-pHARMACO">P HARMACO</label>
                        <select class="form-control" id="prescription-pHARMACO" name="pHARMACO" v-model="pRESCRIPTION.pHARMACO">
                            <option v-bind:value="null"></option>
                            <option v-bind:value="pRESCRIPTION.pHARMACO && pHARMACOOption.id === pRESCRIPTION.pHARMACO.id ? pRESCRIPTION.pHARMACO : pHARMACOOption" v-for="pHARMACOOption in pHARMACOS" :key="pHARMACOOption.id">{{pHARMACOOption.id}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="prescription-prescriptions">Prescriptions</label>
                        <select class="form-control" id="prescription-prescriptions" name="prescriptions" v-model="pRESCRIPTION.prescriptions">
                            <option v-bind:value="null"></option>
                            <option v-bind:value="pRESCRIPTION.prescriptions && eVENTOption.id === pRESCRIPTION.prescriptions.id ? pRESCRIPTION.prescriptions : eVENTOption" v-for="eVENTOption in eVENTS" :key="eVENTOption.id">{{eVENTOption.id}}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.pRESCRIPTION.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./prescription-update.component.ts">
</script>
