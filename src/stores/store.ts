import { defineStore } from "pinia";
import api from '@/api';
import type { Module, UserData, Banner, Anchor } from '@/api/user_interface';
import { find, concat, filter, map } from 'lodash/fp';

const DEFAULT_TITLE = '林舍';
const DEFAULT_MODULE = {display: false, anchor: {id: '', icon: '', name: ''}, header: {title: '', subtitle: ''}};

function find_module(modules: Module[], id: string) {
    return find((module) => module.anchor.id === id, modules) || DEFAULT_MODULE;
}

export const mainStore = defineStore({
    id: 'mainStore',
    state: (): UserData => ({
        title: DEFAULT_TITLE,
        social: {},
        banner: {
            anchor: {
                id: 'banner',
                icon: 'home',
                name: 'Home',
            },
        },
        modules: [],
    }),
    getters: {
        getTitle: (state) => {return (state.title || DEFAULT_TITLE)},
        getSocial: (state) => {return (state.social || {})},
        getMenus (state): object[] {
            if (state.modules.length < 1) return []
            const _modules = concat([state.banner], filter((module) => module.display, state.modules));
            return map((module) => module.anchor, _modules);
        },
        getModuleIds(state): string[] {
            const modules = filter((module) => module.display, state.modules);
            return map((module) => module.anchor.id, modules);
        },
        getBanner: (state) => {return (state.banner || {} as Banner)},
        getModule: (state) => (id: string) => {return find_module(state.modules, id)},
    },
    actions: {
        init() {
            api.init((userData: UserData) => {
                this.title = userData.title;
                this.social = userData.social;
                this.banner = userData.banner;
                this.modules = userData.modules;

                if (DEFAULT_TITLE === document.title) {
                    document.title = this.title;
                }
            });
        },
    },
});
