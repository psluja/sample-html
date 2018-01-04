(function () {

	view.CreateNameModel('index.html',null); 
	for(var i = 0; i < 3; i++){
		view.CreateNameModel('index-'+i+'.html', null); 
	}

})();

function RouteRule(routeModel){
	
		if(routeModel.ViewModelName==='index'){
			return routeModel.ViewName;
		}
	
		return `${routeModel.ViewModelName}/${routeModel.ViewName}`
	}

