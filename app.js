$(document).ready(function() {
	alert('pages are linked');
	var txtbox = $(document).getElementById('item');
	var txtval = txtbox.val;

	$('button').click(function () {
		alert('button works');
		$('.list-background').append('<div class="list"><img class="x" src="X.png"></div>')
	});

     $('.list-background').on('click', '.list', function() {
     	$(this).append('<div class="checkmark"><img class="check" src="checkmark.png"></div>');
    });
      
});