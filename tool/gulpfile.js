var gulp = require('gulp'),  
    rubySass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    filter = require('gulp-filter'),
    csso = require('gulp-csso'),
    htmlMinify = require('gulp-html-minify'),
    zip = require('gulp-zip'),
    rev = require('gulp-rev'),
    isass = require('gulp-sass'),
    babel = require('gulp-babel'),
    revCollector = require('gulp-rev-collector'),
    gutil = require('gulp-util'),
    gulpConvert_Encoding = require('gulp-convert-encoding'),
    revReplace = require('gulp-rev-replace'),      //版本号替换
    useref = require('gulp-useref'),               //解析html资源定位
    gulpif = require('gulp-if'),                   //if语句
    connect = require('gulp-connect'),             //创建web服务器
    gulpSequence = require('gulp-sequence'),       //创建同步任务
    utf8Convert = require('gulp-utf8-convert'),    // convert file encoding to utf8
    nodeDel = require('del');                    // node原生

var WebContent = 'futureDT2/Src/futureD/WebContent';

    gulp.task('signaluglify', function () {
        gulp.src(['futureDT2/Src/futureD/WebContent/src/script/modules/common/drawWaferMap.js']) //这里如果是 有很多js文件 ['js/*.js']
        .pipe(uglify())
        // .pipe(rename({suffix: '.min'})) // 上面如果是 ['js/*.js'],要把所有的文件都添加.min.js后缀
        .pipe(gulpConvert_Encoding({to: 'utf8'}))
        .pipe(gulp.dest('signaluglify/js'))
        .pipe(notify({ message: 'signaluglify task complete' }));
    });

//     gulp.task('uglifyALL', function () {
//         gulp.src(['futureDT2/Src/futureD/WebContent/src/script/modules/**/*.js']) //这里如果是 有很多js文件 ['js/*.js']
//         .pipe(uglify())
//         // .pipe(rename({suffix: '.min'})) // 上面如果是 ['js/*.js'],要把所有的文件都添加.min.js后缀
//         .pipe(gulpConvert_Encoding({to: 'utf8'}))
//         .pipe(gulp.dest('futureDT2/Src/futureD/WebContent/dist/script/modules'))
//         .pipe(notify({ message: 'uglify2 task complete' }));
//     });

//     gulp.task('minifyCss1', function () {
//         gulp.src(['futureDT2/Src/futureD/WebContent/src/style/modules/admin/admin.css']) //这里如果是 有很多js文件 ['js/*.js']
//         .pipe(minifyCss())
//         .pipe(gulpConvert_Encoding({to: 'utf8'}))
//         .pipe(gulp.dest('futureDT2/Src/futureD/WebContent/dist/style/modules/admin'))
//         .pipe(notify({ message: 'minifyCss1 task complete' }));
//     });

//     gulp.task('minifyCssALL', function () {
//         gulp.src(['futureDT2/Src/futureD/WebContent/src/style/modules/**/*.css']) //这里如果是 有很多js文件 ['js/*.js']
//         .pipe(minifyCss())
//         .pipe(gulpConvert_Encoding({to: 'utf8'}))
//         .pipe(gulp.dest('futureDT2/Src/futureD/WebContent/dist/style/modules'))
//         .pipe(notify({ message: 'minifyCss2 task complete' }));
//     });

//     // css合并为一个文件并保存映射
//     gulp.task('cssConcat', function() {                                //- 创建一个名为 concat 的 task
//         gulp.src(["./cfChicken8/WebContent/css/libs/bootstrap.min.css", "./cfChicken8/WebContent/css/libs/daterangepicker.css"])    //- 需要处理的css文件，放到一个字符串数组里
//             .pipe(concat('bootstrap-daterangepicker.css'))                            //- 合并后的文件名
//             .pipe(gulp.dest('./dist/css/extends/integrationLibs'))         // 存放一下
//             .pipe(rename({suffix: '.min'}))
//             .pipe(minifyCss())                                      //- 压缩处理成一行
//             .pipe(rev())                                            //- 文件名加MD5后缀
//             .pipe(gulp.dest('./dist/css/extends/integrationLibs'))                               //- 输出文件本地
//             .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
//             .pipe(gulp.dest('./rev/css'))				//- 将 rev-manifest.json 保存到 rev 目录内
//             .pipe(notify({ message: 'Styles task complete' }));
//     });

//     // css更改路径
//     gulp.task('cssRev', function() {
//         gulp.src(['./rev/css/*.json', './cfChicken8/WebContent/WEB-INF/PaymentRequest.jsp'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
//             .pipe(revCollector())                                   //- 执行文件内css名的替换
//             .pipe(gulp.dest('./application/'));                     //- 替换后的文件输出的目录
//     });

