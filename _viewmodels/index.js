(function () {

	for(var i = 0; i < 3; i++){
		data.AddThumbnailEntity('marketing-item-'+i, {
			GroupName:'marketing-items',
			ImageUrl:'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
			Width:140,
			Height:140,
			Caption:'Heading '+i,
			Text:'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
		});
	}

	for(var i = 0; i < 3; i++){
		
		data.AddThumbnailEntity('feature-item-'+i, {
			GroupName:'feature-items',
			ImageUrl:'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16032ad5ea5%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16032ad5ea5%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.13333129882812%22%20y%3D%22261.7%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
			Width:500,
			Height:500,
			Caption:'First featurette heading. It\'ll blow your mind.'+i,
			Text:'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
		});
	}
	
	view.Create(); 
})();

function RouteRule(routeModel){

	if(routeModel.ViewModelName==='index'){
		return routeModel.ViewName;
	}

	return `${routeModel.ViewModelName}/${routeModel.ViewName}`
}

