$(document).ready(function() {
    // BLACK HOLE SPOILER
    $("#black-hole-btn").click(function() {
        $("#black-hole-spoiler").fadeToggle("slow");
    });
    // OUTLIERS FACTORS 
    $("#outliers-factors-btn").click(function() {
        $("#outliers-factors").fadeToggle("slow");
    });
    // BRAIN RULES INSIGHTS
    $("#brain-rules-insights-btn").click(function() {
        $("#brain-rules-insights").fadeToggle("slow");
    });
    
    // TAGS
    // $("#fiction-tag").click(function() {
    //   $('.non-fiction').css({
    //       "display": "none",
    //       "opacity": "0.4"
    //   }); 
    //   $('.fiction').css({"display": "block"});
    // });
    // $("#non-fiction-tag").click(function() {
    //     $('.fiction').css({
    //         "display": "none",
    //       "opacity": "0.4"
    //     }); 
    //   $('.non-fiction').css({"display": "block"});
    // });
    
    // TAG FILTERING
    $('.tag').click(function() {
        $('.tag').css({ "opacity": "0.4" });
        $(this).css({ "opacity": "1.0" });
        $('.post').addClass("inactive-post");
        var tag_clicked = $(this).attr("id");
        $('.' + tag_clicked).removeClass("inactive-post").addClass("active-post");
    });
    // ALL BUTTON
    $("#all").click(function() {
        $('.post').removeClass("inactive-post").addClass("active-post");
    });
    
})