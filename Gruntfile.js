// Generated on 2014-06-15 using generator-bespokeplugin v0.2.1

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*!\n' +
        ' * <%= pkg.title || pkg.name %> v<%= pkg.version %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' *\n' +
        ' * Copyright <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %>\n' +
        ' * This content is released under the' +
        ' <%= _.pluck(pkg.licenses, "type").join(", ") %> license<%= pkg.licenses.length === 1 ? "" : "s" %>\n' +
        '' +
        ' */\n\n',
      microbanner: '/*! <%= pkg.title || pkg.name %> v<%= pkg.version %> ' +
        '© <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, ' +
        'Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
    },
    clean: {
      files: ['dist']
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= meta.microbanner %>'
      },
      dist: {
        src: ['<%= concat.dist.dest %>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      src: [
        'Gruntfile.js',
        'src/**/*.js',
        'spec/**/*.js',
        'demo/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    micro: {
      src: '<%= uglify.dist.dest %>',
      options: {
        limit: 1024,
        gzip: true
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: './',
          keepalive: true,
          //middleware: function(connect, options) {
          //  return [
          //    require('connect-livereload')({
          //      port: config.watch.public.options.livereload
          //    }),
          //    connect.static(options.base)
          //  ];
          //}
        }
      }
    },
    watch: {
      files: '<%= jshint.src %>',
      tasks: ['default']
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'micro']);

};
