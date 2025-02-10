import {SidebarMulti} from "vuepress-theme-plume/lib/shared";


export const mySidebar: SidebarMulti = {
    '/guide/': [
        {
            text: '介绍',
            collapsed: false,
            prefix: 'summary/',
            items: [
                {text: '简介', link: 'intro'},
                {text: '快速开始', link: 'quick-start'},
                {text: '为什么选择我们？', link: 'why'},
            ]
        },
        {
            text: '参考',
            collapsed: false,
            prefix: 'reference/',
            items: [
                {text: 'RBAC', link: 'RBAC'},
            ]
        },
        {
            text: '部署',
            collapsed: false,
            prefix: 'deploy/',
            items: [
                {text: 'Docker', link: 'Docker'},
                {text: '传统', link: 'legacy'},
            ]
        },
        {
            text: '其他',
            collapsed: false,
            prefix: 'other/',
            items: [
                {text: '更新记录', link: 'changelog'},
            ]
        }
    ],
    '/plugin/': [
        {
            text: '插件',
            collapsed: false,
            items: [
                {text: '前言', link: 'before'},
                {text: '插件开发', link: 'dev'},
                {text: '插件市场', link: 'market'},
            ]
        }
    ]
}
