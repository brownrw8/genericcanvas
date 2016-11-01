(function(){
        'use strict';

        var canvas = document.getElementById("defaultCanvas");
        var context = canvas.getContext('2d');
        
        var output = document.getElementById("defaultOutput");
        
        var defaultRadius = 2;
        
        var Coord = function(x, y){
            this.x = x;
            this.y = y;
        };
        
        var SomeObjectAtCoord = function(name, coord){
            this.name = name;
            this.coord = coord;
        };
        
        var storage = [];

        var draw = function(e) {
            var pos = getMousePos(canvas, e);
            var posx = pos.x;
            var posy = pos.y;
            context.fillStyle = "#FFF000";
            context.beginPath();
            context.arc(posx, posy, defaultRadius, 0, 2*Math.PI);
            context.fill();
            storage.push(new SomeObjectAtCoord("objectName",new Coord(posx, posy)));
            update();
        };
        
        var update = function(){
            output.innerHTML = JSON.stringify(storage, null, 4);
        };
        
        var getMousePos = function(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
        };
        
        canvas.addEventListener('click',function(e){draw(e);});

}());