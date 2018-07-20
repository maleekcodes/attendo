var routes = [
  // Index Page (Our Splash Screen)

  {
    path: '/',
    url: '/index.html',
    name: 'home',
  },

  // Verification Page 

  {
    path: '/verify',
    url: '/pages/verify.html',
    name: 'verify',
  },

  //Home Page
  {
    path: '/home',
    url: '/pages/home.html',
    name: 'home',
  },

  // Timeline Page

  {
    path: '/timeline',
    url: '/pages/timeline',
    name: '/timeline',
  }

  //404
  {
    path: '(.*)',
    url: '/pages/404.html',
  },
  
];