"bundle";!function(){var a=System.amdDefine;a("admin.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><section class="au-animate"><h2>${heading}</h2><div><!--       <div class="col-md-2">\n        <ul class="well nav nav-pills nav-stacked">\n          <li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}">\n            <a href.bind="row.href">${row.title}</a>\n          </li>\n        </ul>\n      </div> --><nav-bar router.bind="router"></nav-bar><div class="col-md-10" style="padding: 0"><router-view></router-view></div></div></section></template>'})}(),System.register("admin.js",[],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("Admin",d=function a(){c(this,a)}),a("Admin",d)}}}),function(){var a=System.amdDefine;a("app.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><require from="nav-bar.html"></require><require from="bootstrap/css/bootstrap.css"></require><nav-bar router.bind="router"></nav-bar><div class="page-host"><router-view></router-view></div></template>'})}(),System.register("app.js",[],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("App",d=function(){function a(){c(this,a)}return a.prototype.configureRouter=function(a,b){a.map([{route:["","welcome"],name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome"},{route:"admin",name:"admin",moduleId:"admin",nav:!0,title:"Admin"}]),this.router=b},a}()),a("App",d)}}}),System.register("main.js",["bootstrap"],function(a,b){"use strict";function c(a){a.use.standardConfiguration().developmentLogging(),a.start().then(function(){return a.setRoot()})}return a("configure",c),{setters:[function(a){}],execute:function(){}}}),function(){var a=System.amdDefine;a("nav-bar.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template bindable="router"><nav class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse"><span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#"><i class="fa fa-home"></i> <span>${router.title}</span></a></div><div class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse"><ul class="nav navbar-nav"><li repeat.for="row of router.navigation" class="${row.isActive ? \'active\' : \'\'}"><a data-toggle="collapse" data-target="#skeleton-navigation-navbar-collapse.in" href.bind="row.href">${row.title}</a></li></ul><ul class="nav navbar-nav navbar-right"><li class="loader" if.bind="router.isNavigating"><i class="fa fa-spinner fa-spin fa-2x"></i></li></ul></div></nav></template>'})}(),function(){var a=System.amdDefine;a("viewmodels/help.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><section class="ui segment"><div class="eight wide column help"><div class="ui fluid segment"><h3>${title}</h3><br>Choose a grid from the drop down menu.<br><br>You may check progress as you proceed by double clicking any number in the grid.<br><br>Feedback is provided below the grid.<br><br>The complete solution is available by clicking on the Solution button.<br><br>If more than one solution is possible, then only the first discovered will be published.</div></div></section></template>'})}(),System.register("viewmodels/help.js",[],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("Help",d=function a(){c(this,a),this.title="Quick Start"}),a("Help",d)}}}),function(){var a=System.amdDefine;a("welcome.html!github:systemjs/plugin-text@0.0.8.js",[],function(){return'<template><section class="au-animate"><h2>${heading}</h2><div class="ui stackable grid"><!--     <div class="three wide column">\n      <compose view-model="./viewmodels/controls"></compose>\n    </div>\n    <div class="six wide column">\n      <compose view-model="./viewmodels/sudokugrid"></compose>\n    </div> --><div class="four wide column"><compose view-model="./viewmodels/help"></compose></div></div></section></template>'})}(),System.register("welcome.js",[],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d;return{setters:[],execute:function(){a("Welcome",d=function a(){c(this,a),this.heading="The Most Difficult Sudoku Solved in Seconds"}),a("Welcome",d)}}});