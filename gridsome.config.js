// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  icon: {
    favicon: 'https://res.cloudinary.com/aniboaz/image/upload/c_fill,g_auto,dpr_auto,q_auto,w_96,h_96,b_gold/bgb.jpeg',
    touchicon: 'https://res.cloudinary.com/aniboaz/image/upload/c_fill,g_auto,dpr_auto,q_auto,w_167,h_167,b_gold/bgb.jpeg'
  },
  siteName: 'Gridsome Portfolio Starter',
  siteDescription: 'A simple portfolio theme for Gridsome powered by Tailwind CSS v1.0',
  siteUrl: 'https://aniboaz.netlify.com/',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            route: 'tag/:id',
            create: true
          }
        },
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Gridsome Portfolio Starter Blog',
          feed_url: 'https://aniboaz.netlify.com/rss.xml',
          site_url: 'https://aniboaz.netlify.com/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://aniboaz.netlify.com' + node.path,
          author: 'Boaz Lederer',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
