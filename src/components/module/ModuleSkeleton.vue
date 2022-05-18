<template>
    <div class="skeleton" v-if="display">
        <a-skeleton v-for="num in seq" v-bind:key="num" data-aos="fade-in" active avatar :paragraph="{rows: 3}"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import times from 'lodash/fp/times';
export default defineComponent({
    props: {
        display: Boolean,
        number: Number,
    },
    computed: {
        seq() {
            return times((this as any).number);
        },
    },
})
</script>

<style scoped lang="scss">
    @import '../../styles/variable';
</style>
