var app = angular.module('rplsd',[]);

var htmlContact = function(contact){
    return "<div>"+contact.content.name+"</div><div>"+contact.content.phone+"</div>";
};

var htmlMap = function(map){
    return "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9927077190873!2d"+map.content.lng+"!3d"+map.content.lat+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65767c9b183%3A0x2478e3dcdce37961!2s"+map.content.name+"!5e0!3m2!1sen!2s!4v1448295046102' width='600' height='500' frameborder='0' style='border:0' allowfullscreen></iframe>";
};

var htmlTitle = function(title){
    // var header = document.createElement("header");
    // console.log("Header : ",$(header).html());
    
    var container = document.createElement("div");
    $(container).addClass("container");

    var intro_text = document.createElement("div");
    $(intro_text).addClass("intro-text");

    var intro_lead_in = document.createElement("div");
    $(intro_lead_in).addClass("intro-lead-in");
    $(intro_lead_in).text(title.content.tag_line);

    var intro_heading = document.createElement("div");
    $(intro_heading).addClass("intro-heading");
    $(intro_heading).text(title.content.sub_tag_line);

    var page_scroll = document.createElement("a");
    $(page_scroll).addClass("page-scroll");
    $(page_scroll).addClass("btn");
    $(page_scroll).addClass("btn-xl");
    $(page_scroll).attr("href","#about");
    $(page_scroll).text(title.content.button);

    $(intro_text).append(intro_lead_in);
    $(intro_text).append(intro_heading);
    $(intro_text).append(page_scroll);

    $(container).append(intro_text);

    //$(header).append(container); gatau kenapa ga bisa

    //background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('landingpagepic.jpg')
    return "<header style='background-position:center top;background : linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(\""+title.content.background_image+"\");'>"+$(container).html()+"</header>";
}

var htmlExperience = function(experience){
    var section = document.createElement("section");
    $(section).attr("id","about");

    var container = document.createElement("div");
    $(section).append(container);
    $(container).addClass("container");

    var title_row = document.createElement("div");
    $(container).append(title_row);
    $(title_row).addClass("row");

    var title_content = document.createElement("div");
    $(title_row).append(title_content);
    $(title_content).addClass("col-lg-12").addClass("text-center");

    var title_content_h2 = document.createElement("h2");
    $(title_content_h2).addClass("section-heading");
    $(title_content).append(title_content_h2);
    $(title_content_h2).text("Pengalaman");

    var body_row = document.createElement("div");
    $(container).append(body_row);
    $(title_row).addClass("row");

    var body_content = document.createElement("div");
    $(body_row).append(body_content);
    $(body_content).addClass("col-md-12");

    var timeline = document.createElement("ul");
    $(timeline).addClass("timeline");
    $(body_content).append(timeline);
    for(var i = 0; i < experience.events.length; i++){
        var event = experience.events[i];

        var li = document.createElement("li");
        $(timeline).append(li);
        if (i % 2 == 1){
            $(li).addClass("timeline-inverted");
        }

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
        console.log(event);
        if (event.end === undefined){
            $(theading_header).text(dateToOutputString(event.start));
        } else {
            $(theading_header).text(dateToOutputString(event.start)+ " - " + dateToOutputString(event.end));
        }
        $(theading).append(document.createElement("br"));

        var subheading = document.createElement("h4");
        $(subheading).addClass("subheading");
        $(theading).append(subheading);

        $(subheading).text(event.title);

        var subheading_subtitle = document.createElement("h5");
        $(theading).append(subheading_subtitle);
        var subheading_subtitle_content = document.createElement("i");
        $(subheading_subtitle).append(subheading_subtitle_content);
        $(subheading_subtitle_content).text(event.subtitle);

        var tbody = document.createElement("div");
        $(tpanel).append(tbody);
        $(tbody).addClass("timeline-body");
        var tbodyp = document.createElement("p");
        $(tbody).append(tbodyp);
        $(tbodyp).text(event.description);
        //end of panel
    }
    var temp = document.createElement("div");
    $(temp).append(section);
    return $(temp).html();

};

