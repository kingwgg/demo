import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import AutoImport from 'unplugin-auto-import/rspack';
import Components from 'unplugin-vue-components/rspack';
import { VantResolver } from '@vant/auto-import-resolver';
import { VueRouterImports } from "unplugin-vue-router";
// import VueRouterPlugin from 'unplugin-vue-router/webpack';


export default defineConfig({
  plugins: [pluginVue(),
  ],
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          resolvers: [VantResolver()],
          imports: ['vue', 'vue-router', 'vue-i18n', 'pinia']
        }),
        Components({
          resolvers: [VantResolver()],
          dirs: ["src/components"],
          extensions: ["vue"],
        }),
      ],
    },
  },
  output: {
    distPath: {
      root: 'dist'  // 确保与部署目录一致
    }
  }
});
