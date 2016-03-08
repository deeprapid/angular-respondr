'use strict';

angular.module('angular-respondr', [])

.service('$respondr', ['$http', '$q', function($http, $q) {

  return {
    send: function (respondr) {
      var q = $q.defer();
      $http.post(
      	"https://messaging.respondr.io/send",
      	respondr
      ).success(function(response) {
        q.resolve(response);
      }).error(function(err) {
        q.reject(err);
      });
      return q.promise;
    },
    trackPageView: function (page) {
      _raq.push(['trackPageView', page]);
    },

    saveContact: function (contact) {
      _raq.push(['saveContact', contact]);
    },

    trackSiteSearch: function (search) {
      _raq.push(['trackSiteSearch', search]);
    },

    trackCategoryView: function (category) {
	  _raq.push(['trackCategoryView', category]); 
    },

    trackProductView: function (product) {
      _raq.push(['trackProductView', product]); 
    },

    trackEvent: function (evt) {
      _raq.push(['trackEvent', evt]);
    },

    addEcommerceItem: function (item) {
      _paq.push(['addEcommerceItem', item]);
    },

    updateEcommerceItem: function (item) {
      _raq.push(['updateEcommerceItem', item]);
    },

    deleteEcommerceItem: function (sku) {
      _raq.push(['deleteEcommerceItem', {sku: sku}]);
    },

    trackEcommerceOrder: function (order) {
      _raq.push(['trackEcommerceOrder', order]);
    }
  };
}]);