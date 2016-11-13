<?php

session_start();

require_once("config.php");
$db->query("set names utf8");
$sql = "select * from user where user='{$_POST['username']}' and password='{$_POST['password']}'";

$result = $db->query($sql);

$rows = $result->num_rows;

if($rows>0){
    $row = $result->fetch_object();

    $_SESSION['user']['id'] = $row->id;
    $_SESSION['user']['nickname'] = $row->nick;
    if($row->avatar) $_SESSION['user']['avatar'] = $row->avatar;//没完善，待修复
    if($row->qqid){
        $_SESSION['user']['qqid'] = $row->qqid;
    };

    $sql = "insert into login_log (userid,type,time) values ({$row->id},'normal_login',now())";
    $result = $db->query($sql);


    require_once("login_info.php");
    exit;

}
else{

    $data['result'] = "fault";
    $data['content'] = "用户或密码错误";


}


echo json_encode($data);

?>