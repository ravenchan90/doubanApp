/**
 * Created by raven on 2017/5/9.
 */
(function (angular) {
    "use strict";

    angular.module('app').directive('list',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/list_tpl.html',
            scope:{
                movieList:"=",
                isLoading:"=",
            },
            link:function ($scope, $ele, $attr) {

                var $ul = angular.element($ele.find('ul')[0]);
                var ulW = $ul[0].offsetWidth;
                var screenW = window.screen.availWidth;
                var moveX = 0;
                var totalW = ulW - screenW;

                var beginX = 0 ,endX = 0,ulMoveX = 0;
                var moveS = 0;

                $ul.on('touchstart',function (e) {
                    beginX = e.touches[0].clientX;
                });
                $ul.on('touchmove', function (e) {

                    endX = e.touches[0].clientX;
                    moveX = moveS + endX - beginX;
                    ulMoveX = moveX * totalW / screenW;

                    if(moveX >= 0){
                        moveX = 0;
                        $ul.css('left', '0px');
                    }else if(moveX <= -screenW){
                        moveX = -screenW;
                        $ul.css('left', -totalW +'px');
                    }else{
                        $ul.css('left', ulMoveX +'px');
                    }
                });
                $ul.on('touchend', function (e) {
                    moveS = moveX;
                });

            }
        }
    });
})(angular);