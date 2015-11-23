var app = angular.module('rplsd',[]);

var htmlContact = function(contact){
    return "<div>"+contact.content.name+"</div><div>"+contact.content.phone+"</div>";
};

var htmlMap = function(map){
    return "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9927077190873!2d"+map.content.lng+"!3d"+map.content.lat+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65767c9b183%3A0x2478e3dcdce37961!2s"+map.content.name+"!5e0!3m2!1sen!2s!4v1448295046102' width='600' height='500' frameborder='0' style='border:0' allowfullscreen></iframe>";
};

app.controller('controller',['$scope','$sce',function($scope,$sce){
    $scope.HTML = "";
    $scope.render = function(){
        var config = {
            components: [
                {
                    type: 'contact',
                    content: {
                        name: "Muhammad Yafi",
                        phone: "085729592442"
                    }
                },
                {
                    type: 'map',
                    content: {
                        lat: -6.8914747,
                        lng: 107.6084704,
                        name: 'Institut Teknologi Bandung'
                    }
                }
            ]
        };
        var html = "";
        if (!Main.errors(config)){
            var components = config.components;
            for(var i = 0; i < components.length; i++){
                var component = components[i];
                if (!Component.errors(component)){
                    if (component.type == 'map'){
                        html += htmlMap(component);
                    } else if (component.type == 'contact'){
                        html += htmlContact(component);
                    }
                } else {
                    console.log(Component.errors(component));
                }
            }
            $scope.HTML = $sce.trustAsHtml(html);
        } else {
            console.log(Main.errors(config));
        }
    }

}]);
