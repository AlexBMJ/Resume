<template>
    <div class="content skills" id="skills">
        <ModuleHeader :title="skills.header.title" :sub-title="skills.header.subtitle"/>
        <a-row data-aos="fade-in" class="keys-row" type="flex" justify="left" align="top">
            <a-col class="keys-col spacing" justify="left" v-for="(entries,topic) in skills.skills.topics" 
            :xs="35" :sm="35" :md="35" :lg="35" :xl="12">
                <table>
                    <tr data-aos="fade-in">
                        <th>{{topic}}</th>
                        <th>Proficiency</th>
                    </tr>
                    <tr data-aos="fade-in" v-for="entry in entries">
                        <td style="font-size: large;">
                        <img class="logo" draggable="false" :src="getImageUrl(entry.icon)">
                        {{entry.name}}
                        </td>
                        <td class="score">
                            <a-rate :value="entry.score" character="⬤" disabled /> 
                        </td>
                    </tr>
                </table>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import ModuleHeader from '@/components/module/ModuleHeader.vue';
    import ModuleSkeleton from '@/components/module/ModuleSkeleton.vue';
    import type {Module} from '@/api/user_interface';
    import Markdown from 'vue3-markdown-it';
    import { mainStore } from '@/stores/store';
    import { CheckCircleFilled } from '@ant-design/icons-vue';

    export default defineComponent({
        setup() {
            const getImageUrl = (name: string) => {
                return new URL(`../assets/logo/${name}`, import.meta.url).href
            }
            return { getImageUrl }
        },
        data() {
          return {
            test: 0,
            store: mainStore()
          }
        },
        components: {
            ModuleHeader,
            ModuleSkeleton,
            CheckCircleFilled,
            Markdown,
        },
        computed: {
            skills(): Module {
                return this.store.getModule('skills');
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
            simplifyUrl(url: string): string {
                const strRegex = /^(((https|http|ftp|rtsp|mms|mailto):(\/\/)?)?)?/;
                return url.replace(strRegex, '');
            },
        }
    })
</script>

<style scoped lang="scss">
    @import '../styles/variable';
    @import '../styles/main';

    .skills {
        table {
            font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            max-width: 50rem; 
        }

        th {
            border: 0px solid rgb(227, 227, 227);
            padding: 8px;
            font-size: large;
        }

        td, th {
            border: 0px solid rgb(227, 227, 227);
            padding: 8px;
        }

        .logo {
            margin-left: 0.2rem;
            margin-right: 0.5rem;
        }

        .score {
            width: 160px;
        }

        tr:nth-child(even){background-color: #ebedf0;}

        tr:hover {background-color: #e3882d88;}

        th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04AA6D;
            color: white;
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

        .spacing {
            padding-right: 2rem;
        }

        .keys-row {
            margin: 1rem auto;

            .keys-col {
                margin: .5rem auto;
                margin-left: 0;
                word-break: break-word;
                width: 100%;

                .key {
                    font-weight: bold;
                }

                .value {
                    color: inherit;
                    text-decoration: underline;
                }
            }
        }

        @media screen and (max-width: $--screen-md-min) {
            .col {
                padding: 0;
                &.color-content {
                    margin-top: 1.5rem;
                }
            }

            .spacing {
                padding-right: 0rem;
            }
        }

        @media screen and (max-width: $--screen-lg-min) {
            .spacing {
                padding-right: 0rem;
            }
        }
    }
</style>
