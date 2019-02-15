angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function ($scope, Listings) {
        /* Get all the listings, then bind it to the scope */
        Listings.getAll().then(function (response) {
            $scope.listings = response.data;
        }, function (error) {
            console.log('Unable to retrieve listings:', error);
        });

        $scope.detailedInfo = undefined;


        $scope.addListing = function () {
            $scope.listings.push($scope.newListing);
            Listings.create($scope.newListing);
            $scope.newListing = {};
        };

        $scope.deleteListing = function (index) {

            var indexd = $scope.listings.indexOf(index);
            $scope.listings.splice(indexd, 1);
            Listings.delete(indexd.code).then(function (response) {
            }, function (error) {
                console.log('Unable to delete listings:', error);
            });
        };

        $scope.showDetails = function (index) {
            $scope.info = index;
        };
    }
]);