$( document ).ready(function() {
  $(".button").on("click", function() {
	  $.ajax({
	    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
	    headers: {
	        'X-Mashape-Key':'4zWW5cpIsjmshar8rgfasRUWviL5p1Z1G1OjsnysBV36rUVULR',
	        'Content-Type':'application/json'
	    },
	    method: 'GET',
	    dataType: 'json',
	    success: function(data){
	    	var quote = data.quote;
	    	var author = data.author;
	    	$("#message").html(JSON.stringify(quote));
	    	$("#author").html(JSON.stringify(author));

	   		$( function() {
					var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];                
	  			var rand = Math.floor(Math.random()*colors.length);        
	    		var state = true;
	  
	      	if ( state ) {
	        	$( "body" ).animate({
		          backgroundColor: colors[rand]
			        }, 1000 );
	        	$( "p" ).animate({
		          color: colors[rand]
			        }, 1000 );
		      	} else {
		        $( "body" ).animate({
		          backgroundColor: colors[rand]
		        	}, 1000 );
		         $( "p" ).animate({
		          color: colors[rand]
		        	}, 1000 );
		      	}
	      	state = !state;
	    	});
	    }
	  });
  });
});

