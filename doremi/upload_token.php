<?php
require_once 'qiniu/autoload.php';

use Qiniu\Auth;

$accessKey = '';//七牛的KEY
$secretKey = '';//七牛的KEY
$auth = new Auth($accessKey, $secretKey);

$bucket = 'musicroom';
$upToken = $auth->uploadToken($bucket);

$json['uptoken'] = $upToken;

echo json_encode($json);