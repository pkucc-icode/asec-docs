---
home: true
watermark: false
config:
  - type: 'hero'
    full: true
    background: tint-plate
    hero:
      name: ASec安全综合管理平台
      tagline: 专为高校打造的综合性管理平台
      text: 守护广大高校的网络空间，助力平安校园建设
      actions:
        - theme: brand
          text: 快速开始 ->
          link: /guide/summary/quick-start
        - theme: alt
          text: 为什么选择我们?
          link: /guide/summary/why
  - type: features
    features:
      - title: 最新技术栈
        icon: 🚀
        details: 基于 gin 、gorm等最新技术栈
      - title: 自研架构
        icon: 🧠
        details: 独特的「伪三层架构」，让所有开发者轻松驾驭
      - title: JWT
        icon: 🔏
        details: 带有缓存和白名单的 JWT 中间件自动认证
      - title: 权限管理
        icon: 🛠️
        details: 提供 Casbin、Role-Menu 两种 RBAC 权限方案。开关控制选择
      - title: 代码生成
        icon: ⚙️
        details: 提供后端代码自动生成，告别繁琐基础代码结构 cv
      - title: 时区时间
        icon: ⌛
        details: 通过配置一键应用全局时区时间，告别时间处理烦恼
      - title: 日志
        icon: 📝
        details: 内置十分强大的日志系统，全方位 Trace ID 助你一步锁定问题
      - title: Docker
        icon: 🐳
        details: 提供 Docker compose 一键部署方案
---

<script setup lang="ts">
import { goldSponsors, generalSponsors } from '@source/.vuepress/data/sponsors'
</script>

<h1 v-if="goldSponsors.length" align="center">特别赞助商</h1>

<Swiper
v-if="goldSponsors.length"
:items="goldSponsors"
mode="broadcast"
:height="200"
:slides-per-view="3"
:space-between="10"
mousewheel
/>

<h2 v-if="generalSponsors.length" align="center">赞助商</h2>

<Swiper
v-if="generalSponsors.length"
:items="generalSponsors"
mode="carousel"
:height="150"
:slides-per-view="4"
:space-between="10"
:speed="5000"
/>
