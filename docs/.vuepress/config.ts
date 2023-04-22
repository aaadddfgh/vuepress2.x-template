
import { defaultTheme ,defineUserConfig} from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base:"/",
  
  title:"vuepress",
  theme: defaultTheme({
    navbar: [
      {
        
        text: 'home',
        link: '/',
      },
    ],
    
  }),
  plugins:[
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    backToTopPlugin(),
    searchPlugin({//title only search

    }),
    
  ],
})