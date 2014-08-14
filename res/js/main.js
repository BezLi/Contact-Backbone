requirejs.config({
	baseUrl: 'res/js/libraries',
	paths: {		
        'backbone': 'backbone'       
	},
    urlArgs: "version=" + (new Date()).getTime()
});

require(['../app'], function(app) {
    app.initialize();
});