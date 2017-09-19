<?php
	/*$product_url = "https://www.aliexpress.com/store/product/Original-Meizu-M6-Note-3GB-16GB-32GB-4G-LTE-Snapdragon-625-Octa-Core-5-5-FHD/1194377_32828298518.html?spm=2114.11010108.26.2.35f7175PVIFMw";
	$page = curl_get_contents($product_url);
	echo $page;*/
	/*$regex = '/<h1 class="product-name" itemprop="name">(.*?)<\/h1>/s';
	//$regex = '/<span class="p-del-price-title">(.*?)<\/span>/s';
	preg_match_all($regex, $page, $title);
	print_r($title, true);
	$product_title = json_encode($title[0], true);
	echo $product_url;
	echo "</br>";
	echo $product_title;
*/
	/*$price = '';
	$special_price = '';
	$data = json_decode($page, true);
	echo "Price: "+$price+"</br>";
	echo "Special Price: "+$special_price+"</br>";*/

	$conn = new mysqli('localhost', 'root', '', 'scraped_products');
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 

	$title = $_POST['title'];
    $price = $_POST['price'];
    $old_price = $_POST['old_price'];
    $description = $_POST['description'];
    $images = $_POST['images'];
    $option1 = $_POST['option1'];
    $option2 = $_POST['option2'];
    $option3 = $_POST['option3'];
    $website_name = $_POST['website_name'];
    if(mysql_query("INSERT INTO products VALUES('$title', '$price', '$old_price', '$description', '$images', '$option1', '$option2', '$option3')"))
     echo "Successfully Inserted";
    else
    echo "Insertion Failed";

	/*function curl_get_contents($url){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
		curl_setopt($ch,CURLOPT_SSL_VERIFYPEER, false);

		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1');
		$data = curl_exec($ch);
		curl_close($ch);
		return $data;
	}*/
?>