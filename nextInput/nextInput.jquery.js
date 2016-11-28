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

				// Need to switch to next/previous ?
				if (event.keyCode == 8 && length == 0) {

					var $prev = $(this).prev(target);
					var val = $prev.val();
					$prev.val(val.substr(0, val.length - 1));
					$prev.focus();

				} else if (length == this.maxLength) {

					var $next = $(this).next(target);
					$next.focus();

				}

			});
		});

		return this;

	};

}( jQuery ));
