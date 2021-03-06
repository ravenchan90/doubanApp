/**
 * Created by raven on 2017/5/9.
 */
(function (angular) {
    "use strict";
    /*创建模块 注入路由*/
   var app =  angular.module('app',['ui.router']);
    /*创建控制器  行内式注入*/
    app.controller('appController',['$scope','$window','$location',function ($scope,$window,$location) {
        $scope.name =　"豆瓣电影";
        /*记录当前点击的类型*/
        $scope.type = "movie";
        /*导航标题*/
        var title = "豆瓣电影";



        /*监听tabbar通知*/
       $scope.tabbarClick = function (type) {
           $scope.type = type;
            /*发通知，改标题*/
            switch (type){
                case 'movie':
                    title = "豆瓣电影";
                    break;
                case 'music':
                    title = "豆瓣音乐";
                    break;
                case 'book':
                    title = "豆瓣读书";
                    break;
                case 'my':
                    title = "我的";
                    break;
            }
           /*发通知，改标题*/
           $scope.$broadcast('titleChange',{type:type,title:title});
       };

       /*返回*/
       $scope.back = function () {
           /*返回历史*/
           $window.history.back();

       };


       /*监听地址的变化
         $watch('$location.url()')
       * 如果url == index  通知导航把返回隐藏
       * */


    }]);

})(angular);