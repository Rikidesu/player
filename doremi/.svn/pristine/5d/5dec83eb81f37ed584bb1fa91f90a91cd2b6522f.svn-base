<?php

session_start();

require_once("config.php");

$userid = intval($_SESSION['user']['id']);

$songid = intval($_POST['songid']);


$data['type'] = "dislikes";

if($_SESSION['user']['id']){

    $sql = "select * from dislikes where userid ={$userid} and songid ={$songid}";

    $result = $db->query($sql);

	$rows = $result->num_rows;


	if($rows>0){
    
 	   $sql = "delete from dislikes where userid = {$userid} and songid = {$songid} ";
    
	    if($db->query($sql)){
        
 	       $data['result'] = "deleted";
        
  	  }
    
    
    
	} else {
    
 	   $sql = "insert into dislikes (userid,songid,time) values ({$userid},{$songid},now())";
    
 	   if($db->query($sql)){
        
	        $data['result'] = "added";
        
 	   }
    
	}
   

} else {
    
    $data['result'] = "logout";
    
    
}

echo json_encode($data);
