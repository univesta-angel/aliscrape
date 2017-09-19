//var x = bool;

// chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText+' '+bool);

/*
function handler(ev) {
    var target = $(ev.target);
    var listItem = document.getElementById( "list-items" );
    //var heading = $(".product.j-p4plog:first ").text();
    var price = $(this).find(".value").text();

    if(heading!=null){
		if (bool==1){       
       alert('Title: '+ heading + ' \nPrice: ' + price);
       return false;
   		}
    }
}
*/

$(document).ready(function(xhr) {

  

  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("Import");


  if (bool==1){ // if chrome extension is enabled

    $( ".item" ).mouseover(function() {
      btn.appendChild(t);
      $(this).append(btn);
    }).mouseleave(function(){
      btn.remove();
    });

    $( ".item" ).click(function(){
    // event.preventDefault(); //stops the default action of an element from happening.
	  // `this` is the DOM element that was clicked
	  //var index = $( ".product.j-p4plog" ).index( this );
    //var product_name = $(this).text();
      //-------DECLARATION OF VALUES---------
  	  var title = $(this).find('.product').text();
      var price = $(this).find('.value:first').text().replace(/US \$/g,"");
      //var price = $('.value').text();
      if($(this).find('.free-s').length > 0){
        var ship =  $(this).find('.free-s').text(); //free shipping
      }
      else{
        var shipping = $(this).find('.price:last').text();
        var ship = shipping.replace(/\r?\n|\r/g, "").replace(/ /g,"").replace(/[^\x20-\x7E]/g, '');
      }  
      var vendor = $(this).find('.store').text();
      var orders = $(this).find('em').text();
      var feedback = $(this).find('.rate-num').text();
      var type = $('span.current-cate').text();

      var product_id = $(this).find('.atc-product-id').val();

      var images = $(this).find('.picCore').attr('src');
      var img = btoa(images);

  	  var aaa = ("Product Name: " + title +
        "\nPrice: " + price +
        "\nShipping: "  + ship +
        "\nVendor: " + vendor +
        "\nFeedback: " + feedback +
        "\nImage Source: " + images +
        "\nProduct Type: " + type +
        "\nTotal Orders: " + orders+
        "\nProduct ID: " + product_id)+
        "\n WOULD YOU LIKE TO ADD TO OUR DATABASE?";
      
      var x;
    // ---------------------- IMPORT FUNCTION ---------------------------
    if (window.confirm(aaa,"defaultText") == true) {
        x = "You pressed OK!";
        //save action goes here

      /*data = {
        title: title,
        body_html: "Sample",
        images: images,
        price: price,
        product_type: type,
        tags: "import",
        vendor: vendor
      };*/

      data = {
        "product": {
          "title": "Burton Custom Freestyle 151",
          "body_html": "<strong>Good snowboard!<\/strong>",
          "vendor": "Burton",
          "product_type": "Snowboard"
        }
      }

      /*
      data = {  //----------------------create a smart collection of all products with the 'Import' tag
        "smart_collection": {
          "title": "Imports",
          "rules": [
            {
              "column": "tag",
              "relation": "equals",
              "condition": "Import"
            }
          ]
        }
      }; */
            
      $.ajax({
        type: "POST",
        //url: "https://scrapetest.herokuapp.com/create.json",
        //url: "https://shopifyapp-sample.herokuapp.com/create.json",
        //url: "http://pangtest.atwebpages.com/shopify_test/create.php",
        url: "https://2d69dfd97a185d97d49cb4b85de5e76f:1cd78cc392fe8861b891a3f881b3c5d8@gels-store.myshopify.com/admin/products.json",
        dataType: "json",
        //headers:{ contentType: "application/json" },
        data: data,
        success: function() {
          alert('Success!!!');
          //alert(images);
        },
        error: function(data) {
          alert('ew error. check logs.');
          console.log(data);
        }
      }).done(function(data, statusText, xhr){
        var status = xhr.status;                //200
        var head = xhr.getResponseHeader('Location'); //Detail header info
        //alert(head.substring(head.lastIndexOf("/")+1));
      var product_id = head.substring(head.lastIndexOf("/")+1);
      //var my_delay = 2000;

        setTimeout(callAjax(product_id, images), my_delay);
        //setTimeout( callAjax2(product_id), my_delay);
       
      });
      
      //event.stopPropagation();

      }

      alert(x);
      return false;

      //alert("Product Name: " + product_name);

    });
  }
});

var my_delay = 2000;

function callAjax(product_id, images) {
    data1 = {
            "image": {
               "src": images
              }
          };
    $.ajax({
      type: "POST",
      //url: "https://shopifyapp-sample.herokuapp.com/create.json",
      url: "https://2d69dfd97a185d97d49cb4b85de5e76f:1cd78cc392fe8861b891a3f881b3c5d8@gels-store.myshopify.com/admin/products/"+product_id+"/images.json",
      dataType: "json",
      //contentType: "application/json",
      data: data1,
      success: function() {
       //   setTimeout(callAjax, my_delay);
          alert("SUCCESS!");
      }
    });
}

function callAjax2(product_id) {
  var product_price = $('#j-sku-discount-price').text();
  var response = '';
  var url = '';
  $.ajax({
    type: "GET",
    //url: "https://shopifyapp-sample.herokuapp.com/create.json",
    url: "https://2d69dfd97a185d97d49cb4b85de5e76f:1cd78cc392fe8861b891a3f881b3c5d8@gels-store.myshopify.com/admin/products/"+product_id+"/variants.json",
    //url: "https://www.aliexpress.com/AjaxAtmPlus.htm?productId="+product_id,
    //getContent: url,
    //dataType: "json",
    //contentType: "application/json",
    //data: data2,
    async: false,
    success : function(text)
    {
      //url = "https://www.aliexpress.com/AjaxAtmPlus.htm?productId="+product_id;
      //response = text;
      //alert(text);
      //alert('aaa');
    }
  });
  //alert(url);
  //alert(response);
}



/*
---list of datas---

title : .product
price : .value
total orders : em
vendor : .store
feedback : .rate-num
shipping : .price / free shipping : .free-s
images : .picCore

description :
sku :
barcode :
variants
product type :
collections :
tags :

*/