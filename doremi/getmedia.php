<?php
session_start();
$userid = $_SESSION['user']['id'];
require_once("config.php");

$song = json_decode($_POST['song']);

$sql = "select type,href,source from songs_src where songid = {$song->id}";

$result = $db->query($sql);

if($result){
    $rows = $result->num_rows;
    $src = $cover = $lrc = $background = 0;
    for($i=0;$i<$rows;$i++){
        $row = $result->fetch_object();
        if($row->type=="music")  $data['src'][$src++] = json_encode($row);
        elseif($row->type=="cover") $data['cover'][$cover++] = json_encode($row);
        elseif($row->type=="lrc") {
            $data['lrc'][$lrc++] = json_encode($row);
        }
        elseif($row->type=="background") $data['background'][$background++] = json_encode($row);
    }
}

if($userid){
    $sql = "select * from likes where songid={$song->id} and userid = {$userid}";
    $result = $db->query($sql);
    $rows = $result->num_rows;
    if($rows>0) $data['like'] = "like";


    $sql = "select * from dislikes where songid={$song->id} and userid = {$userid}";
    $result = $db->query($sql);
    $rows = $result->num_rows;
    if($rows>0) $data['dislike'] = "dislike";
}

echo json_encode($data);


?>