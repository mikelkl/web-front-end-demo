> *官方文档：https://docs.angularjs.org/guide*  
> 参考文章：
1. [angular中的MVVM模式 - 破狼 - 博客园](http://www.cnblogs.com/whitewolf/p/4581254.html)
1. [ngBind](https://docs.angularjs.org/api/ng/directive/ngBind)
1. [AngularJS 控制器 | 菜鸟教程](http://www.runoob.com/angularjs/angularjs-controllers.html)

___

### MVVM模式
MVVM模式是Model-View-ViewMode（模型-视图-视图模型）模式的简称，其最早出现在微软的WPF和Silverlight框架中。MVVM模式利用框架内置的双向绑定技术对MVP（Model-View-Presenter）模式的变型，引入了专门的ViewModel（视图模型）来实现View和Model的粘合，让View和Model的进一步分离和解耦。MVVM模式的优势有如下四点：

1. 低耦合：View可以独立于Model变化和修改，同一个ViewModel可以被多个View复用；并且可以做到View和Model的变化互不影响；
1. 可重用性：可以把一些视图的逻辑放在ViewModel，让多个View复用；
1. 独立开发：开发人员可以专注与业务逻辑和数据的开发（ViewModel），界面设计人员可以专注于UI(View)的设计；
1. 可测试性：清晰的View分层，使得针对表现层业务逻辑的测试更容易，更简单。  

下面是angular中关于MVVM模式的运用：
![图片](http://greengerong.github.io/images/blog_img/angular-mvvm.png?_=210931895)


在angular中MVVM模式主要分为四部分：

1. View：它专注于界面的显示和渲染，在angular中则是包含一堆声明式Directive的视图模板。
1. ViewModel：它是View和Model的粘合体，负责View和Model的交互和协作，它负责给View提供显示的数据，以及提供了View中Command事件操作Model的途径；在angular中$scope对象充当了这个ViewModel的角色；
1. Model：它是与应用程序的业务逻辑相关的数据的封装载体，它是业务领域的对象，Model并不关心会被如何显示或操作，所以模型也不会包含任何界面显示相关的逻辑。在web页面中，大部分Model都是来自Ajax的服务端返回数据或者是全局的配置对象；而angular中的service则是封装和处理这些与Model相关的业务逻辑的场所，这类的业务服务是可以被多个Controller或者其他service复用的领域服务。
1. Controller：这并不是MVVM模式的核心元素，但它负责ViewModel对象的初始化，它将组合一个或者多个service来获取业务领域Model放在ViewModel对象上，使得应用界面在启动加载的时候达到一种可用的状态。

View不能直接与Model交互，而是通过$scope这个ViewModel来实现与Model的交互。对于界面表单的交互，通过ngModel指令来实现View和ViewModel的同步。ngModelController包含$parsers和$formatters两个转换器管道，它们分别实现View表单输入值到Model数据类型转换和Model数据到View表单数据的格式化。对于用户界面的交互Command事件（如ngClick、ngChange等）则会转发到ViewModel对象上，通过ViewModel来实现对于Model的改变。然而对于Model的任何改变，也会反应在ViewModel之上，并且会通过$scope的“脏检查机制”（$digest）来更新到View。从而实现View和Model的分离，达到对前端逻辑MVVM的分层架构。

angular中MVVM模式的实现，以领域Model为中心思维，遵循“分离关注点”设计原则，这也是与jQuery以DOM驱动的思维所不同之处。所以我们在做angular开发的时候应该谨记下面几点：

**绝不要先设计你的页面，然后用DOM操作去改变它**

在以往的jQuery开发中，我们会首先设计页面DOM结构，然后在利用jQuery来改变DOM结构或者实现动态交互效果。因为jQuery是为DOM驱动而设计的，对于拥有大量复杂的前端交互的项目，JavaScript的逻辑变得越来越臃肿，交互逻辑分散各处。

在MVVM模式下的angular开发中， 我们首先需要在脑子里挂着Model的弦。不能老想着“我有XXX这个DOM，我希望让它做XXX这种动态效果”，我们需要从要完成的目标开始思考我们需要或拥有怎么样的Model数据，然后设计我们的应用， 最后才是设计视图，并用$scope来粘合它们。

**Directive不是封装jQuery代码的“天堂”**

如上条所述，我们不能一开始就去想如何利用DOM操作的方法去实现应用目标，然后“冠冕堂皇”的写上一堆jQuery的代码，并将其封装到angular的directive中，最后不得不加上$scope.$apply()来通知angular你的ViewModel的改变，需要启动“脏检查机制”来更新你的改变到View。作者在多个客户项目中看见这种将Directive作为封装jQuery代码“天堂”的例子，其实对于这类问题，大部分情况下，我们都可以用很少了angular代码将其重构为真正的angular way。特别在ng社区经常看见在angular directive中利用jQuery的on方法绑定click、keydown、blur等事件的代码，大部分情况我们都能以对应的ng事件（ngClick、ngChange、ngBlur）来重构它们。

对于这类问题，首先我们应该尽量尝试复用angular的内置指令，以真正的angular way去思考我们的问题，请慎重的引入jQuery的DOM方法和操作。

### ng-bind指令的使用
**The *ngBind* attribute tells Angular to replace the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes.**

Typically, you don't use *ngBind* directly, but instead you use the double curly markup like *{{ expression }}* which is similar but less verbose.

It is preferable to use *ngBind* instead of *{{ expression }}* if a template is momentarily displayed by the browser in its raw state before Angular compiles it. Since *ngBind* is an element attribute, it makes the bindings invisible to the user while the page is loading.

An alternative solution to this problem would be using the ngCloak directive.
### controller控制器的使用
AngularJS 应用程序被控制器控制。  
ng-controller 指令定义了应用程序控制器。  
控制器是 JavaScript 对象，由标准的 JavaScript 对象的构造函数 创建。  

应用解析：  
AngularJS 应用程序由 ng-app 定义。应用程序在 <div> 内运行。  
ng-controller="myCtrl" 属性是一个 AngularJS 指令。用于定义一个控制器。  
myCtrl 函数是一个 JavaScript 函数。  
AngularJS 使用$scope 对象来调用控制器。
在 AngularJS 中， $scope 是一个应用象(属于应用变量和函数)。  
控制器的 $scope （相当于作用域、控制范围）用来保存AngularJS Model(模型)的对象。
控制器在作用域中创建了两个属性 (firstName 和 lastName)。
ng-model 指令绑定输入域到控制器的属性（firstName 和 lastName）。

### 在$scope中定义方法和变量
Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。

Scope 是一个对象，有可用的方法和属性。

Scope 可应用在视图和控制器上。
