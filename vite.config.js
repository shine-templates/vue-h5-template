import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
import postCssPxToRem from 'postcss-pxtorem'
import Upload from 'vite-plugin-upload-server'
import legacy from '@vitejs/plugin-legacy'

const server = {
  development: {
    host: '',
    username: '',
    password: '',
    filePath: '',
  },
  test: {
    host: '',
    username: '',
    password: '',
    filePath: '',
  },
  production: {
    host: '',
    username: '',
    password: '',
    filePath: '',
  },
}

export default defineConfig(({ mode, ...props }) => {
  return {
    base: mode === 'development' ? './' : '/payment-mobile/',
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      Upload({
        mode,
        ...props,
        build: './dist',
        server,
      }),
      legacy({
        targets: ['chrome 52'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        renderLegacyChunks: true,
        polyfills: [
          'es.symbol',
          'es.array.filter',
          'es.promise',
          'es.promise.finally',
          'es/map',
          'es/set',
          'es.array.for-each',
          'es.object.define-properties',
          'es.object.define-property',
          'es.object.get-own-property-descriptor',
          'es.object.get-own-property-descriptors',
          'es.object.keys',
          'es.object.to-string',
          'web.dom-collections.for-each',
          'esnext.global-this',
          'esnext.string.match-all',
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        utils: resolve(__dirname, './src/utils'),
        api: resolve(__dirname, './src/api'),
      },
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'Chrome > 31',
              'ff > 31',
              'ie >= 8',
            ],
          }),
          postCssPxToRem({
            propList: ['*'],
            rootValue({ file }) {
              return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            selectorBlackList: ['norem'],
          }),
        ],
      },
    },
    build: {
      target: 'es2015',
    },
    server: {
      port: 8080,
      open: true,
      host: '0.0.0.0',
      proxy: {},
    },
  }
})
