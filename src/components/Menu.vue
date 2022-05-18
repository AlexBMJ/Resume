<!-- 菜单 -->

<template>
    <a-layout class="layout-menu">
        <div class="header">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../assets/avatar.jpg">
            </span>
            <span>{{ banner.name || '林中小舍'}}</span>
        </div>
        <a-layout-content class="menu">
            <a-menu>
                <a-menu-item v-for="m in menus" v-bind:key="m.id">
                    <span>{{ console.log(m.icon) }}</span>
                    <!-- <a-icon :type="m.icon" /> -->
                    <a v-smooth-scroll :href="'#' + m.id" @click="closeMenuDrawer">{{m.name}}</a>
                </a-menu-item>
            </a-menu>
        </a-layout-content>
        <a-layout-footer class="footer">
            <a-row type="flex" justify="center" align="middle" :gutter="2">
                <a-col span="24"><Social color="rgb(136,136,136)" :size="1.2"/></a-col>
            </a-row>
            <a-row type="flex" justify="center" align="middle" :gutter="2">
                <!-- <a-col span="24"><Copyrights color="rgb(136,136,136)" :size=".6"/></a-col> -->
            </a-row>
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Social from '@/components/footer/Social.vue';
    import { mapState } from 'pinia';
    import { mainStore } from '@/stores/store';

    export default defineComponent({
        components: {
            Social,
        },
        methods: {
            closeMenuDrawer() {
                this.$emit('menuClick');
            }
        },
        computed: {
            ...mapState(mainStore, ['banner', 'menus']),
        },
        created() {
            this.menus
            this.banner
        }
    })
</script>

<style scoped lang="scss">
    @import '../styles/variable';

    .layout-menu {
        width: 100%;
        height: 100vh;
        text-align: center;

        .header, .menu, .footer {
            background-color: white !important;
        }

        .header {
            margin: 2rem auto;
            .avatar {
                width: 80px;
                height: 80px;
                line-height: 80px;
            }
            span {
                display: block;
                margin-top: .5rem;
                font-size: 1.2em;
                font-weight: 500;
                color: $--color-gray;
            }
        }

        .menu {
            * {
                font-size: 1em;
            }

            a {
                display: inline;
            }
        }

        .footer {
            padding: 10px;
            margin-bottom: 1rem;
            * {
                color: $--color-gray;
            }

            & > div {
                margin: .5rem auto;
            }
        }
    }
</style>
