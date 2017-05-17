var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/default.html',
    controller: 'DefaultController as defCtrl'
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

myApp.controller('DefaultController', function(){
  console.log('DC');
  var vm = this;
});
// set up a controller --> GetRandomNumber comes from the service file
myApp.controller('TomController', function($http, GetRandomNumber){
  console.log('TC');
  var vm = this;
  vm.test = 'here is a thing';
  vm.count = GetRandomNumber.getCount();
  vm.skill = GetRandomNumber.randomNumber(6, 10);
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
});

myApp.controller('JerryController', function($http, GetRandomNumber){
  console.log('JC');
  var vm = this;
  vm.test = 'here is a thing';
  vm.count = GetRandomNumber.getCount();
  vm.skill = GetRandomNumber.randomNumber(4, 10);
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
});

myApp.controller('CheeseController', function($http, GetRandomNumber){
  console.log('CC');

  // variable global to this controller
  var vm = this;
  vm.test = 'here is a thing';
  vm.count = GetRandomNumber.getCount();
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
});
