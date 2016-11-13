<?php
/**
 * Created by PhpStorm.
 * User: lilei
 * Date: 2015/12/1
 * Time: 20:39
 */
session_start();
require_once("config.php");

$upuser = intval($_SESSION['user']['id']);

$title       =   $_POST['title'];
$singer      =   $_POST['singer'];

$Mtitle      =   $_POST['Mtitle'];
$Msize      =   $_POST['Msize'];
$Mhref      =   $_POST['Mhref'];
$Msource      =   $_POST['Msource'];

$Ctitle      =   $_POST['Ctitle'];
$Csize      =   $_POST['Csize'];
$Chref      =   $_POST['Chref'];
$Csource      =   $_POST['Csource'];

$Ltitle      =   $_POST['Ltitle'];
$Lsize      =   $_POST['Lsize'];
$Lhref      =   $_POST['Lhref'];
$Lsource      =   $_POST['Lsource'];

$Btitle      =   $_POST['Btitle'];
$Bsize      =   $_POST['Bsize'];
$Bhref      =   $_POST['Bhref'];
$Bsource      =   $_POST['Bsource'];

$exist_song_sql = "select id from songs where title = '{$title}' and singer = '{$singer}'";
$exist_song_result = $db->query($exist_song_sql);
$exist_song_rows = $exist_song_result->num_rows;
if($exist_song_rows>0){
    $data['result'] = "fault";
    $data['content'] = "已有歌曲";
} else {
    $data['title'] = $title;
    $data['singer'] = $singer;
    $new_song_sql = "insert into songs (title,singer,upuser,time) VALUE ('{$title}','{$singer}',{$upuser},now())";
    if($db->query($new_song_sql)){
        $songid = $db->insert_id;
            $data['song']['result'] = "success";
            $data['song']['id'] = $songid;

        $new_music_sql = "insert into songs_src (type,songid,title,filename,href,source,upuser,time,size) VALUE ('music',{$songid},'{$title}','{$Mtitle}','{$Mhref}','{$Msource}',{$upuser},now(),{$Msize})";
        $new_music_result = $db->query($new_music_sql);
        if($new_music_result) {
            $data['music']['result'] = "success";
        }
        if($Csize>10&&$Chref){
            $new_cover_sql = "insert into songs_src (type,songid,title,filename,href,source,upuser,time,size) VALUE ('cover',{$songid},'{$title}','{$Ctitle}','{$Chref}','{$Csource}',{$upuser},now(),{$Csize})";
            $new_cover_result = $db->query($new_cover_sql);
            if($new_cover_result) {
                $data['cover']['result'] = "success";
            }
        }
        if($Lsize>10&&$Lhref){
            $new_lrc_sql = "insert into songs_src (type,songid,title,filename,href,source,upuser,time,size) VALUE ('lrc',{$songid},'{$title}','{$Ltitle}','{$Lhref}','{$Lsource}',{$upuser},now(),{$Lsize})";
            $new_lrc_result = $db->query($new_lrc_sql);
            if($new_lrc_result) {
                $data['lrc']['result'] = "success";
            }
        }
        if($Bsize>10&&$Bhref){
            $new_background_sql = "insert into songs_src (type,songid,title,filename,href,source,upuser,time,size) VALUE ('background',{$songid},'{$title}','{$Btitle}','{$Bhref}','{$Bsource}',{$upuser},now(),{$Bsize})";
            $new_background_result = $db->query($new_background_sql);
            if($new_background_result) {
                $data['background']['result'] = "success";
            }
        }
    }



}



echo json_encode($data);