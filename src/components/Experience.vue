<template>
    <div class="content" id="experience">
        <ModuleHeader :title="experience.header.title" :sub-title="experience.header.subtitle"/>
        <a-row type="flex" justify="left" align="top">
            <a-col class="col" :xs="70" :sm="70" :md="70" :lg="70" :xl="12">
                <a-timeline>
                    <a-timeline-item data-aos="fade-in" v-for="card in experience.cards">
                        <a-card class="experience-card" :bordered="true" style="width: 100%">
                            <template v-slot:title>
                                <div style="display: inline; float: left; margin-right: 0.5rem;">
                                    <h1 class="title">{{card.title}}</h1>
                                </div>
                                <h1 class="date-title">{{formatDate(card.date_from)}} - {{formatDate(card.date_to)}}</h1>
                                <span v-if="!!card.subtitle" class="sub-title">{{card.subtitle}}</span>
                            </template>
                            <template #extra><img width="50" draggable="false" :src="getImageUrl(card.icon)"></template>
                            <Markdown :source="card.md"/>
                        </a-card>
                    </a-timeline-item>
                </a-timeline>
                <hr class="line-content"/>
            </a-col>
            <a-col class="color-content col" :xs="70" :sm="70" :md="70" :lg="70" :xl="12">
                <a-timeline>
                    <a-timeline-item data-aos="fade-in" v-for="card in experience.unicards">
                        <a-card class="experience-card" :bordered="true" style="width: 100%">
                            <template v-slot:title>
                                <div style="display: inline; float: left; margin-right: 0.5rem;">
                                    <h1 class="title">{{card.title}}</h1>
                                </div>
                                <h1 class="date-title">{{formatDate(card.date_from)}} - {{formatDate(card.date_to)}}</h1>
                                <span v-if="!!card.subtitle" class="sub-title">{{card.subtitle}}</span>
                            </template>
                            <template #extra><img width="50" draggable="false" :src="getImageUrl(card.icon)"></template>
                            <Markdown :source="card.md"/>
                        </a-card>
                    </a-timeline-item>
                </a-timeline>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import type { Module } from '@/api/user_interface';
    import Markdown from 'vue3-markdown-it';
    import { mainStore } from '@/stores/store';

    export default defineComponent({
        setup() {
            const getImageUrl = (name: string) => {
                return new URL(`../assets/logo/${name}`, import.meta.url).href
            }
            return { getImageUrl }
        },
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
            }
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

<style lang="scss">
    .ant-timeline-item-tail {
        border-left-color: rgb(160, 172, 182);
    }
</style>

<style scoped lang="scss">
    @import '../styles/variable';
    @import '../styles/main';
    
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }

    .flex-container > div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
        }

    .col {
        padding: 0 1rem;
    }

    .line-content {
        visibility: hidden;

    }


    @media screen and (max-width: $--screen-sm-min) {
        .col {
            padding: 0;
            min-width: 20rem;
        
            .line-content {
                visibility: visible;
                border: 2px solid rgb(255, 255, 255);
                margin-left: 1.6rem;
            }
            &.color-content {
                margin-top: 2rem;
            }
        }
    }
    
    @media screen and (max-width: $--screen-lg-min) and (min-width: $--screen-sm-min) {
        .col {
            padding: 0;
            min-width: 25rem;

            .line-content {
                visibility: visible;
                border: 2px solid rgb(255, 255, 255);
                margin-left: 1.6rem;
            }
            &.color-content {
                margin-top: 2rem;
            }
        }
    }

    .experience-card {
        .title {
            width: 100%;
            font-size: 1.2rem;
            overflow: hidden;
            margin: 0;
            white-space: normal;
        }

        .date-title {
            width: 100%;
            font-size: .8rem;
            display: table-caption;
            margin-top: .4rem;
            padding-right: 1rem;
        }

        .sub-title {
            width: 100%;
            font-size: .6rem;
            display: block;
            margin-top: .2rem;
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
