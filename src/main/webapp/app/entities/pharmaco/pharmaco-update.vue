<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="medApp.pHARMACO.home.createOrEditLabel">Create or edit a PHARMACO</h2>
                <div>
                    <div class="form-group" v-if="pHARMACO.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="pHARMACO.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="pharmaco-substance">Substance</label>
                        <input type="text" class="form-control" name="substance" id="pharmaco-substance"
                            :class="{'valid': !$v.pHARMACO.substance.$invalid, 'invalid': $v.pHARMACO.substance.$invalid }" v-model="$v.pHARMACO.substance.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="pharmaco-commercialName">Commercial Name</label>
                        <input type="text" class="form-control" name="commercialName" id="pharmaco-commercialName"
                            :class="{'valid': !$v.pHARMACO.commercialName.$invalid, 'invalid': $v.pHARMACO.commercialName.$invalid }" v-model="$v.pHARMACO.commercialName.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="pharmaco-concentration">Concentration</label>
                        <input type="number" class="form-control" name="concentration" id="pharmaco-concentration"
                            :class="{'valid': !$v.pHARMACO.concentration.$invalid, 'invalid': $v.pHARMACO.concentration.$invalid }" v-model.number="$v.pHARMACO.concentration.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="pharmaco-mETRIC">M ETRIC</label>
                        <input type="text" class="form-control" name="mETRIC" id="pharmaco-mETRIC"
                            :class="{'valid': !$v.pHARMACO.mETRIC.$invalid, 'invalid': $v.pHARMACO.mETRIC.$invalid }" v-model="$v.pHARMACO.mETRIC.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="pharmaco-units">Units</label>
                        <input type="text" class="form-control" name="units" id="pharmaco-units"
                            :class="{'valid': !$v.pHARMACO.units.$invalid, 'invalid': $v.pHARMACO.units.$invalid }" v-model="$v.pHARMACO.units.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="pharmaco-packing">Packing</label>
                        <input type="text" class="form-control" name="packing" id="pharmaco-packing"
                            :class="{'valid': !$v.pHARMACO.packing.$invalid, 'invalid': $v.pHARMACO.packing.$invalid }" v-model="$v.pHARMACO.packing.$model" />
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.pHARMACO.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./pharmaco-update.component.ts">
</script>
