var app = angular.module('app', []);

app.directive('hello', function () {
    return {
        restrict: 'A',//E: element, A:attribute, C:class
        // replace:true,// 替换自定义的directive标签
        // template: '<div>Hello Angularjs</div>'
        link: function () {
            alert('我是attribute');
        }
    }
})

app.directive('class', function () {
    return {
        restrict: 'C',//E: element, A:attribute, C:class
        // replace:true,// 替换自定义的directive标签
        // template: '<div>Hello Angularjs</div>'
        link: function () {
            alert('我是class');
        }
    }
})

var app1 = angular.module('app1', []);

app1.directive('food', function () {
    return {
        restrict: 'E',
        scope: [],
        controller: function ($scope) {
            $scope.foods = [];
            this.addApple = function () {
                $scope.foods.push('apple');
            }
            this.addOrange = function () {
                $scope.foods.push('orange');
            }
            this.addBanana = function () {
                $scope.foods.push('banana');
            }
        },
        // link takes a function with the following signature,
        // function link(scope, element, attrs, controller, transcludeFn) { ... }
        // scope is an Angular scope object.
        // element is the jqLite-wrapped element that this directive matches.
        // attrs is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
        link: function (scope, element, attrs) {
            element.bind('mouseenter', function () {
                console.log(scope.foods);
            })
        }
    }
})

app1.directive('apple', function () {
    return {
        require: 'food',
        link: function (scope, element, attrs, foodCtrl) {
            foodCtrl.addApple()
        }
    }
})
app1.directive('orange', function () {
    return {
        require: 'food',
        link: function (scope, element, attrs, foodCtrl) {
            foodCtrl.addOrange()
        }
    }
})
app1.directive('banana', function () {
    return {
        require: 'food',
        link: function (scope, element, attrs, foodCtrl) {
            foodCtrl.addBanana()
        }
    }
})

var app2 = angular.module('app2', []);

app2.directive('enter', function () {
    return function (scope, element, attrs) {
        console.log(element);
        element.bind('mouseenter', function () {
            element.addClass('button');
        })
    }
})

app2.directive('leave', function () {
    return function (scope, element, attrs) {
        console.log(element);
        element.bind('mouseleave', function () {
            element.removeClass('button');
        })
    }
})

app2.directive('hello', function () {
    return {
        restrict: 'E',
        template: '<div><input ng-model="txt"></div><div>{{txt}}</div>',
        link: function (scope, element) {
            scope.$watch('txt', function (newVal) {
                if (newVal == 'error') {
                    element.addClass('alert-box alert');
                }
            })
        }
    }
})