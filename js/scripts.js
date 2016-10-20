//Buisness Logic
var typeTriangle = function(side1, side2, side3) {

  if ((side1+side2 <= side3) || (side2+side3 <= side1) || (side1+side3 <= side2)) {
    return "Not a Triangle"
  } else {
    if ((side1 === side2) && (side2 === side3)){
      return "Equilateral";
    } else if ((side1 === side2) || (side2 === side3) || (side1 === side3) ) {
      return "Isoceles";
    } else {
      return "Scalene";
    }
  }
}


//Front end Logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
		event.preventDefault();

		var side1 = parseFloat($("#side1").val());
		var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());
    debugger;
    var result = typeTriangle(side1, side2, side3)
    debugger;
		$("#output").text(result);
	});

});
