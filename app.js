$(document).ready(function() {
	var txtbox = document.getElementById('item');
	var txtval = txtbox.value;

	//Add Item to List
	$('#item').keyup(function(event) {
		if (event.keycode == 13) {
			event.preventDefault();
			$('button').click();
		};
	});

	$('button').click(function () {
		$('.list-background').append('<div class="list"><div class="checkmark"><img class="check" src="checkmark.png"></div><span>' + txtval + '</span><img class="x" src="X.png"></div>');
	});

	//Add Checkmark to listed item
     $('.list-background').on('click', '.list', function() {
     	$(this).find('.check').toggle();
   	});

     //Remove Item when X is clicked
     $('.list').on('click', '.x', function() {
     	alert('click worked');
     });
      
});