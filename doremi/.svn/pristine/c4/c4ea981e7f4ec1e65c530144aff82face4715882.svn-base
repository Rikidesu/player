<?php
require_once("../../API/qqConnectAPI.php");
$qc = new QC();  
$acs = $qc->qq_callback();  
$oid = $qc->get_openid();  
$qc = new QC($acs,$oid);
$arr = $qc->get_user_info();
$qid = $qc->get_openid();

require_once("../../../config.php");
$db->query("set names utf8");
$sql = "select * from user where qqid='".$qid."'";

$result = $db->query($sql);

$rows = $result->num_rows;

if($rows>0){
$row = $result->fetch_object();
$_SESSION['user']['id'] = $row->id;
$_SESSION['user']['nick'] = $row->nick;
$_SESSION['user']['avatar'] = $arr['figureurl_2'];
$_SESSION['user']['qqid'] = $qid;
    header("location: http://".$_SERVER['HTTP_HOST']);
}
else{

$sql = "insert into user (qqid,nick) values ('" . $qid . "','" . $arr["nickname"] . "')";
    
$result = $db->query($sql);
    
$result = $db->query("select LAST_INSERT_ID() as lastid");
    
$row = $result->fetch_object();
    
$_SESSION['user']['id'] = $row->lastid;
$_SESSION['user']['nick'] = $arr["nickname"];
$_SESSION['user']['avatar'] = $arr['figureurl_2'];
$_SESSION['user']['qqid'] = $qid;
    header("location: http://".$_SERVER['HTTP_HOST']);
}

?>