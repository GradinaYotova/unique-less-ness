$(document).ready(function() { 
            $('.aboutTrigger').click(function() {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $('.aboutView').addClass("active");
                $('.index').removeClass("active");
            });


             $('.indexTrigger').click(function() {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $('.index').addClass("active");
                $('.aboutView').removeClass("active");
            });
        }); 