var htmlPortfolio = function(portfolios){
    var section = document.createElement("section");
    $(section).attr("id","portfolio");
    $(section).addClass("bg-light-gray");

    var container = document.createElement("div");
    $(section).append(container);
    $(container).addClass("container");

    var title_row = document.createElement("div");
    $(container).append(title_row);
    //$(title_row).addClass("row");
	
	$(title_row)
		.addClass("row")
		.append(
			$(document.createElement("div"))
				.addClass("col-lg-12").addClass("text-center")
				.append(
					$(document.createElement("h2"))
						.addClass("section-heading")
						.text(portfolios.title)
				).append(
					$(document.createElement("h3"))
						.addClass("section-subheading").addClass("text-muted")
						.text(portfolios.description)
				)
		);//*/

	/*var title_content = document.createElement("div");
    $(title_row).append(title_content);
    $(title_content).addClass("col-lg-12").addClass("text-center");

    var title_content_h2 = document.createElement("h2");
    $(title_content_h2).addClass("section-heading");
    $(title_content).append(title_content_h2);
    $(title_content_h2).text(portfolios.title);

    var title_content_h3 = document.createElement("h3");
    $(title_content_h3).addClass("section-subheading").addClass("text-muted");
    $(title_content).append(title_content_h3);
    $(title_content_h3).text(portfolios.description);//*/

    var body_row = document.createElement("div");
    $(container).append(body_row);
    $(body_row).addClass("row");
    for(var i = 0; i < portfolios.projects.length; i++){
        var project = portfolios.projects[i];

		var pf_body = document.createElement("div");
		$(body_row).append(pf_body);
		//$(pf_body).addClass("col-md-4").addClass("col-sm-6").addClass("portfolio-item");

		$(pf_body)
			.addClass("col-md-4").addClass("col-sm-6").addClass("portfolio-item")
			.append(
				$(document.createElement("a"))
					.addClass("portfolio-link")
					.attr("href","#portfolioModal"+(i+1))
					.attr("data-toggle","portfolio")
					.append(
						$(document.createElement("div"))
							.addClass("portfolio-hover")
							.append(
								$(document.createElement("div"))
									.addClass("portfolio-hover-content")
									.append(
										$(document.createElement("i"))
											.addClass("fa").addClass("fa-plus").addClass("fa-3x")
									)
							)
					).append(
						$(document.createElement("img"))
							.addClass("img-responsive")
							.attr("src",project.imageurl)
							.attr("style","text-align:center")
					)
			).append(
				$(document.createElement("div"))
					.addClass("portfolio-caption")
					.append(
						$(document.createElement("h4"))
							.text(project.title)
					).append(
						$(document.createElement("p"))
							.addClass("text-muted")
							.text(project.subtitle)
					)
			);//*/

		var pf_a = document.createElement("a");
		$(pf_body).append(pf_a);
		$(pf_a).addClass("portfolio-link");
		$(pf_a).attr("href","#portfolioModal"+(i+1));
		$(pf_a).attr("data-toggle","portfolio");

		var pf_hover = document.createElement("div");
		$(pf_a).append(pf_hover);
		$(pf_hover).addClass("portfolio-hover");
		var pf_hover_c = document.createElement("div");
		$(pf_hover).append(pf_hover_c);
		$(pf_hover_c).addClass("portfolio-hover-content");
		var pf_hover_i = document.createElement("i");
		$(pf_hover_c).append(pf_hover_i);
		$(pf_hover_i).addClass("fa").addClass("fa-plus").addClass("fa-3x");

		var pf_img = document.createElement("img");
		$(pf_a).append(pf_img);
		$(pf_img).addClass("img-responsive");
		$(pf_img).attr("src",project.imageurl);

		var pf_descript = document.createElement("div");
		$(pf_a).append(pf_descript);
		$(pf_descript).addClass("portfolio-caption");

		var pf_descript_title = document.createElement("h4");
		$(pf_descript).append(pf_descript_title);
		$(pf_descript_title).text(project.title);

		var pf_descript_subtitle = document.createElement("p");
		$(pf_descript).append(pf_descript_subtitle);
		$(pf_descript).addClass("text-muted");
		$(pf_descript_title).text(project.subtitle);//*/
    }
    var temp = document.createElement("div");
    $(temp).append(section);
    return $(temp).html();

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
                    } else if(component.type == 'title'){
                        html +=htmlTitle(component);
                    } else if (component.type == 'portfolio'){
                        html += htmlPortfolio(component.content);
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
