/**
 * Created by raven on 2017/5/9.
 */
(function (angular) {
    "use strict";

    /*设置白名单，允许哪些网址可以跨域*/
    angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            "https://api.douban.com/**",
            'http://localhost/api/**'
        ]);
    }]);

})(angular);