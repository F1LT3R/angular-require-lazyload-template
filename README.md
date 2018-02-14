# Angular Require Lazy-Load Cookie-Cutter

> Load your apps resources, as you need them.

## What is This?

This is a cookie-cutter project for Angular 1, that provides true lazy-loading features. The dependencies are resolved on-demand as the route changes. If the user only sees 10% of your app, only ~10% of your code is downloaded! Previously loaded resources are fetched from the browser's cache.

Try out the demo: [http://f1lt3r.github.io/angular-require-lazyload-template/](http://f1lt3r.github.io/angular-require-lazyload-template/)

Read more about the [lazy-loading software design pattern](https://en.wikipedia.org/wiki/Lazy_loading) on Wikipedia.

### Example

[Step 1](https://i.imgur.com/h0Wd7S3.jpg)

[Step 2](https://i.imgur.com/XWWW9of.jpg)

[Step 3](https://i.imgur.com/O67fMA9.jpg)


### Who is it For? 


This paradigm lends itself well to any app that you would like to load very quickly. It is particularly well suited for mobile applications where you would like to reduce the size of the initial payload that your app needs to start running and show the first screen. All following screens, directives, controllers, etc. are loaded after the app has been bootstrapped.

### What Can Be Lazy-Loaded?

- Angular Services
- Angular Directives
- Angular Controllers
- CSS Files
- HTML Files


### Code Base Requirements

- AngularJS 1
- Angular UI-Router
- RequireJS


## Definitions

### Ng-Files

All files prefixed with `ng-` contain core Angular code.

### Core Module

The Definition of a Core Module is two-fold:

 1. A Module that the Angular App depends upon to be bootstrapped. A Core Module can be a Directive, a Controller or even a Configuration file.
 2. A Module that is used in every/many view(s) of the application. Eg: an API module that handles communication between the server and the client.



## Research

 - [Lazy Loading in AngularJS](http://ify.io/lazy-loading-in-angularjs/) - Ifeanyi Isitor
 - [angularAMD](http://marcoslin.github.io/angularAMD/) - Marcoslin
 - [Dynamically Loading Controllers & Views With AngularJS & RequireJS](http://weblogs.asp.net/dwahlin/dynamically-loading-controllers-and-views-with-angularjs-and-requirejs) - Dan Wahlin
 - [Dynamically Loading Directives in AngularJS the Easy Way](http://www.debuggerstepthrough.com/2014/11/dynamically-loading-directives-in.html]) - Gilly Barr
 - [Instant Dependency Management with RequireJs](http://www.amazon.com/gp/product/B00CXRTC1Q) - Book by Greg Franko
 - [Pro AngularJS](http://www.amazon.com/gp/product/B00CXRTC1Q) - Book by Adam Freeman