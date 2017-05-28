/**
 * Created by raven on 2017/5/28.
 */
(function (angular) {
    "use strict";
    /*创建应用搜索指令*/
    angular.module('app').directive('search',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/search_tpl.html'
        }
    });
})(angular);