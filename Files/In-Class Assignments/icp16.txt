// Create the 'spa' module and inject 'ngRoute'
var app = angular.module('spa', ['ngRoute']);

// Create constants for HTML templates
const htmlHome = '<h2>Home</h2><p>This is the Home Page</p>';
const htmlAbout = '<h2>About</h2><p>This is the About Page</p>';
const htmlServices = '<h2>Services</h2><p>This is the Services Page</p>';
const htmlProjects = '<h2>Projects</h2><p>This is the Projects Page</p>';

// Configure the routing
app.config(function ($routeProvider, $locationProvider) {
  // Set the hash prefix to an empty string
  $locationProvider.hashPrefix('');

  // Setup the $routeProvider
  $routeProvider
    .when('/home', {
      template: htmlHome
    })
    .when('/about', {
      template: htmlAbout
    })
    .when('/services', {
      template: htmlServices
    })
    .when('/projects', {
      template: htmlProjects
    })
    .otherwise({
      redirectTo: '/home'
    });
});
