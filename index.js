$(document).ready(function() {
    // for side-nav
    // from http://next.materializecss.com/sidenav.html#options
    $('.sidenav').sidenav({"edge": "right"});
    
    // TO TOP FLOATING BUTTON INITIALIZATION
    $('.fixed-action-btn').floatingActionButton();
    
    // MODAL INITIALIZATION
    $('.modal').modal();
    
    // for snowboarder additive identity
    $("#whatProp").mouseenter(function(){
        $("#addIdDiv").fadeTo("slow", 1);
    });
    $("#whatProp").mouseleave(function(){
        $("#addIdDiv").fadeTo("slow", 0);
    });
    
    // enlarge picture on click
    // $("#brand-img").click(function() {
    //   $(this).toggleClass("expand"); 
    // });
});