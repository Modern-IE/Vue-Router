# Vue Router for IE6

The classic `vue-router` API, brutally downgraded to run on Internet Explorer 6. 

IE6 lacks the `hashchange` event, so this router uses a precise `setInterval` polling mechanism to detect URL changes and trigger component rendering, enabling True Single Page Applications (SPA) on a browser from 2001.

## Usage

```html
<script src="vue-router-ie6.js"></script>
<script>
    var router = new VueRouter({
        routes: [
            { 
                path: '/', 
                component: function() {
                    document.getElementById('app').innerHTML = '<h1>Home</h1>';
                } 
            },
            { 
                path: '/about', 
                component: function() {
                    document.getElementById('app').innerHTML = '<h1>About Us</h1>';
                } 
            }
        ]
    });

    // Programmatic navigation
    function goToAbout() {
        router.push('/about');
    }
</script>
```
