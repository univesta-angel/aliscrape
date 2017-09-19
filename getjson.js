$(document).ready(function(){
	alert('aaa');

	/*$.ajax({										//----------------get single product json

        'url' : 'https://allthingsshe.com/collections/new-arrivals/products/magnetic-false-eyelashes.json',
        'type' : 'GET',
        'success' : function(data) {    
        	var json111 = JSON.stringify(data);          
            //alert('Data: '+json111);

	        var obj = JSON.parse(json111);
	        //alert(obj.product.title);
	        var title = obj.product.title;
			var price = obj.product.variants[0].price;
			var desc = obj.product.body_html;
			document.getElementById("title").innerHTML = title;
			document.getElementById("price").innerHTML = "Price: "+price;
			document.getElementById("description").innerHTML = desc;

			document.getElementById("json").innerHTML = json111;
        },
        'error' : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });*/

	/*$.ajax({										//----------------get all products json

        //'url' : 'https://allthingsshe.com/products.json',	//add ?page= parameter to get next 50 products
        'crossOrigin': true,
        'url': 'https://www.w3schools.com/js/js_json_stringify.asp',
        'dataType' : 'jsonp',
        'accept' : 'text/html',
        'success' : function(data) {    
        	//var json111 = JSON.stringify(data);          
            //alert('Data: '+json111);
			//document.getElementById("title").innerHTML = title;
			//document.getElementById("price").innerHTML = "Price: "+price;
			//document.getElementById("description").innerHTML = desc;
			alert(data);
			//document.write(JSON.stringify(data));
			//document.getElementById("json").prepend = data;
        },
        'error' : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });*/

    $.ajax({
    	crossOrigin: true,
    	url: 'https://647e8954a13d977a9c4ecfce9e5407be:8e433965e37da3fd154193fc62698782@acepockets.com/admin/reports.json',
    	dataType: 'application/json',
    	contentType: 'application/json',
    	data: {"report": {"name": "A new app report","shopify_ql": "SHOW total_sales BY country FROM order SINCE -1m UNTIL today ORDER BY total_sales"}}, 
    	success: function(data){
    		alert(JSON.stringify(data));
    		document.getElementById("json").innerHTML = JSON.stringify(data);
    	},
    	error: function(e){
    		alert('yak may error.');
    	}
    });

});