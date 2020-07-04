<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="medApp.pATIENT.home.createOrEditLabel">Create or edit a PATIENT</h2>
                <div>
                    <div class="form-group" v-if="pATIENT.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="pATIENT.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-nAME">N AME</label>
                        <input type="text" class="form-control" name="nAME" id="patient-nAME"
                            :class="{'valid': !$v.pATIENT.nAME.$invalid, 'invalid': $v.pATIENT.nAME.$invalid }" v-model="$v.pATIENT.nAME.$model"  required/>
                        <div v-if="$v.pATIENT.nAME.$anyDirty && $v.pATIENT.nAME.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.nAME.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-bIRTHDATE">B IRTHDATE</label>
                        <div class="d-flex">
                            <input id="patient-bIRTHDATE" type="datetime-local" class="form-control" name="bIRTHDATE" :class="{'valid': !$v.pATIENT.bIRTHDATE.$invalid, 'invalid': $v.pATIENT.bIRTHDATE.$invalid }"
                             required
                            :value="convertDateTimeFromServer($v.pATIENT.bIRTHDATE.$model)"
                            @change="updateInstantField('bIRTHDATE', $event)"/>
                        </div>
                        <div v-if="$v.pATIENT.bIRTHDATE.$anyDirty && $v.pATIENT.bIRTHDATE.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.bIRTHDATE.required">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.pATIENT.bIRTHDATE.ZonedDateTimelocal">
                                This field should be a date and time.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-sEX">S EX</label>
                        <input type="text" class="form-control" name="sEX" id="patient-sEX"
                            :class="{'valid': !$v.pATIENT.sEX.$invalid, 'invalid': $v.pATIENT.sEX.$invalid }" v-model="$v.pATIENT.sEX.$model"  required/>
                        <div v-if="$v.pATIENT.sEX.$anyDirty && $v.pATIENT.sEX.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.sEX.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-cPF">C PF</label>
                        <input type="text" class="form-control" name="cPF" id="patient-cPF"
                            :class="{'valid': !$v.pATIENT.cPF.$invalid, 'invalid': $v.pATIENT.cPF.$invalid }" v-model="$v.pATIENT.cPF.$model"  required/>
                        <div v-if="$v.pATIENT.cPF.$anyDirty && $v.pATIENT.cPF.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.cPF.required">
                                This field is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.pATIENT.cPF.minLength">
                                This field is required to be at least 14 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.pATIENT.cPF.maxLength">
                                This field cannot be longer than 14 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.pATIENT.cPF.pattern">
                                This field should follow pattern for "C PF".
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-rG">R G</label>
                        <input type="text" class="form-control" name="rG" id="patient-rG"
                            :class="{'valid': !$v.pATIENT.rG.$invalid, 'invalid': $v.pATIENT.rG.$invalid }" v-model="$v.pATIENT.rG.$model"  required/>
                        <div v-if="$v.pATIENT.rG.$anyDirty && $v.pATIENT.rG.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.rG.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-rGRELEASER">R GRELEASER</label>
                        <input type="text" class="form-control" name="rGRELEASER" id="patient-rGRELEASER"
                            :class="{'valid': !$v.pATIENT.rGRELEASER.$invalid, 'invalid': $v.pATIENT.rGRELEASER.$invalid }" v-model="$v.pATIENT.rGRELEASER.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-rESIDENCE">R ESIDENCE</label>
                        <input type="text" class="form-control" name="rESIDENCE" id="patient-rESIDENCE"
                            :class="{'valid': !$v.pATIENT.rESIDENCE.$invalid, 'invalid': $v.pATIENT.rESIDENCE.$invalid }" v-model="$v.pATIENT.rESIDENCE.$model"  required/>
                        <div v-if="$v.pATIENT.rESIDENCE.$anyDirty && $v.pATIENT.rESIDENCE.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.rESIDENCE.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-nUMBER">N UMBER</label>
                        <input type="text" class="form-control" name="nUMBER" id="patient-nUMBER"
                            :class="{'valid': !$v.pATIENT.nUMBER.$invalid, 'invalid': $v.pATIENT.nUMBER.$invalid }" v-model="$v.pATIENT.nUMBER.$model"  required/>
                        <div v-if="$v.pATIENT.nUMBER.$anyDirty && $v.pATIENT.nUMBER.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.nUMBER.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-cOMPLEMENT">C OMPLEMENT</label>
                        <input type="text" class="form-control" name="cOMPLEMENT" id="patient-cOMPLEMENT"
                            :class="{'valid': !$v.pATIENT.cOMPLEMENT.$invalid, 'invalid': $v.pATIENT.cOMPLEMENT.$invalid }" v-model="$v.pATIENT.cOMPLEMENT.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-cITY">C ITY</label>
                        <input type="text" class="form-control" name="cITY" id="patient-cITY"
                            :class="{'valid': !$v.pATIENT.cITY.$invalid, 'invalid': $v.pATIENT.cITY.$invalid }" v-model="$v.pATIENT.cITY.$model"  required/>
                        <div v-if="$v.pATIENT.cITY.$anyDirty && $v.pATIENT.cITY.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.cITY.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-sTATE">S TATE</label>
                        <input type="text" class="form-control" name="sTATE" id="patient-sTATE"
                            :class="{'valid': !$v.pATIENT.sTATE.$invalid, 'invalid': $v.pATIENT.sTATE.$invalid }" v-model="$v.pATIENT.sTATE.$model"  required/>
                        <div v-if="$v.pATIENT.sTATE.$anyDirty && $v.pATIENT.sTATE.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.sTATE.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-zIP">Z IP</label>
                        <input type="text" class="form-control" name="zIP" id="patient-zIP"
                            :class="{'valid': !$v.pATIENT.zIP.$invalid, 'invalid': $v.pATIENT.zIP.$invalid }" v-model="$v.pATIENT.zIP.$model"  required/>
                        <div v-if="$v.pATIENT.zIP.$anyDirty && $v.pATIENT.zIP.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.zIP.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-mOBILEDDD">M OBILEDDD</label>
                        <input type="text" class="form-control" name="mOBILEDDD" id="patient-mOBILEDDD"
                            :class="{'valid': !$v.pATIENT.mOBILEDDD.$invalid, 'invalid': $v.pATIENT.mOBILEDDD.$invalid }" v-model="$v.pATIENT.mOBILEDDD.$model"  required/>
                        <div v-if="$v.pATIENT.mOBILEDDD.$anyDirty && $v.pATIENT.mOBILEDDD.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.mOBILEDDD.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-mOBILENUM">M OBILENUM</label>
                        <input type="text" class="form-control" name="mOBILENUM" id="patient-mOBILENUM"
                            :class="{'valid': !$v.pATIENT.mOBILENUM.$invalid, 'invalid': $v.pATIENT.mOBILENUM.$invalid }" v-model="$v.pATIENT.mOBILENUM.$model"  required/>
                        <div v-if="$v.pATIENT.mOBILENUM.$anyDirty && $v.pATIENT.mOBILENUM.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.mOBILENUM.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-eMAIL">E MAIL</label>
                        <input type="text" class="form-control" name="eMAIL" id="patient-eMAIL"
                            :class="{'valid': !$v.pATIENT.eMAIL.$invalid, 'invalid': $v.pATIENT.eMAIL.$invalid }" v-model="$v.pATIENT.eMAIL.$model"  required/>
                        <div v-if="$v.pATIENT.eMAIL.$anyDirty && $v.pATIENT.eMAIL.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.eMAIL.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-oCCUPATION">O CCUPATION</label>
                        <input type="text" class="form-control" name="oCCUPATION" id="patient-oCCUPATION"
                            :class="{'valid': !$v.pATIENT.oCCUPATION.$invalid, 'invalid': $v.pATIENT.oCCUPATION.$invalid }" v-model="$v.pATIENT.oCCUPATION.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-rEFERRER">R EFERRER</label>
                        <input type="text" class="form-control" name="rEFERRER" id="patient-rEFERRER"
                            :class="{'valid': !$v.pATIENT.rEFERRER.$invalid, 'invalid': $v.pATIENT.rEFERRER.$invalid }" v-model="$v.pATIENT.rEFERRER.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-oBS">O BS</label>
                        <input type="text" class="form-control" name="oBS" id="patient-oBS"
                            :class="{'valid': !$v.pATIENT.oBS.$invalid, 'invalid': $v.pATIENT.oBS.$invalid }" v-model="$v.pATIENT.oBS.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-nFPAYERNAME">N FPAYERNAME</label>
                        <input type="text" class="form-control" name="nFPAYERNAME" id="patient-nFPAYERNAME"
                            :class="{'valid': !$v.pATIENT.nFPAYERNAME.$invalid, 'invalid': $v.pATIENT.nFPAYERNAME.$invalid }" v-model="$v.pATIENT.nFPAYERNAME.$model"  required/>
                        <div v-if="$v.pATIENT.nFPAYERNAME.$anyDirty && $v.pATIENT.nFPAYERNAME.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.nFPAYERNAME.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-nFPAYERCPF">N FPAYERCPF</label>
                        <input type="text" class="form-control" name="nFPAYERCPF" id="patient-nFPAYERCPF"
                            :class="{'valid': !$v.pATIENT.nFPAYERCPF.$invalid, 'invalid': $v.pATIENT.nFPAYERCPF.$invalid }" v-model="$v.pATIENT.nFPAYERCPF.$model"  required/>
                        <div v-if="$v.pATIENT.nFPAYERCPF.$anyDirty && $v.pATIENT.nFPAYERCPF.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.nFPAYERCPF.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="patient-aCTIVE">A CTIVE</label>
                        <input type="checkbox" class="form-check" name="aCTIVE" id="patient-aCTIVE"
                            :class="{'valid': !$v.pATIENT.aCTIVE.$invalid, 'invalid': $v.pATIENT.aCTIVE.$invalid }" v-model="$v.pATIENT.aCTIVE.$model"  required/>
                        <div v-if="$v.pATIENT.aCTIVE.$anyDirty && $v.pATIENT.aCTIVE.$invalid">
                            <small class="form-text text-danger" v-if="!$v.pATIENT.aCTIVE.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.pATIENT.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./patient-update.component.ts">
</script>
