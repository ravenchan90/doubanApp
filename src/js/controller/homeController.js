/**
 * Created by raven on 2017/5/9.
 */
(function (angular) {
    "use strict";
    angular.module('app').controller('homeController',['$scope','myHttp','$state','apiKey',function ($scope,myHttp,$state,apiKey) {

        $state.go('app.index');
        $scope.isLoading = true;
        /*请求数据*/
        const url1 = 'https://api.douban.com/v2/movie/in_theaters';
        const url2 = 'https://api.douban.com/v2/movie/coming_soon';
        const url3 = 'https://api.douban.com/v2/movie/top250';
        const params = {
            apiKey: apiKey,
            count: 9,
            start: 0
        };
        myHttp.jsonp(url1,params,function (data) {
            console.log(data);
            $scope.data =data;
            $scope.data.type ="in_theaters";
            $scope.$apply();
            $scope.isLoading = false;
        });
        myHttp.jsonp(url2,params,function (data) {
            $scope.data2 =data;
            $scope.data2.type ="coming_soon";
            $scope.$apply();
        });
        myHttp.jsonp(url3,params,function (data) {
            $scope.data3 =data;
            $scope.data3.type ="top250";
            $scope.$apply();
        });
    }]);
})(angular);