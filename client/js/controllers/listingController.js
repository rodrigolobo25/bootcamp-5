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
            $scope.listings.push({ "code": $scope.code, "name": $scope.name, "coordinates": { "latitude": $scope.latitude, "longitude": $scope.longitude }, "address": $scope.address });
            $scope.code = "";
            $scope.name = "";
            $scope.longitude = "";
            $scope.latitude = "";
            $scope.address = "";
        }
        $scope.deleteListing = function (index) {
            var indexd = $scope.listings.indexOf(index);
            $scope.listings.splice(indexd, 1);
        };
        $scope.showDetails = function (index) {
            $scope.info = index;
        };
    }
]);