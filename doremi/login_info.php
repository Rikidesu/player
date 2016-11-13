<?php
/**
 * Created by PhpStorm.
 * User: lilei
 * Date: 2015/12/6
 * Time: 20:25
 */
session_start();

$data['userid'] =intval( $_SESSION['user']['id']);
$data['nickname'] = $_SESSION['user']['nickname'];
$data['avatar'] = $_SESSION['user']['avatar'] ? $_SESSION['user']['avatar'] : "/img/default.jpg";

if(!$_SESSION['user']['id']){
    $data['result'] = "logout";
    $data['content'] = "未登录";
}
else {
    $data['result'] = "login";

    $data['html'] = "

<style>
.avatar{
position: absolute;
right:0;
width:50px;
height:50px;
border-radius:50%;
border: solid 2px rgba(50,50,50,.5);
overflow:hidden;
background-color: rgba(255,255,255.8);
}
.nickname {
position:absolute;
width: auto;
height:auto;
font-size: 12px;
border: solid 2px rgba(50,50,50,.5);
border-radius:12px;
padding: 1px 40px 1px 5px;
right: 15px;
white-space: nowrap;
-webkit-transition-duration: .5s;-moz-transition-duration: .5s;-ms-transition-duration: .5s;-o-transition-duration: .5s;transition-duration: .5s;
background-color: rgba(255,255,255,.8);
overflow:hidden;
}
.menu {
    position: absolute;
    right: -14px;
    top: 50px;
    width:80px;
    perspective: 600px;
    backface-visibility: hidden;
    z-index: 100;
}
.menu ul {
list-style: none;
    transform-style: preserve-3d;
}
.menu li {
cursor: pointer;
width:100%;
height:30px;
line-height: 18px;
text-align: center;
padding: 5px;
margin-top: 10px;
border: solid 2px rgba(50,50,50,.5);
border-radius: 5px;
background-color: rgba(255,255,255,.8);
}
.menu.hidden li {
        opacity: 0;
        will-change:transform;
        -webkit-transform: rotateX(-90deg) translateZ(-10px);
        -moz-transform: rotateX(-90deg) translateZ(-10px);
        -ms-transform: rotateX(-90deg) translateZ(-10px);
        -o-transform: rotateX(-90deg) translateZ(-10px);
        transform: rotateX(-90deg) translateZ(-10px);
}
.menu li:nth-child(1){
     transition: all .5s .2s;
}
.menu li:nth-child(2){
     transition: all .5s .3s;
}
.menu li:nth-child(3){
     transition: all .5s .4s;
}
.menu li:nth-child(4){
     transition: all .5s .5s;
}
.exp {

	 position:absolute;
	 top:0;
 	 left:0;
	 border-radius:0 50px 50px 0; 
 	 background-color:rgba(102,204,255,.2);
 	 height:100%;
     transition: all .5s 1s;

}
.level {
position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 40px;
    text-shadow: 1px 1px 1px #FFF;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(255,255,255,.9), rgba(255,255,255,.5), rgba(255,255,255,0.1));
    pointer-events: none;
    transition: all .5s .4s;
}



</style>
    <div class='nickname hidden scale04'>
   		 <div style='width:40%;' class='exp'></div>
  		 <p>{$data['nickname']}</p>
    </div>
   		 <div class='avatar'><img width='100%' height='100%' src='{$data['avatar']}'>
    
    <p class='level hidden'>Lv.3</p>
  
  </div>

    <div class='menu hidden small'>

    <ul>
    <li><a href='my' >个人中心</a></li>
    <li class='logout'><a href='#'>注销</a></li>
</ul>

</div>

    <script>
    $('.logout').click(function(){

    $.ajax({
    url:'logout.php',
    async:true,
    success:function(){
    $('.login').html('<div class=\'no\'>登陆</div>');
    }
    })
    });

</script>
    ";

}
echo json_encode($data);