<template>
    <a-layout class="layout-menu">
        <div class="header">
            <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                <img draggable="false" src="../assets/avatar_secondary.jpg">
            </span>
            <span>{{ getBanner.name }}</span>
        </div>
        <a-layout-content class="menu">
            <a-menu>
                <a-menu-item v-for="m in getMenus" :key="m.id">
                    <home-outlined v-if="m.icon === 'home'" />
                    <idcard-outlined v-else-if="m.icon === 'idcard'" />
                    <user-outlined v-else-if="m.icon === 'user'"/>
                    <fund-outlined v-else-if="m.icon === 'fund'"/>
                    <info-circle-outlined v-else/>
                    <a v-smooth-scroll :href="'#' + m.id" style="padding-left: 10px;" @click="closeMenuDrawer">{{m.name}}</a>
                </a-menu-item>
            </a-menu>
        </a-layout-content>
        <a-layout-footer class="footer">
            <a-row type="flex" justify="center" align="middle" :gutter="2">
                <a-col span="24"><Social color="rgb(136,136,136)" :size="1.2"/></a-col>
            </a-row>
            <a-row type="flex" justify="center" align="middle" :gutter="2">
                <a-col span="24">
                    <a style="color: rgb(136,136,136); font-size: .6em;" href="https://alexbmj.com" target="_blank">
                        AlexBMJ
                    </a>
                </a-col>
            </a-row>
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Social from '@/components/footer/Social.vue';
    import { mapState } from 'pinia';
    import { mainStore } from '@/stores/store';
    import { HomeOutlined, IdcardOutlined, UserOutlined, InfoCircleOutlined, FundOutlined } from '@ant-design/icons-vue';

    export default defineComponent({
        components: {
            Social,
            HomeOutlined,
            IdcardOutlined,
            UserOutlined,
            FundOutlined,
            InfoCircleOutlined
        },
        methods: {
            closeMenuDrawer() {
                this.$emit('menuClick');
            }
        },
        computed: {
            ...mapState(mainStore, ['getBanner', 'getMenus']),
        },
        created() {
            this.getMenus
            this.getBanner
        }
    })
</script>

<style>
    .ant-layout-sider-dark {
        background: white;
    }

    .ant-menu-item {
        border-collapse: collapse;
        border-radius: 0.5em;
    }
</style>

<style scoped lang="scss">
    @import '../styles/variable';
    @import '../styles/main';

    .layout-menu {
        width: 100%;
        height: 100vh;
        max-height: 100%;
        text-align: center;
        overflow: auto;

        .header, .menu, .footer {
            background-color: white !important;
        }

        .header {
            margin: 2rem auto;
            .avatar {
                width: 100px;
                height: 100px;
                line-height: 100px;
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
                font-size: 1.1em;
            }

            a {
                display: inline;
            }
        }

        .footer {
            padding: 10px;
            display: block;

            * {
                color: $--color-gray;
            }

            & > div {
                margin: 0.5rem auto;
            }
        }
    
        @media screen and (max-height: 325px) {
            .footer {
                display: none;
            }
        }

        @media screen and (max-height: 550px) {
            .header {
                display: none;
            }
        }
    }
</style>
