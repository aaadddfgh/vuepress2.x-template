# vuepress2.x-template
![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/aaadddfgh/vuepress2.x-template/deploy.yml?branch=master&label=Action)

this is a vuepress2.x template project, which helps you create a [vuepress](https://github.com/vuepress) site fast fastly. 

And fast pulish github-pages

# start
download this repo and run following command then start your site

```
npm install
npm run docs:dev
```
base `docs/.vuepress/config.ts`

# more
## plugin
this template uses following plugin
+ @vuepress/plugin-register-components : use .vue file in /docs/.vuepress/components
+ @vuepress/plugin-back-to-top : back to top
+ @vuepress/plugin-search: search title in markdown
## Github-Action
fast deploy page to branch `gh-pages`

you need modify your repo setting to enable this 

refer https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

# License
MIT
