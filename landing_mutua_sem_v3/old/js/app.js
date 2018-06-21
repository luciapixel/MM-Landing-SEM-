window.onscroll = function (){
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if(scroll > 180){
        $("#clickToCall").fadeIn("400");
        //$("#telefono").animate({"margin-left": "-50px"}, 500);
        $("#telefono").css('left', '-50px');
    } else{
    	$("#clickToCall").fadeOut("400", function(){
    		$("#telefono").css('left', '0px');
    	});
        // $("#telefono").animate({"margin-left": "0px"}, 500);
    }



    if(window.innerHeight <= 650){
    	console.log('scroll' + scroll)
    	if(scroll > 150){
    		$('#slider').css('opacity',0);
    		$('#seguros').css('margin-top',-111);

	        $(".imagen, .imagen .tituloImg, .imagen .tituloImg .t1, .imagen .precio, .descripcion").fadeIn("400");
	        $(".bloque .boton").css("margin-top", "255px");
	        // $(".bloque .boton").animate({"margin-top": "255px"}, 500);
	        // $(".bloque .boton").animate({"margin-top": "23px"}, 500);
	       
	    } else{
	    	$(".imagen, .imagen .tituloImg, .imagen .tituloImg .t1, .imagen .precio, .descripcion").fadeOut("400", function(){
	    		 $(".bloque .boton").css("margin-top", "23px");
	    		 // $(".bloque .boton").animate({"margin-top": "23px"}, 500);
	    	});
	    	$('#slider').css('opacity',1);
    		$('#seguros').css('margin-top',0);
	    }
    }
}

console.log(window.innerHeight);
