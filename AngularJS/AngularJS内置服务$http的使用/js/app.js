angular.module('app', [])
    .controller('MyCtrl', function ($scope, $http) {
        $http.get('http://127.0.0.1:5000/user/getUsers')
            .success(function (resp) {
                console.log(resp);
            })
    })

angular.module('app1', [])
    // angular post的请求不会把数据序列化
    .config(function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    })
    .controller('MyCtrl', function ($scope, $http) {
        $scope.name = "asf";
        $scope.addUser = function () {
            $http.post('http://127.0.0.1:5000/user/addUser', {name: $scope.name})
                .success(function (resp) {
                    if (resp.success) {
                        alert("添加成功");
                    }
                })
        }

    })

angular.module('app2', [])
    // angular post的请求不会把数据序列化
    .config(function ($httpProvider) {
        $httpProvider.defaults.headers.post = {};
    })
    .controller('MyCtrl', function ($scope, $http) {
        $scope.id = "";
        $scope.name = "";
        $scope.roles = [];
        $scope.rights = [];
        $scope.curselect = "";
        // $watch是一个scope函数，用于监听模型变化，当你的模型部分发生变化时它会通知你。
        $scope.$watch('curselect', function () {
            loadRoleRight();
        })

        function loadRoleRight() {
            $http.post("http://127.0.0.1:5000/user/getRoleRight", {curselect: $scope.curselect})
                .success(function (resp) {
                    var rights = resp;
                    for (var i = 0; i < $scope.rights.length; i++) {
                        $scope.rights[i].ischecked = false;
                        for (var j = 0; j < rights.length; j++) {
                            if ($scope.rights[i].id == rights[j].rightid) {
                                $scope.rights[i].ischecked = true;
                            }
                        }
                    }
                })
        }

        function init() {
            $http.get('http://127.0.0.1:5000/user/getRoles')
                .success(function (resp) {
                    $scope.roles = resp;
                })
            $http.get('http://127.0.0.1:5000/user/getRights')
                .success(function (resp) {
                    $scope.rights = resp;
                })
        }

        init();
    })