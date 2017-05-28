/**
 * Created by Administrator on 2017/5/9.
 */

(function (angular) {
    "use strict";
    /*创建应用导航指令*/
    angular.module('app').directive('detail',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/detail_tpl.html',
            scope:{
                movieDetail:"="
            }
        }
    });
})(angular);