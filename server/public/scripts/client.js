var myApp = angular.module('myApp', []);

// set up a controller --> service is the name of the service file
myApp.controller('HighFivesController', function(service){
  console.log('HF');
  // variable global to this controller
  var vm = this;
  vm.test = 'here is a thing';

  var randomNumber = service.randomNumber(1, 10);  // service is the name of the service file
  console.log('here is a randomNumber ->', randomNumber);
  vm.skill = randomNumber;

  vm.getQuality = function(){
    // get another randomNumber
    // compare to the skill
    // possibly update the counter
  };
});
