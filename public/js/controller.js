//var farmers=angular.module('farmers',[]);
/*
var farmers=angular.module('farmers',['firebase']);

var data = new Firebase("https://farmers.firebaseio.com");
data.users = new Firebase("https://farmers.firebaseio.com/users");
data.users.etblue = new Firebase("https://farmers.firebaseio.com/users/etblue");
data.users.etblue.pins = new Firebase("https://farmers.firebaseio.com/users/etblue/pins");
data.users.etblue.pins.issues = new Firebase("https://farmers.firebaseio.com/users/etblue/pins/issues");
data.users.etblue.stream = new Firebase("https://farmers.firebaseio.com/users/etblue/stream");
$(function(){
  $('#inputName').on('keypress', function (e) {
    if (e.keyCode == 13) {
      var id = $('#inputId').val();
      var name = $('#inputName').val();
      $('#inputId').val('');
      $('#inputName').val('');
      data.users.etblue.pins.issues.push({name:name});
    }
  });
});
data.users.etblue.pins.on('child_added',function(snapshot){
  var pin=snapshot.val();
  showNewPin(pin.id,pin.name);
});
showNewPin=function(id,name){
};

var controllers={};

controllers.sidebar=function($scope,$firebase){
  var data = new Firebase('https://farmers.firebaseio.com');
  data.users = new Firebase("https://farmers.firebaseio.com/users");
  data.users.etblue = new Firebase("https://farmers.firebaseio.com/users/etblue");
  data.users.etblue.pins = new Firebase("https://farmers.firebaseio.com/users/etblue/pins");
  $scope.pins = $firebase(data.users.etblue.pins);
}

farmers.factory('dataPlan',function(){
  var plans=[
  ];
  var factory={};
  factory.getPlans=function(){
    return plans;
  }
  return factory;
});

controllers.timeline=function($scope,dataPlan){
  $scope.plans=dataPlan.getPlans();
  $scope.addPlan=function(){
    $scope.plans.push(
      {
        id: $scope.newPlan.id,
        name: $scope.newPlan.name
      });
  };
};
farmers.controller('timeline',controllers.timeline);
farmers.controller('sidebar',controllers.sidebar);

*/
