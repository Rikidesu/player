<?php
/**
 * Created by PhpStorm.
 * User: lilei
 * Date: 2015/12/7
 * Time: 21:30
 */

require_once("qq/API/qqConnectAPI.php");
$qc = new QC();
//$qc = new QC($callback ,$qid);


$qid = $qc->get_openid();

$arr = $qc->get_user_info();
$nickname= $arr["nickname"];
$figureurl_2 = $arr['figureurl_2'];

require_once("config.php");
$db->query("set names utf8");
$sql = "select * from user where qqid='".$qid."'";

$result = $db->query($sql);

$rows = $result->num_rows;

if($rows>0){
    $row = $result->fetch_object();
    $_SESSION['user']['id'] = $row->id;
    $_SESSION['user']['nickname'] = $row->nick;
    if($row->avatar) $_SESSION['user']['avatar'] = $row->avatar;//没完善，待修复
    $_SESSION['user']['qqid'] = $qid;
    header("location: http://".$_SERVER['HTTP_HOST']);

    $sql = "insert into login_log (userid,type,time) values ({$row->id},'QQlogin',now())";
    $result = $db->query($sql);

}
else{




    $sql = "insert into user (qqid,nick,avatar,createdate) values ('{$qid}','{$nickname}','{$figureurl_2}',now())";

    $result = $db->query($sql);

    $result = $db->query("select LAST_INSERT_ID() as lastid");

    $row = $result->fetch_object();

    $_SESSION['user']['id'] = $row->lastid;
    $_SESSION['user']['nickname'] = $nickname;
    $_SESSION['user']['avatar'] = $figureurl_2;
    $_SESSION['user']['qqid'] = $qid;

    $sql = "insert into login_log (userid,type,time) values ({$row->lastid},'QQregister',now())";
    $result = $db->query($sql);


    header("location: http://".$_SERVER['HTTP_HOST']);
}

?>