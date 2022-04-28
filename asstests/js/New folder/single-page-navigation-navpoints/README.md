# NavPoints

jQuery plugin for the navigation on one-page sites. Adds smooth scrolling when clicking on the navigation and automatically selects the correct navigation items as you are scrolling through the different sections.

### Use:
```js
$('#navigation').navpoints();
```

### Options:
* **speed** - Scroll speed. Default: 300;
* **offset** - An offset in pixels above the target element when scrolling. Default: 0;
* **currentClass** - Class name for active link. Default: active;
* **updateHash** - In browsers that support the history object, update the urls hash. Default: false;
* **classToParent** - Apply the class not to the link, but to the parent. Default: false;
