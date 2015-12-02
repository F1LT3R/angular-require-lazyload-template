define(['angular', 'routes'], function (angular, routes) {


    var routeResolver = function () {

        this.$get = function () {
            return this;
        };


        this.route = function () {

          var resolve = function (routeDef) {

            angular.forEach(routeDef.views, function (view) {


              view.deps.map(function (dep) {
                return routes.config.staticDirectory + dep;
              });

              view.resolve = { load: ['$q', '$rootScope', function ($q, $rootScope) {
                return resolveDependencies($q, $rootScope, view.deps);
              }]};
            });

            return routeDef;
          },

          resolveDependencies = function ($q, $rootScope, dependencies) {
            var defer = $q.defer();

            require(dependencies, function () {
              defer.resolve();
              $rootScope.$apply();
            });

            return defer.promise;
          };


          return {
            resolve: resolve
          };

        }();

    };

    var servicesApp = angular.module('routeResolverServices', []);

    // Must be a provider since it will be injected into module.config()
    servicesApp.provider('routeResolver', routeResolver);


    return servicesApp;
});




















// define(['angular'], function (angular) {

//     console.log(123123);

//     var routeResolver = function () {

//         this.$get = function () {
//             return this;
//         };

//         this.routeConfig = function () {

//             var viewsDirectory = '/app/views/',
//                 controllersDirectory = '/app/controllers/',

//             setBaseDirectories = function (viewsDir, controllersDir) {
//                 viewsDirectory = viewsDir;
//                 controllersDirectory = controllersDir;
//             },

//             getViewsDirectory = function () {
//                 return viewsDirectory;
//             },

//             getControllersDirectory = function () {
//                 return controllersDirectory;
//             };

//             return {
//                 setBaseDirectories: setBaseDirectories,
//                 getControllersDirectory: getControllersDirectory,
//                 getViewsDirectory: getViewsDirectory
//             };
//         }();

//         this.route = function (routeConfig) {

//             var resolve = function (baseName, path, secure) {
//                 if (!path) path = '';

//                 var routeDef = {};
//                 routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
//                 routeDef.controller = baseName + 'Controller';
//                 routeDef.secure = (secure) ? secure : false;
//                 routeDef.resolve = {
//                     load: ['$q', '$rootScope', function ($q, $rootScope) {
//                         var dependencies = [routeConfig.getControllersDirectory() + path + baseName + 'Controller.js'];
//                         return resolveDependencies($q, $rootScope, dependencies);
//                     }]
//                 };

//                 return routeDef;
//             },

//             resolveDependencies = function ($q, $rootScope, dependencies) {
//                 var defer = $q.defer();
//                 require(dependencies, function () {
//                     defer.resolve();
//                     $rootScope.$apply();
//                 });

//                 return defer.promise;
//             };

//             return {
//                 resolve: resolve
//             };

//         }(this.routeConfig);

//     };

//     var servicesApp = angular.module('routeResolverServices', []);

//     // Must be a provider since it will be injected into module.config()
//     servicesApp.provider('routeResolver', routeResolver);


//     return servicesApp;
// });