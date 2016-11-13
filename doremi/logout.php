<?php

session_start();

$_SESSION['user']=array();

unset($_SESSION['user']['id']);
unset($_SESSION['user']['nick']);
unset($_SESSION['user']['qqid']);
unset($_SESSION['user']['avatar']);


?>