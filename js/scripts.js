$(function(){

	var $table;
	var tableWidth;
	var cell;
	var cellWidth;
	
	function createNewTable (len) {

		$table = $("#table");
		tableWidth = parseInt($table.css("width"));		// retrieve table width
		
		cellWidth = (tableWidth-1) / len;	// get proportional cell width
	
		cell = "<div class='cell'></div>";

		for (var i = 0; i < len*len; i++){
			$table.append(cell);			// add cells
		}

		$(".cell").css({
			"width": cellWidth,				// give them their new width
			"height": cellWidth,
		});
	}

	function getRandomColor() {				// returns a random HEX color
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

	function listenForHover(){				// if RANDOM, random color. otherwise a secondary color
		$(".cell").hover(function() {
			if ($table.hasClass("random-table")){	
			$(this).css("background-color", getRandomColor());
				$(this).addClass("random-cell");
			}else {
				$(this).addClass("hovered");
			}
		});
	}

	createNewTable(16);
	listenForHover();

	$("#btnclear").click(function(){
		var $cellsToChange = $(".hovered");
		$cellsToChange.removeClass("hovered");
		$(".random-cell").css("background-color", "tomato");
		$table.removeClass("random-table");
	});

	$("#btnnew").click(function(){
		var tableLength = prompt("How many cells per side?");
		$table.children().remove();
		createNewTable(tableLength);
		listenForHover();
	});

	$("#btnrandom").click(function(){
		$table.toggleClass("random-table");
	});
});