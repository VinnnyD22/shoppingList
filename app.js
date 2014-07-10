$(document).ready(function() {

	//Add Item to List
	$('#item').keyup(function(event) {
		if (event.keycode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});

	$('#add').click(function () {
		var txtval = $('#item').val();
		if (txtval.length > 0) {
			$('#list').append('<li class="list"><div class="checkmark"><img class="check" src="checkmark.png"></div><span>' + txtval + '</span><div class = "x-box"><img class="x" src="X.png"></div></li>');
			$('#item').val('');
		};
	});

	//Add Checkmark to listed item
	$('.list-background').on('click', '.list', function() {
     	$(this).find('.check').toggle();
   	});

     //Remove Item when X is clicked
     $('#list').on('click', '.x-box', function() {
     	//alert('click works');
     	$(this).closest('li').addClass('cancel');
     });

     //make List sortable
    // $('#list').sortable({ axis: "y" });
     $('#list').sortable({axis: "y"});
});