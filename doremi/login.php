<?php
/**
 * Created by PhpStorm.
 * User: lilei
 * Date: 2015/12/3
 * Time: 20:40
 */




?>
<style>
    .shade {
        perspective: 800px;
    }
    .frame {
        height:auto;
        transform-style: preserve-3d;
        margin-top: -250px;
    }
    .login_div {
        width:500px;
        margin:10px auto 10px auto;
        -webkit-transition: transform .6s,opacity .5s;
        -moz-transition: transform .6s,opacity .5s;
        -ms-transition: transform .6s,opacity .5s;
        -o-transition: transform .6s,opacity .5s;
        transition: transform .6s,opacity .5s;
    }
    .login_div.hidden {
        will-change:transform;
        -webkit-transform: rotateX(-90deg) translateZ(-200px);
        -moz-transform: rotateX(-90deg) translateZ(-200px);
        -ms-transform: rotateX(-90deg) translateZ(-200px);
        -o-transform: rotateX(-90deg) translateZ(-200px);
        transform: rotateX(-90deg) translateZ(-200px);
        opacity:0;
    }
    .flp { position:relative;margin: 30px auto 40px auto; width: 100%;}
    .flp div{position: relative; margin: 40px auto 10px auto;width: 100%;
        -webkit-transition: transform .6s,opacity .5s;
        -moz-transition: transform .6s,opacity .5s;
        -ms-transition: transform .6s,opacity .5s;
        -o-transition: transform .6s,opacity .5s;
        transition: transform .6s,opacity .5s;}
    .flp div.hidden {
        -webkit-transform: scale(0.4);
        -moz-transform: scale(0.4);
        -ms-transform: scale(0.4);
        -o-transform: scale(0.4);
        transform: scale(0.4);
        opacity:0;
    }
    .flp input, .flp label {width: 100%; height:60px; line-height:50px; font-size: 21px; font-family: inherit; display: block; }
    .flp input { vertical-align: bottom;line-height:50px; font-size: 21px; border: solid 2px #333333;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        outline: none; padding: 5px 0; background: rgba(255,255,255,.9); color: rgba(0, 0, 0, 0.75);}
    .flp label { position: absolute; top: 0; left: 0; cursor: text; padding: 5px;  pointer-events: none; }
    .keyword {display: block; float: left; position: relative;font-size: 21px; color: rgba(0, 0, 0, 0.5);}

    .floating {top: -50px; text-transform: uppercase; font-size: 18px; color: rgba(255, 55, 55, 0.95); font-weight: bold;

        text-shadow: 0 0 6px rgba(255,255,255,.4);
    }

    .focussed {pointer-events: none;}
    .flp div.important:after{
        position:absolute;
        top:0;
        right:20px;
        content: '*';
        font-size:30px;
        color:red;
        width:auto;
        height:60px;
        line-height: 60px;
    }
    .qq_login {
        width:150px;
        height:60px;
        line-height:50px;
        border: solid 2px #333333;
        border-right:solid 1px #333333;
        border-radius:10px 0 0 10px;
        background-color: rgba(0,153,255,.9);
        color: rgba(255,255,255, 0.9);
        float: left;
    }
    .normal_login {
        width:200px;
        height:60px;
        line-height:50px;
        border-top: solid 2px #333333;
        border-bottom: solid 2px #333333;
        background-color: rgba(255,255,255,.9);
        color: rgba(0, 0, 0, 0.9);
        float: left;
        border-left: none;
        border-right: none;
    }
    .register {
        width:150px;
        height:60px;
        line-height:50px;
        border: solid 2px #333333;
        border-left:solid 1px #333333;
        border-radius:0 10px 10px 0;
        background-color: rgba(255,255,255,.9);
        color: rgba(0, 0, 0, 0.9);
        float: left;
    }
</style>
<div class="shadeclose">✘</div>
<div class="login_div hidden">
    <form id="login_form" class="flp" onsubmit="swal('还没做好OTZ');return false;">
        <div class="important">
            <input type="text" id="username"/>
            <label for="username">用户名</label>
        </div>
        <div class="important">
            <input type="password" id="password"/>
            <label for="password">密码</label>
        </div>
    </form>

    <div>
            <button class="qq_login" type="button" >QQ登陆</button>
            <input class="normal_login" type="submit" value="登陆">
            <input class="register small" type="submit" value="注册">
    </div>

</div>
<script src="js/jQuery.md5.js"></script>
<script>
    jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

    var nickname = undefined,
        $nickname  = undefined ,
        confirm_password = undefined,
        $confirm_password = undefined;

    $(".normal_login").click(function(){
        var fault = 0;
        if(typeof (confirm_password)!="undefined"){
            $(".register").addClass("small");
            $(".normal_login").removeClass("small");

            nickname = undefined;
            $nickname  = undefined ;
            confirm_password = undefined;
            $confirm_password = undefined;
            $(".flp div.new").addClass("hidden");

            setTimeout(function(){
                $(".flp div.new").remove();
                $("#login_form").animate({
                    minHeight:'100px'
                });
            },300);

        } else {
            username = document.getElementById("username");
            password = document.getElementById("password");
            if(username.value.length<3){
                $(username).addClass("warning");
                swal("用户名太短啦","","warning");
                fault +=1;
            }
            if(password.value.length<3){
                $(password).addClass("warning");
                swal("密码太短啦","","warning");
                fault +=1;
            }
            if(fault){
                return false
            } else {
                $.ajax({
                    url:"login_result.php",
                    async:true,
                    type:"POST",
                    data:{
                        username:username.value,
                        password: $.md5(password.value)
                    },
                    success:function(data){
                        data = eval ( "(" + data + ")" );
                        if(data.result=="login"){
                            swal("登陆成功",data.nickname,"success");
                            $(".shadeclose").trigger("click");
                            $(".login").html(data.html);
                        } else {
                            swal("失败",data.content,"warning");
                        }
                    }
                })
            }

        }
    });
    $(".register").click(function(){
        parent = document.getElementById("login_form");
        if(typeof (confirm_password)=="undefined"){
            $(".normal_login").addClass("small");
            $(".register").removeClass("small");
            confirm_password = document.createElement("div");
            $confirm_password = $(confirm_password);
            $confirm_password.addClass("hidden");
            $confirm_password.addClass("important");
            $confirm_password.addClass("new");
            $confirm_password.html('<input type="password" id="password2"/><label for="password2">确认密码</label>');

            nickname = document.createElement("div");
            $nickname = $(nickname);
            $nickname.addClass("hidden");
            $nickname.addClass("important");
            $nickname.addClass("new");



            $nickname.html('<input type="text" id="nickname"/><label for="nickname">昵称</label>');
            $(parent).animate({
                minHeight:'360px'
            },300);

            setTimeout(function(){
                parent.appendChild(confirm_password);
                parent.appendChild(nickname);



                $(".flp div.hidden label").each(function(){
                    $(this).html("<span class='keyword'>" + $(this).html().split("").join("</span><span class='keyword'>") + "</span>");
                    $(".keyword:contains(' ')").html("&nbsp;");
                });
                var d;
                $(".flp div.hidden input").focus(function(){
                    var l = $(this).next().children().length;
                    $(this).next().addClass("focussed").children().stop(true).each(function(i){
                        d = i*30;
                        $(this).delay(d).animate({opacity: "0"}, {
                            duration: 350,
                            step: function(n, mx) {
                                $(this).css("transform", "scale("+n+")")
                            },
                            complete: function(){
                                $(this).addClass("floating").animate({opacity: "1"}, {
                                    duration: 350,
                                    step: function(n, mx) {
                                        $(this).css("transform", "scale("+n+")")
                                    },
                                });
                            },
                            easing: 'easeInBack'
                        });
                    })
                });
                $(".flp div.hidden input").blur(function(){
                    if($(this).val() == "")
                    {
                        $(this).next().removeClass("focussed").children().stop(true).each(function(i){
                            d = i*30;
                            $(this).delay(d).animate({opacity: "0"}, {
                                duration: 350,
                                step: function(n, mx){
                                    $(this).css("transform", "scale("+n+")")
                                },
                                complete: function(){
                                    $(this).removeClass("floating").animate({opacity: "1"}, {
                                        duration: 350,
                                        step: function(n, mx){
                                            $(this).css("transform", "scale("+n+")")
                                        }
                                    });
                                },
                                easing: 'easeInBack'
                            })
                        })
                    }
                });



                setTimeout(function(){
                    $confirm_password.removeClass("hidden");
                },10);
                setTimeout(function(){
                    $nickname.removeClass("hidden");
                },110)

            },310)

        } else {
            var fault = 0;
            username = document.getElementById("username");
            password = document.getElementById("password");
            password2 = document.getElementById("password2");
            form_nickname = document.getElementById("nickname");
            if(username.value.length<3){
                $(username).addClass("warning");
                swal("用户名太短啦","","warning");
                fault +=1;
            }
            if(password.value.length<3){
                $(password).addClass("warning");
                swal("密码太短啦","","warning");
                fault +=1;
            }
            if(password.value!=password2.value){
                $(password2).addClass("warning");
                swal("两次输入密码不一样","","warning");
                fault +=1;
            }
            if(form_nickname.value.length<1){
                $(form_nickname).addClass("warning");
                swal("昵称太短啦","","warning");
                fault +=1;
            }
            if(fault){
                return false
            } else {
                $.ajax({
                    url:"register_result.php",
                    async:true,
                    type:"POST",
                    data:{
                        username:username.value,
                        password: $.md5(password.value),
                        password2: $.md5(password2.value),
                        nickname:form_nickname.value
                    },
                    success:function(data){
                        data = eval ( "(" + data + ")" );
                        if(data.result=="login"){
                            swal("注册成功",data.nickname,"success");
                            $(".shadeclose").trigger("click");
                            $(".login").html(data.html);
                        } else {
                            swal("失败",data.content,"warning");
                        }
                    }
                })
            }
        }

    });
    setTimeout(function(){
        $(".login_div.hidden").removeClass("hidden");
    },10);
    $(".flp label").each(function(){
        $(this).html("<span class='keyword'>" + $(this).html().split("").join("</span><span class='keyword'>") + "</span>");
        $(".keyword:contains(' ')").html("&nbsp;");
    });
    var d;
    $(".flp input").focus(function(){
        var l = $(this).next().children().length;
        $(this).next().addClass("focussed").children().stop(true).each(function(i){
            d = i*30;
            $(this).delay(d).animate({opacity: "0"}, {
                duration: 350,
                step: function(n, mx) {
                    $(this).css("transform", "scale("+n+")")
                },
                complete: function(){
                    $(this).addClass("floating").animate({opacity: "1"}, {
                        duration: 350,
                        step: function(n, mx) {
                            $(this).css("transform", "scale("+n+")")
                        },
                    });
                },
                easing: 'easeInBack'
            });
        })
    });
    $(".flp input").blur(function(){
        if($(this).val() == "")
        {
            $(this).next().removeClass("focussed").children().stop(true).each(function(i){
                d = i*30;
                $(this).delay(d).animate({opacity: "0"}, {
                    duration: 350,
                    step: function(n, mx){
                        $(this).css("transform", "scale("+n+")")
                    },
                    complete: function(){
                        $(this).removeClass("floating").animate({opacity: "1"}, {
                            duration: 350,
                            step: function(n, mx){
                                $(this).css("transform", "scale("+n+")")
                            }
                        });
                    },
                    easing: 'easeInBack'
                })
            })
        }
    });

    $(document).on("click",".qq_login", function(){
        window.location.href="http://riki.sinaapp.com/qqapi.php";
        /*
         $.get("qqapi.php",function(data){
         Ishow.innerHTML=data;
         });
         */

    });
</script>
