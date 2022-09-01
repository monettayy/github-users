const mix = require('laravel-mix');

mix.webpackConfig({
    output: {
        filename:'[name].js',
        chunkFilename: 'js/dist/[name].js',
    },
});

mix.js('resources/js/app.js', 'public/js').vue({
    version: 3,
})
.postCss('resources/css/app.css', 'public/css', [
    //
]);
