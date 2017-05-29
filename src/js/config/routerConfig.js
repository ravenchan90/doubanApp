/**
 * Created by raven on 2017/5/9.
 */
(function (angular) {
    "use strict";
    //路由配置
    angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        //配置主路由
        $stateProvider.state('app', {
            url: '/app',
            views: {
                movie: {
                    templateUrl: '../view/home_tpl.html',
                    controller: 'homeController'
                },
                music: {
                    template: "<h1><br><br>音乐</h1>"
                },
                book: {
                    template: '<h1><br><br>读书</h1>'
                },
                my: {
                    template: '<h1><br><br>我的</h1>'
                }
            }
        });
        /*设置默认跳转。*/
        $urlRouterProvider.otherwise('/app/index');
    }]);

    angular.module('app').config(['$stateProvider', function ($stateProvider) {
        //配置主路由
        $stateProvider.state('app.index', {
            url: '/index',
            template: '<list movie-list="data" is-loading="isLoading"></list><list movie-list="data2" is-loading="isLoading"></list><list movie-list="data3" is-loading="isLoading"></list>'
        })
            .state('app.detail', {
                url: '/detail/:id',
                template: '<detail movie-detail="movieDetail" is-loading="isLoading"></detail>',
                controller: 'detailController'
            })
            .state('app.more', {
                url: '/more/:type',
                template: '<more more-movie="data" is-loading="isLoading"  params="params" url="url" load-data="loadData"></more>',
                controller: 'moreController'
            });

    }]);


})(angular);

