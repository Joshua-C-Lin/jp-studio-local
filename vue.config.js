const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    i18n: {
      locale: "zh",
      fallbackLocale: "zh",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },

  publicPath: "/jp-studio-official/",

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true), // 根據你的需要設置為 true 或 false
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // 根據你的需要設置為 true 或 false
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false), // 根據你的需要設置為 true 或 false
      }),
    ],
  },
});
