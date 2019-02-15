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

           // var indexd = $scope.listings.indexOf(index);
            var stop = false;
            for (var i = 0; i < $scope.listings.length && stop == false; i++) {
                var elem = $scope.listings[i];

                if (elem.code == index.code) {
                    $scope.listings.splice(index, 1);
                    Listings.delete(index).then(function (response) {
                    }, function (error) {
                        console.log('Unable to delete listings:', error);
                        });
                    stop = true;
                }
            }
        };

        $scope.showDetails = function (index) {
            $scope.info = index;
        };
    }
]);