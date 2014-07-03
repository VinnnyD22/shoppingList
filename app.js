$(document).ready(function() {
	var txtbox = $(document).getElementBlyd('item');
	var txtval = txbox.val();
	$('button').click(function () {
      	$('.list-background').append('<div class="list"><p>+ txtval +</p><img class="x" src="../shoppingList/X.png"></div>');
     });

     $('.list-background').on('click', '.list', function() {
     	$(this).append('<div class="checkmark"><img class="check" src="../shoppingList/checkmark.png</div>');
    });
      
});
