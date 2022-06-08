<template>
    <div class="social" :style="{'font-size': size + 'em'}">
        <a :style="{color: color}" :href="getSocial['github']" target="_blank"><github-outlined /></a>
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
        animation-duration: 250ms;
        &>* {
            margin: 0.5em;
        }

        a {
            transition: 250ms ease-in-out; 
            opacity: 75%;
        }
        a:hover {
            opacity: 100%; 
        }
    }
</style>

