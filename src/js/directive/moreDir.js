/**
 * Created by raven on 2017/5/29.
 */

(function (angular) {
    "use strict";

    angular.module('app').directive('more',['myHttp',function (myHttp) {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/more_tpl.html',
            scope:{
                moreMovie:"=",
                isLoading:"=",
                url:'=',
                params:'=',
                loadData:"&"
            },
            /* 设置动态加载电影列表 */
            link:function ($scope,$ele,$attr) {

                var timer = null;
                var body = document.body;
                
                clearInterval(timer);
                timer = setInterval(function () {
                    body.onscroll = function () {
                        /*判断是否到达加载位置*/
                        if(body.scrollTop + window.screen.availHeight >body.clientHeight - 300){
                            /*判断电影总数是否加载完毕*/
                            if($scope.moreMovie.start > $scope.moreMovie.total)return;
                            /*判断上一次加载是否完毕*/
                            if($scope.params.start != $scope.moreMovie.start)return;
                            $scope.params.start = $scope.moreMovie.start + $scope.params.count;
                            myHttp.jsonp($scope.url,$scope.params,function (data) {

                                $scope.moreMovie.start = data.start;
                                $scope.moreMovie.subjects = $scope.moreMovie.subjects.concat(data.subjects);
                                $scope.$apply();
                            });
                        }

                    }
                },1000);

                $ele.on("$destroy",function () {
                    clearInterval(timer);
                })
            }
        }

    }]);
})(angular);