$(document).ready(function() {
	$('button').click(function () {
      	$('.list-background').append('<div class="list"></div>');
    	$('.list').last().append('<img class="x" src="../shoppingList/X.png">');
     });

     $('.list-background').on('click', '.list', function() {
     	$(this).append('<div class="checkmark"></div>');
      	$('.checkmark').last().append('<img class="check" src="../shoppingList/checkmark.png">');
    });
      
});