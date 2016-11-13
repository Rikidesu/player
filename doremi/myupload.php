<?php
/**
 * Created by PhpStorm.
 * User: lilei
 * Date: 2015/12/13
 * Time: 17:08
 */

session_start();
$userid = intval($_SESSION['user']['id']);

require_once("config.php");

$sql = "select * from songs where upuser = '{$userid}'";

$result = $db->query($sql);

$rows = $result->num_rows;

for($i=0;$i<$rows;$i++){

    $row = $result->fetch_object();

    $srcsql = "select * from songs_src where songid = {$row->id}";

    $srcresult = $db->query($srcsql);

    $srcrows = $srcresult->num_rows;

    $src = $cover = $lrc = $background = 0;
    for($j=0;$j<$srcrows;$j++){
        $srcrow = $srcresult->fetch_object();
        if($srcrow->type=="music")
            $data[$i]['src'][$src++] = json_encode($srcrow);
        elseif($srcrow->type=="cover")
            $data[$i]['cover'][$cover++] = json_encode($srcrow);
        elseif($srcrow->type=="lrc")
            $data[$i]['lrc'][$lrc++] = json_encode($srcrow);
        elseif($srcrow->type=="background")
            $data[$i]['background'][$background++] = json_encode($srcrow);
    }

}

echo json_encode($data);