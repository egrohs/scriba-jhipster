<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="pATIENT">
                <h2 class="jh-entity-heading"><span>PATIENT</span> {{pATIENT.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span>N AME</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.nAME}}</span>
                    </dd>
                    <dt>
                        <span>B IRTHDATE</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.bIRTHDATE | formatDate}}</span>
                    </dd>
                    <dt>
                        <span>S EX</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.sEX}}</span>
                    </dd>
                    <dt>
                        <span>C PF</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.cPF}}</span>
                    </dd>
                    <dt>
                        <span>R G</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.rG}}</span>
                    </dd>
                    <dt>
                        <span>R GRELEASER</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.rGRELEASER}}</span>
                    </dd>
                    <dt>
                        <span>R ESIDENCE</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.rESIDENCE}}</span>
                    </dd>
                    <dt>
                        <span>N UMBER</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.nUMBER}}</span>
                    </dd>
                    <dt>
                        <span>C OMPLEMENT</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.cOMPLEMENT}}</span>
                    </dd>
                    <dt>
                        <span>C ITY</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.cITY}}</span>
                    </dd>
                    <dt>
                        <span>S TATE</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.sTATE}}</span>
                    </dd>
                    <dt>
                        <span>Z IP</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.zIP}}</span>
                    </dd>
                    <dt>
                        <span>M OBILEDDD</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.mOBILEDDD}}</span>
                    </dd>
                    <dt>
                        <span>M OBILENUM</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.mOBILENUM}}</span>
                    </dd>
                    <dt>
                        <span>E MAIL</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.eMAIL}}</span>
                    </dd>
                    <dt>
                        <span>O CCUPATION</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.oCCUPATION}}</span>
                    </dd>
                    <dt>
                        <span>R EFERRER</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.rEFERRER}}</span>
                    </dd>
                    <dt>
                        <span>O BS</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.oBS}}</span>
                    </dd>
                    <dt>
                        <span>N FPAYERNAME</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.nFPAYERNAME}}</span>
                    </dd>
                    <dt>
                        <span>N FPAYERCPF</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.nFPAYERCPF}}</span>
                    </dd>
                    <dt>
                        <span>A CTIVE</span>
                    </dt>
                    <dd>
                        <span>{{pATIENT.aCTIVE}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </button>
                <router-link v-if="pATIENT.id" :to="{name: 'PATIENTEdit', params: {pATIENTId: pATIENT.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./patient-details.component.ts">
</script>