//     // js合并为一个文件并保存映射
//     gulp.task('jsConcat', function() {
//         gulp.src(["./cfChicken8/WebContent/src/js/modules/personnel/reimburse.js"])
//             // .pipe(jshint('.jshintrc'))
//             // .pipe(jshint.reporter('default'))
//             .pipe(concat('reimburse.js'))
//             .pipe(gulp.dest('dist/src/js/modules/personnel'))
//             .pipe(rename({suffix: '.min'}))
//             .pipe(uglify())
//             .pipe(rev())
//             .pipe(gulp.dest('dist/js/modules/personnel'))
//             .pipe(rev.manifest())
//             .pipe(gulp.dest('./rev/js'))
//             .pipe(notify({ message: 'Scripts task complete' }));
//     });

//     // js更改路径
//     gulp.task('jsRev', function() {
//         gulp.src(['./rev/js/*.json', './cfChicken8/WebContent/WEB-INF/PaymentRequest.jsp'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
//             .pipe(revCollector())                                   //- 执行文件内js名的替换
//             .pipe(gulp.dest('./application/'));                     //- 替换后的文件输出的目录
//     });

//     // js单文件压缩和重命名
//     gulp.task('jsSignalComp', function() {
//         gulp.src('cfChicken8/WebContent/js/modules/personnel/PaymentRequest.js')
//             // .pipe(jshint('.jshintrc'))
//             // .pipe(jshint.reporter('default'))
//             // .pipe(concat('main.js'))
//             // .pipe(gulp.dest('dist/assets/js'))
//             .pipe(uglify())
//             .pipe(rename({suffix: '.min'}))
//             .pipe(rev())
//             .pipe(gulp.dest('dist/js/modules/personnel'))
//             .pipe(rev.manifest())
//             .pipe(gulp.dest('rev/js'))
//             .pipe(notify({ message: 'Scripts task complete' }));
//     });

//     // 清理
//     gulp.task('clean', function() {  
//       return gulp.src(['dist', 'rev', 'application', 'signaluglify'], {read: false})
//         .pipe(clean());
//     });

