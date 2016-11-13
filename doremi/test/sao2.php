<html>

<head>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<title>萌えの音楽屋</title>
</head>
    
<body style="overflow:hidden;">
    
    <div style="position:absolute;border-radius:120px;left:50%;top:50%;width:200px;height:200px;margin-top:80px;margin-left:-120px;border:solid 20px #465EFF; text-align:center;line-height:200px;font-size:130px;color:#465EFF;font-weight:bold;" >▶</div>
    
    <div id="parent" style="transform-style:preserve-3d;transform:rotateZ(0deg);left:50%;top:50%;margin-left:-400px;margin-top:-400px;width:800px;height:800px; background-size:100% 100%; position:relative; border:solid 10px #6cf; border-radius:400px;">

        <div class="s1" style="position:absolute; top:-100px;height:200px;width:200px;left:300px;background-size:100% 100%; transform-style:preserve-3d;"></div>

        <div class="s2" style="position:absolute; left:-100px;height:200px;width:200px;top:300px;background-size:100% 100%; transform-style:preserve-3d;"></div>

        <div class="s3" style="position:absolute; bottom:-100px;height:200px;width:200px;left:300px;background-size:100% 100%; transform-style:preserve-3d;"></div>

        <div class="s4" style="position:absolute; right:-100px;height:200px;width:200px;top:300px; background-size:100% 100%; transform-style:preserve-3d;"> </div>

        <div style="transform-style:preserve-3d;transform:rotateZ(45deg);-webkit-transform-style:preserve-3d;-webkit-transform:rotateZ(45deg);-moz-transform-style:preserve-3d;-moz-transform:rotateZ(45deg);left:0;top:0;width:800px;height:800px; background-size:100% 100%; position:absolute;">
    

        <div class="s1" style="position:absolute; top:-100px;height:200px;width:200px;left:300px;background-size:100% 100%; transform-style:preserve-3d;"></div>

        <div class="s2" style="position:absolute; left:-100px;height:200px;width:200px;top:300px;background-size:100% 100%;transform-style:preserve-3d;"></div>

        <div class="s3" style="position:absolute; bottom:-100px;height:200px;width:200px;left:300px;background-size:100% 100%; transform-style:preserve-3d;"></div>

        <div class="s4" style="position:absolute; right:-100px;height:200px;width:200px;top:300px; background-size:100% 100%; transform-style:preserve-3d;"> </div>

            
    </div>
        
        
    </div>
    
    
</body>
</html>

<style>
    * {transition-duration:0.05s;transition-timing-function:linear;transform:scale(0.9);-webkit-transition-duration:0.05s;-webkit-transition-timing-function:linear;-webkit-transform:scale(0.9);transition-duration:0.05s;-moz-transition-timing-function:linear;-moz-transform:scale(0.9);}
    
    div.s2 {/*-webkit-transform: matrix3d(0, 37, 0, 0, 30, 0, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 30);*/
    
  
    }    
    
    div.s4 {/*-webkit-transform: matrix3d(0, 37, 0, 0, -30, 0, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 30);*/
    
    
    
    }
    
    div.s1 {-webkit-transform: matrix3d(40, 0, 0, 0, 0, 30, 0, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);-webkit-transform-style:preserve-3d;-moz-transform: matrix3d(40, 0, 0, 0, 0, 30, 0, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);-moz-transform-style:preserve-3d;transform: matrix3d(40, 0, 0, 0, 0, 30, 0, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);transform-style:preserve-3d; }
    div.s2 {-webkit-transform: matrix3d(0, 40, 0, 0,  30, 0, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);-webkit-transform-style:preserve-3d;-moz-transform: matrix3d(0, 40, 0, 0,  30, 0, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);-moz-transform-style:preserve-3d;transform: matrix3d(0, 40, 0, 0,  30, 0, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);transform-style:preserve-3d;}
    div.s3 {-webkit-transform: matrix3d(40, 0, 0, 0, 0, -30, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);-webkit-transform-style:preserve-3d;-moz-transform: matrix3d(40, 0, 0, 0, 0, -30, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);-moz-transform-style:preserve-3d;transform: matrix3d(40, 0, 0, 0, 0, -30, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);transform-style:preserve-3d;}
    div.s4 {-webkit-transform: matrix3d(0, 40, 0, 0, -30, 0, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);-webkit-transform-style:preserve-3d;-moz-transform: matrix3d(0, 40, 0, 0, -30, 0, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);-moz-transform-style:preserve-3d;transform: matrix3d(0, 40, 0, 0, -30, 0, 1, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 40);transform-style:preserve-3d;}
</style>


<script>
    
parent = document.getElementById("parent");
    
    var time = 0;
    
    function timer(){
    
        time+=1;
        setTimeout("timer();",50);
        
        parent.style.mozTransform = "rotateZ(-"+time+"deg)";
        parent.style.webkitTransform = "rotateZ(-"+time+"deg)";
        parent.style.transform = "rotateZ(-"+time+"deg)";
    }
    timer();
    
</script>