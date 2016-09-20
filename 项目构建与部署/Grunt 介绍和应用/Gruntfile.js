module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // 压缩
        uglify: {
            options: {
                // 压缩文件顶部显示
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            static_mappings: {
                // Because these src-dest file mappings are manually specified, every
                // time a new file is added or removed, the Gruntfile has to be updated.
                files: [
                    {src: 'js/index.js', dest: 'build/index.min.js'},
                    {src: 'js/main.js', dest: 'build/main.min.js'},
                ],
            }
        },
        // 合并
        concat: {
            bar: {
                src: ['build/*.js'],
                dest: 'dest/all.min.js'
            },
        },
        // 观察
        watch: {
            files: ['js/index.js'],
            tasks: ['uglify', 'concat']
        },
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify', 'concat','watch']);

};