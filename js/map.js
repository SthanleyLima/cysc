            	// google map
                var Latitude = -19.9210395,Longitude = -43.9477271;
    		    var myLatlng = new google.maps.LatLng(Latitude,Longitude);
    			var myOptions = {
    				zoom: 15,
    				center: myLatlng,
    				disableDefaultUI: true,
    				panControl: true,
    				zoomControl: true,
    				zoomControlOptions: {
    					style: google.maps.ZoomControlStyle.DEFAULT
    				},

    				mapTypeControl: true,
    				mapTypeControlOptions: {
    					style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
    				},
    				streetViewControl: true,
    				mapTypeId: google.maps.MapTypeId.ROADMAP
    				}
    			var map = new google.maps.Map(document.getElementById("map"), myOptions);
    			var marker = new google.maps.Marker({
    				position: myLatlng,
    				map: map
    			});
                
