<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="eVENT">
                <h2 class="jh-entity-heading"><span>EVENT</span> {{eVENT.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span>I DPATIENT</span>
                    </dt>
                    <dd>
                        <span>{{eVENT.iDPATIENT}}</span>
                    </dd>
                    <dt>
                        <span>E VENTDT</span>
                    </dt>
                    <dd>
                        <span>{{eVENT.eVENTDT | formatDate}}</span>
                    </dd>
                    <dt>
                        <span>O BS</span>
                    </dt>
                    <dd>
                        <span>{{eVENT.oBS}}</span>
                    </dd>
                    <dt>
                        <span>Events</span>
                    </dt>
                    <dd>
                        <div v-if="eVENT.events">
                            <router-link :to="{name: 'PATIENTView', params: {pATIENTId: eVENT.events.id}}">{{eVENT.events.id}}</router-link>
                        </div>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </button>
                <router-link v-if="eVENT.id" :to="{name: 'EVENTEdit', params: {eVENTId: eVENT.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./event-details.component.ts">
</script>
