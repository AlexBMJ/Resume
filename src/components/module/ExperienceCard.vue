<template>
    <a-card class="experience-card" :bordered="true" style="width: 100%">
        <template v-slot:title>
            <div class="date-title" >
                <h1 class="title">{{card.title}}</h1>
                <h1 class="time-period">{{formatDate(card.date_from)}} - {{formatDate(card.date_to)}}</h1>
            </div>
            <span v-if="!!card.subtitle" class="sub-title">{{card.subtitle}}</span>
        </template>
        <template #extra><img width="50" draggable="false" :src="getImageUrl(card.icon)" :alt="card.title"></template>
        <Markdown class="markdown-content" :source="card.md"/>
    </a-card>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Markdown from 'vue3-markdown-it';

export default defineComponent({
    setup() {
        const getImageUrl = (name: string) => {
            return new URL(`../../assets/logo/${name}`, import.meta.url).href
        }
        return { getImageUrl }
    },
    props: ['card'],
    components: {
        Markdown
    },
    methods: {
        formatDate(timestamp: number): string {
            if (!timestamp) { return 'Now'; }
            var date = new Date(timestamp*1000);
            return date.toLocaleString("en-US", { year:"numeric", month: "short" });
        }
    }
})
</script>

<style scoped lang="scss">
    @import '../../styles/variable';
    @import '../../styles/main';

    .experience-card {
        .title {
            font-size: 1.2rem;
            margin-bottom: 0;
            padding-right: 0.5rem;
            overflow: hidden;
            white-space: normal;
        }

        .date-title {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            border-collapse: separate;
            border-spacing: 1rem;
        }
        
        .time-period {
            font-size: .85rem;
            padding-top: 0.34rem;
            padding-right: 0.5rem;
            margin: 0;
        }

        .sub-title {
            width: 100%;
            font-size: .65rem;
            color: lightslategrey;
            display: block;
            margin-top: .2rem;
        }

        .markdown-content {
            font-size: 0.8em;
        }
    }
    .keys-row {
            .keys-col {
                word-break: break-all;
                padding-right: 1rem;

                .key {
                    margin-right: .5rem;
                    font-weight: bold;
                }

                .value {
                    color: inherit;
                    text-decoration: underline;
                }
            }
        }
</style>
