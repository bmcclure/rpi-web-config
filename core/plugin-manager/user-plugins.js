var fs = require('fs')

var pluginsFile = '/etc/pi-config/plugins'
var plugins = []

if (fs.existsSync(pluginsFile)) {
  plugins = fs.readFileSync(pluginsFile).toString().split('\n')
}

plugins = plugins.filter(n => { return n })

module.exports = plugins
