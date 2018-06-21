
$(document).ready(function() {
    window.onresize = resize;
    window.onscroll = on_Scroll;

    on_Scroll();
    resize();

    function resize(){
        if(window.innerWidth < 1010  ){
            $('#telefono').html('<span>900 555 117</span>');
        }else{
            $('#telefono').html('¡Vente ya a la Mutua!  &nbsp;<span>900 555 117</span>');
        }
    }

    function on_Scroll(){
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if(window.innerHeight > 620 && window.innerWidth > 768){
            if(scroll > 180){
                $("#clickToCall").fadeIn("400");
                $("#telefono").css('left', '-50px');
            }else{
                $("#clickToCall").fadeOut("400", function(){
                    $("#telefono").css('left', '0px');
                });
            }

        }
    }

})



