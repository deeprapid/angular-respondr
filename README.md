# angular-respondr

Easily track actions and send messages via Respondr from your [AngularJS](https://angularjs.org/) app.

## Installation
Install angular-respondr as follows:

```
$ bower install angular-respondr --save
```

### Include respondr.js in index.html
Add angular-respondr as a module depenency.

```
angular.module('myModule', ['angular-respondr']);
```

### Adding dependency to your project
Add angular-respondr as a module depenency.

```
angular.module('myModule', ['angular-respondr']);
```

### Initiate the session:
In your controller, initiate the session by calling trackSession with the siteId:

```
$respondr.trackSession("---paste your siteId here---");
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






