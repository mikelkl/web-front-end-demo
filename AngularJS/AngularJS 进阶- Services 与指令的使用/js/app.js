/**
 * 4种公共容器创建方法
 */
angular.module('app', [])
    .value('realname', 'zhaoliu')
    .value('realname', 'wangwu')//value是可以改变的
    .constant('http', 'www.baidu.com')
    .constant('http', 'www.sohu.com')//constant不可以改变
    .factory('Data', function () {
        return {
            msg: '你好啊',
            setMsg: function () {
                this.msg = '我不好';
            }
        }
    })
    .service('User', function () {
        this.firstname = '上官';
        this.lastname = '飞燕';
        this.getName = function () {
            return this.firstname + this.lastname;
        }
    })
    .controller('MyCtrl', function ($scope, realname, http, Data, User) {
        $scope.msg = '你好';
        $scope.realname = realname;
        $scope.http = http;
        $scope.data = Data;
        Data.setMsg();
        $scope.uname = User.getName();
    })

angular.module('app1', [])
    .factory('Data', function () {
        return {
            msg: '我来自factory',
            shopchart: ['1', '2']
        }
    })
    .controller('FCtrl', function ($scope, Data) {//下单ctrl
        $scope.data = Data;
    })
    .controller('SCtrl', function ($scope, Data) {//购物车页面
        $scope.data = Data;
    })

// ng-bind, {{}}, ng-model, ng-show/hide, ng-if,
// ng-checked, ng-src, ng-href, ng-class, ng-selected, ng-submit,
//
angular.module('app2', [])
    .controller('UserCtrl', function ($scope) {
        $scope.user = {
            isShowImg: false,
            showicon: true,
            icon: 'image/logo.png',
            uname: '',
            pwd: '',
            position: '1',
            sex: '1',
            hobby: [1, 2],
        };
        $scope.isChecked = function (n) {
            var isok = false;
            for (var i = 0; i < $scope.user.hobby.length; i++) {
                if (n == $scope.user.hobby[i]) {
                    isok = true;
                    break;
                }
            }
            return isok;
        };
        $scope.register = function (u) {
            console.log(u);
        }
    })

// 常用指令 ng-repeat 的使用
angular.module('app3', [])
    .controller('AddressCtrl', function ($scope) {
        $scope.list = [
            {id: 1, address: '莲花小区14栋1层'},
            {id: 2, address: '莲花小区14栋2层'},
            {id: 3, address: '莲花小区14栋3层'},
            {id: 4, address: '莲花小区14栋4层'},
        ];
    })