$(document).ready(function(){

	$(".iphone").mouseover(function(){
	var SRC = $(this).attr("src").replace("img/apple1.png","img/apple.png");
	$(this).attr("src",SRC);

		//alert("fuuck")
	});

	$(".iphone").mouseout(function(){
	var SRC1 = $(this).attr("src").replace("img/apple.png","img/apple1.png");
	$(this).attr("src",SRC1);

	});

	$(".android").mouseover(function(){
	var SRC = $(this).attr("src").replace("img/android.png","img/android1.png");
	$(this).attr("src",SRC);

		//alert("fuuck")
	});

	$(".android").mouseout(function(){
	var SRC1 = $(this).attr("src").replace("img/android1.png","img/android.png");
	$(this).attr("src",SRC1);

	});


$("input").each(function(){
	var $this = $(this);
	$this.hide();


	var $image = $("<img src='img/radio.png'/>").insertAfter(this);
	//a=false
	$image.click(function(){
		if($image.attr("src")=='img/radio.png'){
			//alert($image.attr("src")=='img/radio.png')
			$image.attr("src",'img/radio1.png')
			$this.prop("checked",true)
			console.log($this.prop("checked"))
		}
		else {
			$image.attr("src",'img/radio.png')
			$this.prop("checked",false)
			console.log($this.prop("checked"))
		}
	})
});

$('.mob-menu').click(function(){
	
		$(".top-menu ul").slideToggle(500 , function(){
			
			console.log($('.header').css("background-color"));
		}); 
		$(".header").css("background-color ", " rgba(black,.4)");
});

$(window).resize(function(){
	if($(window).width()>768){
		$(".top-menu ul").css("display","block");
	}
});




});