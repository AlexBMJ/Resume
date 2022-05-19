<template>
    <div class="social" :style="{'font-size': size + 'em'}">
        <a :style="{color: color}" :href="getSocial['github']" target="_blank"><github-outlined /></a>
        <!-- <a-popover arrowPointAtCenter>
            <template slot="content"><img style="width: 360px; max-width: 80vw; height: auto;"  alt="林中小舍" src="../../assets/wechat.jpg"/></template>
            <a :style="{color: color}"><a-icon type="wechat" /></a>
        </a-popover> -->
        <a :style="{color: color}" :href="getSocial['twitter']" target="_blank"><twitter-outlined /></a>
        <a :style="{color: color}" :href="getSocial['linkedin']" target="_blank"><linkedin-outlined /></a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia';
import { mainStore } from '@/stores/store';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: {
        GithubOutlined,
        TwitterOutlined,
        LinkedinOutlined
    },
    props: {
        color: String,
        size: Number,
    },
    computed: {
        ...mapState(mainStore, ['getSocial']),
    },
    created() {
        this.getSocial
    }
})
</script>

<style scoped lang="scss">
    .social {
        &>* {
            margin: 0.5em;
        }
    }
</style>

