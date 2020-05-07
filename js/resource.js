$(document).ready(function(){
    
    //Stricky funfion

    
    
    //mixit up function
    var mixer = mixitup('.imran');
});

  $(".stricky-option").waypoint(function(directon){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
        }
    });
     