/**
 * Created by raven on 2017/5/9.
 */

(function (angular) {
    "use strict";

    angular.module('app').directive('detail',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/detail_tpl.html',
            scope:{
                movieDetail:"=",
                isLoading:"="
            }
        }
    });
})(angular);