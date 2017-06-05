
(function (angular) {
    "use strict";

    angular.module('app').controller('detailController',['$scope','$stateParams','myHttp',function ($scope,$stateParams,myHttp) {
        $scope.isLoading = true;
        $scope.isDetail =true;
        $scope.$broadcast('showBack',{showBack:true});
        var id = $stateParams.id;
        var url = "https://api.douban.com/v2/movie/subject/" + id;

        myHttp.jsonp(url, null, function (data) {
            $scope.movieDetail = data;
            console.log(data);
            $scope.isLoading = false;
            $scope.$apply();
        });
    }]);
})(angular);