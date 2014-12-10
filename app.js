/**
 * @author sunilm
 */
var meanApp = angular.module('meanApp',['ngRoute']);

		meanApp.config(function($routeProvider){
			$routeProvider
				.when('/',
						{
							controller:'loginController',
							templateUrl:'landing.html'
						}
					)
				.when('/profile',
						{
							controller:'profileController',
							templateUrl:'Partials/Profile.html'
						}
					)
				.when('/feeds',
						{
							controller:'feedsController',
							templateUrl:'Partials/Feeds.html'
						}
					)	
				.otherwise({redirectTo:'/'})
			
		});
