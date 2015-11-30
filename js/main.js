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

    var modal_container = document.createElement("div");

    var container = document.createElement("div");
    $(section).append(container);
    $(container).addClass("container");

    var title_row = document.createElement("div");
    $(container).append(title_row);
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
		);

    var body_row = document.createElement("div");
    $(container).append(body_row);
    $(body_row).addClass("row");
    for(var i = 0; i < portfolios.projects.length; i++){
        var project = portfolios.projects[i];

		var pf_body = document.createElement("div");
		$(body_row).append(pf_body);
		$(pf_body)
			.addClass("col-md-4").addClass("col-sm-6").addClass("portfolio-item")
			.append(
				$(document.createElement("a"))
					.addClass("portfolio-link")
					.attr("href","#portfolioModal"+(i+1))
					.attr("data-toggle","modal")
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
							.addClass("img-responsive").addClass("center-block")
							.attr("src",project.thumbnail_url)
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
							.text(project.category)
					)
			);
		
		var pf_modal = document.createElement("div");
		$(modal_container).append(pf_modal);
		$(pf_modal)
			.addClass("portfolio-modal").addClass("modal").addClass("fade")
			.attr("id","portfolioModal"+(i+1))
			.attr("tabindex","-1")
			.attr("role","dialog")
			.attr("aria-hidden","true")
			.append(
				$(document.createElement("div"))
					.addClass("modal-content")
					.append(
						$(document.createElement("div"))
							.addClass("close-modal")
							.attr("data-dismiss","modal")
							.append(
								$(document.createElement("div"))
									.addClass("lr")
									.append(
										$(document.createElement("div"))
											.addClass("rl")
									)
							)
					).append(
						$(document.createElement("div"))
							.addClass("container")
							.append(
								$(document.createElement("div"))
									.addClass("row")
									.append(
										$(document.createElement("div"))
											.addClass("col-lg-8").addClass("col-lg-offset-2")
											.append(
												$(document.createElement("div"))
													.addClass("modal-body")
													.append(
														$(document.createElement("h2"))
															.text(project.title)
													).append(
														$(document.createElement("p"))
															.addClass("item-intro").addClass("text-muted")
															.text(project.subtitle)
													).append(
														$(document.createElement("img"))
															.addClass("img-responsive").addClass("img-centered")
															.attr("src",project.image_url)
													).append(
														$(document.createElement("p"))
															.text(project.description)
													).append(
														$(document.createElement("button"))
															.addClass("btn").addClass("btn-primary")
															.attr("type","button")
															.attr("data-dismiss","modal")
															.append(
																$(document.createElement("i"))
																	.addClass("fa").addClass("fa-times")
															)
															.text(" Close Project")
													)
											)
									)
							)
					)
			);
    }
    var temp = document.createElement("div");
    $(temp).append(section);
    $(temp).append(modal_container);
    return $(temp).html();
};

var htmlAbout = function(about) {
    var section = document.createElement("section");
    $(section).attr("id","team");

    var container = document.createElement("div");
    $(section).append(container);
    $(container).addClass("container");

    /* title_row */
    var title_row = document.createElement("div");
    $(container).append(title_row);
    $(title_row).addClass("row");

    var title_row_1 = document.createElement("div");
    $(title_row).append(title_row_1);
    $(title_row_1).addClass("col-lg-12"); 
    $(title_row_1).addClass("text-center");

    var title_row_1_h1 = document.createElement("h2");
    $(title_row_1).append(title_row_1_h1);
    $(title_row_1_h1).addClass("section-heading");
    $(title_row_1_h1).text("About Me");
    /* end title_row */

    /* profile_row */
    var profile_row = document.createElement("div");
    $(container).append(profile_row);
    $(profile_row).addClass("row");

    var profile_row_col = document.createElement("div");
    $(profile_row).append(profile_row_col);
    $(profile_row_col).addClass("col-sm-12");

    var profile_row_col_el = document.createElement("div");
    $(profile_row_col).append(profile_row_col_el);
    $(profile_row_col_el).addClass("team-member");

    var profile_img = document.createElement("img");
    $(profile_row_col_el).append(profile_img);
    $(profile_img).addClass("img-responsive");
    $(profile_img).addClass("img-circle");
    $(profile_img).attr("src", about.photo);

    var profile_name = document.createElement("h4");
    $(profile_row_col_el).append(profile_name);
    $(profile_name).text(about.name);

    var profile_address = document.createElement("p");
    $(profile_row_col_el).append(profile_address);
    $(profile_address).text(about.address);

    var profile_telp = document.createElement("p");
    $(profile_row_col_el).append(profile_telp);
    $(profile_telp).text(about.telp_num);

    var profile_email = document.createElement("p");
    $(profile_row_col_el).append(profile_email);
    $(profile_email).text(about.email);

    var profile_desc = document.createElement("p");
    $(profile_row_col_el).append(profile_desc);
    $(profile_desc).text(about.description);


    var list_profile = document.createElement("ul");
    $(profile_row_col_el).append(list_profile);
    $(list_profile).addClass("list-inline");
    $(list_profile).addClass("social-buttons");

    for(var i=0; i<about.profiles.length; i++) {
        var el_list = document.createElement("li");
        $(list_profile).append(el_list);

        var link = document.createElement("a");
        $(el_list).append(link);

        var icon = document.createElement("i");

        if(about.profiles[i].profile_type == "twitter") {
            $(link).attr("href", "http://twitter.com/"+about.profiles[i].profile_username);            
            $(link).append(icon);
            $(icon).addClass("fa fa-twitter");
        } else if (about.profiles[i].profile_type == "facebook") {
            $(link).attr("href", "http://facebook.com/"+about.profiles[i].profile_username);
            $(link).append(icon);
            $(icon).addClass("fa fa-facebook");
        } else if (about.profiles[i].profile_type == "linkedin") {
            $(link).attr("href", "https://www.linkedin.com/in/"+about.profiles[i].profile_username);
            $(link).append(icon);
            $(icon).addClass("fa fa-linkedin");
        }
        
        $(link).attr("target", "_blank");
    }

    /* end profile_row */

    var temp = document.createElement("div");
    $(temp).append(section);
    return $(temp).html();
}

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
                    } else if (component.type == 'about'){
                        html += htmlAbout(component.content);
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
