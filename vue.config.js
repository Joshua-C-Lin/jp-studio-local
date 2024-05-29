const { defineConfig } = require("@vue/cli-service");
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

    publicPath: '/jp-studio-official/'
});
