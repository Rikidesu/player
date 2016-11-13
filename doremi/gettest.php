<?php
require_once("config.php");

$song = $_REQUEST['song'];

$sql = "select type,href,source from songs_src where songid = {$song}";

$result = $db->query($sql);

$row = $result->fetch_object();



if($result){
    $rows = $result->num_rows;
    $src = $cover = $lrc = $background = 0;
    for($i=0;$i<$rows;$i++){
        $row = $result->fetch_object();
        if($row->type=="music") {
            
$mp3_url = $row->href;
$file = file_get_contents($mp3_url);
header("Content-type: text/plain");
header("Content-type: application/octet-stream");
header("Accept-Ranges: bytes");
header("Content-Disposition: attachment; filename=".$row->title);
header("Expires: 0" );
exit($file);
        
        
        }
    }
        
}

