# Next Input

A JQuery plugn to switch to next input. If user uses backspace key, the focus will come back to previous input.

## Files to add

Add the JS files :
* JQuery (tested with JQuery 3.1.x, but it should also work with older versions) ;
* [`nextInput.jquery.js`](nextInput.jquery.js)
* A line to init nextInput : `$('.nextInput').nextInput();`

## Example

See [`demo.html`](demo.html) :

	<!doctype html>
	<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Next Input</title>
		<link rel="stylesheet" href="style.css">
		<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
		<script src="nextInput.jquery.js"></script>
		<script>
			$(document).ready(function() {
				$('.nextInput').nextInput();
			});
		</script>
	</head>
	<body>
		<form>
			<input type="number" class="nextInput" maxLength="4" id="year" data-next-input="date" placeholder="Year" />
			<input type="number" class="nextInput" maxLength="2" id="month" data-next-input="date" placeholder="Month" />
			<input type="number" class="nextInput" maxLength="2" id="day" data-next-input="date" placeholder="Day" />
			<button>Show day</button>
		</form>
	</body>
	</html>
