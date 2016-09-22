> 参考文章：[如何监听JS变量的变化](http://blog.daraw.cn/2016/08/17/how-to-monitor-changes-of-js-variable/)

___

### 脏值检测
angular使用的就是脏值检测，原理是比较新值和旧值，当值真的发生改变时再去更改DOM，所以angular中有一个$digest。那么为什么在像ng-click这样的内置指令在触发后会自动变更呢？原理也很简单，在ng-click这样的内置指令中最后追加了$digest。

### ES5的getter与setter
在ES5中新增了一个Object.defineProperty，直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。

> Object.defineProperty(obj, prop, descriptor)

其接受的第三个参数可以取get和set并各自对应一个getter和setter方法：