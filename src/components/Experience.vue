<template>
    <div class="content" id="experience">
        <ModuleHeader :title="experience.header.title" :sub-title="experience.header.subtitle"/>
        <a-row type="flex" justify="left" align="top">
            <a-col class="col" :xs="70" :sm="70" :md="70" :lg="70" :xl="12">
                <a-timeline class="timeline">
                    <a-timeline-item data-aos="fade-in" v-for="card in experience.cards.slice().reverse()">
                        <ExperienceCard :card="card" />
                    </a-timeline-item>
                </a-timeline>
                <hr class="line-content"/>
            </a-col>
            <a-col class="color-content col" :xs="70" :sm="70" :md="70" :lg="70" :xl="12">
                <a-timeline>
                    <a-timeline-item data-aos="fade-in" v-for="unicard in experience.unicards.slice().reverse()">
                        <ExperienceCard :card="unicard" />
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
    import { mainStore } from '@/stores/store';
    import ExperienceCard from '@/components/module/ExperienceCard.vue';

    export default defineComponent({
        data() {
          return {
            store: mainStore()
          }
        },
        components: {
            ModuleHeader,
            ExperienceCard
        },
        computed: {
            experience(): Module {
                return this.store.getModule('experience')
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
    @use '../styles/variable';
    @use '../styles/main';

    .col {
        padding: 0 1rem;
    }

    .line-content {
        visibility: hidden;
    }


    @media screen and (max-width: variable.$screen-sm-min) {
        .col {
            padding: 0;
            min-width: 18rem;
        
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
    
    @media screen and (max-width: variable.$screen-lg-min) and (min-width: variable.$screen-sm-min) {
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

</style>
