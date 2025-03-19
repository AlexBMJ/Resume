<template>
    <a-layout>
        <a-layout-header class="layout-header"><Banner/></a-layout-header>
        <a-layout>
            <a-layout-sider class="layout-sider" width="320"><a-affix><Menu/></a-affix></a-layout-sider>
            <a-layout class="layout-content">
                <a-affix>
                    <a-button :class="{'sider-menu-trigger': true, 'drawer-closed': !menuDrawerVisible, 'drawer-open': menuDrawerVisible}"
                            shape="circle" size="large" :icon="menuDrawerVisible ? '☰' : '☰'" @click="toggleMenuDrawer"></a-button>
                </a-affix>
                <a-layout-content><div id="anchor-next"></div></a-layout-content>
                <a-layout-content v-for="id in getModuleIds">
                    <About v-if="id === 'about'"/>
                    <TechnicalSkills v-if="id === 'skills'"/>
                    <Experience v-if="id === 'experience'"/>
                </a-layout-content>
                <a-layout-footer><Footer/></a-layout-footer>
            </a-layout>
        </a-layout>

        <a-drawer placement="left" :closable="true" :visible="menuDrawerVisible" @close="onMenuDrawerClose">
            <Menu @menuClick="onMenuDrawerClose" />
        </a-drawer>
    </a-layout>
</template>

<script lang="ts">
    import { mapState } from 'pinia';
    import { mainStore } from '@/stores/store';
    import { defineComponent } from 'vue'
    import Banner from '@/components/Banner.vue';
    import Menu from '@/components/Menu.vue';
    import About from '@/components/About.vue';
    import Experience from '@/components/Experience.vue';
    import Footer from '@/components/Footer.vue';
    import TechnicalSkills from '@/components/TechnicalSkills.vue';

    export default defineComponent({
        data() {
          return {
            menuDrawerVisible: false
          }
        },
        methods: {
          toggleMenuDrawer() {
            this.menuDrawerVisible = !this.menuDrawerVisible
          },
          onMenuDrawerClose() {
            this.menuDrawerVisible = false
          }
        },
        components: {
            Banner,
            Menu,
            About,
            TechnicalSkills,
            Experience,
            Footer,
        },
        computed: {
            ...mapState(mainStore, ['getModuleIds']),
        },
        created() {
            this.getModuleIds
        }
    })
</script>

<style scoped lang="scss">
    @use '../styles/variable';

    .layout-header {
        z-index: 0;
        height: 100vh;
        overflow-x: hidden;
        padding: 0;
    }

    .layout-content {
        position: relative;
    }

    .sider-menu-trigger {
        position: absolute;
        top: 20px;
        z-index: 1;


        &.drawer-closed {
            left: 20px;
        }

        &.drawer-open {
            left: -20px;
            z-index: -1;
        }
    }

    @media screen and (max-width: variable.$screen-sm-min) {
        .layout-sider {
            display: none;
        }
    }

    @media screen and (min-width: variable.$screen-sm-min) {
        .sider-menu-trigger {
            z-index: -1;
            display: none;
        }

        .layout-sider {
            box-shadow: 1px 0 5px #e0e0e0;
        }
    }
</style>
