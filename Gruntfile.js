module.exports = function(grunt){
	grunt.initConfig({
		/**
			step 1:
			将入口文件拷贝到产出目录
		**/
		copy: {
			demo3: {
				files: {
					"demo3/dist/page.min.js": ["demo3/src/main.js"]	
				}	
			}	
		},
		/**
			step 2:
			创建临时目录
			将需要合并的js文件转为具名函数，并保持独立的保存在一个临时目录里
		**/
		transport: {
			demo3: {
				options: {
					//生成具名函数的id格式
					idleading: './'
				},
				files: [{
					'expand': true,
					//相对路径地址
					'cwd': 'demo3',
					//需要生成具名函数的文件集合
					'src': ['dist/page.min.js','src/output.js'],
					//生成存放的文件目录，里面的目录结构与src里面的文件名带有的目录结构一致
					'dest': 'demo3/.build'
				}]
			}	
		},
		/***
			step 3:
			将临时目录下独立的具名函数文件，合并未1个js文件
			将这个合并的js文件拷贝到我们的输出目录
		***/
		concat: {
			demo3: {
				options: {
					//是否采用相对地址
					relative: true
				},
				files: {
					//合并后的文件地址
					'demo3/dist/page.js': ['demo3/.build/dist/page.min.js','demo3/.build/src/output.js','lib/jquery/dist/jquery.js'] 
				}
			}	
		},
		/***
		step 4:
		压缩合并后的文件
		***/
		uglify: {
			demo3: {
				files: {
					'demo3/dist/page.min.js': ['demo3/dist/page.js']	
				}	
			}	
		}
	});
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('build',['copy','transport','concat','uglify']);
}
