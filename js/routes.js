angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.empresa', {
    url: '/empresa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/empresa.html',
        controller: 'empresaCtrl'
      }
    }
  })

  .state('menu.produto', {
    url: '/produto',
    views: {
      'side-menu21': {
        templateUrl: 'templates/produto.html',
        controller: 'produtoCtrl'
      }
    }
  })

  .state('menu.serviO', {
    url: '/servico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviO.html',
        controller: 'serviOCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.redesSociais', {
    url: '/redesocial',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redesSociais.html',
        controller: 'redesSociaisCtrl'
      }
    }
  })

  .state('menu.entreEmContato', {
    url: '/faleconosco',
    views: {
      'side-menu21': {
        templateUrl: 'templates/entreEmContato.html',
        controller: 'entreEmContatoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/empresa')

  

});