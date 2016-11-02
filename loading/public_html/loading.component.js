(function(){
    
    'use strict';
    
    angular.module('appLoading')
            .component('loading',{
                templateUrl:'./loading.html',
                controller: loadCtrl,
                controllerAs:'vm'
            });
        function loadCtrl(){
            var self = this;
            self.counter = [];
            var temp = 0;
            for(var i = 0; i<=330; i+=30){
                self.counter.push(i);
            }
            console.log(self.counter);
            
        }
    
})();