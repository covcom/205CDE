<html>
 <body>

<?php

$server = $_SERVER['HTTP_HOST'];

if (isset($_GET["action"]) && isset($_GET["id"]) && $_GET["action"] == "get_app") 
{
  $app_info = file_get_contents('http://'.$server.'/api.php?action=get_app&id=' . $_GET["id"]);
  $app_info = json_decode($app_info, true);
  ?>
    <table>
      <tr>
        <td>App Name: </td><td> <?php echo $app_info["app_name"] ?></td>
      </tr>
      <tr>
        <td>Price: </td><td> <?php echo $app_info["app_price"] ?></td>
      </tr>
      <tr>
        <td>Version: </td><td> <?php echo $app_info["app_version"] ?></td>
      </tr>
    </table>
    <br />
     
    <a href="http://<?php echo $server?>/REST_Client.php?action=get_app_list" alt="app list">Return to the app list</a> 
  <?php
}
else // else take the app list
{
    
  $app_list = file_get_contents('http://'.$server.'/api.php?action=get_app_list');
  $app_list = json_decode($app_list, true);
  //var_dump($app_list);
  ?>
    <ul>
     <?php  foreach ($app_list as $app) { ?>
      <li>
        <a href=<?php echo "http://$server/REST_Client.php?action=get_app&id=" . $app["id"]  ?> alt=<?php echo "app_" . $app["id"] ?>><?php echo $app["name"] ?></a>
      </li>
     <?php } ?>
    </ul>
  <?php
} ?>
 </body>
</html>
