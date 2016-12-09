(function( $ ) {

	$.fn.nextInput = function() {

		this.filter('.nextInput').each(function() {
			$(this).keyup(function (event) {

				var target = '.nextInput';
				var data = $(this).data('nextInput');
				var length = this.value.length;

				// How to target next./previous ?				
				if (data != undefined) {
					target = '[data-next-input="' + data + '"]' + target;
				}

				// Need to switch to next ?
				console.log(event.keyCode)
				if (length == this.maxLength && event.keyCode > 47) {

					var $next = $(this).next(target);
					$next.focus();

				}

			});

			$(this).keydown(function (event) {

				var target = '.nextInput';
				var data = $(this).data('nextInput');
				var length = this.value.length;

				// How to target next./previous ?				
				if (data != undefined) {
					target = '[data-next-input="' + data + '"]' + target;
				}

				// Need to switch to previous ?
				if (event.keyCode == 8 && length == 0) {

					var $prev = $(this).prev(target);
					var val = $prev.val();
					$prev.focus();

				}

			});
		});

		return this;

	};

}( jQuery ));
