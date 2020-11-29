$(document).ready(function(){
    
    $(".menu").click (function(){
        $('nav ul').slideToggle();
    });
    $(".container .use .row .col-md-4 .use1 .head1 .headleft span").click(function(){
       $(".parent").fadeIn();
    });
    $(".parent").click(function(){
       $(this).fadeOut(); 
    });
    $(".bk1").click(function(e){
         e.stopPropagation();
    });
    
});