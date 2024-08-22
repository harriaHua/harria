/*
 * @Description: 
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2024-08-22 14:15:03
 * @LastEditors: Harria
 * @LastEditTime: 2024-08-22 14:24:09
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/harria/',
  title: "Harria",
  description: "一个梦想是为国铸器和睡觉自由的个人站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
