<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="pRESCRIPTION">
                <h2 class="jh-entity-heading"><span>PRESCRIPTION</span> {{pRESCRIPTION.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span>D ATAIN</span>
                    </dt>
                    <dd>
                        <span>{{pRESCRIPTION.dATAIN | formatDate}}</span>
                    </dd>
                    <dt>
                        <span>D ATAOUT</span>
                    </dt>
                    <dd>
                        <span>{{pRESCRIPTION.dATAOUT | formatDate}}</span>
                    </dd>
                    <dt>
                        <span>Q NT</span>
                    </dt>
                    <dd>
                        <span>{{pRESCRIPTION.qNT}}</span>
                    </dd>
                    <dt>
                        <span>O BS</span>
                    </dt>
                    <dd>
                        <span>{{pRESCRIPTION.oBS}}</span>
                    </dd>
                    <dt>
                        <span>P HARMACO</span>
                    </dt>
                    <dd>
                        <div v-if="pRESCRIPTION.pHARMACO">
                            <router-link :to="{name: 'PHARMACOView', params: {pHARMACOId: pRESCRIPTION.pHARMACO.id}}">{{pRESCRIPTION.pHARMACO.id}}</router-link>
                        </div>
                    </dd>
                    <dt>
                        <span>Prescriptions</span>
                    </dt>
                    <dd>
                        <div v-if="pRESCRIPTION.prescriptions">
                            <router-link :to="{name: 'EVENTView', params: {eVENTId: pRESCRIPTION.prescriptions.id}}">{{pRESCRIPTION.prescriptions.id}}</router-link>
                        </div>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </button>
                <router-link v-if="pRESCRIPTION.id" :to="{name: 'PRESCRIPTIONEdit', params: {pRESCRIPTIONId: pRESCRIPTION.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./prescription-details.component.ts">
</script>
