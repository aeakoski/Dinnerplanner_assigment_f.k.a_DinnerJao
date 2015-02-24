var Controller3 = function (view, view2, model) {

	$("#mainSearch").keyup(function(){
			var inp = $("#mainSearch").val()
			model.setInput(inp);
			view2.update();
		});

	$(document).on("mouseover",".glyphicon-remove",function(){	
		//Ändra färg till röd!
		$(this).css("color","red");
		$(this).css("cursor","pointer")
	});

	$(document).on("mouseout",".glyphicon-remove",function(){	
		//Ändra färg till grå!
		$(".glyphicon").css("color","#BBBBBB");
	});

	$(document).on("click",".glyphicon-remove",function(){	
		//Ta bort den valda måltiden från menyn
		console.log("Klickad jao!!!");
		model.removeDishFromMenu(parseInt($(this).attr('rel')))
	});
	
	
	$("#confirmDish").click(function () {
		model.addDishToMenu(model.getCurrentDish()['id']);
		model.setCurrentDish(null);
		view.update(); //View 3 uppdateras

		$("#rightDivPrep").hide();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();

		view.colorKnapp();
	});

	$(".backToEdit").click(function () {
		model.setCurrentDish(null);
		view.update();
		$("#leftMenu").show();
		$("#rightDiv").show();
		$("#rightTop").show();
		$("#rightBottom").show();
		$("#FourthView").hide();

	});

}