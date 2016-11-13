
lrc = function(){
    this.lrc=document.getElementById("lrc");
    this.lrcparent=document.getElementById("content");
    this.haslrc = false;
    this.lrclasttime = 0;
    this.lrcarray =[];
    this.lrcrollon = true;
    this.lrcroll = document.getElementById("lrcboard");
    this.lrc_rate = 50;
    var that;
    that = this;

    this.requirelrc = function(){

    };

    this.removeAllChild = function() {
        while(this.lrc.lastChild) //当div下还存在末尾节点时 循环继续
        {
            this.lrc.lastChild.className="";
            this.lrc.removeChild(this.lrc.lastChild); }
        this.lrcroll.style.transform = "translateY(0)";
        this.lrcroll.style.webkitTransform = "translateY(0)";
    };

    this.parseLyric = function (text) {
        try{

            var lines = text.split('\n'),
                pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
                pattern2 = /\[\d{2}:\d{2}.\d{3}\]/g,

                result = [];
            result.splice(0,result.length);
            var max_lrc_row = 0;



            for(var i=0;i<lines.length;i++){
                    if (pattern2.test(lines[i])){
                        lines[i] = lines[i].substring(0, 9) + lines[i].substring(10);
                        i--; //我也不知道这里到底为什么要自减。。。
                    }
            }
            while (!pattern.test(lines[0])) {

                lines = lines.slice(1);
                max_lrc_row += 1;
                    if (max_lrc_row > 10000) {
                        console.log("歌词超过10000！！");
                        break;
                    }

            }
            lines[lines.length - 1].length === 0 && lines.pop();

            for(i=lines.length-1;i!=1;i--){

                if(!lines[i][1]){

                    lines.pop();

                }
                else {break;}

            }

            debug=lines;

            lines.forEach(function(v  , i  , a  ) {

                if (pattern.test(lines[i])||pattern2.test(lines[i])){

                var time = v.match(pattern),
                    value = v.replace(pattern, '');
                time.forEach(function (v1, i1, a1) {
                    var t = v1.slice(1, -1).split(':');
                    result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
                });
            }
            });
            result.sort(function(a, b) {
                return a[0] - b[0];
            });
            var riki = [];
            var desu = [];
            var rikidesu = [];
            riki.splice(0,riki.length);

            result.forEach(function(v  , i  , a ){
                var static = /\[static\].*\[\/static\]/g,
                    effect = /\[effect\].*\[\/effect\]/g,
                    godlrc = /\[\{.*\}\]/g;
                riki[i] = [];
                desu[i] = [];
                a[i][3] = [];
                a[i][3][0] = 0;

                if(godlrc.test(v)){

                    if(static.test(v)){
                        a[i][3] = [];
                        a[i][2] = a[i][1].match(static);
                        a[i][2] = String(a[i][2]).slice(+8,-9);
                        a[i][1] = a[i][1].replace(static,"");

                        riki[i] = String(a[i][2]).split(";");

                        for(j=0;j<riki[i].length;j++){

                            a[i][3][j]= String(riki[i][j]).split(":");

                        }



                    }

                    a[i][1] = a[i][1].replace(godlrc,"");
                }
            });

            this.removeAllChild();
            result.forEach(function(y,s,b)
                {

                    var new_lrc_li=document.createElement("li");

                    //new_lrc_li.id='lrc_'+s;

                    if(b[s][1]==""){b[s][1]="\n"}
                    new_lrc_li.textContent=b[s][1];
                    lrc.lrc.appendChild(new_lrc_li);




                    if(s<25){

                        $(lrc.lrc).children("li:nth-child(" + s + ")").addClass("hidden");
                        //document.getElementById('lrc_'+s).style.opacity = 0;

                        setTimeout(function(){
                            $(lrc.lrc).children("li:nth-child(" + s + ")").removeClass("hidden");
                        },30*s+200);
                       // setTimeout("document.getElementById('lrc_"+s+"').style.opacity = 1;",30*s);

                    }

                }
            );
            this.lrcarray = result;
            this.haslrc=true;
            this.showlrc();//////////////////////////////////////////////////////////////////////////////////////////////////////////
        } catch(e){


            var error_lrc_li=document.createElement("li");
            error_lrc_li.style.color = "red";
            error_lrc_li.height = this.lrcparent.clientHeight;
            error_lrc_li.style.lineHeight = error_lrc_li.height;
            this.lrc.appendChild(error_lrc_li);
            error_lrc_li.textContent="歌词文件出错: "+e.name + ": " + e.message;

        }
    };

    this.lrcupdate = function() {
        var lrcoverpx =0;
        var lrc_now;
        for (var i = 0, l = this.lrcarray.length; i < l; i++) {

            if(i>0){lrc_now=this.lrc.children[i-1];

                if(lrc_now){if(lrc_now.clientHeight!=37){lrcoverpx+=(lrc_now.clientHeight-37);}}
            }
            if (Player.player.currentTime.toFixed(2) < this.lrcarray[i][0]) {


                if(i!=this.lrclasttime){

                    if(lrc_now=this.lrc.children[i-1]){

                        $(lrc_now).prevAll() .attr('style','');
                        $(lrc_now).prevAll() .attr('class','');

                        /*
                        神歌词部分，因为换到新版了，暂时先不开放
                        if(this.lrcarray[i-1][3][0]){

                            for(j=0;j<this.lrcarray[i-1][3].length;j++){
                                if(this.lrcarray[i-1][3][j][0]=="background") this.lrcparent.style.backgroundColor=this.lrcarray[i-1][3][j][1];
                                if(this.lrcarray[i-1][3][j][0]=="clear"){
                                    this.lrcparent.style.background= "none";
                                    this.lrcparent.style.backgroundColor= "#FFF";
                                }
                                if(this.lrcarray[i-1][3][j][0]=="gradient"){
                                    this.lrcparent.style.background= "-moz-linear-gradient("+ this.lrcarray[i-1][3][j][1] + ")";
                                    this.lrcparent.style.background= "-webkit-linear-gradient("+ this.lrcarray[i-1][3][j][1] + ")";
                                }
                                if(this.lrcarray[i-1][3][j][0]=="color") lrc_now.style.color=this.lrcarray[i-1][3][j][1];
                                if(this.lrcarray[i-1][3][j][0]=="fontSize") lrc_now.style.fontSize=this.lrcarray[i-1][3][j][1];
                                if(this.lrcarray[i-1][3][j][0]=="textShadow") lrc_now.style.textShadow=this.lrcarray[i-1][3][j][1];
                                if(this.lrcarray[i-1][3][j][0]=="opacity") lrc_now.style.opacity=this.lrcarray[i-1][3][j][1];
                                if(this.lrcarray[i-1][3][j][0]=="letterSpacing") lrc_now.style.opacity=this.lrcarray[i-1][3][j][1];
                                if(this.lrcarray[i-1][3][j][0]=="textDecoration") lrc_now.style.opacity=this.lrcarray[i-1][3][j][1];
                                if(this.lrcarray[i-1][3][j][0]=="delay") lrc_now.style.transitionDelay = this.lrcarray[i-1][3][j][1];


                         if(this.lrcarray[i-1][3][j][0]=="scale"){
                         lrc_now.style.transform += "scale("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.webkitTransform += "scale("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.oTransform += "scale("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.mozTransform += "scale("+ this.lrcarray[i-1][3][j][1] + ")";
                         }
                         if(this.lrcarray[i-1][3][j][0]=="matrix3d"){
                         lrc_now.style.transform += "matrix3d("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.webkitTransform += "matrix3d("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.oTransform += "matrix3d("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.mozTransform += "matrix3d("+ this.lrcarray[i-1][3][j][1] + ")";
                         }
                         if(this.lrcarray[i-1][3][j][0]=="scaleX"){
                         lrc_now.style.transform += "scaleX("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.webkitTransform += "scaleX("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.oTransform += "scaleX("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.mozTransform += "scaleX("+ this.lrcarray[i-1][3][j][1] + ")";
                         }
                         if(this.lrcarray[i-1][3][j][0]=="scaleY"){
                         lrc_now.style.transform += "scaleY("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.webkitTransform += "scaleY("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.oTransform += "scaleY("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.mozTransform += "scaleY("+ this.lrcarray[i-1][3][j][1] + ")";
                         }
                         if(this.lrcarray[i-1][3][j][0]=="scaleZ"){
                         lrc_now.style.transform += "scaleZ("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.webkitTransform += "scaleZ("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.oTransform += "scaleZ("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.mozTransform += "scaleZ("+ this.lrcarray[i-1][3][j][1] + ")";
                         }
                         if(this.lrcarray[i-1][3][j][0]=="X"){
                             lrc_now.style.transform += "translateX("+ this.lrcarray[i-1][3][j][1] + ")";
                             lrc_now.style.webkitTransform += "translateX("+ this.lrcarray[i-1][3][j][1] + ")";
                             lrc_now.style.oTransform += "translateX("+ this.lrcarray[i-1][3][j][1] + ")";
                             lrc_now.style.mozTransform += "translateX("+ this.lrcarray[i-1][3][j][1] + ")";
                         }
                         if(this.lrcarray[i-1][3][j][0]=="Y"){
                         lrc_now.style.transform += "translateY("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.webkitTransform += "translateY("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.oTransform += "translateY("+ this.lrcarray[i-1][3][j][1] + ")";
                         lrc_now.style.mozTransform += "translateY("+ this.lrcarray[i-1][3][j][1] + ")";
                         }
                         if(this.lrcarray[i-1][3][j][0]=="rotateX"){
                         lrc_now.style.transform +=" rotateX("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         lrc_now.style.webkitTransform +=  " rotateX("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         lrc_now.style.oTransform += " rotateX("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         lrc_now.style.mozTransform += " rotateX("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         };
                         if(this.lrcarray[i-1][3][j][0]=="rotateY"){
                         lrc_now.style.transform +=  " rotateY("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         lrc_now.style.webkitTransform +=  " rotateY("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         lrc_now.style.oTransform +=  " rotateY("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         lrc_now.style.mozTransform += " rotateY("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         };
                         if(this.lrcarray[i-1][3][j][0]=="rotateZ"){
                         lrc_now.style.transform += " rotateZ("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         lrc_now.style.webkitTransform += " rotateZ("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         lrc_now.style.oTransform += " rotateZ("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         lrc_now.style.mozTransform += " rotateZ("+ this.lrcarray[i-1][3][j][1] + "deg)";
                         };
                            }
                        }*/

                        $(lrc_now).addClass("now");

                        if(this.lrcrollon){
                            this.lrcroll.style.transform = "translateY(-"+((67*i-(this.lrcparent.clientHeight/2.2))+lrcoverpx)+"px)"
                            this.lrcroll.style.webkitTransform = "translateY(-"+((67*i-(this.lrcparent.clientHeight/2.2))+lrcoverpx)+"px)";
                            this.lrcroll.style.oTransform = "translateY(-"+((67*i-(this.lrcparent.clientHeight/2.2))+lrcoverpx)+"px)";

                            //lrccontroller.style.top = (((49*i-(lyricContainer_div.clientHeight/2))+lrcoverpx) / lrcroll.clientHeight)*100 + "%";
                        }
                    }

                    this.lrclasttime=i;
                }


                break;

            }

        }
    };

    this.showlrc = function(){

        if(this.haslrc){
            Player.player.ontimeupdate =this.lrcupdate();
            setTimeout(function() {
                that.showlrc();
            },lrc.lrc_rate);
        }

    }

};













