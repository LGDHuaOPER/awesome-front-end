/* eslint-disable */
/* *****常用标签*****
@module
标明当前文件模块，在这个文件中的所有成员将被默认为属于此模块，除非另外标明

@submodule
针对模块的划分，处于@module之下

@class
标示一个类或者一个函数

@constructor
当使用对象字面量形式定义类时，可使用此标签标明其构造函数

@callback
标明此方法是一个回调函数

@event
标明一个可触发的事件函数，一个典型的事件是由对象定义的一组属性来表示。

@constant
常量标识

@member/@var
记录一个基本数据类型的成员变量

@method
标记一个方法或函数

@param
标记方法参数及参数类型

@property
标明一个对象的属性

@readonly
只读

@return
标明返回值、类型及描述

@type
描述代码变量的类型

@description
如果在注释开始描述可省略此标签

@enum
一个类中属性的类型相同时，使用此标签标明

@example
示例，代码可自动高亮

@exports
标识此对象将会被导出到外部调用

@ignore
忽略此注释块

@link
内联标签，创建一个链接，如 `{@link http://github.com Github}`

@name
指定一段代码的名称，强制 JSDoc 使用此名称，而不是代码里的名称

@namespace
指定一个变量为命名空间变量

@static
描述一个不需实例即可使用的变量

@summary
对描述信息的短的概述

@throws
描述方法将会出现的错误和异常

@todo
描述函数的功能或任务

@tutorial
插入一个指向向导教程的链接 */


/* *****常用注释举例*****
****文档注释****
 *
 comment


****声明模块****
 *
 模块说明
 *
 @module 模块名

 *
 Core模块提供最基础、最核心的接口
 *
 @module Core


****声明类（@class必须搭配@constructor或@static使用，分别标记非静态类与静态类。）****
 *
 类说明
 *
 @class 类名
 *
 @constructor

 *
 节点集合类
 *
 @class NodeList
 *
 @constructor
 *
 @param {ArrayLike<Element>} nodes 初始化节点


****声明函数或类方法（没有指定@for时，表示此函数为全局或模块顶层函数。当函数为静态函数时，必须添加@static；当函数有参数时，必须使用@param；当函数有返回值时，必须使用@return。）****
 *
 方法说明
 *
 @method 方法名
 *
 @for 所属类名
 *
 @param {参数类型} 参数名 参数说明
 *
 @return {返回值类型} 返回值说明

 *
 返回当前集合中指定位置的元素
 *
 @method
 *
 @for NodeList
 *
 @param {Number} [i=0] 位置下标。如果为负数，则从集合的最后一个元素开始倒数
 *
 @return {Element} 指定元素


****声明函数参数（必须与@method搭配使用。）****
 *
 @param {} [参数名]
 *
 @param {} [参数名=默认值]


****声明类属性****
 *
 属性说明
 *
 @property {属性类型} 属性名
*****常用注释举例 End***** */