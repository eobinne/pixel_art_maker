/* In the following function, I assigned the id of "build" to the input element of type button
I changed from the type submit in order to stop the page from refreshing everytime the 
makeGrid() function is called by the app*/

$('#build').on('click ', function makeGrid() {
	$('tr').remove(); // this line of code is responsible for clearing the grid
	var row = + $('#inputHeight').val(); // Access the value inputed by the user and assign to the variable row
	var col = + $('#inputWeight').val(); // Access the value inputed by the user and assign to the variable col
	for (var i = 1; i <= row; i++) {
		$('#pixelCanvas').append('<tr></tr>'); // loop function that dynamically creates the rows
	} for (var a = 1; a <= col; a++) {
		$('#pixelCanvas').children('tr').append('<td></td>'); // loop function that dynamically creates the columns
	}
});

/* In the following function, I have targeted the table element with the id "pixelCanvas",
then i have added a listener which listens for a click. Then I have created an anonymous 
call-back function which targets the element being clicked on, and assigns it a background-color
based on what was selected with the color picker*/

$("#pixelCanvas").on('click', function (event) {
	$(event.target).css('background-color', $('#colorPicker').val());
});