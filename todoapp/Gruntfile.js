// Assign an anonymous function to module.exports.
// The function will receive the grunt object as an argument.
module.exports = function(grunt) {

  // Add your plugin initializations and options in the initConfig call
  grunt.initConfig({

    // Attach your plugin's options. For example, the grunt-bower-concat
    // plugin expects its options to be added to the property "bower_concat"
    bower_concat: {
      all: {
        dest: 'public/javascripts/vendor/all.js',
        dependencies: {
          'underscore':'jquery',
          'backbone': 'underscore',
        }
      },
    },
    uglify: {
      my_target: {
        files: {
          "public/javascripts/vendor/all.js": ["public/javascripts/vendor/all.js"]
        }
      },
    },
    handlebars: {
      all: {
        files: {
          "public/javascripts/handlebars_templates.js": ["handlebars/**/*.hbs"]
        },
        options: {
          processContent: removeWhitespace,
          processName: extractFileName
        }
      }
    },
    clean: {
      build: {
        src: ["public/javascripts/vendor/all.js", "public/stylesheets/style.css", "public/javascripts/handlebars_templates.js"]
      }
    }    
  });

  // Load any Grunt plugins by name here
  [
    "grunt-bower-concat",
    "grunt-contrib-uglify",
    "grunt-contrib-handlebars",
    "grunt-contrib-clean"
  ].forEach(function(plugin) {
    grunt.loadNpmTasks(plugin);
  });

  // Register task names here. These are run by calling the task by name when
  // using the Grunt CLI. The "default" task is run when running the Grunt CLI
  // without a task name.
  grunt.registerTask("default", ["clean", "bower_concat", "uglify", "handlebars"]);
};



function removeWhitespace(template) {
  return template.replace(/ {2,}/mg, "").replace(/\r|\n/mg, "");
}

function extractFileName(file) {
  return file.match(/\/(.+).hbs$/).pop()
}