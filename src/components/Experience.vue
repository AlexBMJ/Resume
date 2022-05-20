<template>
    <div class="content" id="experience">
        <ModuleHeader :title="experience.header.title" :sub-title="experience.header.subtitle"/>
        <a-timeline>
            <a-timeline-item data-aos="fade-in" v-for="card in experience.cards">
                <a-card class="experience-card" :bordered="true" style="width: 100%">
                    <template v-slot:title>
                        <h1 class="title">{{card.title}}</h1>
                        <span v-if="!!card.subtitle" class="sub-title">{{card.subtitle}}</span>
                    </template>
                    <Markdown :source="card.md"/>
                </a-card>
            </a-timeline-item>
        </a-timeline>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import type { Module } from '@/api/user_interface';
    import Markdown from 'vue3-markdown-it';
    import { mainStore } from '@/stores/store';

    export default defineComponent({
        data() {
          return {
            store: mainStore()
          }
        },
        components: {
            ModuleHeader,
            Markdown,
        },
        computed: {
            experience(): Module {
                return this.store.getModule('experience')
            },
        },
    })
</script>

<style scoped lang="scss">
    @import '../styles/variable';
    @import '../styles/main';

    .experience-card {
        .title {
            width: 100%;
            font-size: 1rem;
            overflow: hidden;
            margin: 0;
        }

        .sub-title {
            width: 100%;
            font-size: .5rem;
            display: block;
            margin-top: .5rem;
        }
    }
</style>
