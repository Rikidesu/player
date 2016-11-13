<?php
session_start();
$userid = $_SESSION['user']['id'];
require_once("config.php");

$songs;

$sql = "select id,title,subtitle,singer,album from songs";

if($userid) $sql.= " where id not in (select songid from dislikes where userid={$userid})";

$result = $db->query($sql);

$rows = $result->num_rows;

for($i=0;$i<$rows;$i++){


    $row = $result->fetch_object();

    $songs[$i]=$row;
}

echo json_encode($songs);



?>