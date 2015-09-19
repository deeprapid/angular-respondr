# angular-respondr

Easily track actions and send messages via Respondr from your [AngularJS](https://angularjs.org/) app.

## Installation
Install angular-respondr as follows:

```
$ bower install angular-respondr --save
```

### Adding dependency to your project
Add angular-respondr as a module depenency.

```
angular.module('myModule', ['angular-respondr']);
```

### Include angular-respondr in your index page:
The final step is to add angular-respondr to your index page. angular-respondr also requires that you include Respondr Analytics, as follows:

```
<script type="text/javascript">
var _raq = _raq || [];
_raq.push(["trackSession", "---paste your siteId here---"]);
(function() {
  var u=(("https:" == document.location.protocol) ? "https" : "http") + "://analytics.respondr.io/static/";
  var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
  g.defer=true; g.async=true; g.src=u+"respondr.js"; s.parentNode.insertBefore(g,s);
})();
</script>
<script src="bower_components/angular-respondr/respondr.js"></script>
```

This step assumes that AngularJS is also included somewhere above angular-respondr. 

## Sending Respondrs
The send() function takes a respondr object as an input parameter and returns a promise.

```
$respondr.send({
  contactEmail: "john@example.com", // required
  id: "respondr id goes here",      // required
  data: {                           // optional
    field1: "XXXXXXXX",
    field2: 'YYYYYYYY'
  }
}).then(function(err, body) {
  if (err) {
    console.log("Error:");
    console.log(err);
  } else {
    console.log("Message successfully sent!");
  }
});
```

## Saving Contacts
You can save contacts to Respondrs as follows:

```
$respondr.saveContact({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phone: "4080099281",
  company: "XYZ Corp"
});
```

## Tracking Actions
Tracking actions is easy with angular-respondr. There are currently 11 supported actions.

### Track a Page View

```
$respondr.trackPageView({
  pageTitle: "Hello World"
});
```

### Track a Site Search

```
$respondr.trackSiteSearch({
  searchKeyword: "book"
});
```

### Track a Category View

```
$respondr.trackCategoryView({
  name: "Shoes"
});
```

### Track a Product View

```
$respondr.trackProductView({
  name: "Nike Running Shoe",
  sku: "nike-shoe",
  price: 29.99,
  desc: "Nike's best running shoe.",
  categories: "Shoes",
  imageUrl: "http://somesite.com/nike-shoe.jpg"
});
```

### Add Ecommerce Item

```
$respondr.addEcommerceItem({
  name: "Nike Running Shoe",
  sku: "nike-shoe",
  price: 29.99,
  desc: "Nike's best running shoe.",
  categories: "Shoes",
  imageUrl: "http://somesite.com/nike-shoe.jpg",
  qty: 2
});
```

### Update Ecommerce Item

```
$respondr.updateEcommerceItem({
  name: "Nike Running Shoe",
  sku: "nike-shoe",
  price: 29.99,
  desc: "Nike's best running shoe.",
  categories: "Shoes",
  imageUrl: "http://somesite.com/nike-shoe.jpg",
  qty: 2
});
```


### Delete Ecommerce Item

```
$respondr.deleteEcommerceItem({
  sku: "nike-shoe"
});
```

### Track Ecommerce Order

```
$respondr.trackEcommerceOrder({
  orderId: "1234567",
  total: 100,
  subTotal: 0,
  tax: 0,
  shipping: 0,
  discount: 0
});
```

### Track Custom Event

```
$respondr.trackEvent({
  name: "nike-shoe",
  category: "XXXX"
});
```






