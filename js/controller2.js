var Controller2 = function (view, view2, model) {

	model.getAllDishes();

	$("#sendSearch").click(function(){
			var inp = $("#mainSearch").val()
			model.setInput(inp);
			model.getAllDishes();
			view2.update();
		});

	//When clickin on a fooditem u come to the next view with dish Specifics
	$("#dishList").on('click', '.foodItem', function () {
		var dishID = $(this).attr('rel');
		model.setCurrentDish(dishID);
		view.update(dishID);
		$("#rightDiv").hide();
		$("#rightDivPrep").show();

	});

	//when selector changes it sends the new value to the model
	$("#num").change(function () {
		num = $(this).val();
		model.setNumberOfGuests(num);
	});

	$("#mealType").change(function () {
		type = $(this).val();
		model.setMealType(type);

	});
}