bookStoreApp.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
	.state('home',{

		url : '/',
		templateUrl : '/views/home.html'

	});

	$urlRouterProvider.otherwise(function($injector){
		var $state = $injector.get('$state');
		$state.go('home');
	})

})