$(document).ready(function(){
    $('#fullpage').fullpage({
        navigation: false,
        controlArrows: false,
        slidesNavigation: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

	afterLoad: function(section, origin, destination, direction){

        if(origin.index == 1){
            console.log("Section 2 ended loading");
            $(".s1").find(".circle_s1").addClass("res");
            $(".s1").find(".circle_s1-1").addClass("res");
            $(".s1").find(".f_int").addClass("act");
            $(".s1").find(".f_int span").addClass("act");
            $(".s1").find(".next").addClass("act");
        }
        if(origin.index == 2){
            console.log("Section 3 ended loading");
            $(".s1").find(".f_int.act").removeClass("act");
            $(".s1").find(".f_int span.act").removeClass("act");
		}

	} 
    });
});