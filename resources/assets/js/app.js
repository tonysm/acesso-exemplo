
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

Vue.component('example', require('./components/Example.vue'));
const VueGoogleMap = require('vue-google-maps');

VueGoogleMap.load({
    key: 'YOUR-KEY'
});

Vue.component('map', VueGoogleMap.Map);
Vue.component('marker', VueGoogleMap.Marker);
Vue.component('info-window', VueGoogleMap.InfoWindow);

var app = new Vue({
    el: 'body'
});
