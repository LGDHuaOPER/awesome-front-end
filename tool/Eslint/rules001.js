module.exports = {
  rules: {
    // 1.【强制】除了缩进，不要使用多个空格
    'no-multi-spaces': ['error'],
    // 2.【强制】不要使用多行字符串
    'no-multi-str': ['error'],
    // 3.【强制】行末不留空格
    'no-trailing-spaces': ['error'],
    // 4.【强制】使用两个空格进行缩进
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    // 5.【强制】不要混合使用空格与制表符作为缩进
    'no-mixed-spaces-and-tabs': ['error'],
    // 6.【强制】代码块中避免多余留白
    'padded-blocks': ['error', 'never'],
    // 7.【强制】遇到分号时空格要后留前不留
    'semi-spacing': ['error'],
    // 8.【强制】代码块首尾留空格
    'space-before-blocks': ['error'],
    // 9.【强制】圆括号间不留空格
    'space-in-parens': ['error'],
    // 10.【强制】一元运算符后面跟一个空格
    'space-unary-ops': ['error'],
    // 11.【强制】注释首尾留空格
    'spaced-comment': ['error'],
    // 12.【强制】展开运算符与它的表达式间不要留空白
    'rest-spread-spacing': ['error'],
    // 13.【强制】不要使用非法的空白符
    'no-irregular-whitespace': ['error'],
    // 14.【强制】不要使用(,[,or`等作为一行的开始
    'no-unexpected-multiline': ['error'],
    // 16.【强制】不允许有多余的行末逗号
    'comma-dangle': ['error'],
    // 17\19.【强制】点号操作符须与属性需在同一行
    'dot-location': ['error'],
    // 18\27.【强制】始终将逗号置于行末
    'comma-style': ['error'],
    // 20.【强制】不要使用多余的括号包裹函数
    'no-extra-parens': ['error'],
    // 21.【强制】文件末尾留一空行
    'eol-last': ['error'],
    // 22.【强制】不要书写不必要的嵌套代码块
    'no-lone-blocks': ['error'],
    // 23.【强制】关键字后面加空格
    'keyword-spacing': ['error'],
    // 24.【强制】函数声明时括号与函数名间加空格
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
      },
    ],
    // 25.【强制】对于三元运算符?和:与他们所负责的代码处于同一行
    'operator-linebreak': ['error'],
    // 26.【强制】函数调用时标识符与括号间不留间隔
    'func-call-spacing': ['error'],
    // 28.【强制】不允许有连续多行空行
    'no-multiple-empty-lines': ['error'],
    // 29.【推荐】条件语句中赋值语句使用括号包起来
    'no-cond-assign': ['warn'],
    // 30.【强制】单行代码块两边加空格
    'block-spacing': ['error'],
    // 31.【强制】键值对当中冒号与值之间要留空白
    'key-spacing': ['error'],
    // 32.【强制】构造函数要以大写字母开头
    // 33.【强制】除构造函数外，所有函数名首字母不应大写。
    'new-cap': ['error'],
    // 34.【强制】对于变量和函数名统一使用驼峰命名法
    camelcase: ['error'],
    // 36.【强制】始终使用===替代==
    eqeqeq: ['error'],
    // 37.【强制】避免不必要的布尔转换
    'no-extra-boolean-cast': ['error'],
    // 38.【强制】禁止不必要的转义
    'no-useless-escape': ['error'],
    // 39.【强制】用合法的字符串跟typeof进行比较操作
    'valid-typeof': ['error'],
    // 40.【强制】不要重复声明变量
    'no-redeclare': ['error'],
    // 41.【强制】不要使用undefined来初始化变量
    'no-undef-init': ['error'],
    // 42.【强制】每个 var 关键字单独声明一个变量
    'one-var': ['error', 'never'],
    // 43.【强制】避免将变量赋值给自己
    'no-self-assign': ['error'],
    // 44.【强制】避免将变量与自己进行比较操作
    'no-self-compare': ['error'],
    // 45.【强制】不要定义未使用的变量
    'no-unused-vars': ['error'],
    // 46.【强制】var 声明放在每个function作用域的顶部【let/const声明对应语句块顶部未支持】
    'vars-on-top': ['error'],
    // 47.【推荐】使用浏览器全局变量时加上window.前缀
    'no-undef': ['warn'],
    // 48.【强制】避免修改使用const声明的变量
    'no-const-assign': ['error'],
    // 49.【强制】不要解构空值
    'no-empty-pattern': ['error'],
    // 50.【强制】外部变量不要与对象属性重名
    'no-label-var': ['error'],
    // 51.【强制】不要随意更改关键字的值
    'no-shadow-restricted-names': ['error'],
    // 53.【强制】不要向RegExp构造器传入非法的正则表达式
    'no-invalid-regexp': ['error'],
    // 54.【强制】正则中不要使用空字符
    'no-empty-character-class': ['error'],
    // 55.【强制】正则中避免使用多个空格
    'no-regex-spaces': ['error'],
    // 56.【强制】正则中不要使用控制符
    'no-control-regex': ['error'],
    // 57.【强制】禁止使用Object构造器
    // 58.【强制】不要使用new Object若需要请用Object.create(null)代替。
    'no-new-object': ['error'],
    // 59.【强制】解构多个变量时，如果超过行长度限制（3个），每个解构的变量必须单独一行。
    // 通过控制单行长度实现
    'max-len': ['error', 120],
    // 61.【参考】不要扩展原生对象
    'no-extend-native': ['error'],
    // 62.【强制】属性前面不要加空格
    'no-whitespace-before-property': ['error'],
    // 63.【推荐】对象属性换行时注意统一代码风格
    'object-property-newline': ['warn'],
    // 64.【强制】对象字面量中不要定义重复的属性
    'no-dupe-keys': ['error'],
    // 65.【强制】避免使用不必要的计算值作对象属性
    'no-useless-computed-key': ['error'],
    // 66.【强制】不要对全局只读对象重新赋值
    'no-global-assign': ['error'],
    // 67.【强制】禁止使用__iterator__
    'no-iterator': ['error'],
    // 68.【强制】new创建对象实例后需要赋值给变量
    'no-new': ['error'],
    // 69.【强制】不要将全局对象的属性作为函数调用
    'no-obj-calls': ['error'],
    // 70.【强制】使用getPrototypeOf来替代__proto__
    'no-proto': ['error'],
    // 72.【强制】定义对象时，如果所有键均指向同名变量，则所有键都使用缩写；如果有一个键无法指向同名变量，则所有键都不使用缩写。
    'object-shorthand': [2, 'consistent'],
    // 73.【强制】使用数组字面量而不是构造器
    'no-array-constructor': ['error'],
    // 74.【强制】避免使用arguments.callee和arguments.caller
    'no-caller': ['error'],
    // 75.【强制】禁止使用稀疏数组（Sparse arrays）
    'no-sparse-arrays': ['error'],
    // 77.【强制】遍历数组不使用for in
    'guard-for-in': ['error'],
    // 79.【强制】除需要转义的情况外，字符串统一使用单引号
    quotes: ['error', 'single'],
    // 80.【强制】字符串字面量中也不要使用八进制转义字符
    'no-octal-escape': ['error'],
    // 81.【参考】使用__dirname和__filename时尽量避免使用字符串拼接
    'no-path-concat': ['warn'],
    // 82.【强制】正确使用 ES6 中的字符串模板
    'no-template-curly-in-string': ['error'],
    // 83.【强制】模板字符串中变量前后不加空格
    'template-curly-spacing': ['error'],
    // 85.【强制】禁止使用Function构造器
    'no-new-func': ['error'],
    // 86.【强制】避免不必要的.call()和.apply()
    'no-useless-call': ['error'],
    // 87.【强制】自调用匿名函数(IIFEs)使用括号包裹
    'wrap-iife': ['error'],
    // 88.【推荐】不要丢掉异常处理中err参数
    'handle-callback-err': ['warn'],
    // 89.【强制】无参的构造函数调用时要带上括号
    'new-parens': ['error'],
    // 90.【强制】不要定义冗余的函数参数
    'no-dupe-args': ['error'],
    // 91.【强制】避免对声明过的函数重新赋值
    'no-func-assign': ['error'],
    // 92.【强制】避免多余的函数上下文绑定
    'no-extra-bind': ['error'],
    // 93.【强制】嵌套的代码块中禁止再定义函数
    'no-inner-declarations': ['error'],
    // 94.【强制】return语句中的赋值必需有括号包裹
    'no-return-assign': ['error'],
    // 95.【强制】箭头函数的参数只有一个，并且不包含解构时，参数部分的括号必须省略。
    'arrow-parens': ['error', 'as-needed'],
    // 96.【强制】箭头函数的函数体只有一个单行表达式语句，且作为返回值时，省略{}和return，如果单个表达式过长，可以使用 () 进行包裹。
    'arrow-body-style': ['error', 'as-needed'],
    // 98.【强制】回调函数的嵌套不得超过3层。
    'max-nested-callbacks': ['error', 3],
    // 99.【强制】对象中定义了存值器，一定要对应的定义取值器
    'accessor-pairs': ['error'],
    // 100.【强制】子类的构造器中一定要调用super
    'constructor-super': ['error'],
    // 101.【强制】yield *中的*前后都要有空格
    'yield-star-spacing': ['error'],
    // 102.【强制】禁止多余的构造器
    'no-useless-constructor': ['error'],
    // 103.【强制】使用this前请确保super()已调用
    'no-this-before-super': ['error'],
    // 104.【强制】避免对类名重新赋值
    'no-class-assign': ['error'],
    // 105.【强制】类中不要定义冗余的属性
    'no-dupe-class-members': ['error'],
    // 106.【强制】同一模块有多个导入时一次性写完
    'no-duplicate-imports': ['error'],
    // 107.【强制】禁止使用new require
    'no-new-require': ['error'],
    // 108.【强制】import,export和解构操作中，禁止赋值到同名变量
    'no-useless-rename': ['error'],
    // 109.【参考】避免使用逗号操作符
    'no-sequences': ['warn'],
    // 110.【强制】禁止使用Symbol构造器
    'no-new-symbol': ['error'],
    // 111.【强制】禁止使用原始包装器
    'no-new-wrappers': ['error'],
    // 112.【强制】不要使用八进制字面量
    'no-octal': ['error'],
    // 113.【强制】不要省去小数点前面的0
    'no-floating-decimal': ['error'],
    // 114.【强制】避免使用常量作为条件表达式的条件（循环语句除外）
    'no-constant-condition': ['error'],
    // 115.【强制】不要使用debugger
    'no-debugger': ['error'],
    // 116.【强制】不要对变量使用delete操作
    'no-delete-var': ['error'],
    // 117.【推荐】检查NaN的正确姿势是使用isNaN()
    'use-isnan': ['warn'],
    // 118.【推荐】用throw抛错时，抛出Error对象而不是字符串。
    'no-throw-literal': ['warn'],
    // 119.【强制】catch中不要对错误重新赋值
    'no-ex-assign': ['error'],
    // 120.【强制】switch一定要使用break来将条件分支正常中断
    'no-fallthrough': ['error'],
    // 122.【强制】switch语句中不要定义重复的case分支
    'no-duplicate-case': ['error'],
    // 123.【参考】注意隐式的eval()
    'no-implied-eval': ['warn'],
    // 124.【强制】不要使用标签语句
    'no-labels': ['error'],
    // 125.【强制】如果有更好的实现，尽量不要使用三元表达式
    'no-unneeded-ternary': ['error'],
    // 126.【强制】return，throw，continue和break后不要再跟代码
    'no-unreachable': ['error'],
    // 127.【强制】关系运算符的左值不要做取反操作
    'no-unsafe-negation': ['error'],
    // 128.【强制】关系运算符的左值不要做取反操作
    'no-unsafe-finally': ['error'],
    // 129.【强制】禁止使用with
    'no-with': ['error'],
    // 130.【推荐】请书写优雅的条件语句（avoid Yoda conditions）。
    yoda: ['warn'],
    // 133.【参考】避免使用++和--
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // 134.【强制】不要使用void操作符
    'no-void': ['error'],
    // 139.【推荐】定量建议：一个js文件不应超过500行。
    'max-lines': ['warn', 500],
    // 140.【推荐】定量建议：一个方法不应超过65行。
    'max-lines-per-function': ['warn', 65],
    // 141.【推荐】定量建议：一个方法不应超过65行。
    'max-params': ['warn', 6],
  },
};
