<?php
/**
 * Created by PhpStorm.
 * User: lilei
 * Date: 2015/12/2
 * Time: 22:20
 */

$url = $_REQUEST['href'] . rawurlencode($_REQUEST['filename']) . "?avinfo";
echo file_get_contents($url);
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