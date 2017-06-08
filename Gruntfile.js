module.exports = function(grunt){
    
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        public: 'public',
		publicApp: '<%= public %>/app',
		publicAppJS : '<%= publicApp %>/js',
		publicAppCss : '<%= publicApp %>/css',
        cssmin:{
        	combine:{
        		files:{
        			'<%= publicAppCss %>/main.css':['<%= publicAppCss  %>/main.css']
        		}
        	}
        },
        uglify:{
        	dist:{
        		files:{
        			'<%= publicAppJS %>/build.js':['<%= publicAppJS %>/{,*/}*.js']
        		}
        	}
        },
        karma: {
            options: {
                configFile: 'test/karma-conf.js'
            },
            unit: {
                singleRun: true
            }
    }

    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('default',['cssmin','uglify']);
    grunt.registerTask('test', [
        'karma'
    ]);
};