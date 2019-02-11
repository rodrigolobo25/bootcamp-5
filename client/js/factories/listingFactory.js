angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
        return $http.get('https://afternoon-brushlands-68906.herokuapp.com/api/listings');
    },
	
	create: function(listing) {
        return $http.post('https://afternoon-brushlands-68906.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
        return $http.delete('https://afternoon-brushlands-68906.herokuapp.com/api/listings', listing);
    }
  };

  return methods;
});
