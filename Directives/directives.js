meanApp.directive('singleFeed',function(){
	return{
		restrict:'E',
		scope: {
			removeFeed: "&",
			feedtext: "="
		},
		templateUrl:'Partials/Posts.html',
		
	}
});
