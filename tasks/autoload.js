
var fs = require('fs'),
  path = require('path');

// autoload thing
//
// pretty basic for now, but does the trick. This file, being
// a `.js` file inside the `~/.grunt/tasks` directory, is automatically
// loaded by grunt.

// The idea is that any other folder than the `init` one is required to
// load-in any additional task or helper. This autoload mechanism + the
// npm install script enables task to be contained within their own
// module, with dependencies properly sandboxed.

fs.readdirSync(__dirname).forEach(function(f) {
  var filepath = path.join(__dirname, f);

  if(!fs.statSync(filepath).isDirectory()) return;
  if(f === 'init') return;

  // require the tasks
  require('./' + f);
});
