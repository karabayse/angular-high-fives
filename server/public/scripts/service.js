myApp.service('GetRandomNumber', function(){


  var counter = 0;
  // function that returns a random number
  this.randomNumber = function(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  };
  // two functions:
  // one to increment
  // one to get count
  this.increment = function(){
    console.log('increment function running');
    counter++;
  };

  this.getCount = function(){
    return counter;
  };
});
