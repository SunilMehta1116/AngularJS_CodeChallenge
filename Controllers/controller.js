meanApp.controller('loginController',function($scope,$window,$rootScope){

	$scope.loggedUser = {
				userName: 't',
				password: 't'
		};
	
	
	$scope.authenticate = function (){

		if($scope.loggedUser.userName = 't' && $scope.loggedUser.password == 't'){
			$rootScope.isLogged =true;
			$scope.loggedUser.userName ='';
			$scope.loggedUser.password ='';
			$window.location.href = '#/feeds';
		}
	};
	
	$scope.signOut = function(){
			$scope.loggedUser.isLogged =false;
			$window.location.href = 'index.html';		
	};
	
});

meanApp.controller('profileController',function($scope,$window,meanFactory){
		if(typeof $scope.isLogged === 'undefined'){
			$window.location.href = '#/';
		}
		
	var reader;
	$scope.previewFile = function(){
		 var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
      reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
      
  };	
  
  $scope.insertUser = function(){
  		meanFactory.insertUser($scope.name,$scope.age,$scope.phone,$scope.email,$scope.address,reader);
  	};
 	  	
 	  	
					
});

meanApp.controller('feedsController',function($scope,$window,meanFactory){
	if(typeof $scope.isLogged === 'undefined'){
			$window.location.href = '#/';
		}
		
		$scope.addFeed = function(){
			meanFactory.insertFeeds($scope.newFeed);
		}
		
		$scope.deleteFeed = function(Id){
			meanFactory.deleteFeed(Id);
		};
		
		$scope.allFeeds = meanFactory.getAllFeeds();
	
});

meanApp.controller('postController',function($scope){
	
	$scope.is_valid_url = function (url){
     var checkHttp = url.indexOf('http') != -1  ?true:false;
     var checkHttps = url.indexOf('https') != -1  ?true:false;
     var checkdot = url.indexOf('www') != -1  ?true:false;
     
      if (checkHttp || checkHttps || checkdot)   
      		return true;
      else
      		return false;
     
	}
	
});

