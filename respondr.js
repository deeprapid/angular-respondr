var _raq = _raq || [];

'use strict';

angular.module('angular-respondr', [])

.service('$respondr', ['$http', '$q', function($http, $q) {

  var siteId;

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
    trackSession: function(id) {
      siteId = id;
      (function() {
        var u=(("https:" == document.location.protocol) ? "https" : "http") + "://analytics.respondr.io/static/";
        var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
        g.defer=true; g.async=true; g.src=u+"respondr.js"; s.parentNode.insertBefore(g,s);
      })();
      _raq.push(["trackSession", siteId]);
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
      _raq.push(['addEcommerceItem', item]);
    },

    updateEcommerceItem: function (item) {
      _raq.push(['updateEcommerceItem', item]);
    },

    deleteEcommerceItem: function (sku) {
      _raq.push(['deleteEcommerceItem', {sku: sku}]);
    },

    trackEcommerceOrder: function (order) {
      _raq.push(['trackEcommerceOrder', order]);
    },

    getRecommendations: function(query) {
      query.siteId = siteId;
      var q = $q.defer();
      var params = '';
      var i = 0;
      for (var key in query) {
        params += (i > 0) ? '&' + key + '=' + query[key] : key + '=' + query[key];
        i += 1;
      }
      $http.get(
        "https://brain.respondr.io/engine/query?" + params
      ).success(function(response) {
        q.resolve(response);
      }).error(function(err) {
        q.reject(err);
      });
      return q.promise;
    }
  };
}]);