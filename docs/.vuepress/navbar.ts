import {defineNavbarConfig} from "vuepress-theme-plume";

export const myNavbar = defineNavbarConfig([
    {
        text: 'UI 演示',
        items: [
            {
                text: '演示',
                link: 'asec.pku.edu.cn'
            },
        ]
    },
    {
        text: '插件',
        icon: 'clarity:plugin-solid',
        link: '/plugin/before'
    },
    {
        text: '授权',
        icon: 'fluent:person-key-20-filled',
        link: '/guide/summary/why.md#承诺'
    },
    {
        text: '赞助',
        icon: 'ph:coffee-fill',
        link: '/sponsors'
    },
    {
        text: '互动',
        icon: 'game-icons:talk',
        link: 'https://wu-clan.github.io/homepage/'
    },
    {
        text: '关于',
        icon: 'mingcute:more-4-fill',
        items: [
            {
                text: '谁在使用',
                icon: 'mdi:user-check',
                link: '/who'
            },
            {
                text: '维护团队',
                icon: 'fa-solid:user-friends',
                link: '/team'
            },
            {
                text: '加入团队',
                icon: 'mingcute:user-add-2-fill',
                link: 'https://discord.com/channels/1185035164577972344/1319245794271956993'
            },
        ],
    }
])
