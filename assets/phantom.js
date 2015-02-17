var system = require('system');
var page = require('webpage').create();
var url = system.args[1];
var userAgent = system.args[2];
page.viewportSize = {
  width: 1024,
  height: 768
};
if(userAgent !== 'false'){
  page.settings.userAgent = userAgent;
}
page.open(url);
