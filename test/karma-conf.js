module.exports = function(config){
    config.set({
    //  root path location that will be used to resolve all relative paths in files and exclude sections, should be the root of your project
    basePath : '../',
 
    // files to include, ordered by dependencies
    files : [
      // include relevant Angular files and libs
       'public/app/js/libs/angular.js',
       'public/app/js/libs/angular-mocks.js',
       'public/app/js/build.js'
      // 
      
      // 'test/spec/**/*.js'
    ],
    // files to exclude
    exclude : [],
 
    // karma has its own autoWatch feature but Grunt watch can also do this
    autoWatch : false,
 
    // testing framework, be sure to install the karma plugin
    frameworks: ['jasmine'],
 
    // browsers to test against, be sure to install the correct karma browser launcher plugin
    browsers : ['PhantomJS'],
 
    // progress is the default reporter
    reporters: ['progress'],
 
    // map of preprocessors that is used mostly for plugins
    preprocessors: {
 
    },
 
    // list of karma plugins
    plugins : [
        'karma-jasmine',
        'karma-phantomjs-launcher'
    ]
})}