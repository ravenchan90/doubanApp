/**
 * Created by raven on 2017/5/29.
 */

(function (angular) {
    "use strict";
    angular.module('app').controller('moreController',['$scope','myHttp','apiKey','$stateParams','$window',function ($scope,myHttp,apiKey,$stateParams,$window) {

        $scope.isLoading = true;
        /*请求数据*/
        const baseUrl = 'https://api.douban.com/v2/movie/';
        const params = {
            apiKey: apiKey,
            count: 15,
            start: 0
        };

        var url = '';
        /* 获取参数，拼接url */
        switch ($stateParams.type){
            case "in_theaters":
                url = baseUrl + "in_theaters";
                break;
            case "coming_soon":
                url = baseUrl + "coming_soon";
                break;
            case "top250":
                url = baseUrl + "top250";
                break;
        }
        $scope.url = url;
        $scope.params = params;

        myHttp.jsonp(url,params,function (data) {
            console.log(data);
            $scope.data =data;
            $scope.isLoading = false;
            $scope.$apply();
        });

    }]);
})(angular);