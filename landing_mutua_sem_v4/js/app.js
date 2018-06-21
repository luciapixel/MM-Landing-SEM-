
$(document).ready(function() {
    window.onresize = resize;
    window.onscroll = on_Scroll;

    on_Scroll();
    resize();

    function resize(){
        if(window.innerWidth < 1040  ){
            $('#telefono').html('<span>900 555 117</span>');
        }else{
            $('#telefono').html('¡Vente ya a la Mutua!  &nbsp;<span>900 555 117</span>');
        }
        if(window.innerWidth > 850){
           $('header').css('height',80);
           $("#clickToCall").css({'right':15,'margin-top':0});
       }else if(window.innerWidth < 850  && window.innerHeight > 620){



           if(window.innerWidth <=768){
                 $('header').css({'height':150, 'margin-top': 0});
                 $("#clickToCall").css({'margin-top':65, 'right':0});
           }else{
                $('header').css('height',80);
           }




       }else if(window.innerWidth <= 768 && window.innerWidth > 420){
            $('header').css({'height':150, 'margin-top': 0});
            $("#clickToCall").css({'margin-top':65, 'right':0});

       }else if(window.innerWidth <= 420){

            $("#clickToCall").css({'margin-top':0});
       }


       if(window.innerWidth <= 320){
            $("#telefono").css({'margin-left':0});
       }

       // else if(window.innerWidth < 375 ){
       //     $('header').css('height',150);
       // }

     
    }

    function on_Scroll(){
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if(window.innerHeight > 620 && window.innerWidth > 768){
            if(scroll > 180){
                if(window.innerWidth < 850){
                    $('header').css('height',150);
                    $("#clickToCall").css({'margin-top':56, 'right':5});
                }
                $("#clickToCall").fadeIn("400");
                $("#telefono").css('left', '-50px');
            }else{
                if(window.innerWidth < 850){
                    $('header').css('height',80);
                }
                $("#clickToCall").fadeOut("400", function(){
                    $("#telefono").css('left', '0px');
                });
            }
        }

    }

})



