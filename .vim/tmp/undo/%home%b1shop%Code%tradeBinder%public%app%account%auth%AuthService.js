Vim�UnDo� 8�d�!��0{��R1Q��N���r��C�aN��         .module('account.AuthService')            $       $   $   $    V�>\    _�                             ����                                                                                                                                                                                                                                                                                                                                                             V�5�     �                   �               5�_�                            ����                                                                                                                                                                                                                                                                                                                �                                           V�5�     �   �   �              };�   �   �          	        }�   �   �                      return output;�   �   �          '            } while (i < input.length);�   �   �          /                enc1 = enc2 = enc3 = enc4 = "";�   �   �          (                chr1 = chr2 = chr3 = "";�   �   �                          }�   �   �          @                    output = output + String.fromCharCode(chr3);�   �   �          !                if (enc4 != 64) {�   �   �                          }�   �   �          @                    output = output + String.fromCharCode(chr2);�   �   �          !                if (enc3 != 64) {�   �   �          <                output = output + String.fromCharCode(chr1);�   ~   �          0                chr3 = ((enc3 & 3) << 6) | enc4;�   }             8                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);�   |   ~          1                chr1 = (enc1 << 2) | (enc2 >> 4);�   z   |          >                enc4 = this.keyStr.indexOf(input.charAt(i++));�   y   {          >                enc3 = this.keyStr.indexOf(input.charAt(i++));�   x   z          >                enc2 = this.keyStr.indexOf(input.charAt(i++));�   w   y          >                enc1 = this.keyStr.indexOf(input.charAt(i++));�   v   x                      do {�   t   v          =            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");�   s   u                      }�   r   t          2                    "Expect errors in decoding.");�   q   s          U                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +�   p   r          Z                window.alert("There were invalid base64 characters in the input text.\n" +�   o   q          )            if (base64test.exec(input)) {�   n   p          3            var base64test = /[^A-Za-z0-9\+\/\=]/g;�   m   o          K            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =�   k   m                      var i = 0;�   j   l          ,            var enc1, enc2, enc3, enc4 = "";�   i   k          &            var chr1, chr2, chr3 = "";�   h   j                      var output = "";�   g   i          "        decode: function (input) {�   e   g          
        },�   d   f                      return output;�   b   d          '            } while (i < input.length);�   _   a          -                    this.keyStr.charAt(enc4);�   ^   `          .                    this.keyStr.charAt(enc3) +�   ]   _          .                    this.keyStr.charAt(enc2) +�   \   ^          .                    this.keyStr.charAt(enc1) +�   [   ]          !                output = output +�   Y   [                          }�   X   Z                              enc4 = 64;�   W   Y          )                } else if (isNaN(chr3)) {�   V   X          %                    enc3 = enc4 = 64;�   U   W          "                if (isNaN(chr2)) {�   S   U          !                enc4 = chr3 & 63;�   R   T          8                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);�   Q   S          7                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);�   P   R          !                enc1 = chr1 >> 2;�   N   P          -                chr3 = input.charCodeAt(i++);�   M   O          -                chr2 = input.charCodeAt(i++);�   L   N          -                chr1 = input.charCodeAt(i++);�   K   M                      do {�   I   K                      var i = 0;�   H   J          ,            var enc1, enc2, enc3, enc4 = "";�   G   I          &            var chr1, chr2, chr3 = "";�   F   H                      var output = "";�   E   G          "        encode: function (input) {�   C   E          T        keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',�   A   C              var Base64 = {�   @   B          <    // Base64 encoding service used by AuthenticationService�   >   @              }�   =   ?          	        }�   <   >          B            $http.defaults.headers.common.Authorization = 'Basic';�   ;   =          +            $cookieStore.remove('globals');�   :   <          $            $rootScope.globals = {};�   9   ;          %        function ClearCredentials() {�   7   9          	        }�   6   8          <            $cookieStore.put('globals', $rootScope.globals);�   5   7          g            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line�   3   5                      };�   2   4                          }�   1   3          &                    authdata: authdata�   0   2          '                    username: username,�   /   1                          currentUser: {�   .   0          "            $rootScope.globals = {�   ,   .          D            var authdata = Base64.encode(username + ':' + password);�   +   -          5        function SetCredentials(username, password) {�   )   +          	        }�   '   )                      //    });�   &   (          )            //        callback(response);�   %   '          0            //    .success(function (response) {�   $   &          Y            //$http.post('/api/authenticate', { username: username, password: password })�   #   %          =             ----------------------------------------------*/�   "   $          /            /* Use this for real authentication�       "                      }, 1000);�      !                              });�                 +                        callback(response);�                                        }�                h                            response = { success: false, message: 'Username or password is incorrect' };�                                         } else {�                9                            response = { success: true };�                J                        if (user !== null && user.password === password) {�                +                    .then(function (user) {�                3                UserService.GetByUsername(username)�                                var response;�                "            $timeout(function () {�                =             ----------------------------------------------*/�                S            /* Dummy authentication for testing, uses $timeout to simulate api call�                6        function Login(username, password, callback) {�                        return service;�                4        service.ClearCredentials = ClearCredentials;�                0        service.SetCredentials = SetCredentials;�                        service.Login = Login;�   	                     var service = {};�      
          \    function AuthenticationService($http, $cookieStore, $rootScope, $timeout, UserService) {�      	          g    AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService'];�                A        .factory('AuthenticationService', AuthenticationService);�                        .module('app')�                    angular�                    'use strict';5�_�                           ����                                                                                                                                                                                                                                                                                                                �                    !          v       V�5�     �         �      M      /* Dummy authentication for testing, uses $timeout to simulate api call   9         ----------------------------------------------*/         $timeout(function () {             var response;   -          UserService.GetByUsername(username)   !          .then(function (user) {   >            if (user !== null && user.password === password) {   )            response = { success: true };               } else {   X            response = { success: false, message: 'Username or password is incorrect' };               }               callback(response);               });             }, 1000);    5�_�                           ����                                                                                                                                                                                                                                                                                                                �                              v       V�5�     �                      5�_�                            ����                                                                                                                                                                                                                                                                                                                �                              v       V�5�     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                �                              v       V�5�     �                )      /* Use this for real authentication5�_�                       	    ����                                                                                                                                                                                                                                                                                                                �                              v       V�5�     �                9         ----------------------------------------------*/5�_�      	                      ����                                                                                                                                                                                                                                                                                                                �                              V       V�5�     �                      //    });�                #      //        callback(response);�                *      //    .success(function (response) {�                S      //$http.post('/api/authenticate', { username: username, password: password })5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                �                              V       V�5�     �         �      Q      $http.post('/api/authenticate', { username: username, password: password })5�_�   	              
      "    ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6     �         �      ;  .factory('AuthenticationService', AuthenticationService);�         �    5�_�   
                    #    ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6      �         �      }  .factory('AuthenticationService',['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService'] AuthenticationService);5�_�                       e    ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6(     �         �      ~  .factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService'] AuthenticationService);5�_�                       e    ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6*     �         �      }  .factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService' AuthenticationService);5�_�                       |    ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6-    �         �      ~  .factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6V     �         �        .module('app')5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6g     �         �        .factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6g     �         �      ~  .factory('AuthnticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6h     �         �      }  .factory('AuthticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6h     �         �      |  .factory('AuthicationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6h     �         �      {  .factory('AuthcationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6h     �         �      z  .factory('AuthationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6h     �         �      y  .factory('AuthtionService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6h     �         �      x  .factory('AuthionService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6i     �         �      w  .factory('AuthonService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6j     �         �      v  .factory('AuthnService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                       a    ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6q    �         �      u  .factory('AuthService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', AuthenticationService]);5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6y     �      	   �      e  AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService'];5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6|     �                [  AuthService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService'];5�_�                           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6    �      	   �      Z  function AuthenticationService($http, $cookieStore, $rootScope, $timeout, UserService) {5�_�                    	       ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6�     �      
   �          var service = {};5�_�                            ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6�     �   
      �          service.Login = Login;5�_�      !                      ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6�     �         �      ,    service.SetCredentials = SetCredentials;5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6�    �         �      0    service.ClearCredentials = ClearCredentials;5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6�    �         �          return service;5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                �             "          c       v   c    V�6�    �                 5�_�   #               $          ����                                                                                                                                                                                                                                                                                                                                                           V�>[    �                  .module('account.AuthService')5��