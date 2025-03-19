<template>
    <div class="content about" id="about">
        <ModuleHeader :title="about.header.title" :sub-title="about.header.subtitle"/>
        <a-row type="flex" justify="center" align="top">
            <a-col class="col" :xs="24" :sm="24" :md="24" :lg="10" :xl="8">
                <img data-aos="fade-in" class="avatar" draggable="false" src="../assets/avatar_about.jpg" alt=""/>
            </a-col>
            <a-col class="color-content col" :xs="24" :sm="24" :md="24" :lg="14" :xl="16">
                <span data-aos="fade-in" class="title color-title">{{about.header.subtitle}}</span>
                <span data-aos="fade-in" class="brief typer black">
                    <p class="sh">$</p>
                    <p class="about-typer"></p>
                </span>
                <Markdown data-aos="fade-in" style="max-width: 52rem; padding-top: 2rem;" :source="about.content.md"/>
                <a-row data-aos="fade-in" class="keys-row" type="flex" align="top">
                    <a-col class="keys-col" v-for="(value, name) in about.keys" v-bind:key="name"
                           :xs="24" :sm="24" :md="12" :lg="24" :xl="12">
                        <span class="key">{{name}}:</span>
                        <a class="value" v-if="isUrl(value)" :href="value" target="_blank" v-html="splitUrl(simplifyUrl(value))"></a>
                        <span v-else>{{value}}</span>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import ModuleSkeleton from '@/components/module/ModuleSkeleton.vue';
    import type {Module} from '@/api/user_interface';
    import typer from 'typer-js';
    // tslint:disable-next-line:no-var-requires
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
            ModuleSkeleton,
            Markdown,
        },
        computed: {
            about(): Module {
                return this.store.getModule('about');
            },
        },
        methods: {
            isUrl(content: string): boolean {
                const strRegex = '^(((https|http|ftp|rtsp|mms|mailto):)?//)'
                    + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' // ftp/user@
                    + '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP/URL- 199.194.52.184
                    + '|' // IP/DOMAIN
                    + '([0-9a-z_!~*\'()-]+.)*' // subdomain - www.
                    + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // subdomain
                    + '[a-z]{2,6})' // first level domain- .com or .museum
                    + '(:[0-9]{1,4})?' // port :80
                    + '((/?)|' // a slash isn't required if there is no file name
                    + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
                const re = new RegExp(strRegex);
                return re.test(content);
            },
            splitUrl(url: string): String {
                return url.split('//').map(str =>
                    // Insert a word break opportunity after a colon
                    str.replace(/(?<after>:)/giu, '$1<wbr>')
                    // Before a single slash, tilde, period, comma, hyphen, underline, question mark, number sign, or percent symbol
                    .replace(/(?<before>[/~.,\-_?#%])/giu, '<wbr>$1')
                    // Before and after an equals sign or ampersand
                    .replace(/(?<beforeAndAfter>[=&])/giu, '<wbr>$1<wbr>')
                    // Reconnect the strings with word break opportunities after double slashes
                ).join('//<wbr>')
            },
            simplifyUrl(url: string): string {
                const strRegex = /^(((https|http|ftp|rtsp|mms|mailto):(\/\/)?)?(www\.)?)?/;
                return url.replace(strRegex, '');
            },
            async runTyper() {
                await new Promise(resolve => setTimeout(resolve, 1000));
                typer('.about-typer').empty().pause(1000).cursor({ block: true, blink: 'hard', color: 'red' })
                .line(this.about.content.name, { min: 100, max: 350 })
                .pause(3000)
                .back('all')
                .repeat(Infinity);
            }
            },
        mounted() {
            this.runTyper();
        }
    })
</script>

<style scoped lang="scss">
    @use '../styles/variable';
    @use '../styles/main';
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@700&display=swap');

    .about {
        .about-typer {
            position: absolute;
            margin-left: 0.6em;
            font-family: 'Ubuntu Mono', monospace;
            font-size: large;
        }

        .sh {
            position: absolute;
            font-family: 'Ubuntu Mono', monospace;
            font-size: large;
        }
        .col {
            padding: 0 1rem;
        }

        .avatar {
            display: block;
            width: 100%;
            border-radius: 5px;
        }

        .title {
            letter-spacing: 5px;
            text-transform: uppercase;
        }

        .brief {
            display: block;
            margin: 1rem auto;
        }

        @media screen and (max-width: variable.$screen-md-min) {
            .col {
                padding: 0;
                &.color-content {
                    margin-top: 1.5rem;
                }
            }
        }

        .keys-row {
            margin: 1rem auto;

            .keys-col {
                margin: .5rem auto;
                overflow-wrap: break-word;
                word-wrap: break-word;
                word-break: break-word;
                hyphens: auto;
                padding-right: 1rem;

                .key {
                    margin-right: .5rem;
                    font-weight: bold;
                    font-family: 'Ubuntu Mono', monospace;
                    font-size: large;
                }

                .value {
                    color: inherit;
                    text-decoration: underline;
                    font-family: 'Ubuntu Mono', monospace;
                    font-weight: normal;
                    font-size: medium;
                }
            }
        }
    }
</style>
