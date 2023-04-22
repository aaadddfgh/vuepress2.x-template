# vuepress2.x-template
this is a vuepress2.x template project, which helps you fast create an [vuepress](https://github.com/vuepress) site. 

And fast pulish with github-pages

# start
download this repo and run following command then start your site

```
npm install
npm run docs:dev
```

# more
## plugin
this template uses following plugin
+ @vuepress/plugin-register-components : use .vue file in /docs/.vuepress/components
+ @vuepress/plugin-back-to-top : back to top
+ @vuepress/plugin-search search file title
## Github-Action
fast deploy page to branch `gh-pages`

you need modify your repo setting to enable this 

refer https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

# License
MIT