//     // gulp.task('default', ['concat', 'rev']);
//     // 预设任务
//     gulp.task('default', ['clean'], function() {  
//         gulp.start('cssConcat', 'cssRev', 'jsConcat', 'jsRev');
//     });


    /*开始自动构建*/
    gulp.task('copy:rev_src', function() {  
        return gulp.src([WebContent+'/src/**/*'])
        .pipe(gulp.dest(WebContent+'/src2'));
    });

    gulp.task('mincss:rev_min', () => {
        return gulp.src([WebContent+'/src2/style/modules/**/*.css'])
        .pipe(minifyCss())
        // .pipe(gulpConvert_Encoding({to: 'utf8'}))
        .pipe(utf8Convert({
            encNotMatchHandle:function (file) {
                //notify
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(WebContent+'/min/style/modules'));
    });

    gulp.task('minjs:rev_min', () => {
        return gulp.src([WebContent+'/src2/script/modules/**/*.js'])
        .pipe(uglify())
        // .pipe(gulpConvert_Encoding({to: 'utf8'}))
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(utf8Convert({
            encNotMatchHandle:function (file) {
                //notify
            }
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(WebContent+'/min/script/modules'));
    });

    gulp.task('del:after_html', function() {  
        return nodeDel([WebContent+'/WEB-INF/html/*.jsp', WebContent+'/WEB-INF/deployHTML/*.jsp']).then(paths => {
            console.log('Deleted files and folders:\n', paths.join('\n'));
        });
    });

    gulp.task('del:rev_revHTML', function() {  
        return nodeDel([WebContent+'/WEB-INF/revHTML/*.jsp']).then(paths => {
            console.log('Deleted files and folders:\n', paths.join('\n'));
        });
    });

    gulp.task('del:deploy_html', function() {  
        return nodeDel([WebContent+'/WEB-INF/html/*.jsp']).then(paths => {
            console.log('Deleted files and folders:\n', paths.join('\n'));
        });
    });

    // 拷贝src index 0
    gulp.task('del:rev_src2', ['copy:rev_src'], function() {  
        return nodeDel([WebContent+'/src']).then(paths => {
            console.log('Deleted files and folders:\n', paths.join('\n'));
        });
    });

    // 构建前清理 index 1
    gulp.task('clean:rev', function() {  
      return gulp.src([WebContent+'/WEB-INF/revJSP', WebContent+'/WEB-INF/revJSP2', WebContent+'/min', WebContent+'/dist', WebContent+'/*.jsp'], {read: false})
        .pipe(clean());
    });

    // 构建前复制文件 index 2
    gulp.task('copy:rev_html', ['del:rev_revHTML'], function() {  
        return gulp.src([WebContent+'/WEB-INF/html/*.jsp'])
        .pipe(gulp.dest(WebContent+'/WEB-INF/revHTML')).pipe(gulp.dest(WebContent));
    });

    // 压缩 index 3
    gulp.task('mincss:rev_src', ['mincss:rev_min'], () => {
        return gulp.src([WebContent+'/src2/style/modules/**/*.css'])
        .pipe(minifyCss())
        // .pipe(gulpConvert_Encoding({to: 'utf8'}))
        .pipe(utf8Convert({
            encNotMatchHandle:function (file) {
                //notify
            }
        }))
        .pipe(gulp.dest(WebContent+'/src/style/modules'));
    });
    gulp.task('minjs:rev_src', ['minjs:rev_min'], () => {
        return gulp.src([WebContent+'/src2/script/modules/**/*.js'])
        .pipe(uglify())
        // .pipe(gulpConvert_Encoding({to: 'utf8'}))
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(utf8Convert({
            encNotMatchHandle:function (file) {
                //notify
            }
        }))
        .pipe(gulp.dest(WebContent+'/src/script/modules'));
    });

    //添加版本号 index 4
    gulp.task('revision', () => {
        return gulp.src([WebContent+'/min/style/modules/**/*.min.css', WebContent+'/min/script/modules/**/*.min.js'])
        .pipe(rev())
        .pipe(gulpif('*.min.css', gulp.dest(WebContent+'/dist/style/modules'), gulp.dest(WebContent+'/dist/script/modules')))
        .pipe(rev.manifest())
        .pipe(gulp.dest(WebContent+'/WEB-INF'));  
    });

    //替换html index 5
    gulp.task('replace:rev', () => {
        var manifest = gulp.src([WebContent+'/WEB-INF/rev-manifest.json']);
        return gulp.src([WebContent+'/*.jsp', '!'+WebContent+'/WEB-INF/*.jsp'])
        .pipe(revReplace({
            replaceInExtensions: ['.js', '.css', '.html', '.hbs', '.jsp'],
            manifest: manifest
        }))
        .pipe(useref())
        .pipe(gulp.dest(WebContent+'/WEB-INF/revJSP'));
        // .pipe(rename({extname: '.jsp'}))
        // .pipe(gulp.dest(WebContent+'/WEB-INF/revHTML'))
    });
    
    // 替换../../ index 6
    gulp.task('replacespare', () => {
        var manifest2 = gulp.src([WebContent+'/WEB-INF/rev-spare.json']);
        return gulp.src([WebContent+'/WEB-INF/revJSP/*.jsp'])
        .pipe(revReplace({
            replaceInExtensions: ['.js', '.css', '.html', '.hbs', '.jsp'],
            manifest: manifest2
        }))
        .pipe(gulp.dest(WebContent+'/WEB-INF/revJSP2'));
        // .pipe(rename({extname: '.jsp'}))
        // .pipe(gulp.dest(WebContent+'/WEB-INF/revHTML'))
    });

    // 构建后复制文件 index 7
    gulp.task('copy:after_revJSP2', ['del:after_html'], function() {  
        return gulp.src([WebContent+'/WEB-INF/revJSP2/*.jsp'])
        .pipe(gulp.dest(WebContent+'/WEB-INF/html'))
        .pipe(gulp.dest(WebContent+'/WEB-INF/deployHTML'));
    });

    // 构建后复制src2文件 index 8
    gulp.task('copy:after_src2', function() {  
        return gulp.src([WebContent+'/src2/**/*'])
        .pipe(gulp.dest(WebContent+'/src'));
    });

    // 构建后部署前清理 index 9
    gulp.task('clean:after', function() {  
        return nodeDel([WebContent+'/WEB-INF/revJSP', WebContent+'/WEB-INF/revJSP2', WebContent+'/min', WebContent+'/*.jsp', WebContent+'/src2']).then(paths => {
            console.log('Deleted files and folders:\n', paths.join('\n'));
        });
    });

    // 下面是控制台运行 ******************************************************************
    // 默认任务
    gulp.task('default:rev', function(cb){
        gulpSequence('del:rev_src2', 'clean:rev', 'copy:rev_html', ['mincss:rev_src', 'minjs:rev_src'], 'revision', 'replace:rev', 'replacespare', ['copy:after_revJSP2', 'copy:after_src2'], 'clean:after')(cb);
    });

    // 构建和部署后，将开发用的jsp复制到html
    gulp.task('copy:deploy_revHTML', ['del:deploy_html'], function() {  
        return gulp.src([WebContent+'/WEB-INF/revHTML/*.jsp'])
        .pipe(gulp.dest(WebContent+'/WEB-INF/html'));
    });
