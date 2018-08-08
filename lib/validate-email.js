(function ($) {
	$.fn.emailValidator = function () {
		$('[name="email"]').keyup(function(){

			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var result = regex.test(this.value);

			if(result){
				$("div").text("email bener lurd").css('color', 'green')
				$('[name="email"]').css("border-color", "green")
			} else {
				$("div").text("format email salah").css('color', 'red')
				$('[name="email"]').css('border-color', 'red')
			}
		})
		
		// return result
		
	
	}
})(jQuery)
