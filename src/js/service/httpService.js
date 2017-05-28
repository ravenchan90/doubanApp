/**
 * Created by Administrator on 2017/5/9.
 */
(function (angular) {
    "use strict";

    angular.module('app').service('myHttp',["$window",function ($window) {

        this.jsonp = function (url,params,fn) {
            /*1.在本地创建一个函数*/
            /*1.1 随机生成一个函数名称*/
            var callBackName = 'my_callback'+ Math.random().toString().slice(2);
            $window[callBackName] = function (data){
                fn(data);
                /*数据加载成功之后， 删除自己添加的标签*/
                $window.document.body.removeChild(newScript);
            };
            /*2.通过src属性请求网络地址。把本地的函数名称传递去过*/
            /*2.1 动态创建一个script标签 把它插入到DOM节点当中*/
            var newScript = $window.document.createElement('script');
            /*格式参数*/
            var queryString = "";
            for(var key in params){
                queryString += key +'='+params[key]+'&'
            }
            /*拼接地址*/
            queryString += 'callback='+callBackName;
            url = url+'?'+queryString;
            /*设置请求地址*/
            newScript.src = url;
            $window.document.body.appendChild(newScript);
        };

    }]);

})(angular);