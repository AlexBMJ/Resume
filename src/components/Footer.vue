<template>
    <a-row class="footer" type="flex" justify="center" align="middle" :gutter="2">
        <a-col :xs="24" :sm="8" :md="6" :lg="6" :xl="6">
            <a style="color: ghostwhite; font-size: 1em;" href="https://alexbmj.com" target="_blank">
                AlexBMJ
            </a>
        </a-col>
        <a-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
            <a-popover arrowPointAtCenter>
                <span class="avatar ant-avatar ant-avatar-circle ant-avatar-image">
                    <img alt="AlexBMJ" draggable="false" src="../assets/avatar_secondary.jpg"/>
                </span>
            </a-popover>
        </a-col>
        <a-col :xs="24" :sm="8" :md="6" :lg="6" :xl="6"><Social color="ghostwhite" :size="1.5" /></a-col>
    </a-row>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Social from '@/components/footer/Social.vue';

    export default defineComponent({
        components: {
            Social,
        },
    })
</script>

<style scoped lang="scss">
    @use '../styles/main';

    .footer {
        &>div{
            margin: 1rem auto;
        }

        background: #303030;

        .avatar {
            width: 60px;
            height: 60px;
            line-height: 60px;
        }
    }
</style>
