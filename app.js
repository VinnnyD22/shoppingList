$(document).ready(function() {
	var txtbox = $(document).getElementById('item');
	var txtval = txbox.val();

	$('.list-background').on('click', 'button', function () {
      	$('.list-background').append('<div class="list"><img class="x" src="X.png"></div>');
     });

     $('.list-background').on('click', '.list', function() {
     	$(this).append('<div class="checkmark"><img class="check" src="checkmark.png"></div>');
    });
      
});