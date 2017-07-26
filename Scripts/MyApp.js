var app = angular.module('MyApp', ['angularjs-dropdown-multiselect']);
app.controller('multiselectdropdown', ['$scope', '$http', function ($scope, $http) {
    //define object 
    $scope.CategoriesSelected = [{ id: 1, label: 'ss' }];
    $scope.Categories = [{ id: 1, label: 'ss' },{ id: 2, label: 'fjhg' },{ id: 3, label: 'sdfsdf' },{ id: 4, label: 'sssds' }];
    $scope.CategoriesSelected1 = [{ id: 1, label: 'ss' }];
    $scope.Categories1 = [{ id: 1, label: 'vzxfd' },{ id: 2, label: 'aeawe' },{ id: 3, label: 'zdzf' },{ id: 4, label: 'zdf' }];
    $scope.dropdownSetting = {
        scrollable: true,
        scrollableHeight : '200px',
    }
    ////fetch data from database for show in multiselect dropdown
    // $http.get('/home/getcategories').then(function (data) {
    //     angular.forEach(data.data, function (value, index) {
    //         $scope.Categories.push({ id: value.CategoryID, label: value.CategoryName });
    //     });
    // })
    ////post or submit selected items from multiselect dropdown to server
    $scope.SubmittedCategories = [];
    $scope.SubmitData = function () {
        var categoryIds = [];
        angular.forEach($scope.CategoriesSelected, function (value, index) {
            categoryIds.push(value.id);
        });

        var data = {
            categoryIds: categoryIds
        };

        // $http({
        //     method: "POST",
        //     url: "/home/savedata",
        //     data:JSON.stringify(data)
        // }).then(function (data) {
        //     $scope.SubmittedCategories = data.data;
        // }, function (error) {
        //     alert('Error');
        // })
    }

}])