import {myNavbar} from "./navbar";
import {mySidebar} from "./sidebar";
import {defineUserConfig} from "vuepress";
import plumeTheme from "vuepress-theme-plume";
import {viteBundler} from '@vuepress/bundler-vite'
import {myBulletin} from "./bulletin";
import {baiduAnalyticsPlugin} from "@vuepress/plugin-baidu-analytics";
import {googleAnalyticsPlugin} from "@vuepress/plugin-google-analytics";


export default defineUserConfig({
    base: '/asec-docs/',
    lang: 'zh-CN',
    title: 'Asec',
    head: [
        ['link', {rel: 'icon', href: 'https://avatars.githubusercontent.com/u/151118965?s=200&v=4'}]
    ],
    plugins: [
        baiduAnalyticsPlugin({
            id: '6202e3701ae5a932577a1cf195084e9e'
        }),
        googleAnalyticsPlugin({
            id: 'G-WVH2LQEPKY'
        })
    ],
    theme: plumeTheme({
        hostname: 'https://pkucc-icode.github.io/asec-docs/',
        blog: false,
        notes: false,
        autoFrontmatter: {
            title: true,
            permalink: false,
            createTime: false,
        },
        bulletin: myBulletin,
        sidebar: mySidebar,
        navbar: myNavbar,
        logo: 'https://avatars.githubusercontent.com/u/151118965?s=200&v=4',
        docsRepo: 'https://github.com/pkucc-icode/asec-docs',
        docsBranch: 'master',
        docsDir: 'docs',
        navbarSocialInclude: ['github', 'gitee', 'discord'],
        editLinkText: '在 GitHub 上编辑此页面',
        lastUpdated: false,
        contributors: false,
        footer: {
            message: 'MIT License',
            copyright: 'Copyright © 2024-present Asec'
        },
        plugins: {
            shiki: {
                languages: ['shell', 'yaml', 'py']
            },
            watermark: true,
            markdownPower: {
                icons: true,
                bilibili: true,
            },
            markdownEnhance: {
                mermaid: true,
            },
            comment: {
                provider: 'Giscus',
                comment: true,
                repo: 'pkucc-icode/asec-docs',
                repoId: 'R_kgDOMv5sMQ',
                category: 'Comment',
                categoryId: 'DIC_kwDOMv5sMc4CmLp9',
                lazyLoading: true,
            },
        },
    }),
    bundler: viteBundler(),
    shouldPrefetch: false,
})
