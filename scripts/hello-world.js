angular.module('todoListApp')
.directive('helloWorld', function() {
  return {
    template: 'This is the helloWorld directive',
    restrict: 'E'
  };
});
