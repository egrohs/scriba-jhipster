<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="pHARMACO">
                <h2 class="jh-entity-heading"><span>PHARMACO</span> {{pHARMACO.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span>Substance</span>
                    </dt>
                    <dd>
                        <span>{{pHARMACO.substance}}</span>
                    </dd>
                    <dt>
                        <span>Commercial Name</span>
                    </dt>
                    <dd>
                        <span>{{pHARMACO.commercialName}}</span>
                    </dd>
                    <dt>
                        <span>Concentration</span>
                    </dt>
                    <dd>
                        <span>{{pHARMACO.concentration}}</span>
                    </dd>
                    <dt>
                        <span>M ETRIC</span>
                    </dt>
                    <dd>
                        <span>{{pHARMACO.mETRIC}}</span>
                    </dd>
                    <dt>
                        <span>Units</span>
                    </dt>
                    <dd>
                        <span>{{pHARMACO.units}}</span>
                    </dd>
                    <dt>
                        <span>Packing</span>
                    </dt>
                    <dd>
                        <span>{{pHARMACO.packing}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </button>
                <router-link v-if="pHARMACO.id" :to="{name: 'PHARMACOEdit', params: {pHARMACOId: pHARMACO.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./pharmaco-details.component.ts">
</script>
