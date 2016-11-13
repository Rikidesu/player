<?php

echo auto_read(file_get_contents($_REQUEST['href']));

function auto_read($file, $charset='UTF-8') {
    $list = array('GBK', 'UTF-8', 'UTF-16LE', 'UTF-16BE', 'ISO-8859-1');
     $str = $file;
     foreach ($list as $item) {
        $tmp = mb_convert_encoding($str, $item, $item);
        if (md5($tmp) == md5($str)) {
             return mb_convert_encoding($str, $charset, $item);
         }
     }
    return "";
}



?>