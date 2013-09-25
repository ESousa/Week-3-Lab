
				
	
		var ad_metadata = {
			'ad0' : "Subway Eat Fresh Daily",
			'ad1' : "Sleep Well at the Holiday Inn" ,
			'ad2' : "Always eat freash at Papa Johns Pizza",
			'ad3' : "America runs on Dunkin",
			'ad4' : "Hungry why wait? Eat a Snickers"		
		};
		
				
		rand_ad_display();
		
		function rand_ad_display() {
		
			var ad_div = document.getElementById("ad");			
			var ad_keys = [];		
			var ad_key = "";
			
			/*
				ad_keys[0] = 'ad0';
				ad_keys[1] = 'ad1';
				ad_keys[2] = 'ad2';
				ad_keys[3] = 'ad3';
				ad_keys[4] = 'ad4';
			*/
			for ( ad_key in ad_metadata ) {
				ad_keys.push(ad_key);
			}
			
			var ad_keys_len = ad_keys.length;			
			var rand_ad_key = getRandAdKey(ad_keys_len);
			var ad_key_value = ad_keys[rand_ad_key];		
			var ad_metadata_value = ad_metadata[ad_key_value];		
		
			ad_div.innerHTML = ad_metadata_value;
			
			document.title = ad_metadata_value.substr(0,15);
			
			console.log(ad_metadat_value.substr (0,15));
			


			
		}
		
		
		
		function getRandAdKey( len ) {
			// gets random number, 0 to len(passed in)
			return Math.floor( Math.random()* len);		
		}
		
		
		
