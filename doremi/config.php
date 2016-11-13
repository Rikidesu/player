<?php
@ $db = new mysqli('127.0.0.1','doremi','doremi','doremi');
$db -> select_db('doremi');
if (!$db)
  {
  die('Could not connect: ' . mysql_error());
  }
$domain = "riki";
$db->set_charset("utf8");
?>
