'use strict';

// Register `phoneList` component, along with its associated controller and template
/*angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',

    // the controller id=s in form [services, function] because in case you minify the js, angluar still know the
    // service in needs to inject, like $http here.
    controller: [ '$http', 
        function PhoneListController($http) {
           var self = this;
           var responsePromise = $http.get('/phones/phones.json');
           responsePromise.success(function(data){
            console.log(data);
            self.phones = data
           });

           responsePromise.error(function(){
            console.log("Error in ajax")
           });
     }
    ]

  });
*/


  angular.
    module('phoneList')
      .directive("datepicker", function () {
        return {
            restrict: "A",
            link: function (scope, el, attr) {
                el.datepicker({
                                dateFormat: 'yy-mm-dd'
                            });
            }
        };
    })
    .component('phoneList',{
      templateUrl: 'phone-list/phone-list.template.html',
      controller: ['Phone', '$http',
        function PhoneListController(Phone,$http){          
          this.phones = Phone.query();

          fetchData();

          function fetchData(){
          console.log('Function Called');
          $http({
          method: 'GET',
          url: 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
          }).then(function successCallback(response) {
          console.log('success');
          console.log(response);
             // this callback will be called asynchronously
             // when the response is available
           }, function errorCallback(response) {
             // called asynchronously if an error occurs
             // or server returns response with an error status.
          console.log('error');
          });
      }

       // add -ons
        var today = new Date();
        this.AvailableDate = new Date();
        this.ExpireDate = new Date();
        this.dateFormat = 'yyyy-MM-dd';
        this.availableDateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            minDate: today,
            maxDate: new Date(2030, 5, 22)
        };
        this.availableDatePopup = {
            opened: false
        };

         this.OpenAvailableDate = function() {
            this.availableDatePopup.opened = !this.availableDatePopup.opened;
        };


  } // controller ends here




      ]
    });
