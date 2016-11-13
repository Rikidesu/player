<?php

echo auto_read(file_get_contents("http://7xkut8.media1.z0.glb.clouddn.com/music_10105595bytes02%20-%20%E3%83%92%E3%83%93%E3%82%AB%E3%82%BC.mp3?avinfo"));

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