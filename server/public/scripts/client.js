var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    template: '<div> Default </div>',
    controller: ' DefaultController as defCtrl'
  }).when('/tom', {
    templateUrl: 'views/tom.html',
    controller: 'TomController as tomCtrl'
  }).when('/jerry', {
    templateUrl: 'views/jerry.html',
    controller: 'JerryController as jerryCtrl'
  }).when('/cheese', {
    templateUrl: 'views/cheese.html',
    controller: 'CheeseController as cheeseCtrl'
  }).otherwise('/');

  $locationProvider.html5Mode(true);
});

// set up a controller --> GetRandomNumber comes from the service file
myApp.controller('TomController', function($http){
  console.log('TC');
});

myApp.controller('JerryController', function($http){
  console.log('JC');
});

myApp.controller('CheeseController', function($http){
  console.log('CC');
});
  // variable global to this controller
  var vm = this;
  vm.test = 'here is a thing';

  vm.skill = GetRandomNumber.randomNumber(1, 10);
  console.log('here is a randomNumber ->', vm.skill);

  vm.getQuality = function(){
    // get another randomNumber
    vm.quality = GetRandomNumber.randomNumber(1, 10);
  console.log('here is anotherRandomNumber ->', vm.quality);

    // compare to the skill
    if (vm.quality >= vm.skill){
      GetRandomNumber.increment();

      console.log("success!");
    } else {
      console.log("high five unsuccessful");
    }
      vm.count = GetRandomNumber.getCount();
    // possibly update the counter
  };
