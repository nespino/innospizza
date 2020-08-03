const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.extend("addWebpackLoaders", (webpackConfig, loaderRules) => {
    loaderRules.forEach((loaderRule) => {
        webpackConfig.module.rules.push(loaderRule);
    });
});

mix.addWebpackLoaders([
    {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
            name: './sounds/[name].[ext]'
        }
    },
]);


