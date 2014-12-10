meanApp.factory('meanFactory',function(){
	var factory = {};
	
	factory.insertUser = function(name,age,phone,email,address,pic){
		var topID = users.length+1;
		users.push({
			id: topID,
			name:name,
			age:age,
			phone:phone,
			email:email,
			address:address,
			pic:pic
		})
		console.log(users[topID]);
	};
	
	factory.insertFeeds = function(feedData){
		var topID = feeds.length+1;
		feeds.push({
			Id:topID,
			feed:feedData,
			time:Date.now()
		});
	};
	
	factory.getAllFeeds = function(){
		return feeds;
	};
	
	factory.deleteFeed = function(id){
		for(i=0,j=feeds.length;i<j;i++){
			if(feeds[i].Id == id){
				feeds.splice(i,1);
				break;
			}
		}
	};
	
	
	var users = [];
	var feeds = [];
	
	
	
	
	return factory;
});
