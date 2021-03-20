const { environment } = require('@rails/webpacker')
// Adding webpack plugins for jquery, and popper
const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
}))
// End of plugins

module.exports = environment
