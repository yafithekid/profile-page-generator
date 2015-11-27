var app = angular.module('rplsd',[]);

var htmlContact = function(contact){
    return "<div>"+contact.content.name+"</div><div>"+contact.content.phone+"</div>";
};

var htmlMap = function(map){
    return "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9927077190873!2d"+map.content.lng+"!3d"+map.content.lat+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65767c9b183%3A0x2478e3dcdce37961!2s"+map.content.name+"!5e0!3m2!1sen!2s!4v1448295046102' width='600' height='500' frameborder='0' style='border:0' allowfullscreen></iframe>";
};

var htmlExperience = function(experience){
    var d_master = document.createElement("div");
    var d_title = document.createElement("h2");
    $(d_title).append("Pengalaman");
    $(d_master).append(d_title);
    $(d_master).addClass("woi");

    var timeline = document.createElement("ul");
    $(timeline).addClass("timeline");
    $(d_master).append(timeline);
    console.log(d_master);
    console.log(experience);
    for(var i = 0; i < experience.events.length; i++){
        var event = experience.events[i];

        var li = document.createElement("li");
        $(timeline).append(li);

        // start of timeline image dom
        var timg = document.createElement("div");
        $(timg).addClass("timeline-image");
        var img = document.createElement("img");
        $(timg).append(img);
        $(img).addClass("img-circle");
        $(img).addClass("img-responsive");
        $(img).attr("src",event.imageurl);
        $(li).append(timg);
        //end of timeline image dom

        //start of panel
        var tpanel = document.createElement("div");
        $(li).append(tpanel);
        $(tpanel).addClass("timeline-panel");

        var theading = document.createElement("div");
        $(tpanel).append(theading);
        $(tpanel).addClass("timeline-heading");
        var theading_header = document.createElement("h5");
        $(theading).append(theading_header);
        //TODO change to data
        $(theading_header).text("1-1-1999 - 2-2-1999");

        $(theading).append(document.createElement("br"));

        var subheading = document.createElement("h4");
        $(subheading).addClass("subheading");
        $(theading).append(subheading);

        //TODO
        $(subheading).text("judul");

        var subheading_subtitle = document.createElement("h5");
        $(theading).append(subheading_subtitle);
        //TODO change subtitle
        $(subheading_subtitle).text("<i>"+"subjudul"+"</i>");

        var tbody = document.createElement("div");
        $(tpanel).append(tbody);
        $(tbody).addClass("timeline-body");
        var tbodyp = document.createElement("p");
        $(tbody).append(tbodyp);
        //TODO change desc
        $(tbodyp).text("deskripsi");
        //end of panel
    }
    return $(d_master).html();

};

app.controller('controller',['$scope','$sce',function($scope,$sce){
    $scope.HTML = "";
    $scope.render = function(){
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
                    } else if (component.type == 'experience'){
                        html += htmlExperience(component.content);
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
