<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>geogram</title>
  </head>
  <body>
      
  <!-- call a Javascript function to send an XMLHttpRequest -->
  
  <form action="geogram.php" method="get">
    <input type="text" name="location"/>
    <button type="submit">Submit</button>
  </form>
    <br/>
    
 <!-- make a Javascript callback to handle the request when it arrives -->
 
    <?php
    if(!empty($instagram_array)){
      foreach($instagram_array['data'] as $key=>$image){
        echo '<img src="'.$image['images']['low_resolution']['url'].'" alt=""/><br/>';
      }
    }
    ?>
  </body>
</html>