(function(){chrome.app.runtime.onLaunched.addListener(function(){return chrome.app.window.create("window.html",{bounds:{width:400,height:500}})})}).call(this);