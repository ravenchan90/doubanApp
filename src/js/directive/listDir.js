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
            }
        }

    });
})(angular);