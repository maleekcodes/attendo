var app = new Framework7( {

  root: '#app',
  name: 'Attendo',
  id: 'com.attendo.test',
  theme: 'auto',
  panel: {
    swipe: 'left',

  },
  routes: [
    {
      path: '/home',
      url: 'home.html',
    },
  ],
  smartSelect: {
    pageTitle: 'Select Option',
    openIn: 'sheet',
  }
});


var mainView = app.views.create('.view-main');
var smartSelect = app.smartSelect.get('.smart-select');


// var $$ = DOM7;

// $$("#login").on("click", function() {
//   // window.location.replace("home.html");
//   alert("Hello")
// });