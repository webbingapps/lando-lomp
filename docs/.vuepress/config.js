import {defineUserConfig} from '@vuepress/cli';
import {defaultThemePlus} from '@lando/vuepress-theme-default-plus';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando LOMP Plugin Documentation',
  base: '/lomp/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/lomp/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/lomp/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: defaultThemePlus({
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/lomp',
    sidebarHeader: {
      enabled: true,
      title: 'LOMP Plugin',
      icon: '/images/lompicon.png',
    },
    sidebar: [
      {
        text: 'Overview',
        link: '/index.html',
      },
      '/getting-started.html',
      '/config.html',
      '/tooling.html',
      '/support.html',
      {text: 'Examples', link: 'https://github.com/lando/lomp/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/lomp/releases'},
      '/development.html',
    ],
  }),
});
