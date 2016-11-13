/**
 * Created by lilei on 2015/12/2.
 */
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

!function(e,t){"use strict";function n(e,t){for(var n,i=[],r=0;r<e.length;++r){if(n=s[e[r]]||o(e[r]),!n)throw"module definition dependecy not found: "+e[r];i.push(n)}t.apply(null,i)}function i(e,i,r){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(i===t)throw"invalid module definition, dependencies must be specified";if(r===t)throw"invalid module definition, definition function must be specified";n(i,function(){s[e]=r.apply(null,arguments)})}function r(e){return!!s[e]}function o(t){for(var n=e,i=t.split(/[.\/]/),r=0;r<i.length;++r){if(!n[i[r]])return;n=n[i[r]]}return n}function a(n){for(var i=0;i<n.length;i++){for(var r=e,o=n[i],a=o.split(/[.\/]/),u=0;u<a.length-1;++u)r[a[u]]===t&&(r[a[u]]={}),r=r[a[u]];r[a[a.length-1]]=s[o]}}var s={},u="moxie/core/utils/Basic",c="moxie/core/I18n",l="moxie/core/utils/Mime",d="moxie/core/utils/Env",f="moxie/core/utils/Dom",p="moxie/core/Exceptions",h="moxie/core/EventTarget",m="moxie/core/utils/Encode",g="moxie/runtime/Runtime",v="moxie/runtime/RuntimeClient",y="moxie/file/Blob",w="moxie/file/File",E="moxie/file/FileInput",_="moxie/file/FileDrop",x="moxie/runtime/RuntimeTarget",R="moxie/file/FileReader",b="moxie/core/utils/Url",T="moxie/file/FileReaderSync",S="moxie/xhr/FormData",A="moxie/xhr/XMLHttpRequest",O="moxie/runtime/Transporter",I="moxie/image/Image",D="moxie/runtime/html5/Runtime",N="moxie/runtime/html5/file/Blob",L="moxie/core/utils/Events",M="moxie/runtime/html5/file/FileInput",C="moxie/runtime/html5/file/FileDrop",F="moxie/runtime/html5/file/FileReader",H="moxie/runtime/html5/xhr/XMLHttpRequest",P="moxie/runtime/html5/utils/BinaryReader",k="moxie/runtime/html5/image/JPEGHeaders",U="moxie/runtime/html5/image/ExifParser",B="moxie/runtime/html5/image/JPEG",z="moxie/runtime/html5/image/PNG",G="moxie/runtime/html5/image/ImageInfo",q="moxie/runtime/html5/image/MegaPixel",X="moxie/runtime/html5/image/Image",j="moxie/runtime/flash/Runtime",V="moxie/runtime/flash/file/Blob",W="moxie/runtime/flash/file/FileInput",Y="moxie/runtime/flash/file/FileReader",$="moxie/runtime/flash/file/FileReaderSync",J="moxie/runtime/flash/xhr/XMLHttpRequest",Z="moxie/runtime/flash/runtime/Transporter",K="moxie/runtime/flash/image/Image",Q="moxie/runtime/silverlight/Runtime",et="moxie/runtime/silverlight/file/Blob",tt="moxie/runtime/silverlight/file/FileInput",nt="moxie/runtime/silverlight/file/FileDrop",it="moxie/runtime/silverlight/file/FileReader",rt="moxie/runtime/silverlight/file/FileReaderSync",ot="moxie/runtime/silverlight/xhr/XMLHttpRequest",at="moxie/runtime/silverlight/runtime/Transporter",st="moxie/runtime/silverlight/image/Image",ut="moxie/runtime/html4/Runtime",ct="moxie/runtime/html4/file/FileInput",lt="moxie/runtime/html4/file/FileReader",dt="moxie/runtime/html4/xhr/XMLHttpRequest",ft="moxie/runtime/html4/image/Image";i(u,[],function(){var e=function(e){var t;return e===t?"undefined":null===e?"null":e.nodeType?"node":{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},t=function(i){var r;return n(arguments,function(o,s){s>0&&n(o,function(n,o){n!==r&&(e(i[o])===e(n)&&~a(e(n),["array","object"])?t(i[o],n):i[o]=n)})}),i},n=function(e,t){var n,i,r,o;if(e){try{n=e.length}catch(a){n=o}if(n===o){for(i in e)if(e.hasOwnProperty(i)&&t(e[i],i)===!1)return}else for(r=0;n>r;r++)if(t(e[r],r)===!1)return}},i=function(t){var n;if(!t||"object"!==e(t))return!0;for(n in t)return!1;return!0},r=function(t,n){function i(r){"function"===e(t[r])&&t[r](function(e){++r<o&&!e?i(r):n(e)})}var r=0,o=t.length;"function"!==e(n)&&(n=function(){}),t&&t.length||n(),i(r)},o=function(e,t){var i=0,r=e.length,o=new Array(r);n(e,function(e,n){e(function(e){if(e)return t(e);var a=[].slice.call(arguments);a.shift(),o[n]=a,i++,i===r&&(o.unshift(null),t.apply(this,o))})})},a=function(e,t){if(t){if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e);for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n}return-1},s=function(t,n){var i=[];"array"!==e(t)&&(t=[t]),"array"!==e(n)&&(n=[n]);for(var r in t)-1===a(t[r],n)&&i.push(t[r]);return i.length?i:!1},u=function(e,t){var i=[];return n(e,function(e){-1!==a(e,t)&&i.push(e)}),i.length?i:null},c=function(e){var t,n=[];for(t=0;t<e.length;t++)n[t]=e[t];return n},l=function(){var e=0;return function(t){var n=(new Date).getTime().toString(32),i;for(i=0;5>i;i++)n+=Math.floor(65535*Math.random()).toString(32);return(t||"o_")+n+(e++).toString(32)}}(),d=function(e){return e?String.prototype.trim?String.prototype.trim.call(e):e.toString().replace(/^\s*/,"").replace(/\s*$/,""):e},f=function(e){if("string"!=typeof e)return e;var t={t:1099511627776,g:1073741824,m:1048576,k:1024},n;return e=/^([0-9]+)([mgk]?)$/.exec(e.toLowerCase().replace(/[^0-9mkg]/g,"")),n=e[2],e=+e[1],t.hasOwnProperty(n)&&(e*=t[n]),e};return{guid:l,typeOf:e,extend:t,each:n,isEmptyObj:i,inSeries:r,inParallel:o,inArray:a,arrayDiff:s,arrayIntersect:u,toArray:c,trim:d,parseSizeStr:f}}),i(c,[u],function(e){var t={};return{addI18n:function(n){return e.extend(t,n)},translate:function(e){return t[e]||e},_:function(e){return this.translate(e)},sprintf:function(t){var n=[].slice.call(arguments,1);return t.replace(/%[a-z]/g,function(){var t=n.shift();return"undefined"!==e.typeOf(t)?t:""})}}}),i(l,[u,c],function(e,t){var n="application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",i={mimes:{},extensions:{},addMimeType:function(e){var t=e.split(/,/),n,i,r;for(n=0;n<t.length;n+=2){for(r=t[n+1].split(/ /),i=0;i<r.length;i++)this.mimes[r[i]]=t[n];this.extensions[t[n]]=r}},extList2mimes:function(t,n){var i=this,r,o,a,s,u=[];for(o=0;o<t.length;o++)for(r=t[o].extensions.split(/\s*,\s*/),a=0;a<r.length;a++){if("*"===r[a])return[];if(s=i.mimes[r[a]])-1===e.inArray(s,u)&&u.push(s);else{if(!n||!/^\w+$/.test(r[a]))return[];u.push("."+r[a])}}return u},mimes2exts:function(t){var n=this,i=[];return e.each(t,function(t){if("*"===t)return i=[],!1;var r=t.match(/^(\w+)\/(\*|\w+)$/);r&&("*"===r[2]?e.each(n.extensions,function(e,t){new RegExp("^"+r[1]+"/").test(t)&&[].push.apply(i,n.extensions[t])}):n.extensions[t]&&[].push.apply(i,n.extensions[t]))}),i},mimes2extList:function(n){var i=[],r=[];return"string"===e.typeOf(n)&&(n=e.trim(n).split(/\s*,\s*/)),r=this.mimes2exts(n),i.push({title:t.translate("Files"),extensions:r.length?r.join(","):"*"}),i.mimes=n,i},getFileExtension:function(e){var t=e&&e.match(/\.([^.]+)$/);return t?t[1].toLowerCase():""},getFileMime:function(e){return this.mimes[this.getFileExtension(e)]||""}};return i.addMimeType(n),i}),i(d,[u],function(e){function t(e,t,n){var i=0,r=0,o=0,a={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1},s=function(e){return e=(""+e).replace(/[_\-+]/g,"."),e=e.replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,"."),e.length?e.split("."):[-8]},u=function(e){return e?isNaN(e)?a[e]||-7:parseInt(e,10):0};for(e=s(e),t=s(t),r=Math.max(e.length,t.length),i=0;r>i;i++)if(e[i]!=t[i]){if(e[i]=u(e[i]),t[i]=u(t[i]),e[i]<t[i]){o=-1;break}if(e[i]>t[i]){o=1;break}}if(!n)return o;switch(n){case">":case"gt":return o>0;case">=":case"ge":return o>=0;case"<=":case"le":return 0>=o;case"==":case"=":case"eq":return 0===o;case"<>":case"!=":case"ne":return 0!==o;case"":case"<":case"lt":return 0>o;default:return null}}var n=function(e){var t="",n="?",i="function",r="undefined",o="object",a="major",s="model",u="name",c="type",l="vendor",d="version",f="architecture",p="console",h="mobile",m="tablet",g={has:function(e,t){return-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()}},v={rgx:function(){for(var t,n=0,a,s,u,c,l,d,f=arguments;n<f.length;n+=2){var p=f[n],h=f[n+1];if(typeof t===r){t={};for(u in h)c=h[u],typeof c===o?t[c[0]]=e:t[c]=e}for(a=s=0;a<p.length;a++)if(l=p[a].exec(this.getUA())){for(u=0;u<h.length;u++)d=l[++s],c=h[u],typeof c===o&&c.length>0?2==c.length?t[c[0]]=typeof c[1]==i?c[1].call(this,d):c[1]:3==c.length?t[c[0]]=typeof c[1]!==i||c[1].exec&&c[1].test?d?d.replace(c[1],c[2]):e:d?c[1].call(this,d,c[2]):e:4==c.length&&(t[c[0]]=d?c[3].call(this,d.replace(c[1],c[2])):e):t[c]=d?d:e;break}if(l)break}return t},str:function(t,i){for(var r in i)if(typeof i[r]===o&&i[r].length>0){for(var a=0;a<i[r].length;a++)if(g.has(i[r][a],t))return r===n?e:r}else if(g.has(i[r],t))return r===n?e:r;return t}},y={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",RT:"ARM"}}}},w={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[u,d,a],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[u,"Opera"],d,a],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],[u,d,a],[/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],[[u,"IE"],d,a],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[u,"Yandex"],d,a],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[u,/_/g," "],d,a],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],[u,d,a],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[u,"Dolphin"],d,a],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[u,"Chrome"],d,a],[/((?:android.+))version\/((\d+)?[\w\.]+)\smobile\ssafari/i],[[u,"Android Browser"],d,a],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[d,a,[u,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[d,a,u],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[u,[a,v.str,y.browser.oldsafari.major],[d,v.str,y.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[u,d,a],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[u,"Netscape"],d,a],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[u,d,a]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,d],[/rv\:([\w\.]+).*(gecko)/i],[d,u]],os:[[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[u,[d,v.str,y.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[d,v.str,y.os.windows.version]],[/\((bb)(10);/i],[[u,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)\/([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i],[u,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[u,"Symbian"],d],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"],d],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[u,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],d],[/(sunos)\s?([\w\.]+\d)*/i],[[u,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[u,d],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[u,"iOS"],[d,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],[u,[d,/_/g,"."]],[/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,/(unix)\s?([\w\.]+)*/i],[u,d]]},E=function(e){var n=e||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:t);this.getBrowser=function(){return v.rgx.apply(this,w.browser)},this.getEngine=function(){return v.rgx.apply(this,w.engine)},this.getOS=function(){return v.rgx.apply(this,w.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this.setUA(n)};return(new E).getResult()}(),i=function(){var t={define_property:function(){return!1}(),create_canvas:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}(),return_response_type:function(t){try{if(-1!==e.inArray(t,["","text","document"]))return!0;if(window.XMLHttpRequest){var n=new XMLHttpRequest;if(n.open("get","/"),"responseType"in n)return n.responseType=t,n.responseType!==t?!1:!0}}catch(i){}return!1},use_data_uri:function(){var e=new Image;return e.onload=function(){t.use_data_uri=1===e.width&&1===e.height},setTimeout(function(){e.src="data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},1),!1}(),use_data_uri_over32kb:function(){return t.use_data_uri&&("IE"!==r.browser||r.version>=9)},use_data_uri_of:function(e){return t.use_data_uri&&33e3>e||t.use_data_uri_over32kb()},use_fileinput:function(){var e=document.createElement("input");return e.setAttribute("type","file"),!e.disabled}};return function(n){var i=[].slice.call(arguments);return i.shift(),"function"===e.typeOf(t[n])?t[n].apply(this,i):!!t[n]}}(),r={can:i,browser:n.browser.name,version:parseFloat(n.browser.major),os:n.os.name,osVersion:n.os.version,verComp:t,swf_url:"../flash/Moxie.swf",xap_url:"../silverlight/Moxie.xap",global_event_dispatcher:"moxie.core.EventTarget.instance.dispatchEvent"};return r.OS=r.os,r}),i(f,[d],function(e){var t=function(e){return"string"!=typeof e?e:document.getElementById(e)},n=function(e,t){if(!e.className)return!1;var n=new RegExp("(^|\\s+)"+t+"(\\s+|$)");return n.test(e.className)},i=function(e,t){n(e,t)||(e.className=e.className?e.className.replace(/\s+$/,"")+" "+t:t)},r=function(e,t){if(e.className){var n=new RegExp("(^|\\s+)"+t+"(\\s+|$)");e.className=e.className.replace(n,function(e,t,n){return" "===t&&" "===n?" ":""})}},o=function(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null)[t]:void 0},a=function(t,n){function i(e){var t,n,i=0,r=0;return e&&(n=e.getBoundingClientRect(),t="CSS1Compat"===s.compatMode?s.documentElement:s.body,i=n.left+t.scrollLeft,r=n.top+t.scrollTop),{x:i,y:r}}var r=0,o=0,a,s=document,u,c;if(t=t,n=n||s.body,t&&t.getBoundingClientRect&&"IE"===e.browser&&(!s.documentMode||s.documentMode<8))return u=i(t),c=i(n),{x:u.x-c.x,y:u.y-c.y};for(a=t;a&&a!=n&&a.nodeType;)r+=a.offsetLeft||0,o+=a.offsetTop||0,a=a.offsetParent;for(a=t.parentNode;a&&a!=n&&a.nodeType;)r-=a.scrollLeft||0,o-=a.scrollTop||0,a=a.parentNode;return{x:r,y:o}},s=function(e){return{w:e.offsetWidth||e.clientWidth,h:e.offsetHeight||e.clientHeight}};return{get:t,hasClass:n,addClass:i,removeClass:r,getStyle:o,getPos:a,getSize:s}}),i(p,[u],function(e){function t(e,t){var n;for(n in e)if(e[n]===t)return n;return null}return{RuntimeError:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": RuntimeError "+this.code}var i={NOT_INIT_ERR:1,NOT_SUPPORTED_ERR:9,JS_ERR:4};return e.extend(n,i),n.prototype=Error.prototype,n}(),OperationNotAllowedException:function(){function t(e){this.code=e,this.name="OperationNotAllowedException"}return e.extend(t,{NOT_ALLOWED_ERR:1}),t.prototype=Error.prototype,t}(),ImageError:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": ImageError "+this.code}var i={WRONG_FORMAT:1,MAX_RESOLUTION_ERR:2};return e.extend(n,i),n.prototype=Error.prototype,n}(),FileException:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": FileException "+this.code}var i={NOT_FOUND_ERR:1,SECURITY_ERR:2,ABORT_ERR:3,NOT_READABLE_ERR:4,ENCODING_ERR:5,NO_MODIFICATION_ALLOWED_ERR:6,INVALID_STATE_ERR:7,SYNTAX_ERR:8};return e.extend(n,i),n.prototype=Error.prototype,n}(),DOMException:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": DOMException "+this.code}var i={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};return e.extend(n,i),n.prototype=Error.prototype,n}(),EventException:function(){function t(e){this.code=e,this.name="EventException"}return e.extend(t,{UNSPECIFIED_EVENT_TYPE_ERR:0}),t.prototype=Error.prototype,t}()}}),i(h,[p,u],function(e,t){function n(){var n={};t.extend(this,{uid:null,init:function(){this.uid||(this.uid=t.guid("uid_"))},addEventListener:function(e,i,r,o){var a=this,s;return e=t.trim(e),/\s/.test(e)?(t.each(e.split(/\s+/),function(e){a.addEventListener(e,i,r,o)}),void 0):(e=e.toLowerCase(),r=parseInt(r,10)||0,s=n[this.uid]&&n[this.uid][e]||[],s.push({fn:i,priority:r,scope:o||this}),n[this.uid]||(n[this.uid]={}),n[this.uid][e]=s,void 0)},hasEventListener:function(e){return e?!(!n[this.uid]||!n[this.uid][e]):!!n[this.uid]},removeEventListener:function(e,i){e=e.toLowerCase();var r=n[this.uid]&&n[this.uid][e],o;if(r){if(i){for(o=r.length-1;o>=0;o--)if(r[o].fn===i){r.splice(o,1);break}}else r=[];r.length||(delete n[this.uid][e],t.isEmptyObj(n[this.uid])&&delete n[this.uid])}},removeAllEventListeners:function(){n[this.uid]&&delete n[this.uid]},dispatchEvent:function(i){var r,o,a,s,u={},c=!0,l;if("string"!==t.typeOf(i)){if(s=i,"string"!==t.typeOf(s.type))throw new e.EventException(e.EventException.UNSPECIFIED_EVENT_TYPE_ERR);i=s.type,s.total!==l&&s.loaded!==l&&(u.total=s.total,u.loaded=s.loaded),u.async=s.async||!1}if(-1!==i.indexOf("::")?function(e){r=e[0],i=e[1]}(i.split("::")):r=this.uid,i=i.toLowerCase(),o=n[r]&&n[r][i]){o.sort(function(e,t){return t.priority-e.priority}),a=[].slice.call(arguments),a.shift(),u.type=i,a.unshift(u);var d=[];t.each(o,function(e){a[0].target=e.scope,u.async?d.push(function(t){setTimeout(function(){t(e.fn.apply(e.scope,a)===!1)},1)}):d.push(function(t){t(e.fn.apply(e.scope,a)===!1)})}),d.length&&t.inSeries(d,function(e){c=!e})}return c},bind:function(){this.addEventListener.apply(this,arguments)},unbind:function(){this.removeEventListener.apply(this,arguments)},unbindAll:function(){this.removeAllEventListeners.apply(this,arguments)},trigger:function(){return this.dispatchEvent.apply(this,arguments)},convertEventPropsToHandlers:function(e){var n;"array"!==t.typeOf(e)&&(e=[e]);for(var i=0;i<e.length;i++)n="on"+e[i],"function"===t.typeOf(this[n])?this.addEventListener(e[i],this[n]):"undefined"===t.typeOf(this[n])&&(this[n]=null)}})}return n.instance=new n,n}),i(m,[],function(){var e=function(e){return unescape(encodeURIComponent(e))},t=function(e){return decodeURIComponent(escape(e))},n=function(e,n){if("function"==typeof window.atob)return n?t(window.atob(e)):window.atob(e);var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,o,a,s,u,c,l,d,f=0,p=0,h="",m=[];if(!e)return e;e+="";do s=i.indexOf(e.charAt(f++)),u=i.indexOf(e.charAt(f++)),c=i.indexOf(e.charAt(f++)),l=i.indexOf(e.charAt(f++)),d=s<<18|u<<12|c<<6|l,r=255&d>>16,o=255&d>>8,a=255&d,m[p++]=64==c?String.fromCharCode(r):64==l?String.fromCharCode(r,o):String.fromCharCode(r,o,a);while(f<e.length);return h=m.join(""),n?t(h):h},i=function(t,n){if(n&&e(t),"function"==typeof window.btoa)return window.btoa(t);var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,o,a,s,u,c,l,d,f=0,p=0,h="",m=[];if(!t)return t;do r=t.charCodeAt(f++),o=t.charCodeAt(f++),a=t.charCodeAt(f++),d=r<<16|o<<8|a,s=63&d>>18,u=63&d>>12,c=63&d>>6,l=63&d,m[p++]=i.charAt(s)+i.charAt(u)+i.charAt(c)+i.charAt(l);while(f<t.length);h=m.join("");var g=t.length%3;return(g?h.slice(0,g-3):h)+"===".slice(g||3)};return{utf8_encode:e,utf8_decode:t,atob:n,btoa:i}}),i(g,[u,f,h],function(e,t,n){function i(n,r,a,s,u){var c=this,l,d=e.guid(r+"_"),f=u||"browser";n=n||{},o[d]=this,a=e.extend({access_binary:!1,access_image_binary:!1,display_media:!1,do_cors:!1,drag_and_drop:!1,filter_by_extension:!0,resize_image:!1,report_upload_progress:!1,return_response_headers:!1,return_response_type:!1,return_status_code:!0,send_custom_headers:!1,select_file:!1,select_folder:!1,select_multiple:!0,send_binary_string:!1,send_browser_cookies:!0,send_multipart:!0,slice_blob:!1,stream_upload:!1,summon_file_dialog:!1,upload_filesize:!0,use_http_method:!0},a),n.preferred_caps&&(f=i.getMode(s,n.preferred_caps,f)),l=function(){var t={};return{exec:function(e,n,i,r){return l[n]&&(t[e]||(t[e]={context:this,instance:new l[n]}),t[e].instance[i])?t[e].instance[i].apply(this,r):void 0},removeInstance:function(e){delete t[e]},removeAllInstances:function(){var n=this;e.each(t,function(t,i){"function"===e.typeOf(t.instance.destroy)&&t.instance.destroy.call(t.context),n.removeInstance(i)})}}}(),e.extend(this,{initialized:!1,uid:d,type:r,mode:i.getMode(s,n.required_caps,f),shimid:d+"_container",clients:0,options:n,can:function(t,n){var r=arguments[2]||a;if("string"===e.typeOf(t)&&"undefined"===e.typeOf(n)&&(t=i.parseCaps(t)),"object"===e.typeOf(t)){for(var o in t)if(!this.can(o,t[o],r))return!1;return!0}return"function"===e.typeOf(r[t])?r[t].call(this,n):n===r[t]},getShimContainer:function(){var n,i=t.get(this.shimid);return i||(n=this.options.container?t.get(this.options.container):document.body,i=document.createElement("div"),i.id=this.shimid,i.className="moxie-shim moxie-shim-"+this.type,e.extend(i.style,{position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"}),n.appendChild(i),n=null),i},getShim:function(){return l},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec.call(this,this.uid,e,t,n)},exec:function(e,t){var n=[].slice.call(arguments,2);return c[e]&&c[e][t]?c[e][t].apply(this,n):c.shimExec.apply(this,arguments)},destroy:function(){if(c){var e=t.get(this.shimid);e&&e.parentNode.removeChild(e),l&&l.removeAllInstances(),this.unbindAll(),delete o[this.uid],this.uid=null,d=c=l=e=null}}}),this.mode&&n.required_caps&&!this.can(n.required_caps)&&(this.mode=!1)}var r={},o={};return i.order="html5,flash,silverlight,html4",i.getRuntime=function(e){return o[e]?o[e]:!1},i.addConstructor=function(e,t){t.prototype=n.instance,r[e]=t},i.getConstructor=function(e){return r[e]||null},i.getInfo=function(e){var t=i.getRuntime(e);return t?{uid:t.uid,type:t.type,mode:t.mode,can:function(){return t.can.apply(t,arguments)}}:null},i.parseCaps=function(t){var n={};return"string"!==e.typeOf(t)?t||{}:(e.each(t.split(","),function(e){n[e]=!0}),n)},i.can=function(e,t){var n,r=i.getConstructor(e),o;return r?(n=new r({required_caps:t}),o=n.mode,n.destroy(),!!o):!1},i.thatCan=function(e,t){var n=(t||i.order).split(/\s*,\s*/);for(var r in n)if(i.can(n[r],e))return n[r];return null},i.getMode=function(t,n,i){var r=null;if("undefined"===e.typeOf(i)&&(i="browser"),n&&!e.isEmptyObj(t)){if(e.each(n,function(n,i){if(t.hasOwnProperty(i)){var o=t[i](n);if("string"==typeof o&&(o=[o]),r){if(!(r=e.arrayIntersect(r,o)))return r=!1}else r=o}}),r)return-1!==e.inArray(i,r)?i:r[0];if(r===!1)return!1}return i},i.capTrue=function(){return!0},i.capFalse=function(){return!1},i.capTest=function(e){return function(){return!!e}},i}),i(v,[p,u,g],function(e,t,n){return function i(){var i;t.extend(this,{connectRuntime:function(r){function o(t){var s,u;return t.length?(s=t.shift(),(u=n.getConstructor(s))?(i=new u(r),i.bind("Init",function(){i.initialized=!0,setTimeout(function(){i.clients++,a.trigger("RuntimeInit",i)},1)}),i.bind("Error",function(){i.destroy(),o(t)}),i.mode?(i.init(),void 0):(i.trigger("Error"),void 0)):(o(t),void 0)):(a.trigger("RuntimeError",new e.RuntimeError(e.RuntimeError.NOT_INIT_ERR)),i=null,void 0)}var a=this,s;if("string"===t.typeOf(r)?s=r:"string"===t.typeOf(r.ruid)&&(s=r.ruid),s){if(i=n.getRuntime(s))return i.clients++,i;throw new e.RuntimeError(e.RuntimeError.NOT_INIT_ERR)}o((r.runtime_order||n.order).split(/\s*,\s*/))},getRuntime:function(){return i&&i.uid?i:(i=null,null)},disconnectRuntime:function(){i&&--i.clients<=0&&(i.destroy(),i=null)}})}}),i(y,[u,m,v],function(e,t,n){function i(o,a){function s(t,n,o){var a,s=r[this.uid];return"string"===e.typeOf(s)&&s.length?(a=new i(null,{type:o,size:n-t}),a.detach(s.substr(t,a.size)),a):null}n.call(this),o&&this.connectRuntime(o),a?"string"===e.typeOf(a)&&(a={data:a}):a={},e.extend(this,{uid:a.uid||e.guid("uid_"),ruid:o,size:a.size||0,type:a.type||"",slice:function(e,t,n){return this.isDetached()?s.apply(this,arguments):this.getRuntime().exec.call(this,"Blob","slice",this.getSource(),e,t,n)},getSource:function(){return r[this.uid]?r[this.uid]:null},detach:function(e){this.ruid&&(this.getRuntime().exec.call(this,"Blob","destroy",r[this.uid]),this.disconnectRuntime(),this.ruid=null),e=e||"";var n=e.match(/^data:([^;]*);base64,/);n&&(this.type=n[1],e=t.atob(e.substring(e.indexOf("base64,")+7))),this.size=e.length,r[this.uid]=e},isDetached:function(){return!this.ruid&&"string"===e.typeOf(r[this.uid])},destroy:function(){this.detach(),delete r[this.uid]}}),a.data?this.detach(a.data):r[this.uid]=a}var r={};return i}),i(w,[u,l,y],function(e,t,n){function i(i,r){var o,a;if(r||(r={}),a=r.type&&""!==r.type?r.type:t.getFileMime(r.name),r.name)o=r.name.replace(/\\/g,"/"),o=o.substr(o.lastIndexOf("/")+1);else{var s=a.split("/")[0];o=e.guid((""!==s?s:"file")+"_"),t.extensions[a]&&(o+="."+t.extensions[a][0])}n.apply(this,arguments),e.extend(this,{type:a||"",name:o||e.guid("file_"),lastModifiedDate:r.lastModifiedDate||(new Date).toLocaleString()})}return i.prototype=n.prototype,i}),i(E,[u,l,f,p,h,c,w,g,v],function(e,t,n,i,r,o,a,s,u){function c(r){var c=this,d,f,p;if(-1!==e.inArray(e.typeOf(r),["string","node"])&&(r={browse_button:r}),f=n.get(r.browse_button),!f)throw new i.DOMException(i.DOMException.NOT_FOUND_ERR);p={accept:[{title:o.translate("All Files"),extensions:"*"}],name:"file",multiple:!1,required_caps:!1,container:f.parentNode||document.body},r=e.extend({},p,r),"string"==typeof r.required_caps&&(r.required_caps=s.parseCaps(r.required_caps)),"string"==typeof r.accept&&(r.accept=t.mimes2extList(r.accept)),d=n.get(r.container),d||(d=document.body),"static"===n.getStyle(d,"position")&&(d.style.position="relative"),d=f=null,u.call(c),e.extend(c,{uid:e.guid("uid_"),ruid:null,shimid:null,files:null,init:function(){c.convertEventPropsToHandlers(l),c.bind("RuntimeInit",function(t,i){c.ruid=i.uid,c.shimid=i.shimid,c.bind("Ready",function(){c.trigger("Refresh")},999),c.bind("Change",function(){var t=i.exec.call(c,"FileInput","getFiles");c.files=[],e.each(t,function(e){return 0===e.size?!0:(c.files.push(new a(c.ruid,e)),void 0)})},999),c.bind("Refresh",function(){var t,o,a,s;a=n.get(r.browse_button),s=n.get(i.shimid),a&&(t=n.getPos(a,n.get(r.container)),o=n.getSize(a),s&&e.extend(s.style,{top:t.y+"px",left:t.x+"px",width:o.w+"px",height:o.h+"px"})),s=a=null}),i.exec.call(c,"FileInput","init",r)}),c.connectRuntime(e.extend({},r,{required_caps:{select_file:!0}}))},disable:function(t){var n=this.getRuntime();n&&n.exec.call(this,"FileInput","disable","undefined"===e.typeOf(t)?!0:t)},refresh:function(){c.trigger("Refresh")},destroy:function(){var t=this.getRuntime();t&&(t.exec.call(this,"FileInput","destroy"),this.disconnectRuntime()),"array"===e.typeOf(this.files)&&e.each(this.files,function(e){e.destroy()}),this.files=null}})}var l=["ready","change","cancel","mouseenter","mouseleave","mousedown","mouseup"];return c.prototype=r.instance,c}),i(_,[c,f,p,u,w,v,h,l],function(e,t,n,i,r,o,a,s){function u(n){var a=this,u;"string"==typeof n&&(n={drop_zone:n}),u={accept:[{title:e.translate("All Files"),extensions:"*"}],required_caps:{drag_and_drop:!0}},n="object"==typeof n?i.extend({},u,n):u,n.container=t.get(n.drop_zone)||document.body,"static"===t.getStyle(n.container,"position")&&(n.container.style.position="relative"),"string"==typeof n.accept&&(n.accept=s.mimes2extList(n.accept)),o.call(a),i.extend(a,{uid:i.guid("uid_"),ruid:null,files:null,init:function(){a.convertEventPropsToHandlers(c),a.bind("RuntimeInit",function(e,t){a.ruid=t.uid,a.bind("Drop",function(){var e=t.exec.call(a,"FileDrop","getFiles");a.files=[],i.each(e,function(e){a.files.push(new r(a.ruid,e))})},999),t.exec.call(a,"FileDrop","init",n),a.dispatchEvent("ready")}),a.connectRuntime(n)},destroy:function(){var e=this.getRuntime();e&&(e.exec.call(this,"FileDrop","destroy"),this.disconnectRuntime()),this.files=null}})}var c=["ready","dragenter","dragleave","drop","error"];return u.prototype=a.instance,u}),i(x,[u,v,h],function(e,t,n){function i(){this.uid=e.guid("uid_"),t.call(this),this.destroy=function(){this.disconnectRuntime(),this.unbindAll()}}return i.prototype=n.instance,i}),i(R,[u,m,p,h,y,w,x],function(e,t,n,i,r,o,a){function s(){function i(e,i){function l(e){o.readyState=s.DONE,o.error=e,o.trigger("error"),d()}function d(){c.destroy(),c=null,o.trigger("loadend")}function f(t){c.bind("Error",function(e,t){l(t)}),c.bind("Progress",function(e){o.result=t.exec.call(c,"FileReader","getResult"),o.trigger(e)}),c.bind("Load",function(e){o.readyState=s.DONE,o.result=t.exec.call(c,"FileReader","getResult"),o.trigger(e),d()}),t.exec.call(c,"FileReader","read",e,i)}if(c=new a,this.convertEventPropsToHandlers(u),this.readyState===s.LOADING)return l(new n.DOMException(n.DOMException.INVALID_STATE_ERR));if(this.readyState=s.LOADING,this.trigger("loadstart"),i instanceof r)if(i.isDetached()){var p=i.getSource();switch(e){case"readAsText":case"readAsBinaryString":this.result=p;break;case"readAsDataURL":this.result="data:"+i.type+";base64,"+t.btoa(p)}this.readyState=s.DONE,this.trigger("load"),d()}else f(c.connectRuntime(i.ruid));else l(new n.DOMException(n.DOMException.NOT_FOUND_ERR))}var o=this,c;e.extend(this,{uid:e.guid("uid_"),readyState:s.EMPTY,result:null,error:null,readAsBinaryString:function(e){i.call(this,"readAsBinaryString",e)},readAsDataURL:function(e){i.call(this,"readAsDataURL",e)},readAsText:function(e){i.call(this,"readAsText",e)
},abort:function(){this.result=null,-1===e.inArray(this.readyState,[s.EMPTY,s.DONE])&&(this.readyState===s.LOADING&&(this.readyState=s.DONE),c&&c.getRuntime().exec.call(this,"FileReader","abort"),this.trigger("abort"),this.trigger("loadend"))},destroy:function(){this.abort(),c&&(c.getRuntime().exec.call(this,"FileReader","destroy"),c.disconnectRuntime()),o=c=null}})}var u=["loadstart","progress","load","abort","error","loadend"];return s.EMPTY=0,s.LOADING=1,s.DONE=2,s.prototype=i.instance,s}),i(b,[],function(){var e=function(t,n){for(var i=["source","scheme","authority","userInfo","user","pass","host","port","relative","path","directory","file","query","fragment"],r=i.length,o={http:80,https:443},a={},s=/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,u=s.exec(t||"");r--;)u[r]&&(a[i[r]]=u[r]);if(!a.scheme){n&&"string"!=typeof n||(n=e(n||document.location.href)),a.scheme=n.scheme,a.host=n.host,a.port=n.port;var c="";/^[^\/]/.test(a.path)&&(c=n.path,/(\/|\/[^\.]+)$/.test(c)?c+="/":c=c.replace(/\/[^\/]+$/,"/")),a.path=c+(a.path||"")}return a.port||(a.port=o[a.scheme]||80),a.port=parseInt(a.port,10),a.path||(a.path="/"),delete a.source,a},t=function(t){var n={http:80,https:443},i=e(t);return i.scheme+"://"+i.host+(i.port!==n[i.scheme]?":"+i.port:"")+i.path+(i.query?i.query:"")},n=function(t){function n(e){return[e.scheme,e.host,e.port].join("/")}return"string"==typeof t&&(t=e(t)),n(e())===n(t)};return{parseUrl:e,resolveUrl:t,hasSameOrigin:n}}),i(T,[u,v,m],function(e,t,n){return function(){function i(e,t){if(!t.isDetached()){var i=this.connectRuntime(t.ruid).exec.call(this,"FileReaderSync","read",e,t);return this.disconnectRuntime(),i}var r=t.getSource();switch(e){case"readAsBinaryString":return r;case"readAsDataURL":return"data:"+t.type+";base64,"+n.btoa(r);case"readAsText":for(var o="",a=0,s=r.length;s>a;a++)o+=String.fromCharCode(r[a]);return o}}t.call(this),e.extend(this,{uid:e.guid("uid_"),readAsBinaryString:function(e){return i.call(this,"readAsBinaryString",e)},readAsDataURL:function(e){return i.call(this,"readAsDataURL",e)},readAsText:function(e){return i.call(this,"readAsText",e)}})}}),i(S,[p,u,y],function(e,t,n){function i(){var e,i=[];t.extend(this,{append:function(r,o){var a=this,s=t.typeOf(o);o instanceof n?e={name:r,value:o}:"array"===s?(r+="[]",t.each(o,function(e){a.append(r,e)})):"object"===s?t.each(o,function(e,t){a.append(r+"["+t+"]",e)}):"null"===s||"undefined"===s||"number"===s&&isNaN(o)?a.append(r,"false"):i.push({name:r,value:o.toString()})},hasBlob:function(){return!!this.getBlob()},getBlob:function(){return e&&e.value||null},getBlobName:function(){return e&&e.name||null},each:function(n){t.each(i,function(e){n(e.value,e.name)}),e&&n(e.value,e.name)},destroy:function(){e=null,i=[]}})}return i}),i(A,[u,p,h,m,b,g,x,y,T,S,d,l],function(e,t,n,i,r,o,a,s,u,c,l,d){function f(){this.uid=e.guid("uid_")}function p(){function n(e,t){return y.hasOwnProperty(e)?1===arguments.length?l.can("define_property")?y[e]:v[e]:(l.can("define_property")?y[e]=t:v[e]=t,void 0):void 0}function u(t){function i(){k.destroy(),k=null,s.dispatchEvent("loadend"),s=null}function r(r){k.bind("LoadStart",function(e){n("readyState",p.LOADING),s.dispatchEvent("readystatechange"),s.dispatchEvent(e),I&&s.upload.dispatchEvent(e)}),k.bind("Progress",function(e){n("readyState")!==p.LOADING&&(n("readyState",p.LOADING),s.dispatchEvent("readystatechange")),s.dispatchEvent(e)}),k.bind("UploadProgress",function(e){I&&s.upload.dispatchEvent({type:"progress",lengthComputable:!1,total:e.total,loaded:e.loaded})}),k.bind("Load",function(t){n("readyState",p.DONE),n("status",Number(r.exec.call(k,"XMLHttpRequest","getStatus")||0)),n("statusText",h[n("status")]||""),n("response",r.exec.call(k,"XMLHttpRequest","getResponse",n("responseType"))),~e.inArray(n("responseType"),["text",""])?n("responseText",n("response")):"document"===n("responseType")&&n("responseXML",n("response")),U=r.exec.call(k,"XMLHttpRequest","getAllResponseHeaders"),s.dispatchEvent("readystatechange"),n("status")>0?(I&&s.upload.dispatchEvent(t),s.dispatchEvent(t)):(N=!0,s.dispatchEvent("error")),i()}),k.bind("Abort",function(e){s.dispatchEvent(e),i()}),k.bind("Error",function(e){N=!0,n("readyState",p.DONE),s.dispatchEvent("readystatechange"),D=!0,s.dispatchEvent(e),i()}),r.exec.call(k,"XMLHttpRequest","send",{url:E,method:_,async:w,user:R,password:b,headers:x,mimeType:S,encoding:T,responseType:s.responseType,withCredentials:s.withCredentials,options:P},t)}var s=this;M=(new Date).getTime(),k=new a,"string"==typeof P.required_caps&&(P.required_caps=o.parseCaps(P.required_caps)),P.required_caps=e.extend({},P.required_caps,{return_response_type:s.responseType}),t instanceof c&&(P.required_caps.send_multipart=!0),L||(P.required_caps.do_cors=!0),P.ruid?r(k.connectRuntime(P)):(k.bind("RuntimeInit",function(e,t){r(t)}),k.bind("RuntimeError",function(e,t){s.dispatchEvent("RuntimeError",t)}),k.connectRuntime(P))}function g(){n("responseText",""),n("responseXML",null),n("response",null),n("status",0),n("statusText",""),M=C=null}var v=this,y={timeout:0,readyState:p.UNSENT,withCredentials:!1,status:0,statusText:"",responseType:"",responseXML:null,responseText:null,response:null},w=!0,E,_,x={},R,b,T=null,S=null,A=!1,O=!1,I=!1,D=!1,N=!1,L=!1,M,C,F=null,H=null,P={},k,U="",B;e.extend(this,y,{uid:e.guid("uid_"),upload:new f,open:function(o,a,s,u,c){var l;if(!o||!a)throw new t.DOMException(t.DOMException.SYNTAX_ERR);if(/[\u0100-\uffff]/.test(o)||i.utf8_encode(o)!==o)throw new t.DOMException(t.DOMException.SYNTAX_ERR);if(~e.inArray(o.toUpperCase(),["CONNECT","DELETE","GET","HEAD","OPTIONS","POST","PUT","TRACE","TRACK"])&&(_=o.toUpperCase()),~e.inArray(_,["CONNECT","TRACE","TRACK"]))throw new t.DOMException(t.DOMException.SECURITY_ERR);if(a=i.utf8_encode(a),l=r.parseUrl(a),L=r.hasSameOrigin(l),E=r.resolveUrl(a),(u||c)&&!L)throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);if(R=u||l.user,b=c||l.pass,w=s||!0,w===!1&&(n("timeout")||n("withCredentials")||""!==n("responseType")))throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);A=!w,O=!1,x={},g.call(this),n("readyState",p.OPENED),this.convertEventPropsToHandlers(["readystatechange"]),this.dispatchEvent("readystatechange")},setRequestHeader:function(r,o){var a=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"];if(n("readyState")!==p.OPENED||O)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(/[\u0100-\uffff]/.test(r)||i.utf8_encode(r)!==r)throw new t.DOMException(t.DOMException.SYNTAX_ERR);return r=e.trim(r).toLowerCase(),~e.inArray(r,a)||/^(proxy\-|sec\-)/.test(r)?!1:(x[r]?x[r]+=", "+o:x[r]=o,!0)},getAllResponseHeaders:function(){return U||""},getResponseHeader:function(t){return t=t.toLowerCase(),N||~e.inArray(t,["set-cookie","set-cookie2"])?null:U&&""!==U&&(B||(B={},e.each(U.split(/\r\n/),function(t){var n=t.split(/:\s+/);2===n.length&&(n[0]=e.trim(n[0]),B[n[0].toLowerCase()]={header:n[0],value:e.trim(n[1])})})),B.hasOwnProperty(t))?B[t].header+": "+B[t].value:null},overrideMimeType:function(i){var r,o;if(~e.inArray(n("readyState"),[p.LOADING,p.DONE]))throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(i=e.trim(i.toLowerCase()),/;/.test(i)&&(r=i.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))&&(i=r[1],r[2]&&(o=r[2])),!d.mimes[i])throw new t.DOMException(t.DOMException.SYNTAX_ERR);F=i,H=o},send:function(n,r){if(P="string"===e.typeOf(r)?{ruid:r}:r?r:{},this.convertEventPropsToHandlers(m),this.upload.convertEventPropsToHandlers(m),this.readyState!==p.OPENED||O)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(n instanceof s)P.ruid=n.ruid,S=n.type||"application/octet-stream";else if(n instanceof c){if(n.hasBlob()){var o=n.getBlob();P.ruid=o.ruid,S=o.type||"application/octet-stream"}}else"string"==typeof n&&(T="UTF-8",S="text/plain;charset=UTF-8",n=i.utf8_encode(n));this.withCredentials||(this.withCredentials=P.required_caps&&P.required_caps.send_browser_cookies&&!L),I=!A&&this.upload.hasEventListener(),N=!1,D=!n,A||(O=!0),u.call(this,n)},abort:function(){if(N=!0,A=!1,~e.inArray(n("readyState"),[p.UNSENT,p.OPENED,p.DONE]))n("readyState",p.UNSENT);else{if(n("readyState",p.DONE),O=!1,!k)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);k.getRuntime().exec.call(k,"XMLHttpRequest","abort",D),D=!0}},destroy:function(){k&&("function"===e.typeOf(k.destroy)&&k.destroy(),k=null),this.unbindAll(),this.upload&&(this.upload.unbindAll(),this.upload=null)}})}var h={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Reserved",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",510:"Not Extended"};f.prototype=n.instance;var m=["loadstart","progress","abort","error","load","timeout","loadend"],g=1,v=2;return p.UNSENT=0,p.OPENED=1,p.HEADERS_RECEIVED=2,p.LOADING=3,p.DONE=4,p.prototype=n.instance,p}),i(O,[u,m,v,h],function(e,t,n,i){function r(){function i(){l=d=0,c=this.result=null}function o(t,n){var i=this;u=n,i.bind("TransportingProgress",function(t){d=t.loaded,l>d&&-1===e.inArray(i.state,[r.IDLE,r.DONE])&&a.call(i)},999),i.bind("TransportingComplete",function(){d=l,i.state=r.DONE,c=null,i.result=u.exec.call(i,"Transporter","getAsBlob",t||"")},999),i.state=r.BUSY,i.trigger("TransportingStarted"),a.call(i)}function a(){var e=this,n,i=l-d;f>i&&(f=i),n=t.btoa(c.substr(d,f)),u.exec.call(e,"Transporter","receive",n,l)}var s,u,c,l,d,f;n.call(this),e.extend(this,{uid:e.guid("uid_"),state:r.IDLE,result:null,transport:function(t,n,r){var a=this;if(r=e.extend({chunk_size:204798},r),(s=r.chunk_size%3)&&(r.chunk_size+=3-s),f=r.chunk_size,i.call(this),c=t,l=t.length,"string"===e.typeOf(r)||r.ruid)o.call(a,n,this.connectRuntime(r));else{var u=function(e,t){a.unbind("RuntimeInit",u),o.call(a,n,t)};this.bind("RuntimeInit",u),this.connectRuntime(r)}},abort:function(){var e=this;e.state=r.IDLE,u&&(u.exec.call(e,"Transporter","clear"),e.trigger("TransportingAborted")),i.call(e)},destroy:function(){this.unbindAll(),u=null,this.disconnectRuntime(),i.call(this)}})}return r.IDLE=0,r.BUSY=1,r.DONE=2,r.prototype=i.instance,r}),i(I,[u,f,p,T,A,g,v,O,d,h,y,w,m],function(e,t,n,i,r,o,a,s,u,c,l,d,f){function p(){function i(e){e||(e=this.getRuntime().exec.call(this,"Image","getInfo")),this.size=e.size,this.width=e.width,this.height=e.height,this.type=e.type,this.meta=e.meta,""===this.name&&(this.name=e.name)}function c(t){var i=e.typeOf(t);try{if(t instanceof p){if(!t.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);m.apply(this,arguments)}else if(t instanceof l){if(!~e.inArray(t.type,["image/jpeg","image/png"]))throw new n.ImageError(n.ImageError.WRONG_FORMAT);g.apply(this,arguments)}else if(-1!==e.inArray(i,["blob","file"]))c.call(this,new d(null,t),arguments[1]);else if("string"===i)/^data:[^;]*;base64,/.test(t)?c.call(this,new l(null,{data:t}),arguments[1]):v.apply(this,arguments);else{if("node"!==i||"img"!==t.nodeName.toLowerCase())throw new n.DOMException(n.DOMException.TYPE_MISMATCH_ERR);c.call(this,t.src,arguments[1])}}catch(r){this.trigger("error",r)}}function m(t,n){var i=this.connectRuntime(t.ruid);this.ruid=i.uid,i.exec.call(this,"Image","loadFromImage",t,"undefined"===e.typeOf(n)?!0:n)}function g(t,n){function i(e){r.ruid=e.uid,e.exec.call(r,"Image","loadFromBlob",t)}var r=this;r.name=t.name||"",t.isDetached()?(this.bind("RuntimeInit",function(e,t){i(t)}),n&&"string"==typeof n.required_caps&&(n.required_caps=o.parseCaps(n.required_caps)),this.connectRuntime(e.extend({required_caps:{access_image_binary:!0,resize_image:!0}},n))):i(this.connectRuntime(t.ruid))}function v(e,t){var n=this,i;i=new r,i.open("get",e),i.responseType="blob",i.onprogress=function(e){n.trigger(e)},i.onload=function(){g.call(n,i.response,!0)},i.onerror=function(e){n.trigger(e)},i.onloadend=function(){i.destroy()},i.bind("RuntimeError",function(e,t){n.trigger("RuntimeError",t)}),i.send(null,t)}a.call(this),e.extend(this,{uid:e.guid("uid_"),ruid:null,name:"",size:0,width:0,height:0,type:"",meta:{},clone:function(){this.load.apply(this,arguments)},load:function(){this.bind("Load Resize",function(){i.call(this)},999),this.convertEventPropsToHandlers(h),c.apply(this,arguments)},downsize:function(t,i,r,o){try{if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);if(this.width>p.MAX_RESIZE_WIDTH||this.height>p.MAX_RESIZE_HEIGHT)throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);(!t&&!i||"undefined"===e.typeOf(r))&&(r=!1),t=t||this.width,i=i||this.height,o="undefined"===e.typeOf(o)?!0:!!o,this.getRuntime().exec.call(this,"Image","downsize",t,i,r,o)}catch(a){this.trigger("error",a)}},crop:function(e,t,n){this.downsize(e,t,!0,n)},getAsCanvas:function(){if(!u.can("create_canvas"))throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);var e=this.connectRuntime(this.ruid);return e.exec.call(this,"Image","getAsCanvas")},getAsBlob:function(e,t){if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);return e||(e="image/jpeg"),"image/jpeg"!==e||t||(t=90),this.getRuntime().exec.call(this,"Image","getAsBlob",e,t)},getAsDataURL:function(e,t){if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);return this.getRuntime().exec.call(this,"Image","getAsDataURL",e,t)},getAsBinaryString:function(e,t){var n=this.getAsDataURL(e,t);return f.atob(n.substring(n.indexOf("base64,")+7))},embed:function(i){function r(){if(u.can("create_canvas")){var t=a.getAsCanvas();if(t)return i.appendChild(t),t=null,a.destroy(),o.trigger("embedded"),void 0}var r=a.getAsDataURL(c,l);if(!r)throw new n.ImageError(n.ImageError.WRONG_FORMAT);if(u.can("use_data_uri_of",r.length))i.innerHTML='<img src="'+r+'" width="'+a.width+'" height="'+a.height+'" />',a.destroy(),o.trigger("embedded");else{var d=new s;d.bind("TransportingComplete",function(){v=o.connectRuntime(this.result.ruid),o.bind("Embedded",function(){e.extend(v.getShimContainer().style,{top:"0px",left:"0px",width:a.width+"px",height:a.height+"px"}),v=null},999),v.exec.call(o,"ImageView","display",this.result.uid,m,g),a.destroy()}),d.transport(f.atob(r.substring(r.indexOf("base64,")+7)),c,e.extend({},h,{required_caps:{display_media:!0},runtime_order:"flash,silverlight",container:i}))}}var o=this,a,c,l,d,h=arguments[1]||{},m=this.width,g=this.height,v;try{if(!(i=t.get(i)))throw new n.DOMException(n.DOMException.INVALID_NODE_TYPE_ERR);if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);if(this.width>p.MAX_RESIZE_WIDTH||this.height>p.MAX_RESIZE_HEIGHT)throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);if(c=h.type||this.type||"image/jpeg",l=h.quality||90,d="undefined"!==e.typeOf(h.crop)?h.crop:!1,h.width)m=h.width,g=h.height||m;else{var y=t.getSize(i);y.w&&y.h&&(m=y.w,g=y.h)}return a=new p,a.bind("Resize",function(){r.call(o)}),a.bind("Load",function(){a.downsize(m,g,d,!1)}),a.clone(this,!1),a}catch(w){this.trigger("error",w)}},destroy:function(){this.ruid&&(this.getRuntime().exec.call(this,"Image","destroy"),this.disconnectRuntime()),this.unbindAll()}})}var h=["progress","load","error","resize","embedded"];return p.MAX_RESIZE_WIDTH=6500,p.MAX_RESIZE_HEIGHT=6500,p.prototype=c.instance,p}),i(D,[u,p,g,d],function(e,t,n,i){function r(t){var r=this,s=n.capTest,u=n.capTrue,c=e.extend({access_binary:s(window.FileReader||window.File&&window.File.getAsDataURL),access_image_binary:function(){return r.can("access_binary")&&!!a.Image},display_media:s(i.can("create_canvas")||i.can("use_data_uri_over32kb")),do_cors:s(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest),drag_and_drop:s(function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&("IE"!==i.browser||i.version>9)}()),filter_by_extension:s(function(){return"Chrome"===i.browser&&i.version>=28||"IE"===i.browser&&i.version>=10}()),return_response_headers:u,return_response_type:function(e){return"json"===e&&window.JSON?!0:i.can("return_response_type",e)},return_status_code:u,report_upload_progress:s(window.XMLHttpRequest&&(new XMLHttpRequest).upload),resize_image:function(){return r.can("access_binary")&&i.can("create_canvas")},select_file:function(){return i.can("use_fileinput")&&window.File},select_folder:function(){return r.can("select_file")&&"Chrome"===i.browser&&i.version>=21},select_multiple:function(){return!(!r.can("select_file")||"Safari"===i.browser&&"Windows"===i.os||"iOS"===i.os&&i.verComp(i.osVersion,"7.0.4","<"))},send_binary_string:s(window.XMLHttpRequest&&((new XMLHttpRequest).sendAsBinary||window.Uint8Array&&window.ArrayBuffer)),send_custom_headers:s(window.XMLHttpRequest),send_multipart:function(){return!!(window.XMLHttpRequest&&(new XMLHttpRequest).upload&&window.FormData)||r.can("send_binary_string")},slice_blob:s(window.File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice)),stream_upload:function(){return r.can("slice_blob")&&r.can("send_multipart")},summon_file_dialog:s(function(){return"Firefox"===i.browser&&i.version>=4||"Opera"===i.browser&&i.version>=12||"IE"===i.browser&&i.version>=10||!!~e.inArray(i.browser,["Chrome","Safari"])}()),upload_filesize:u},arguments[2]);n.call(this,t,arguments[1]||o,c),e.extend(this,{init:function(){this.trigger("Init")},destroy:function(e){return function(){e.call(r),e=r=null}}(this.destroy)}),e.extend(this.getShim(),a)}var o="html5",a={};return n.addConstructor(o,r),a}),i(N,[D,y],function(e,t){function n(){function e(e,t,n){var i;if(!window.File.prototype.slice)return(i=window.File.prototype.webkitSlice||window.File.prototype.mozSlice)?i.call(e,t,n):null;try{return e.slice(),e.slice(t,n)}catch(r){return e.slice(t,n-t)}}this.slice=function(){return new t(this.getRuntime().uid,e.apply(this,arguments))}}return e.Blob=n}),i(L,[u],function(e){function t(){this.returnValue=!1}function n(){this.cancelBubble=!0}var i={},r="moxie_"+e.guid(),o=function(o,a,s,u){var c,l;a=a.toLowerCase(),o.addEventListener?(c=s,o.addEventListener(a,c,!1)):o.attachEvent&&(c=function(){var e=window.event;e.target||(e.target=e.srcElement),e.preventDefault=t,e.stopPropagation=n,s(e)},o.attachEvent("on"+a,c)),o[r]||(o[r]=e.guid()),i.hasOwnProperty(o[r])||(i[o[r]]={}),l=i[o[r]],l.hasOwnProperty(a)||(l[a]=[]),l[a].push({func:c,orig:s,key:u})},a=function(t,n,o){var a,s;if(n=n.toLowerCase(),t[r]&&i[t[r]]&&i[t[r]][n]){a=i[t[r]][n];for(var u=a.length-1;u>=0&&(a[u].orig!==o&&a[u].key!==o||(t.removeEventListener?t.removeEventListener(n,a[u].func,!1):t.detachEvent&&t.detachEvent("on"+n,a[u].func),a[u].orig=null,a[u].func=null,a.splice(u,1),o===s));u--);if(a.length||delete i[t[r]][n],e.isEmptyObj(i[t[r]])){delete i[t[r]];try{delete t[r]}catch(c){t[r]=s}}}},s=function(t,n){t&&t[r]&&e.each(i[t[r]],function(e,i){a(t,i,n)})};return{addEvent:o,removeEvent:a,removeAllEvents:s}}),i(M,[D,u,f,L,l,d],function(e,t,n,i,r,o){function a(){var e=[],a;t.extend(this,{init:function(s){var u=this,c=u.getRuntime(),l,d,f,p,h,m;a=s,e=[],f=a.accept.mimes||r.extList2mimes(a.accept,c.can("filter_by_extension")),d=c.getShimContainer(),d.innerHTML='<input id="'+c.uid+'" type="file" style="font-size:999px;opacity:0;"'+(a.multiple&&c.can("select_multiple")?"multiple":"")+(a.directory&&c.can("select_folder")?"webkitdirectory directory":"")+(f?' accept="'+f.join(",")+'"':"")+" />",l=n.get(c.uid),t.extend(l.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),p=n.get(a.browse_button),c.can("summon_file_dialog")&&("static"===n.getStyle(p,"position")&&(p.style.position="relative"),h=parseInt(n.getStyle(p,"z-index"),10)||1,p.style.zIndex=h,d.style.zIndex=h-1,i.addEvent(p,"click",function(e){var t=n.get(c.uid);t&&!t.disabled&&t.click(),e.preventDefault()},u.uid)),m=c.can("summon_file_dialog")?p:d,i.addEvent(m,"mouseover",function(){u.trigger("mouseenter")},u.uid),i.addEvent(m,"mouseout",function(){u.trigger("mouseleave")},u.uid),i.addEvent(m,"mousedown",function(){u.trigger("mousedown")},u.uid),i.addEvent(n.get(a.container),"mouseup",function(){u.trigger("mouseup")},u.uid),l.onchange=function g(){if(e=[],a.directory?t.each(this.files,function(t){"."!==t.name&&e.push(t)}):e=[].slice.call(this.files),"IE"!==o.browser)this.value="";else{var n=this.cloneNode(!0);this.parentNode.replaceChild(n,this),n.onchange=g}u.trigger("change")},u.trigger({type:"ready",async:!0}),d=null},getFiles:function(){return e},disable:function(e){var t=this.getRuntime(),i;(i=n.get(t.uid))&&(i.disabled=!!e)},destroy:function(){var t=this.getRuntime(),r=t.getShim(),o=t.getShimContainer();i.removeAllEvents(o,this.uid),i.removeAllEvents(a&&n.get(a.container),this.uid),i.removeAllEvents(a&&n.get(a.browse_button),this.uid),o&&(o.innerHTML=""),r.removeInstance(this.uid),e=a=o=r=null}})}return e.FileInput=a}),i(C,[D,u,f,L,l],function(e,t,n,i,r){function o(){function e(e){for(var n=[],i=0;i<e.length;i++)[].push.apply(n,e[i].extensions.split(/\s*,\s*/));return-1===t.inArray("*",n)?n:[]}function o(e){var n=r.getFileExtension(e.name);return!n||!d.length||-1!==t.inArray(n,d)}function a(e,n){var i=[];t.each(e,function(e){var t=e.webkitGetAsEntry();if(t)if(t.isFile){var n=e.getAsFile();o(n)&&l.push(n)}else i.push(t)}),i.length?s(i,n):n()}function s(e,n){var i=[];t.each(e,function(e){i.push(function(t){u(e,t)})}),t.inSeries(i,function(){n()})}function u(e,t){e.isFile?e.file(function(e){o(e)&&l.push(e),t()},function(){t()}):e.isDirectory?c(e,t):t()}function c(e,t){function n(e){r.readEntries(function(t){t.length?([].push.apply(i,t),n(e)):e()},e)}var i=[],r=e.createReader();n(function(){s(i,t)})}var l=[],d=[],f;t.extend(this,{init:function(n){var r=this,s;f=n,d=e(f.accept),s=f.container,i.addEvent(s,"dragover",function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy"},r.uid),i.addEvent(s,"drop",function(e){e.preventDefault(),e.stopPropagation(),l=[],e.dataTransfer.items&&e.dataTransfer.items[0].webkitGetAsEntry?a(e.dataTransfer.items,function(){r.trigger("drop")}):(t.each(e.dataTransfer.files,function(e){o(e)&&l.push(e)}),r.trigger("drop"))},r.uid),i.addEvent(s,"dragenter",function(e){e.preventDefault(),e.stopPropagation(),r.trigger("dragenter")},r.uid),i.addEvent(s,"dragleave",function(e){e.preventDefault(),e.stopPropagation(),r.trigger("dragleave")},r.uid)},getFiles:function(){return l},destroy:function(){i.removeAllEvents(f&&n.get(f.container),this.uid),l=d=f=null}})}return e.FileDrop=o}),i(F,[D,m,u],function(e,t,n){function i(){function e(e){return t.atob(e.substring(e.indexOf("base64,")+7))}var i,r=!1;n.extend(this,{read:function(e,t){var o=this;i=new window.FileReader,i.addEventListener("progress",function(e){o.trigger(e)}),i.addEventListener("load",function(e){o.trigger(e)}),i.addEventListener("error",function(e){o.trigger(e,i.error)}),i.addEventListener("loadend",function(){i=null}),"function"===n.typeOf(i[e])?(r=!1,i[e](t.getSource())):"readAsBinaryString"===e&&(r=!0,i.readAsDataURL(t.getSource()))},getResult:function(){return i&&i.result?r?e(i.result):i.result:null},abort:function(){i&&i.abort()},destroy:function(){i=null}})}return e.FileReader=i}),i(H,[D,u,l,b,w,y,S,p,d],function(e,t,n,i,r,o,a,s,u){function c(){function e(e,t){var n=this,i,r;i=t.getBlob().getSource(),r=new window.FileReader,r.onload=function(){t.append(t.getBlobName(),new o(null,{type:i.type,data:r.result})),f.send.call(n,e,t)},r.readAsBinaryString(i)}function c(){return!window.XMLHttpRequest||"IE"===u.browser&&u.version<8?function(){for(var e=["Msxml2.XMLHTTP.6.0","Microsoft.XMLHTTP"],t=0;t<e.length;t++)try{return new ActiveXObject(e[t])}catch(n){}}():new window.XMLHttpRequest}function l(e){var t=e.responseXML,n=e.responseText;return"IE"===u.browser&&n&&t&&!t.documentElement&&/[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type"))&&(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.validateOnParse=!1,t.loadXML(n)),t&&("IE"===u.browser&&0!==t.parseError||!t.documentElement||"parsererror"===t.documentElement.tagName)?null:t}function d(e){var t="----moxieboundary"+(new Date).getTime(),n="--",i="\r\n",r="",a=this.getRuntime();if(!a.can("send_binary_string"))throw new s.RuntimeError(s.RuntimeError.NOT_SUPPORTED_ERR);return p.setRequestHeader("Content-Type","multipart/form-data; boundary="+t),e.each(function(e,a){r+=e instanceof o?n+t+i+'Content-Disposition: form-data; name="'+a+'"; filename="'+unescape(encodeURIComponent(e.name||"blob"))+'"'+i+"Content-Type: "+(e.type||"application/octet-stream")+i+i+e.getSource()+i:n+t+i+'Content-Disposition: form-data; name="'+a+'"'+i+i+unescape(encodeURIComponent(e))+i}),r+=n+t+n+i}var f=this,p,h;t.extend(this,{send:function(n,r){var s=this,l="Mozilla"===u.browser&&u.version>=4&&u.version<7,f="Android Browser"===u.browser,m=!1;if(h=n.url.replace(/^.+?\/([\w\-\.]+)$/,"$1").toLowerCase(),p=c(),p.open(n.method,n.url,n.async,n.user,n.password),r instanceof o)r.isDetached()&&(m=!0),r=r.getSource();else if(r instanceof a){if(r.hasBlob())if(r.getBlob().isDetached())r=d.call(s,r),m=!0;else if((l||f)&&"blob"===t.typeOf(r.getBlob().getSource())&&window.FileReader)return e.call(s,n,r),void 0;if(r instanceof a){var g=new window.FormData;r.each(function(e,t){e instanceof o?g.append(t,e.getSource()):g.append(t,e)}),r=g}}p.upload?(n.withCredentials&&(p.withCredentials=!0),p.addEventListener("load",function(e){s.trigger(e)}),p.addEventListener("error",function(e){s.trigger(e)}),p.addEventListener("progress",function(e){s.trigger(e)}),p.upload.addEventListener("progress",function(e){s.trigger({type:"UploadProgress",loaded:e.loaded,total:e.total})})):p.onreadystatechange=function v(){switch(p.readyState){case 1:break;case 2:break;case 3:var e,t;try{i.hasSameOrigin(n.url)&&(e=p.getResponseHeader("Content-Length")||0),p.responseText&&(t=p.responseText.length)}catch(r){e=t=0}s.trigger({type:"progress",lengthComputable:!!e,total:parseInt(e,10),loaded:t});break;case 4:p.onreadystatechange=function(){},0===p.status?s.trigger("error"):s.trigger("load")}},t.isEmptyObj(n.headers)||t.each(n.headers,function(e,t){p.setRequestHeader(t,e)}),""!==n.responseType&&"responseType"in p&&(p.responseType="json"!==n.responseType||u.can("return_response_type","json")?n.responseType:"text"),m?p.sendAsBinary?p.sendAsBinary(r):function(){for(var e=new Uint8Array(r.length),t=0;t<r.length;t++)e[t]=255&r.charCodeAt(t);p.send(e.buffer)}():p.send(r),s.trigger("loadstart")},getStatus:function(){try{if(p)return p.status}catch(e){}return 0},getResponse:function(e){var t=this.getRuntime();try{switch(e){case"blob":var i=new r(t.uid,p.response),o=p.getResponseHeader("Content-Disposition");if(o){var a=o.match(/filename=([\'\"'])([^\1]+)\1/);a&&(h=a[2])}return i.name=h,i.type||(i.type=n.getFileMime(h)),i;case"json":return u.can("return_response_type","json")?p.response:200===p.status&&window.JSON?JSON.parse(p.responseText):null;case"document":return l(p);default:return""!==p.responseText?p.responseText:null}}catch(s){return null}},getAllResponseHeaders:function(){try{return p.getAllResponseHeaders()}catch(e){}return""},abort:function(){p&&p.abort()},destroy:function(){f=h=null}})}return e.XMLHttpRequest=c}),i(P,[],function(){return function(){function e(e,t){var n=r?0:-8*(t-1),i=0,a;for(a=0;t>a;a++)i|=o.charCodeAt(e+a)<<Math.abs(n+8*a);return i}function n(e,t,n){n=3===arguments.length?n:o.length-t-1,o=o.substr(0,t)+e+o.substr(n+t)}function i(e,t,i){var o="",a=r?0:-8*(i-1),s;for(s=0;i>s;s++)o+=String.fromCharCode(255&t>>Math.abs(a+8*s));n(o,e,i)}var r=!1,o;return{II:function(e){return e===t?r:(r=e,void 0)},init:function(e){r=!1,o=e},SEGMENT:function(e,t,i){switch(arguments.length){case 1:return o.substr(e,o.length-e-1);case 2:return o.substr(e,t);case 3:n(i,e,t);break;default:return o}},BYTE:function(t){return e(t,1)},SHORT:function(t){return e(t,2)},LONG:function(n,r){return r===t?e(n,4):(i(n,r,4),void 0)},SLONG:function(t){var n=e(t,4);return n>2147483647?n-4294967296:n},STRING:function(t,n){var i="";for(n+=t;n>t;t++)i+=String.fromCharCode(e(t,1));return i}}}}),i(k,[P],function(e){return function t(n){var i=[],r,o,a,s=0;if(r=new e,r.init(n),65496===r.SHORT(0)){for(o=2;o<=n.length;)if(a=r.SHORT(o),a>=65488&&65495>=a)o+=2;else{if(65498===a||65497===a)break;s=r.SHORT(o+2)+2,a>=65505&&65519>=a&&i.push({hex:a,name:"APP"+(15&a),start:o,length:s,segment:r.SEGMENT(o,s)}),o+=s}return r.init(null),{headers:i,restore:function(e){var t,n;for(r.init(e),o=65504==r.SHORT(2)?4+r.SHORT(4):2,n=0,t=i.length;t>n;n++)r.SEGMENT(o,0,i[n].segment),o+=i[n].length;return e=r.SEGMENT(),r.init(null),e},strip:function(e){var n,i,o;for(i=new t(e),n=i.headers,i.purge(),r.init(e),o=n.length;o--;)r.SEGMENT(n[o].start,n[o].length,"");return e=r.SEGMENT(),r.init(null),e},get:function(e){for(var t=[],n=0,r=i.length;r>n;n++)i[n].name===e.toUpperCase()&&t.push(i[n].segment);return t},set:function(e,t){var n=[],r,o,a;for("string"==typeof t?n.push(t):n=t,r=o=0,a=i.length;a>r&&(i[r].name===e.toUpperCase()&&(i[r].segment=n[o],i[r].length=n[o].length,o++),!(o>=n.length));r++);},purge:function(){i=[],r.init(null),r=null}}}}}),i(U,[u,P],function(e,n){return function i(){function i(e,n){var i=a.SHORT(e),r,o,s,u,d,f,p,h,m=[],g={};for(r=0;i>r;r++)if(p=f=e+12*r+2,s=n[a.SHORT(p)],s!==t){switch(u=a.SHORT(p+=2),d=a.LONG(p+=2),p+=4,m=[],u){case 1:case 7:for(d>4&&(p=a.LONG(p)+c.tiffHeader),o=0;d>o;o++)m[o]=a.BYTE(p+o);break;case 2:d>4&&(p=a.LONG(p)+c.tiffHeader),g[s]=a.STRING(p,d-1);continue;case 3:for(d>2&&(p=a.LONG(p)+c.tiffHeader),o=0;d>o;o++)m[o]=a.SHORT(p+2*o);break;case 4:for(d>1&&(p=a.LONG(p)+c.tiffHeader),o=0;d>o;o++)m[o]=a.LONG(p+4*o);break;case 5:for(p=a.LONG(p)+c.tiffHeader,o=0;d>o;o++)m[o]=a.LONG(p+4*o)/a.LONG(p+4*o+4);break;case 9:for(p=a.LONG(p)+c.tiffHeader,o=0;d>o;o++)m[o]=a.SLONG(p+4*o);break;case 10:for(p=a.LONG(p)+c.tiffHeader,o=0;d>o;o++)m[o]=a.SLONG(p+4*o)/a.SLONG(p+4*o+4);break;default:continue}h=1==d?m[0]:m,g[s]=l.hasOwnProperty(s)&&"object"!=typeof h?l[s][h]:h}return g}function r(){var e=c.tiffHeader;return a.II(18761==a.SHORT(e)),42!==a.SHORT(e+=2)?!1:(c.IFD0=c.tiffHeader+a.LONG(e+=2),u=i(c.IFD0,s.tiff),"ExifIFDPointer"in u&&(c.exifIFD=c.tiffHeader+u.ExifIFDPointer,delete u.ExifIFDPointer),"GPSInfoIFDPointer"in u&&(c.gpsIFD=c.tiffHeader+u.GPSInfoIFDPointer,delete u.GPSInfoIFDPointer),!0)}function o(e,t,n){var i,r,o,u=0;if("string"==typeof t){var l=s[e.toLowerCase()];for(var d in l)if(l[d]===t){t=d;break}}i=c[e.toLowerCase()+"IFD"],r=a.SHORT(i);for(var f=0;r>f;f++)if(o=i+12*f+2,a.SHORT(o)==t){u=o+8;break}return u?(a.LONG(u,n),!0):!1}var a,s,u,c={},l;return a=new n,s={tiff:{274:"Orientation",270:"ImageDescription",271:"Make",272:"Model",305:"Software",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37386:"FocalLength",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}},l={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}},{init:function(e){return c={tiffHeader:10},e!==t&&e.length?(a.init(e),65505===a.SHORT(0)&&"EXIF\0"===a.STRING(4,5).toUpperCase()?r():!1):!1
},TIFF:function(){return u},EXIF:function(){var t;if(t=i(c.exifIFD,s.exif),t.ExifVersion&&"array"===e.typeOf(t.ExifVersion)){for(var n=0,r="";n<t.ExifVersion.length;n++)r+=String.fromCharCode(t.ExifVersion[n]);t.ExifVersion=r}return t},GPS:function(){var t;return t=i(c.gpsIFD,s.gps),t.GPSVersionID&&"array"===e.typeOf(t.GPSVersionID)&&(t.GPSVersionID=t.GPSVersionID.join(".")),t},setExif:function(e,t){return"PixelXDimension"!==e&&"PixelYDimension"!==e?!1:o("exif",e,t)},getBinary:function(){return a.SEGMENT()},purge:function(){a.init(null),a=u=null,c={}}}}}),i(B,[u,p,k,P,U],function(e,t,n,i,r){function o(o){function a(){for(var e=0,t,n;e<=u.length;){if(t=c.SHORT(e+=2),t>=65472&&65475>=t)return e+=5,{height:c.SHORT(e),width:c.SHORT(e+=2)};n=c.SHORT(e+=2),e+=n-2}return null}function s(){d&&l&&c&&(d.purge(),l.purge(),c.init(null),u=f=l=d=c=null)}var u,c,l,d,f,p;if(u=o,c=new i,c.init(u),65496!==c.SHORT(0))throw new t.ImageError(t.ImageError.WRONG_FORMAT);l=new n(o),d=new r,p=!!d.init(l.get("app1")[0]),f=a.call(this),e.extend(this,{type:"image/jpeg",size:u.length,width:f&&f.width||0,height:f&&f.height||0,setExif:function(t,n){return p?("object"===e.typeOf(t)?e.each(t,function(e,t){d.setExif(t,e)}):d.setExif(t,n),l.set("app1",d.getBinary()),void 0):!1},writeHeaders:function(){return arguments.length?l.restore(arguments[0]):u=l.restore(u)},stripHeaders:function(e){return l.strip(e)},purge:function(){s.call(this)}}),p&&(this.meta={tiff:d.TIFF(),exif:d.EXIF(),gps:d.GPS()})}return o}),i(z,[p,u,P],function(e,t,n){function i(i){function r(){var e,t;return e=a.call(this,8),"IHDR"==e.type?(t=e.start,{width:u.LONG(t),height:u.LONG(t+=4)}):null}function o(){u&&(u.init(null),s=d=c=l=u=null)}function a(e){var t,n,i,r;return t=u.LONG(e),n=u.STRING(e+=4,4),i=e+=4,r=u.LONG(e+t),{length:t,type:n,start:i,CRC:r}}var s,u,c,l,d;s=i,u=new n,u.init(s),function(){var t=0,n=0,i=[35152,20039,3338,6666];for(n=0;n<i.length;n++,t+=2)if(i[n]!=u.SHORT(t))throw new e.ImageError(e.ImageError.WRONG_FORMAT)}(),d=r.call(this),t.extend(this,{type:"image/png",size:s.length,width:d.width,height:d.height,purge:function(){o.call(this)}}),o.call(this)}return i}),i(G,[u,p,B,z],function(e,t,n,i){return function(r){var o=[n,i],a;a=function(){for(var e=0;e<o.length;e++)try{return new o[e](r)}catch(n){}throw new t.ImageError(t.ImageError.WRONG_FORMAT)}(),e.extend(this,{type:"",size:0,width:0,height:0,setExif:function(){},writeHeaders:function(e){return e},stripHeaders:function(e){return e},purge:function(){}}),e.extend(this,a),this.purge=function(){a.purge(),a=null}}}),i(q,[],function(){function e(e,i,r){var o=e.naturalWidth,a=e.naturalHeight,s=r.width,u=r.height,c=r.x||0,l=r.y||0,d=i.getContext("2d");t(e)&&(o/=2,a/=2);var f=1024,p=document.createElement("canvas");p.width=p.height=f;for(var h=p.getContext("2d"),m=n(e,o,a),g=0;a>g;){for(var v=g+f>a?a-g:f,y=0;o>y;){var w=y+f>o?o-y:f;h.clearRect(0,0,f,f),h.drawImage(e,-y,-g);var E=y*s/o+c<<0,_=Math.ceil(w*s/o),x=g*u/a/m+l<<0,R=Math.ceil(v*u/a/m);d.drawImage(p,0,0,w,v,E,x,_,R),y+=f}g+=f}p=h=null}function t(e){var t=e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var i=document.createElement("canvas");i.width=i.height=1;var r=i.getContext("2d");return r.drawImage(e,-t+1,0),0===r.getImageData(0,0,1,1).data[3]}return!1}function n(e,t,n){var i=document.createElement("canvas");i.width=1,i.height=n;var r=i.getContext("2d");r.drawImage(e,0,0);for(var o=r.getImageData(0,0,1,n).data,a=0,s=n,u=n;u>a;){var c=o[4*(u-1)+3];0===c?s=u:a=u,u=s+a>>1}i=null;var l=u/n;return 0===l?1:l}return{isSubsampled:t,renderTo:e}}),i(X,[D,u,p,m,w,G,q,l,d],function(e,t,n,i,r,o,a,s,u){function c(){function e(){if(!E&&!y)throw new n.ImageError(n.DOMException.INVALID_STATE_ERR);return E||y}function c(e){return i.atob(e.substring(e.indexOf("base64,")+7))}function l(e,t){return"data:"+(t||"")+";base64,"+i.btoa(e)}function d(e){var t=this;y=new Image,y.onerror=function(){g.call(this),t.trigger("error",new n.ImageError(n.ImageError.WRONG_FORMAT))},y.onload=function(){t.trigger("load")},y.src=/^data:[^;]*;base64,/.test(e)?e:l(e,x.type)}function f(e,t){var i=this,r;return window.FileReader?(r=new FileReader,r.onload=function(){t(this.result)},r.onerror=function(){i.trigger("error",new n.FileException(n.FileException.NOT_READABLE_ERR))},r.readAsDataURL(e),void 0):t(e.getAsDataURL())}function p(n,i,r,o){var a=this,s,u,c=0,l=0,d,f,p,g;if(b=o,g=this.meta&&this.meta.tiff&&this.meta.tiff.Orientation||1,-1!==t.inArray(g,[5,6,7,8])){var v=n;n=i,i=v}return d=e(),u=r?Math.max:Math.min,s=u(n/d.width,i/d.height),s>1&&(!r||o)?(this.trigger("Resize"),void 0):(E||(E=document.createElement("canvas")),f=Math.round(d.width*s),p=Math.round(d.height*s),r?(E.width=n,E.height=i,f>n&&(c=Math.round((f-n)/2)),p>i&&(l=Math.round((p-i)/2))):(E.width=f,E.height=p),b||m(E.width,E.height,g),h.call(this,d,E,-c,-l,f,p),this.width=E.width,this.height=E.height,R=!0,a.trigger("Resize"),void 0)}function h(e,t,n,i,r,o){if("iOS"===u.OS)a.renderTo(e,t,{width:r,height:o,x:n,y:i});else{var s=t.getContext("2d");s.drawImage(e,n,i,r,o)}}function m(e,t,n){switch(n){case 5:case 6:case 7:case 8:E.width=t,E.height=e;break;default:E.width=e,E.height=t}var i=E.getContext("2d");switch(n){case 2:i.translate(e,0),i.scale(-1,1);break;case 3:i.translate(e,t),i.rotate(Math.PI);break;case 4:i.translate(0,t),i.scale(1,-1);break;case 5:i.rotate(.5*Math.PI),i.scale(1,-1);break;case 6:i.rotate(.5*Math.PI),i.translate(0,-t);break;case 7:i.rotate(.5*Math.PI),i.translate(e,-t),i.scale(-1,1);break;case 8:i.rotate(-.5*Math.PI),i.translate(-e,0)}}function g(){w&&(w.purge(),w=null),_=y=E=x=null,R=!1}var v=this,y,w,E,_,x,R=!1,b=!0;t.extend(this,{loadFromBlob:function(e){var t=this,i=t.getRuntime(),r=arguments.length>1?arguments[1]:!0;if(!i.can("access_binary"))throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);return x=e,e.isDetached()?(_=e.getSource(),d.call(this,_),void 0):(f.call(this,e.getSource(),function(e){r&&(_=c(e)),d.call(t,e)}),void 0)},loadFromImage:function(e,t){this.meta=e.meta,x=new r(null,{name:e.name,size:e.size,type:e.type}),d.call(this,t?_=e.getAsBinaryString():e.getAsDataURL())},getInfo:function(){var t=this.getRuntime(),n;return!w&&_&&t.can("access_image_binary")&&(w=new o(_)),n={width:e().width||0,height:e().height||0,type:x.type||s.getFileMime(x.name),size:_&&_.length||x.size||0,name:x.name||"",meta:w&&w.meta||this.meta||{}}},downsize:function(){p.apply(this,arguments)},getAsCanvas:function(){return E&&(E.id=this.uid+"_canvas"),E},getAsBlob:function(e,t){return e!==this.type&&p.call(this,this.width,this.height,!1),new r(null,{name:x.name||"",type:e,data:v.getAsBinaryString.call(this,e,t)})},getAsDataURL:function(e){var t=arguments[1]||90;if(!R)return y.src;if("image/jpeg"!==e)return E.toDataURL("image/png");try{return E.toDataURL("image/jpeg",t/100)}catch(n){return E.toDataURL("image/jpeg")}},getAsBinaryString:function(e,t){if(!R)return _||(_=c(v.getAsDataURL(e,t))),_;if("image/jpeg"!==e)_=c(v.getAsDataURL(e,t));else{var n;t||(t=90);try{n=E.toDataURL("image/jpeg",t/100)}catch(i){n=E.toDataURL("image/jpeg")}_=c(n),w&&(_=w.stripHeaders(_),b&&(w.meta&&w.meta.exif&&w.setExif({PixelXDimension:this.width,PixelYDimension:this.height}),_=w.writeHeaders(_)),w.purge(),w=null)}return R=!1,_},destroy:function(){v=null,g.call(this),this.getRuntime().getShim().removeInstance(this.uid)}})}return e.Image=c}),i(j,[u,d,f,p,g],function(e,t,n,i,r){function o(){var e;try{e=navigator.plugins["Shockwave Flash"],e=e.description}catch(t){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(n){e="0.0"}}return e=e.match(/\d+/g),parseFloat(e[0]+"."+e[1])}function a(a){var c=this,l;a=e.extend({swf_url:t.swf_url},a),r.call(this,a,s,{access_binary:function(e){return e&&"browser"===c.mode},access_image_binary:function(e){return e&&"browser"===c.mode},display_media:r.capTrue,do_cors:r.capTrue,drag_and_drop:!1,report_upload_progress:function(){return"client"===c.mode},resize_image:r.capTrue,return_response_headers:!1,return_response_type:function(t){return"json"===t&&window.JSON?!0:!e.arrayDiff(t,["","text","document"])||"browser"===c.mode},return_status_code:function(t){return"browser"===c.mode||!e.arrayDiff(t,[200,404])},select_file:r.capTrue,select_multiple:r.capTrue,send_binary_string:function(e){return e&&"browser"===c.mode},send_browser_cookies:function(e){return e&&"browser"===c.mode},send_custom_headers:function(e){return e&&"browser"===c.mode},send_multipart:r.capTrue,slice_blob:r.capTrue,stream_upload:function(e){return e&&"browser"===c.mode},summon_file_dialog:!1,upload_filesize:function(t){return e.parseSizeStr(t)<=2097152||"client"===c.mode},use_http_method:function(t){return!e.arrayDiff(t,["GET","POST"])}},{access_binary:function(e){return e?"browser":"client"},access_image_binary:function(e){return e?"browser":"client"},report_upload_progress:function(e){return e?"browser":"client"},return_response_type:function(t){return e.arrayDiff(t,["","text","json","document"])?"browser":["client","browser"]},return_status_code:function(t){return e.arrayDiff(t,[200,404])?"browser":["client","browser"]},send_binary_string:function(e){return e?"browser":"client"},send_browser_cookies:function(e){return e?"browser":"client"},send_custom_headers:function(e){return e?"browser":"client"},stream_upload:function(e){return e?"client":"browser"},upload_filesize:function(t){return e.parseSizeStr(t)>=2097152?"client":"browser"}},"client"),o()<10&&(this.mode=!1),e.extend(this,{getShim:function(){return n.get(this.uid)},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec(this.uid,e,t,n)},init:function(){var n,r,o;o=this.getShimContainer(),e.extend(o.style,{position:"absolute",top:"-8px",left:"-8px",width:"9px",height:"9px",overflow:"hidden"}),n='<object id="'+this.uid+'" type="application/x-shockwave-flash" data="'+a.swf_url+'" ',"IE"===t.browser&&(n+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),n+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+a.swf_url+'" />'+'<param name="flashvars" value="uid='+escape(this.uid)+"&target="+t.global_event_dispatcher+'" />'+'<param name="wmode" value="transparent" />'+'<param name="allowscriptaccess" value="always" />'+"</object>","IE"===t.browser?(r=document.createElement("div"),o.appendChild(r),r.outerHTML=n,r=o=null):o.innerHTML=n,l=setTimeout(function(){c&&!c.initialized&&c.trigger("Error",new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))},5e3)},destroy:function(e){return function(){e.call(c),clearTimeout(l),a=l=e=c=null}}(this.destroy)},u)}var s="flash",u={};return r.addConstructor(s,a),u}),i(V,[j,y],function(e,t){var n={slice:function(e,n,i,r){var o=this.getRuntime();return 0>n?n=Math.max(e.size+n,0):n>0&&(n=Math.min(n,e.size)),0>i?i=Math.max(e.size+i,0):i>0&&(i=Math.min(i,e.size)),e=o.shimExec.call(this,"Blob","slice",n,i,r||""),e&&(e=new t(o.uid,e)),e}};return e.Blob=n}),i(W,[j],function(e){var t={init:function(e){this.getRuntime().shimExec.call(this,"FileInput","init",{name:e.name,accept:e.accept,multiple:e.multiple}),this.trigger("ready")}};return e.FileInput=t}),i(Y,[j,m],function(e,t){function n(e,n){switch(n){case"readAsText":return t.atob(e,"utf8");case"readAsBinaryString":return t.atob(e);case"readAsDataURL":return e}return null}var i="",r={read:function(e,t){var r=this,o=r.getRuntime();return"readAsDataURL"===e&&(i="data:"+(t.type||"")+";base64,"),r.bind("Progress",function(t,r){r&&(i+=n(r,e))}),o.shimExec.call(this,"FileReader","readAsBase64",t.uid)},getResult:function(){return i},destroy:function(){i=null}};return e.FileReader=r}),i($,[j,m],function(e,t){function n(e,n){switch(n){case"readAsText":return t.atob(e,"utf8");case"readAsBinaryString":return t.atob(e);case"readAsDataURL":return e}return null}var i={read:function(e,t){var i,r=this.getRuntime();return(i=r.shimExec.call(this,"FileReaderSync","readAsBase64",t.uid))?("readAsDataURL"===e&&(i="data:"+(t.type||"")+";base64,"+i),n(i,e,t.type)):null}};return e.FileReaderSync=i}),i(J,[j,u,y,w,T,S,O],function(e,t,n,i,r,o,a){var s={send:function(e,i){function r(){e.transport=l.mode,l.shimExec.call(c,"XMLHttpRequest","send",e,i)}function s(e,t){l.shimExec.call(c,"XMLHttpRequest","appendBlob",e,t.uid),i=null,r()}function u(e,t){var n=new a;n.bind("TransportingComplete",function(){t(this.result)}),n.transport(e.getSource(),e.type,{ruid:l.uid})}var c=this,l=c.getRuntime();if(t.isEmptyObj(e.headers)||t.each(e.headers,function(e,t){l.shimExec.call(c,"XMLHttpRequest","setRequestHeader",t,e.toString())}),i instanceof o){var d;if(i.each(function(e,t){e instanceof n?d=t:l.shimExec.call(c,"XMLHttpRequest","append",t,e)}),i.hasBlob()){var f=i.getBlob();f.isDetached()?u(f,function(e){f.destroy(),s(d,e)}):s(d,f)}else i=null,r()}else i instanceof n?i.isDetached()?u(i,function(e){i.destroy(),i=e.uid,r()}):(i=i.uid,r()):r()},getResponse:function(e){var n,o,a=this.getRuntime();if(o=a.shimExec.call(this,"XMLHttpRequest","getResponseAsBlob")){if(o=new i(a.uid,o),"blob"===e)return o;try{if(n=new r,~t.inArray(e,["","text"]))return n.readAsText(o);if("json"===e&&window.JSON)return JSON.parse(n.readAsText(o))}finally{o.destroy()}}return null},abort:function(e){var t=this.getRuntime();t.shimExec.call(this,"XMLHttpRequest","abort"),this.dispatchEvent("readystatechange"),this.dispatchEvent("abort")}};return e.XMLHttpRequest=s}),i(Z,[j,y],function(e,t){var n={getAsBlob:function(e){var n=this.getRuntime(),i=n.shimExec.call(this,"Transporter","getAsBlob",e);return i?new t(n.uid,i):null}};return e.Transporter=n}),i(K,[j,u,O,y,T],function(e,t,n,i,r){var o={loadFromBlob:function(e){function t(e){r.shimExec.call(i,"Image","loadFromBlob",e.uid),i=r=null}var i=this,r=i.getRuntime();if(e.isDetached()){var o=new n;o.bind("TransportingComplete",function(){t(o.result.getSource())}),o.transport(e.getSource(),e.type,{ruid:r.uid})}else t(e.getSource())},loadFromImage:function(e){var t=this.getRuntime();return t.shimExec.call(this,"Image","loadFromImage",e.uid)},getAsBlob:function(e,t){var n=this.getRuntime(),r=n.shimExec.call(this,"Image","getAsBlob",e,t);return r?new i(n.uid,r):null},getAsDataURL:function(){var e=this.getRuntime(),t=e.Image.getAsBlob.apply(this,arguments),n;return t?(n=new r,n.readAsDataURL(t)):null}};return e.Image=o}),i(Q,[u,d,f,p,g],function(e,t,n,i,r){function o(e){var t=!1,n=null,i,r,o,a,s,u=0;try{try{n=new ActiveXObject("AgControl.AgControl"),n.IsVersionSupported(e)&&(t=!0),n=null}catch(c){var l=navigator.plugins["Silverlight Plug-In"];if(l){for(i=l.description,"1.0.30226.2"===i&&(i="2.0.30226.2"),r=i.split(".");r.length>3;)r.pop();for(;r.length<4;)r.push(0);for(o=e.split(".");o.length>4;)o.pop();do a=parseInt(o[u],10),s=parseInt(r[u],10),u++;while(u<o.length&&a===s);s>=a&&!isNaN(a)&&(t=!0)}}}catch(d){t=!1}return t}function a(a){var c=this,l;a=e.extend({xap_url:t.xap_url},a),r.call(this,a,s,{access_binary:r.capTrue,access_image_binary:r.capTrue,display_media:r.capTrue,do_cors:r.capTrue,drag_and_drop:!1,report_upload_progress:r.capTrue,resize_image:r.capTrue,return_response_headers:function(e){return e&&"client"===c.mode},return_response_type:function(e){return"json"!==e?!0:!!window.JSON},return_status_code:function(t){return"client"===c.mode||!e.arrayDiff(t,[200,404])},select_file:r.capTrue,select_multiple:r.capTrue,send_binary_string:r.capTrue,send_browser_cookies:function(e){return e&&"browser"===c.mode},send_custom_headers:function(e){return e&&"client"===c.mode},send_multipart:r.capTrue,slice_blob:r.capTrue,stream_upload:!0,summon_file_dialog:!1,upload_filesize:r.capTrue,use_http_method:function(t){return"client"===c.mode||!e.arrayDiff(t,["GET","POST"])}},{return_response_headers:function(e){return e?"client":"browser"},return_status_code:function(t){return e.arrayDiff(t,[200,404])?"client":["client","browser"]},send_browser_cookies:function(e){return e?"browser":"client"},send_custom_headers:function(e){return e?"client":"browser"},use_http_method:function(t){return e.arrayDiff(t,["GET","POST"])?"client":["client","browser"]}}),o("2.0.31005.0")&&"Opera"!==t.browser||(this.mode=!1),e.extend(this,{getShim:function(){return n.get(this.uid).content.Moxie},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec(this.uid,e,t,n)},init:function(){var e;e=this.getShimContainer(),e.innerHTML='<object id="'+this.uid+'" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;">'+'<param name="source" value="'+a.xap_url+'"/>'+'<param name="background" value="Transparent"/>'+'<param name="windowless" value="true"/>'+'<param name="enablehtmlaccess" value="true"/>'+'<param name="initParams" value="uid='+this.uid+",target="+t.global_event_dispatcher+'"/>'+"</object>",l=setTimeout(function(){c&&!c.initialized&&c.trigger("Error",new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))},"Windows"!==t.OS?1e4:5e3)},destroy:function(e){return function(){e.call(c),clearTimeout(l),a=l=e=c=null}}(this.destroy)},u)}var s="silverlight",u={};return r.addConstructor(s,a),u}),i(et,[Q,u,V],function(e,t,n){return e.Blob=t.extend({},n)}),i(tt,[Q],function(e){var t={init:function(e){function t(e){for(var t="",n=0;n<e.length;n++)t+=(""!==t?"|":"")+e[n].title+" | *."+e[n].extensions.replace(/,/g,";*.");return t}this.getRuntime().shimExec.call(this,"FileInput","init",t(e.accept),e.name,e.multiple),this.trigger("ready")}};return e.FileInput=t}),i(nt,[Q,f,L],function(e,t,n){var i={init:function(){var e=this,i=e.getRuntime(),r;return r=i.getShimContainer(),n.addEvent(r,"dragover",function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy"},e.uid),n.addEvent(r,"dragenter",function(e){e.preventDefault();var n=t.get(i.uid).dragEnter(e);n&&e.stopPropagation()},e.uid),n.addEvent(r,"drop",function(e){e.preventDefault();var n=t.get(i.uid).dragDrop(e);n&&e.stopPropagation()},e.uid),i.shimExec.call(this,"FileDrop","init")}};return e.FileDrop=i}),i(it,[Q,u,Y],function(e,t,n){return e.FileReader=t.extend({},n)}),i(rt,[Q,u,$],function(e,t,n){return e.FileReaderSync=t.extend({},n)}),i(ot,[Q,u,J],function(e,t,n){return e.XMLHttpRequest=t.extend({},n)}),i(at,[Q,u,Z],function(e,t,n){return e.Transporter=t.extend({},n)}),i(st,[Q,u,K],function(e,t,n){return e.Image=t.extend({},n,{getInfo:function(){var e=this.getRuntime(),n=["tiff","exif","gps"],i={meta:{}},r=e.shimExec.call(this,"Image","getInfo");return r.meta&&t.each(n,function(e){var t=r.meta[e],n,o,a,s;if(t&&t.keys)for(i.meta[e]={},o=0,a=t.keys.length;a>o;o++)n=t.keys[o],s=t[n],s&&(/^(\d|[1-9]\d+)$/.test(s)?s=parseInt(s,10):/^\d*\.\d+$/.test(s)&&(s=parseFloat(s)),i.meta[e][n]=s)}),i.width=parseInt(r.width,10),i.height=parseInt(r.height,10),i.size=parseInt(r.size,10),i.type=r.type,i.name=r.name,i}})}),i(ut,[u,p,g,d],function(e,t,n,i){function r(t){var r=this,s=n.capTest,u=n.capTrue;n.call(this,t,o,{access_binary:s(window.FileReader||window.File&&File.getAsDataURL),access_image_binary:!1,display_media:s(a.Image&&(i.can("create_canvas")||i.can("use_data_uri_over32kb"))),do_cors:!1,drag_and_drop:!1,filter_by_extension:s(function(){return"Chrome"===i.browser&&i.version>=28||"IE"===i.browser&&i.version>=10}()),resize_image:function(){return a.Image&&r.can("access_binary")&&i.can("create_canvas")},report_upload_progress:!1,return_response_headers:!1,return_response_type:function(t){return"json"===t&&window.JSON?!0:!!~e.inArray(t,["text","document",""])},return_status_code:function(t){return!e.arrayDiff(t,[200,404])},select_file:function(){return i.can("use_fileinput")},select_multiple:!1,send_binary_string:!1,send_custom_headers:!1,send_multipart:!0,slice_blob:!1,stream_upload:function(){return r.can("select_file")},summon_file_dialog:s(function(){return"Firefox"===i.browser&&i.version>=4||"Opera"===i.browser&&i.version>=12||!!~e.inArray(i.browser,["Chrome","Safari"])}()),upload_filesize:u,use_http_method:function(t){return!e.arrayDiff(t,["GET","POST"])}}),e.extend(this,{init:function(){this.trigger("Init")},destroy:function(e){return function(){e.call(r),e=r=null}}(this.destroy)}),e.extend(this.getShim(),a)}var o="html4",a={};return n.addConstructor(o,r),a}),i(ct,[ut,u,f,L,l,d],function(e,t,n,i,r,o){function a(){function e(){var r=this,l=r.getRuntime(),d,f,p,h,m,g;g=t.guid("uid_"),d=l.getShimContainer(),a&&(p=n.get(a+"_form"),p&&t.extend(p.style,{top:"100%"})),h=document.createElement("form"),h.setAttribute("id",g+"_form"),h.setAttribute("method","post"),h.setAttribute("enctype","multipart/form-data"),h.setAttribute("encoding","multipart/form-data"),t.extend(h.style,{overflow:"hidden",position:"absolute",top:0,left:0,width:"100%",height:"100%"}),m=document.createElement("input"),m.setAttribute("id",g),m.setAttribute("type","file"),m.setAttribute("name",c.name||"Filedata"),m.setAttribute("accept",u.join(",")),t.extend(m.style,{fontSize:"999px",opacity:0}),h.appendChild(m),d.appendChild(h),t.extend(m.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),"IE"===o.browser&&o.version<10&&t.extend(m.style,{filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}),m.onchange=function(){var t;this.value&&(t=this.files?this.files[0]:{name:this.value},s=[t],this.onchange=function(){},e.call(r),r.bind("change",function i(){var e=n.get(g),t=n.get(g+"_form"),o;r.unbind("change",i),r.files.length&&e&&t&&(o=r.files[0],e.setAttribute("id",o.uid),t.setAttribute("id",o.uid+"_form"),t.setAttribute("target",o.uid+"_iframe")),e=t=null},998),m=h=null,r.trigger("change"))},l.can("summon_file_dialog")&&(f=n.get(c.browse_button),i.removeEvent(f,"click",r.uid),i.addEvent(f,"click",function(e){m&&!m.disabled&&m.click(),e.preventDefault()},r.uid)),a=g,d=p=f=null}var a,s=[],u=[],c;t.extend(this,{init:function(t){var o=this,a=o.getRuntime(),s;c=t,u=t.accept.mimes||r.extList2mimes(t.accept,a.can("filter_by_extension")),s=a.getShimContainer(),function(){var e,r,u;e=n.get(t.browse_button),a.can("summon_file_dialog")&&("static"===n.getStyle(e,"position")&&(e.style.position="relative"),r=parseInt(n.getStyle(e,"z-index"),10)||1,e.style.zIndex=r,s.style.zIndex=r-1),u=a.can("summon_file_dialog")?e:s,i.addEvent(u,"mouseover",function(){o.trigger("mouseenter")},o.uid),i.addEvent(u,"mouseout",function(){o.trigger("mouseleave")},o.uid),i.addEvent(u,"mousedown",function(){o.trigger("mousedown")},o.uid),i.addEvent(n.get(t.container),"mouseup",function(){o.trigger("mouseup")},o.uid),e=null}(),e.call(this),s=null,o.trigger({type:"ready",async:!0})},getFiles:function(){return s},disable:function(e){var t;(t=n.get(a))&&(t.disabled=!!e)},destroy:function(){var e=this.getRuntime(),t=e.getShim(),r=e.getShimContainer();i.removeAllEvents(r,this.uid),i.removeAllEvents(c&&n.get(c.container),this.uid),i.removeAllEvents(c&&n.get(c.browse_button),this.uid),r&&(r.innerHTML=""),t.removeInstance(this.uid),a=s=u=c=r=t=null}})}return e.FileInput=a}),i(lt,[ut,F],function(e,t){return e.FileReader=t}),i(dt,[ut,u,f,b,p,L,y,S],function(e,t,n,i,r,o,a,s){function u(){function e(e){var t=this,i,r,a,s,u=!1;if(l){if(i=l.id.replace(/_iframe$/,""),r=n.get(i+"_form")){for(a=r.getElementsByTagName("input"),s=a.length;s--;)switch(a[s].getAttribute("type")){case"hidden":a[s].parentNode.removeChild(a[s]);break;case"file":u=!0}a=[],u||r.parentNode.removeChild(r),r=null}setTimeout(function(){o.removeEvent(l,"load",t.uid),l.parentNode&&l.parentNode.removeChild(l);var n=t.getRuntime().getShimContainer();n.children.length||n.parentNode.removeChild(n),n=l=null,e()},1)}}var u,c,l;t.extend(this,{send:function(d,f){function p(){var n=m.getShimContainer()||document.body,r=document.createElement("div");r.innerHTML='<iframe id="'+g+'_iframe" name="'+g+'_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>',l=r.firstChild,n.appendChild(l),o.addEvent(l,"load",function(){var n;try{n=l.contentWindow.document||l.contentDocument||window.frames[l.id].document,/^4(0[0-9]|1[0-7]|2[2346])\s/.test(n.title)?u=n.title.replace(/^(\d+).*$/,"$1"):(u=200,c=t.trim(n.body.innerHTML),h.trigger({type:"progress",loaded:c.length,total:c.length}),w&&h.trigger({type:"uploadprogress",loaded:w.size||1025,total:w.size||1025}))}catch(r){if(!i.hasSameOrigin(d.url))return e.call(h,function(){h.trigger("error")}),void 0;u=404}e.call(h,function(){h.trigger("load")})},h.uid)}var h=this,m=h.getRuntime(),g,v,y,w;if(u=c=null,f instanceof s&&f.hasBlob()){if(w=f.getBlob(),g=w.uid,y=n.get(g),v=n.get(g+"_form"),!v)throw new r.DOMException(r.DOMException.NOT_FOUND_ERR)}else g=t.guid("uid_"),v=document.createElement("form"),v.setAttribute("id",g+"_form"),v.setAttribute("method",d.method),v.setAttribute("enctype","multipart/form-data"),v.setAttribute("encoding","multipart/form-data"),v.setAttribute("target",g+"_iframe"),m.getShimContainer().appendChild(v);f instanceof s&&f.each(function(e,n){if(e instanceof a)y&&y.setAttribute("name",n);else{var i=document.createElement("input");t.extend(i,{type:"hidden",name:n,value:e}),y?v.insertBefore(i,y):v.appendChild(i)}}),v.setAttribute("action",d.url),p(),v.submit(),h.trigger("loadstart")},getStatus:function(){return u},getResponse:function(e){if("json"===e&&"string"===t.typeOf(c)&&window.JSON)try{return JSON.parse(c.replace(/^\s*<pre[^>]*>/,"").replace(/<\/pre>\s*$/,""))}catch(n){return null}return c},abort:function(){var t=this;l&&l.contentWindow&&(l.contentWindow.stop?l.contentWindow.stop():l.contentWindow.document.execCommand?l.contentWindow.document.execCommand("Stop"):l.src="about:blank"),e.call(this,function(){t.dispatchEvent("abort")})}})}return e.XMLHttpRequest=u}),i(ft,[ut,X],function(e,t){return e.Image=t}),a([u,c,l,d,f,p,h,m,g,v,y,w,E,_,x,R,b,T,S,A,O,I,L])}(this);;(function(){"use strict";var e={},t=moxie.core.utils.Basic.inArray;return function n(r){var i,s;for(i in r)s=typeof r[i],s==="object"&&!~t(i,["Exceptions","Env","Mime"])?n(r[i]):s==="function"&&(e[i]=r[i])}(window.moxie),e.Env=window.moxie.core.utils.Env,e.Mime=window.moxie.core.utils.Mime,e.Exceptions=window.moxie.core.Exceptions,window.mOxie=e,window.o||(window.o=e),e})();

;(function(e,t,n){function s(e){function r(e,t,r){var i={chunks:"slice_blob",jpgresize:"send_binary_string",pngresize:"send_binary_string",progress:"report_upload_progress",multi_selection:"select_multiple",dragdrop:"drag_and_drop",drop_element:"drag_and_drop",headers:"send_custom_headers",canSendBinary:"send_binary",triggerDialog:"summon_file_dialog"};i[e]?n[i[e]]=t:r||(n[e]=t)}var t=e.required_features,n={};return typeof t=="string"?o.each(t.split(/\s*,\s*/),function(e){r(e,!0)}):typeof t=="object"?o.each(t,function(e,t){r(t,e)}):t===!0&&(e.multipart||(n.send_binary_string=!0),e.chunk_size>0&&(n.slice_blob=!0),e.resize.enabled&&(n.send_binary_string=!0),o.each(e,function(e,t){r(t,!!e,!0)})),n}var r=e.setTimeout,i={},o={VERSION:"2.1.1",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,FILE_DUPLICATE_ERROR:-602,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:t.mimes,ua:t.ua,typeOf:t.typeOf,extend:t.extend,guid:t.guid,get:function(n){var r=[],i;t.typeOf(n)!=="array"&&(n=[n]);var s=n.length;while(s--)i=t.get(n[s]),i&&r.push(i);return r.length?r:null},each:t.each,getPos:t.getPos,getSize:t.getSize,xmlEncode:function(e){var t={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},n=/[<>&\"\']/g;return e?(""+e).replace(n,function(e){return t[e]?"&"+t[e]+";":e}):e},toArray:t.toArray,inArray:t.inArray,addI18n:t.addI18n,translate:t.translate,isEmptyObj:t.isEmptyObj,hasClass:t.hasClass,addClass:t.addClass,removeClass:t.removeClass,getStyle:t.getStyle,addEvent:t.addEvent,removeEvent:t.removeEvent,removeAllEvents:t.removeAllEvents,cleanName:function(e){var t,n;n=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(t=0;t<n.length;t+=2)e=e.replace(n[t],n[t+1]);return e=e.replace(/\s+/g,"_"),e=e.replace(/[^a-z0-9_\-\.]+/gi,""),e},buildUrl:function(e,t){var n="";return o.each(t,function(e,t){n+=(n?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(e)}),n&&(e+=(e.indexOf("?")>0?"&":"?")+n),e},formatSize:function(e){function t(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}if(e===n||/\D/.test(e))return o.translate("N/A");var r=Math.pow(1024,4);return e>r?t(e/r,1)+" "+o.translate("tb"):e>(r/=1024)?t(e/r,1)+" "+o.translate("gb"):e>(r/=1024)?t(e/r,1)+" "+o.translate("mb"):e>1024?Math.round(e/1024)+" "+o.translate("kb"):e+" "+o.translate("b")},parseSize:t.parseSizeStr,predictRuntime:function(e,n){var r,i;return r=new o.Uploader(e),i=t.Runtime.thatCan(r.getOption().required_features,n||e.runtimes),r.destroy(),i},addFileFilter:function(e,t){i[e]=t}};o.addFileFilter("mime_types",function(e,t,n){e.length&&!e.regexp.test(t.name)?(this.trigger("Error",{code:o.FILE_EXTENSION_ERROR,message:o.translate("File extension error."),file:t}),n(!1)):n(!0)}),o.addFileFilter("max_file_size",function(e,t,n){var r;e=o.parseSize(e),t.size!==r&&e&&t.size>e?(this.trigger("Error",{code:o.FILE_SIZE_ERROR,message:o.translate("File size error."),file:t}),n(!1)):n(!0)}),o.addFileFilter("prevent_duplicates",function(e,t,n){if(e){var r=this.files.length;while(r--)if(t.name===this.files[r].name&&t.size===this.files[r].size){this.trigger("Error",{code:o.FILE_DUPLICATE_ERROR,message:o.translate("Duplicate file error."),file:t}),n(!1);return}}n(!0)}),o.Uploader=function(e){function g(){var e,t=0,n;if(this.state==o.STARTED){for(n=0;n<f.length;n++)!e&&f[n].status==o.QUEUED?(e=f[n],this.trigger("BeforeUpload",e)&&(e.status=o.UPLOADING,this.trigger("UploadFile",e))):t++;t==f.length&&(this.state!==o.STOPPED&&(this.state=o.STOPPED,this.trigger("StateChanged")),this.trigger("UploadComplete",f))}}function y(e){e.percent=e.size>0?Math.ceil(e.loaded/e.size*100):100,b()}function b(){var e,t;d.reset();for(e=0;e<f.length;e++)t=f[e],t.size!==n?(d.size+=t.origSize,d.loaded+=t.loaded*t.origSize/t.size):d.size=n,t.status==o.DONE?d.uploaded++:t.status==o.FAILED?d.failed++:d.queued++;d.size===n?d.percent=f.length>0?Math.ceil(d.uploaded/f.length*100):0:(d.bytesPerSec=Math.ceil(d.loaded/((+(new Date)-p||1)/1e3)),d.percent=d.size>0?Math.ceil(d.loaded/d.size*100):0)}function w(){var e=c[0]||h[0];return e?e.getRuntime().uid:!1}function E(e,n){if(e.ruid){var r=t.Runtime.getInfo(e.ruid);if(r)return r.can(n)}return!1}function S(){this.bind("FilesAdded",C),this.bind("CancelUpload",M),this.bind("BeforeUpload",k),this.bind("UploadFile",L),this.bind("UploadProgress",A),this.bind("StateChanged",O),this.bind("QueueChanged",b),this.bind("Error",D),this.bind("FileUploaded",_),this.bind("Destroy",P)}function x(e,n){var r=this,i=0,s=[],u={accept:e.filters.mime_types,runtime_order:e.runtimes,required_caps:e.required_features,preferred_caps:l,swf_url:e.flash_swf_url,xap_url:e.silverlight_xap_url};o.each(e.runtimes.split(/\s*,\s*/),function(t){e[t]&&(u[t]=e[t])}),e.browse_button&&o.each(e.browse_button,function(n){s.push(function(s){var a=new t.FileInput(o.extend({},u,{name:e.file_data_name,multiple:e.multi_selection,container:e.container,browse_button:n}));a.onready=function(){var e=t.Runtime.getInfo(this.ruid);t.extend(r.features,{chunks:e.can("slice_blob"),multipart:e.can("send_multipart"),multi_selection:e.can("select_multiple")}),i++,c.push(this),s()},a.onchange=function(){r.addFile(this.files)},a.bind("mouseenter mouseleave mousedown mouseup",function(r){v||(e.browse_button_hover&&("mouseenter"===r.type?t.addClass(n,e.browse_button_hover):"mouseleave"===r.type&&t.removeClass(n,e.browse_button_hover)),e.browse_button_active&&("mousedown"===r.type?t.addClass(n,e.browse_button_active):"mouseup"===r.type&&t.removeClass(n,e.browse_button_active)))}),a.bind("error runtimeerror",function(){a=null,s()}),a.init()})}),e.drop_element&&o.each(e.drop_element,function(e){s.push(function(n){var s=new t.FileDrop(o.extend({},u,{drop_zone:e}));s.onready=function(){var e=t.Runtime.getInfo(this.ruid);r.features.dragdrop=e.can("drag_and_drop"),i++,h.push(this),n()},s.ondrop=function(){r.addFile(this.files)},s.bind("error runtimeerror",function(){s=null,n()}),s.init()})}),t.inSeries(s,function(){typeof n=="function"&&n(i)})}function T(e,n,r){var i=new t.Image;try{i.onload=function(){i.downsize(n.width,n.height,n.crop,n.preserve_headers)},i.onresize=function(){r(this.getAsBlob(e.type,n.quality)),this.destroy()},i.onerror=function(){r(e)},i.load(e)}catch(s){r(e)}}function N(e,n,r){function f(e,t,n){var r=a[e];switch(e){case"max_file_size":e==="max_file_size"&&(a.max_file_size=a.filters.max_file_size=t);break;case"chunk_size":if(t=o.parseSize(t))a[e]=t;break;case"filters":o.typeOf(t)==="array"&&(t={mime_types:t}),n?o.extend(a.filters,t):a.filters=t,t.mime_types&&(a.filters.mime_types.regexp=function(e){var t=[];return o.each(e,function(e){o.each(e.extensions.split(/,/),function(e){/^\s*\*\s*$/.test(e)?t.push("\\.*"):t.push("\\."+e.replace(new RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,"\\$&")+"]","g"),"\\$&"))})}),new RegExp("("+t.join("|")+")$","i")}(a.filters.mime_types));break;case"resize":n?o.extend(a.resize,t,{enabled:!0}):a.resize=t;break;case"prevent_duplicates":a.prevent_duplicates=a.filters.prevent_duplicates=!!t;break;case"browse_button":case"drop_element":t=o.get(t);case"container":case"runtimes":case"multi_selection":case"flash_swf_url":case"silverlight_xap_url":a[e]=t,n||(u=!0);break;default:a[e]=t}n||i.trigger("OptionChanged",e,t,r)}var i=this,u=!1;typeof e=="object"?o.each(e,function(e,t){f(t,e,r)}):f(e,n,r),r?(a.required_features=s(o.extend({},a)),l=s(o.extend({},a,{required_features:!0}))):u&&(i.trigger("Destroy"),x.call(i,a,function(e){e?(i.runtime=t.Runtime.getInfo(w()).type,i.trigger("Init",{runtime:i.runtime}),i.trigger("PostInit")):i.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")})}))}function C(e,t){[].push.apply(f,t),e.trigger("QueueChanged"),e.refresh()}function k(e,t){if(a.unique_names){var n=t.name.match(/\.([^.]+)$/),r="part";n&&(r=n[1]),t.target_name=t.id+"."+r}}function L(e,n){function h(){u-->0?r(p,1e3):(n.loaded=f,e.trigger("Error",{code:o.HTTP_ERROR,message:o.translate("HTTP Error."),file:n,response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()}))}function p(){var d,v,g,y;if(n.status==o.DONE||n.status==o.FAILED||e.state==o.STOPPED)return;g={name:n.target_name||n.name},s&&a.chunks&&c.size>s?(y=Math.min(s,c.size-f),d=c.slice(f,f+y)):(y=c.size,d=c),s&&a.chunks&&(e.settings.send_chunk_number?(g.chunk=Math.ceil(f/s),g.chunks=Math.ceil(c.size/s)):(g.offset=f,g.total=c.size)),m=new t.XMLHttpRequest,m.upload&&(m.upload.onprogress=function(t){n.loaded=Math.min(n.size,f+t.loaded),e.trigger("UploadProgress",n)}),m.onload=function(){if(m.status>=400){h();return}u=e.settings.max_retries,y<c.size?(d.destroy(),f+=y,n.loaded=Math.min(f,c.size),e.trigger("ChunkUploaded",n,{offset:n.loaded,total:c.size,response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()}),t.Env.browser==="Android Browser"&&e.trigger("UploadProgress",n)):n.loaded=n.size,d=v=null,!f||f>=c.size?(n.size!=n.origSize&&(c.destroy(),c=null),e.trigger("UploadProgress",n),n.status=o.DONE,e.trigger("FileUploaded",n,{response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()})):r(p,1)},m.onerror=function(){h()},m.onloadend=function(){this.destroy(),m=null},e.settings.multipart&&a.multipart?(g.name=n.target_name||n.name,m.open("post",i,!0),o.each(e.settings.headers,function(e,t){m.setRequestHeader(t,e)}),v=new t.FormData,o.each(o.extend(g,e.settings.multipart_params),function(e,t){v.append(t,e)}),v.append(e.settings.file_data_name,d),m.send(v,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:l,swf_url:e.settings.flash_swf_url,xap_url:e.settings.silverlight_xap_url})):(i=o.buildUrl(e.settings.url,o.extend(g,e.settings.multipart_params)),m.open("post",i,!0),m.setRequestHeader("Content-Type","application/octet-stream"),o.each(e.settings.headers,function(e,t){m.setRequestHeader(t,e)}),m.send(d,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:l,swf_url:e.settings.flash_swf_url,xap_url:e.settings.silverlight_xap_url}))}var i=e.settings.url,s=e.settings.chunk_size,u=e.settings.max_retries,a=e.features,f=0,c;n.loaded&&(f=n.loaded=s*Math.floor(n.loaded/s)),c=n.getSource(),e.settings.resize.enabled&&E(c,"send_binary_string")&&!!~t.inArray(c.type,["image/jpeg","image/png"])?T.call(this,c,e.settings.resize,function(e){c=e,n.size=e.size,p()}):p()}function A(e,t){y(t)}function O(e){if(e.state==o.STARTED)p=+(new Date);else if(e.state==o.STOPPED)for(var t=e.files.length-1;t>=0;t--)e.files[t].status==o.UPLOADING&&(e.files[t].status=o.QUEUED,b())}function M(){m&&m.abort()}function _(e){b(),r(function(){g.call(e)},1)}function D(e,t){t.file&&(t.file.status=o.FAILED,y(t.file),e.state==o.STARTED&&(e.trigger("CancelUpload"),r(function(){g.call(e)},1)))}function P(e){e.stop(),o.each(f,function(e){e.destroy()}),f=[],c.length&&(o.each(c,function(e){e.destroy()}),c=[]),h.length&&(o.each(h,function(e){e.destroy()}),h=[]),l={},v=!1,p=m=null,d.reset()}var u=o.guid(),a,f=[],l={},c=[],h=[],p,d,v=!1,m;a={runtimes:t.Runtime.order,max_retries:0,chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",flash_swf_url:"js/Moxie.swf",silverlight_xap_url:"js/Moxie.xap",filters:{mime_types:[],prevent_duplicates:!1,max_file_size:0},resize:{enabled:!1,preserve_headers:!0,crop:!1},send_chunk_number:!0},N.call(this,e,null,!0),d=new o.QueueProgress,o.extend(this,{id:u,uid:u,state:o.STOPPED,features:{},runtime:null,files:f,settings:a,total:d,init:function(){var e=this;typeof a.preinit=="function"?a.preinit(e):o.each(a.preinit,function(t,n){e.bind(n,t)});if(!a.browse_button||!a.url){this.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")});return}S.call(this),x.call(this,a,function(n){typeof a.init=="function"?a.init(e):o.each(a.init,function(t,n){e.bind(n,t)}),n?(e.runtime=t.Runtime.getInfo(w()).type,e.trigger("Init",{runtime:e.runtime}),e.trigger("PostInit")):e.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")})})},setOption:function(e,t){N.call(this,e,t,!this.runtime)},getOption:function(e){return e?a[e]:a},refresh:function(){c.length&&o.each(c,function(e){e.trigger("Refresh")}),this.trigger("Refresh")},start:function(){this.state!=o.STARTED&&(this.state=o.STARTED,this.trigger("StateChanged"),g.call(this))},stop:function(){this.state!=o.STOPPED&&(this.state=o.STOPPED,this.trigger("StateChanged"),this.trigger("CancelUpload"))},disableBrowse:function(){v=arguments[0]!==n?arguments[0]:!0,c.length&&o.each(c,function(e){e.disable(v)}),this.trigger("DisableBrowse",v)},getFile:function(e){var t;for(t=f.length-1;t>=0;t--)if(f[t].id===e)return f[t]},addFile:function(e,n){function l(e,n){var r=[];t.each(s.settings.filters,function(t,n){i[n]&&r.push(function(r){i[n].call(s,t,e,function(e){r(!e)})})}),t.inSeries(r,n)}function c(e){var i=t.typeOf(e);if(e instanceof t.File){if(!e.ruid&&!e.isDetached()){if(!f)return!1;e.ruid=f,e.connectRuntime(f)}c(new o.File(e))}else e instanceof t.Blob?(c(e.getSource()),e.destroy()):e instanceof o.File?(n&&(e.name=n),u.push(function(t){l(e,function(n){n||(a.push(e),s.trigger("FileFiltered",e)),r(t,1)})})):t.inArray(i,["file","blob"])!==-1?c(new t.File(null,e)):i==="node"&&t.typeOf(e.files)==="filelist"?t.each(e.files,c):i==="array"&&(n=null,t.each(e,c))}var s=this,u=[],a=[],f;f=w(),c(e),u.length&&t.inSeries(u,function(){a.length&&s.trigger("FilesAdded",a)})},removeFile:function(e){var t=typeof e=="string"?e:e.id;for(var n=f.length-1;n>=0;n--)if(f[n].id===t)return this.splice(n,1)[0]},splice:function(e,t){var r=f.splice(e===n?0:e,t===n?f.length:t),i=!1;return this.state==o.STARTED&&(i=!0,this.stop()),this.trigger("FilesRemoved",r),o.each(r,function(e){e.destroy()}),this.trigger("QueueChanged"),this.refresh(),i&&this.start(),r},bind:function(e,t,n){var r=this;o.Uploader.prototype.bind.call(this,e,function(){var e=[].slice.call(arguments);return e.splice(0,1,r),t.apply(this,e)},0,n)},destroy:function(){this.trigger("Destroy"),a=d=null,this.unbindAll()}})},o.Uploader.prototype=t.EventTarget.instance,o.File=function(){function n(n){o.extend(this,{id:o.guid(),name:n.name||n.fileName,type:n.type||"",size:n.size||n.fileSize,origSize:n.size||n.fileSize,loaded:0,percent:0,status:o.QUEUED,lastModifiedDate:n.lastModifiedDate||(new Date).toLocaleString(),getNative:function(){var e=this.getSource().getSource();return t.inArray(t.typeOf(e),["blob","file"])!==-1?e:null},getSource:function(){return e[this.id]?e[this.id]:null},destroy:function(){var t=this.getSource();t&&(t.destroy(),delete e[this.id])}}),e[this.id]=n}var e={};return n}(),o.QueueProgress=function(){var e=this;e.size=0,e.loaded=0,e.uploaded=0,e.failed=0,e.queued=0,e.percent=0,e.bytesPerSec=0,e.reset=function(){e.size=e.loaded=e.uploaded=e.failed=e.queued=e.percent=e.bytesPerSec=0}},e.plupload=o})(window,mOxie);

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ElasticProgress = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    ;(function (exports) {
        'use strict';

        var Arr = (typeof Uint8Array !== 'undefined')
            ? Uint8Array
            : Array

        var PLUS   = '+'.charCodeAt(0)
        var SLASH  = '/'.charCodeAt(0)
        var NUMBER = '0'.charCodeAt(0)
        var LOWER  = 'a'.charCodeAt(0)
        var UPPER  = 'A'.charCodeAt(0)
        var PLUS_URL_SAFE = '-'.charCodeAt(0)
        var SLASH_URL_SAFE = '_'.charCodeAt(0)

        function decode (elt) {
            var code = elt.charCodeAt(0)
            if (code === PLUS ||
                code === PLUS_URL_SAFE)
                return 62 // '+'
            if (code === SLASH ||
                code === SLASH_URL_SAFE)
                return 63 // '/'
            if (code < NUMBER)
                return -1 //no match
            if (code < NUMBER + 10)
                return code - NUMBER + 26 + 26
            if (code < UPPER + 26)
                return code - UPPER
            if (code < LOWER + 26)
                return code - LOWER + 26
        }

        function b64ToByteArray (b64) {
            var i, j, l, tmp, placeHolders, arr

            if (b64.length % 4 > 0) {
                throw new Error('Invalid string. Length must be a multiple of 4')
            }

            // the number of equal signs (place holders)
            // if there are two placeholders, than the two characters before it
            // represent one byte
            // if there is only one, then the three characters before it represent 2 bytes
            // this is just a cheap hack to not do indexOf twice
            var len = b64.length
            placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

            // base64 is 4/3 + up to two characters of the original data
            arr = new Arr(b64.length * 3 / 4 - placeHolders)

            // if there are placeholders, only get up to the last complete 4 chars
            l = placeHolders > 0 ? b64.length - 4 : b64.length

            var L = 0

            function push (v) {
                arr[L++] = v
            }

            for (i = 0, j = 0; i < l; i += 4, j += 3) {
                tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
                push((tmp & 0xFF0000) >> 16)
                push((tmp & 0xFF00) >> 8)
                push(tmp & 0xFF)
            }

            if (placeHolders === 2) {
                tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
                push(tmp & 0xFF)
            } else if (placeHolders === 1) {
                tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
                push((tmp >> 8) & 0xFF)
                push(tmp & 0xFF)
            }

            return arr
        }

        function uint8ToBase64 (uint8) {
            var i,
                extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
                output = "",
                temp, length

            function encode (num) {
                return lookup.charAt(num)
            }

            function tripletToBase64 (num) {
                return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
            }

            // go through the array every three bytes, we'll deal with trailing stuff later
            for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
                temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
                output += tripletToBase64(temp)
            }

            // pad the end with zeros, but make sure to not forget the extra bytes
            switch (extraBytes) {
                case 1:
                    temp = uint8[uint8.length - 1]
                    output += encode(temp >> 2)
                    output += encode((temp << 4) & 0x3F)
                    output += '=='
                    break
                case 2:
                    temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
                    output += encode(temp >> 10)
                    output += encode((temp >> 4) & 0x3F)
                    output += encode((temp << 2) & 0x3F)
                    output += '='
                    break
            }

            return output
        }

        exports.toByteArray = b64ToByteArray
        exports.fromByteArray = uint8ToBase64
    }(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
    arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){

    var base64 = require('base64-js')
    var ieee754 = require('ieee754')
    var isArray = require('is-array')

    exports.Buffer = Buffer
    exports.SlowBuffer = SlowBuffer
    exports.INSPECT_MAX_BYTES = 50
    Buffer.poolSize = 8192 // not used by this implementation

    var rootParent = {}

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
     *     on objects.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.

     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = (function () {
        function Bar () {}
        try {
            var arr = new Uint8Array(1)
            arr.foo = function () { return 42 }
            arr.constructor = Bar
            return arr.foo() === 42 && // typed array instances can be augmented
                arr.constructor === Bar && // constructor can be set
                typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
                arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
        } catch (e) {
            return false
        }
    })()

    function kMaxLength () {
        return Buffer.TYPED_ARRAY_SUPPORT
            ? 0x7fffffff
            : 0x3fffffff
    }

    /**
     * Class: Buffer
     * =============
     *
     * The Buffer constructor returns instances of `Uint8Array` that are augmented
     * with function properties for all the node `Buffer` API functions. We use
     * `Uint8Array` so that square bracket notation works as expected -- it returns
     * a single octet.
     *
     * By augmenting the instances, we can avoid modifying the `Uint8Array`
     * prototype.
     */
    function Buffer (arg) {
        if (!(this instanceof Buffer)) {
            // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
            if (arguments.length > 1) return new Buffer(arg, arguments[1])
            return new Buffer(arg)
        }

        this.length = 0
        this.parent = undefined

        // Common case.
        if (typeof arg === 'number') {
            return fromNumber(this, arg)
        }

        // Slightly less common case.
        if (typeof arg === 'string') {
            return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
        }

        // Unusual.
        return fromObject(this, arg)
    }

    function fromNumber (that, length) {
        that = allocate(that, length < 0 ? 0 : checked(length) | 0)
        if (!Buffer.TYPED_ARRAY_SUPPORT) {
            for (var i = 0; i < length; i++) {
                that[i] = 0
            }
        }
        return that
    }

    function fromString (that, string, encoding) {
        if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

        // Assumption: byteLength() return value is always < kMaxLength.
        var length = byteLength(string, encoding) | 0
        that = allocate(that, length)

        that.write(string, encoding)
        return that
    }

    function fromObject (that, object) {
        if (Buffer.isBuffer(object)) return fromBuffer(that, object)

        if (isArray(object)) return fromArray(that, object)

        if (object == null) {
            throw new TypeError('must start with number, buffer, array or string')
        }

        if (typeof ArrayBuffer !== 'undefined') {
            if (object.buffer instanceof ArrayBuffer) {
                return fromTypedArray(that, object)
            }
            if (object instanceof ArrayBuffer) {
                return fromArrayBuffer(that, object)
            }
        }

        if (object.length) return fromArrayLike(that, object)

        return fromJsonObject(that, object)
    }

    function fromBuffer (that, buffer) {
        var length = checked(buffer.length) | 0
        that = allocate(that, length)
        buffer.copy(that, 0, 0, length)
        return that
    }

    function fromArray (that, array) {
        var length = checked(array.length) | 0
        that = allocate(that, length)
        for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255
        }
        return that
    }

// Duplicate of fromArray() to keep fromArray() monomorphic.
    function fromTypedArray (that, array) {
        var length = checked(array.length) | 0
        that = allocate(that, length)
        // Truncating the elements is probably not what people expect from typed
        // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
        // of the old Buffer constructor.
        for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255
        }
        return that
    }

    function fromArrayBuffer (that, array) {
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            // Return an augmented `Uint8Array` instance, for best performance
            array.byteLength
            that = Buffer._augment(new Uint8Array(array))
        } else {
            // Fallback: Return an object instance of the Buffer class
            that = fromTypedArray(that, new Uint8Array(array))
        }
        return that
    }

    function fromArrayLike (that, array) {
        var length = checked(array.length) | 0
        that = allocate(that, length)
        for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255
        }
        return that
    }

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
    function fromJsonObject (that, object) {
        var array
        var length = 0

        if (object.type === 'Buffer' && isArray(object.data)) {
            array = object.data
            length = checked(array.length) | 0
        }
        that = allocate(that, length)

        for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255
        }
        return that
    }

    function allocate (that, length) {
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            // Return an augmented `Uint8Array` instance, for best performance
            that = Buffer._augment(new Uint8Array(length))
        } else {
            // Fallback: Return an object instance of the Buffer class
            that.length = length
            that._isBuffer = true
        }

        var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
        if (fromPool) that.parent = rootParent

        return that
    }

    function checked (length) {
        // Note: cannot use `length < kMaxLength` here because that fails when
        // length is NaN (which is otherwise coerced to zero.)
        if (length >= kMaxLength()) {
            throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                'size: 0x' + kMaxLength().toString(16) + ' bytes')
        }
        return length | 0
    }

    function SlowBuffer (subject, encoding) {
        if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

        var buf = new Buffer(subject, encoding)
        delete buf.parent
        return buf
    }

    Buffer.isBuffer = function isBuffer (b) {
        return !!(b != null && b._isBuffer)
    }

    Buffer.compare = function compare (a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
            throw new TypeError('Arguments must be Buffers')
        }

        if (a === b) return 0

        var x = a.length
        var y = b.length

        var i = 0
        var len = Math.min(x, y)
        while (i < len) {
            if (a[i] !== b[i]) break

            ++i
        }

        if (i !== len) {
            x = a[i]
            y = b[i]
        }

        if (x < y) return -1
        if (y < x) return 1
        return 0
    }

    Buffer.isEncoding = function isEncoding (encoding) {
        switch (String(encoding).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'binary':
            case 'base64':
            case 'raw':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return true
            default:
                return false
        }
    }

    Buffer.concat = function concat (list, length) {
        if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

        if (list.length === 0) {
            return new Buffer(0)
        }

        var i
        if (length === undefined) {
            length = 0
            for (i = 0; i < list.length; i++) {
                length += list[i].length
            }
        }

        var buf = new Buffer(length)
        var pos = 0
        for (i = 0; i < list.length; i++) {
            var item = list[i]
            item.copy(buf, pos)
            pos += item.length
        }
        return buf
    }

    function byteLength (string, encoding) {
        if (typeof string !== 'string') string = '' + string

        var len = string.length
        if (len === 0) return 0

        // Use a for loop to avoid recursion
        var loweredCase = false
        for (;;) {
            switch (encoding) {
                case 'ascii':
                case 'binary':
                // Deprecated
                case 'raw':
                case 'raws':
                    return len
                case 'utf8':
                case 'utf-8':
                    return utf8ToBytes(string).length
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return len * 2
                case 'hex':
                    return len >>> 1
                case 'base64':
                    return base64ToBytes(string).length
                default:
                    if (loweredCase) return utf8ToBytes(string).length // assume utf8
                    encoding = ('' + encoding).toLowerCase()
                    loweredCase = true
            }
        }
    }
    Buffer.byteLength = byteLength

// pre-set for values that may exist in the future
    Buffer.prototype.length = undefined
    Buffer.prototype.parent = undefined

    function slowToString (encoding, start, end) {
        var loweredCase = false

        start = start | 0
        end = end === undefined || end === Infinity ? this.length : end | 0

        if (!encoding) encoding = 'utf8'
        if (start < 0) start = 0
        if (end > this.length) end = this.length
        if (end <= start) return ''

        while (true) {
            switch (encoding) {
                case 'hex':
                    return hexSlice(this, start, end)

                case 'utf8':
                case 'utf-8':
                    return utf8Slice(this, start, end)

                case 'ascii':
                    return asciiSlice(this, start, end)

                case 'binary':
                    return binarySlice(this, start, end)

                case 'base64':
                    return base64Slice(this, start, end)

                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return utf16leSlice(this, start, end)

                default:
                    if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
                    encoding = (encoding + '').toLowerCase()
                    loweredCase = true
            }
        }
    }

    Buffer.prototype.toString = function toString () {
        var length = this.length | 0
        if (length === 0) return ''
        if (arguments.length === 0) return utf8Slice(this, 0, length)
        return slowToString.apply(this, arguments)
    }

    Buffer.prototype.equals = function equals (b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
        if (this === b) return true
        return Buffer.compare(this, b) === 0
    }

    Buffer.prototype.inspect = function inspect () {
        var str = ''
        var max = exports.INSPECT_MAX_BYTES
        if (this.length > 0) {
            str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
            if (this.length > max) str += ' ... '
        }
        return '<Buffer ' + str + '>'
    }

    Buffer.prototype.compare = function compare (b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
        if (this === b) return 0
        return Buffer.compare(this, b)
    }

    Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
        if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
        else if (byteOffset < -0x80000000) byteOffset = -0x80000000
        byteOffset >>= 0

        if (this.length === 0) return -1
        if (byteOffset >= this.length) return -1

        // Negative offsets start from the end of the buffer
        if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

        if (typeof val === 'string') {
            if (val.length === 0) return -1 // special case: looking for empty string always fails
            return String.prototype.indexOf.call(this, val, byteOffset)
        }
        if (Buffer.isBuffer(val)) {
            return arrayIndexOf(this, val, byteOffset)
        }
        if (typeof val === 'number') {
            if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
                return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
            }
            return arrayIndexOf(this, [ val ], byteOffset)
        }

        function arrayIndexOf (arr, val, byteOffset) {
            var foundIndex = -1
            for (var i = 0; byteOffset + i < arr.length; i++) {
                if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
                    if (foundIndex === -1) foundIndex = i
                    if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
                } else {
                    foundIndex = -1
                }
            }
            return -1
        }

        throw new TypeError('val must be string, number or Buffer')
    }

// `get` is deprecated
    Buffer.prototype.get = function get (offset) {
        console.log('.get() is deprecated. Access using array indexes instead.')
        return this.readUInt8(offset)
    }

// `set` is deprecated
    Buffer.prototype.set = function set (v, offset) {
        console.log('.set() is deprecated. Access using array indexes instead.')
        return this.writeUInt8(v, offset)
    }

    function hexWrite (buf, string, offset, length) {
        offset = Number(offset) || 0
        var remaining = buf.length - offset
        if (!length) {
            length = remaining
        } else {
            length = Number(length)
            if (length > remaining) {
                length = remaining
            }
        }

        // must be an even number of digits
        var strLen = string.length
        if (strLen % 2 !== 0) throw new Error('Invalid hex string')

        if (length > strLen / 2) {
            length = strLen / 2
        }
        for (var i = 0; i < length; i++) {
            var parsed = parseInt(string.substr(i * 2, 2), 16)
            if (isNaN(parsed)) throw new Error('Invalid hex string')
            buf[offset + i] = parsed
        }
        return i
    }

    function utf8Write (buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite (buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function binaryWrite (buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length)
    }

    function base64Write (buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write (buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write (string, offset, length, encoding) {
        // Buffer#write(string)
        if (offset === undefined) {
            encoding = 'utf8'
            length = this.length
            offset = 0
            // Buffer#write(string, encoding)
        } else if (length === undefined && typeof offset === 'string') {
            encoding = offset
            length = this.length
            offset = 0
            // Buffer#write(string, offset[, length][, encoding])
        } else if (isFinite(offset)) {
            offset = offset | 0
            if (isFinite(length)) {
                length = length | 0
                if (encoding === undefined) encoding = 'utf8'
            } else {
                encoding = length
                length = undefined
            }
            // legacy write(string, encoding, offset, length) - remove in v0.13
        } else {
            var swap = encoding
            encoding = offset
            offset = length | 0
            length = swap
        }

        var remaining = this.length - offset
        if (length === undefined || length > remaining) length = remaining

        if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
            throw new RangeError('attempt to write outside buffer bounds')
        }

        if (!encoding) encoding = 'utf8'

        var loweredCase = false
        for (;;) {
            switch (encoding) {
                case 'hex':
                    return hexWrite(this, string, offset, length)

                case 'utf8':
                case 'utf-8':
                    return utf8Write(this, string, offset, length)

                case 'ascii':
                    return asciiWrite(this, string, offset, length)

                case 'binary':
                    return binaryWrite(this, string, offset, length)

                case 'base64':
                    // Warning: maxLength not taken into account in base64Write
                    return base64Write(this, string, offset, length)

                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return ucs2Write(this, string, offset, length)

                default:
                    if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
                    encoding = ('' + encoding).toLowerCase()
                    loweredCase = true
            }
        }
    }

    Buffer.prototype.toJSON = function toJSON () {
        return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }

    function base64Slice (buf, start, end) {
        if (start === 0 && end === buf.length) {
            return base64.fromByteArray(buf)
        } else {
            return base64.fromByteArray(buf.slice(start, end))
        }
    }

    function utf8Slice (buf, start, end) {
        end = Math.min(buf.length, end)
        var res = []

        var i = start
        while (i < end) {
            var firstByte = buf[i]
            var codePoint = null
            var bytesPerSequence = (firstByte > 0xEF) ? 4
                : (firstByte > 0xDF) ? 3
                : (firstByte > 0xBF) ? 2
                : 1

            if (i + bytesPerSequence <= end) {
                var secondByte, thirdByte, fourthByte, tempCodePoint

                switch (bytesPerSequence) {
                    case 1:
                        if (firstByte < 0x80) {
                            codePoint = firstByte
                        }
                        break
                    case 2:
                        secondByte = buf[i + 1]
                        if ((secondByte & 0xC0) === 0x80) {
                            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                            if (tempCodePoint > 0x7F) {
                                codePoint = tempCodePoint
                            }
                        }
                        break
                    case 3:
                        secondByte = buf[i + 1]
                        thirdByte = buf[i + 2]
                        if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
                            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                                codePoint = tempCodePoint
                            }
                        }
                        break
                    case 4:
                        secondByte = buf[i + 1]
                        thirdByte = buf[i + 2]
                        fourthByte = buf[i + 3]
                        if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
                            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                                codePoint = tempCodePoint
                            }
                        }
                }
            }

            if (codePoint === null) {
                // we did not generate a valid codePoint so insert a
                // replacement char (U+FFFD) and advance only 1 byte
                codePoint = 0xFFFD
                bytesPerSequence = 1
            } else if (codePoint > 0xFFFF) {
                // encode to utf16 (surrogate pair dance)
                codePoint -= 0x10000
                res.push(codePoint >>> 10 & 0x3FF | 0xD800)
                codePoint = 0xDC00 | codePoint & 0x3FF
            }

            res.push(codePoint)
            i += bytesPerSequence
        }

        return decodeCodePointsArray(res)
    }

    var MAX_ARGUMENTS_LENGTH = 0x1000

    function decodeCodePointsArray (codePoints) {
        var len = codePoints.length
        if (len <= MAX_ARGUMENTS_LENGTH) {
            return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
        }

        // Decode in chunks to avoid "call stack size exceeded".
        var res = ''
        var i = 0
        while (i < len) {
            res += String.fromCharCode.apply(
                String,
                codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
            )
        }
        return res
    }

    function asciiSlice (buf, start, end) {
        var ret = ''
        end = Math.min(buf.length, end)

        for (var i = start; i < end; i++) {
            ret += String.fromCharCode(buf[i] & 0x7F)
        }
        return ret
    }

    function binarySlice (buf, start, end) {
        var ret = ''
        end = Math.min(buf.length, end)

        for (var i = start; i < end; i++) {
            ret += String.fromCharCode(buf[i])
        }
        return ret
    }

    function hexSlice (buf, start, end) {
        var len = buf.length

        if (!start || start < 0) start = 0
        if (!end || end < 0 || end > len) end = len

        var out = ''
        for (var i = start; i < end; i++) {
            out += toHex(buf[i])
        }
        return out
    }

    function utf16leSlice (buf, start, end) {
        var bytes = buf.slice(start, end)
        var res = ''
        for (var i = 0; i < bytes.length; i += 2) {
            res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
        }
        return res
    }

    Buffer.prototype.slice = function slice (start, end) {
        var len = this.length
        start = ~~start
        end = end === undefined ? len : ~~end

        if (start < 0) {
            start += len
            if (start < 0) start = 0
        } else if (start > len) {
            start = len
        }

        if (end < 0) {
            end += len
            if (end < 0) end = 0
        } else if (end > len) {
            end = len
        }

        if (end < start) end = start

        var newBuf
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            newBuf = Buffer._augment(this.subarray(start, end))
        } else {
            var sliceLen = end - start
            newBuf = new Buffer(sliceLen, undefined)
            for (var i = 0; i < sliceLen; i++) {
                newBuf[i] = this[i + start]
            }
        }

        if (newBuf.length) newBuf.parent = this.parent || this

        return newBuf
    }

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
        if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
        if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
        offset = offset | 0
        byteLength = byteLength | 0
        if (!noAssert) checkOffset(offset, byteLength, this.length)

        var val = this[offset]
        var mul = 1
        var i = 0
        while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul
        }

        return val
    }

    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
        offset = offset | 0
        byteLength = byteLength | 0
        if (!noAssert) {
            checkOffset(offset, byteLength, this.length)
        }

        var val = this[offset + --byteLength]
        var mul = 1
        while (byteLength > 0 && (mul *= 0x100)) {
            val += this[offset + --byteLength] * mul
        }

        return val
    }

    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 1, this.length)
        return this[offset]
    }

    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 2, this.length)
        return this[offset] | (this[offset + 1] << 8)
    }

    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 2, this.length)
        return (this[offset] << 8) | this[offset + 1]
    }

    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length)

        return ((this[offset]) |
            (this[offset + 1] << 8) |
            (this[offset + 2] << 16)) +
            (this[offset + 3] * 0x1000000)
    }

    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length)

        return (this[offset] * 0x1000000) +
            ((this[offset + 1] << 16) |
            (this[offset + 2] << 8) |
            this[offset + 3])
    }

    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
        offset = offset | 0
        byteLength = byteLength | 0
        if (!noAssert) checkOffset(offset, byteLength, this.length)

        var val = this[offset]
        var mul = 1
        var i = 0
        while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul
        }
        mul *= 0x80

        if (val >= mul) val -= Math.pow(2, 8 * byteLength)

        return val
    }

    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
        offset = offset | 0
        byteLength = byteLength | 0
        if (!noAssert) checkOffset(offset, byteLength, this.length)

        var i = byteLength
        var mul = 1
        var val = this[offset + --i]
        while (i > 0 && (mul *= 0x100)) {
            val += this[offset + --i] * mul
        }
        mul *= 0x80

        if (val >= mul) val -= Math.pow(2, 8 * byteLength)

        return val
    }

    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 1, this.length)
        if (!(this[offset] & 0x80)) return (this[offset])
        return ((0xff - this[offset] + 1) * -1)
    }

    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 2, this.length)
        var val = this[offset] | (this[offset + 1] << 8)
        return (val & 0x8000) ? val | 0xFFFF0000 : val
    }

    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 2, this.length)
        var val = this[offset + 1] | (this[offset] << 8)
        return (val & 0x8000) ? val | 0xFFFF0000 : val
    }

    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length)

        return (this[offset]) |
            (this[offset + 1] << 8) |
            (this[offset + 2] << 16) |
            (this[offset + 3] << 24)
    }

    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length)

        return (this[offset] << 24) |
            (this[offset + 1] << 16) |
            (this[offset + 2] << 8) |
            (this[offset + 3])
    }

    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length)
        return ieee754.read(this, offset, true, 23, 4)
    }

    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 4, this.length)
        return ieee754.read(this, offset, false, 23, 4)
    }

    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 8, this.length)
        return ieee754.read(this, offset, true, 52, 8)
    }

    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
        if (!noAssert) checkOffset(offset, 8, this.length)
        return ieee754.read(this, offset, false, 52, 8)
    }

    function checkInt (buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
        if (value > max || value < min) throw new RangeError('value is out of bounds')
        if (offset + ext > buf.length) throw new RangeError('index out of range')
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
        value = +value
        offset = offset | 0
        byteLength = byteLength | 0
        if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

        var mul = 1
        var i = 0
        this[offset] = value & 0xFF
        while (++i < byteLength && (mul *= 0x100)) {
            this[offset + i] = (value / mul) & 0xFF
        }

        return offset + byteLength
    }

    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
        value = +value
        offset = offset | 0
        byteLength = byteLength | 0
        if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

        var i = byteLength - 1
        var mul = 1
        this[offset + i] = value & 0xFF
        while (--i >= 0 && (mul *= 0x100)) {
            this[offset + i] = (value / mul) & 0xFF
        }

        return offset + byteLength
    }

    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
        if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
        this[offset] = value
        return offset + 1
    }

    function objectWriteUInt16 (buf, value, offset, littleEndian) {
        if (value < 0) value = 0xffff + value + 1
        for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
            buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
                (littleEndian ? i : 1 - i) * 8
        }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value
            this[offset + 1] = (value >>> 8)
        } else {
            objectWriteUInt16(this, value, offset, true)
        }
        return offset + 2
    }

    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = (value >>> 8)
            this[offset + 1] = value
        } else {
            objectWriteUInt16(this, value, offset, false)
        }
        return offset + 2
    }

    function objectWriteUInt32 (buf, value, offset, littleEndian) {
        if (value < 0) value = 0xffffffff + value + 1
        for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
            buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
        }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset + 3] = (value >>> 24)
            this[offset + 2] = (value >>> 16)
            this[offset + 1] = (value >>> 8)
            this[offset] = value
        } else {
            objectWriteUInt32(this, value, offset, true)
        }
        return offset + 4
    }

    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = (value >>> 24)
            this[offset + 1] = (value >>> 16)
            this[offset + 2] = (value >>> 8)
            this[offset + 3] = value
        } else {
            objectWriteUInt32(this, value, offset, false)
        }
        return offset + 4
    }

    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1)

            checkInt(this, value, offset, byteLength, limit - 1, -limit)
        }

        var i = 0
        var mul = 1
        var sub = value < 0 ? 1 : 0
        this[offset] = value & 0xFF
        while (++i < byteLength && (mul *= 0x100)) {
            this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
        }

        return offset + byteLength
    }

    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1)

            checkInt(this, value, offset, byteLength, limit - 1, -limit)
        }

        var i = byteLength - 1
        var mul = 1
        var sub = value < 0 ? 1 : 0
        this[offset + i] = value & 0xFF
        while (--i >= 0 && (mul *= 0x100)) {
            this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
        }

        return offset + byteLength
    }

    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
        if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
        if (value < 0) value = 0xff + value + 1
        this[offset] = value
        return offset + 1
    }

    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value
            this[offset + 1] = (value >>> 8)
        } else {
            objectWriteUInt16(this, value, offset, true)
        }
        return offset + 2
    }

    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = (value >>> 8)
            this[offset + 1] = value
        } else {
            objectWriteUInt16(this, value, offset, false)
        }
        return offset + 2
    }

    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value
            this[offset + 1] = (value >>> 8)
            this[offset + 2] = (value >>> 16)
            this[offset + 3] = (value >>> 24)
        } else {
            objectWriteUInt32(this, value, offset, true)
        }
        return offset + 4
    }

    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
        value = +value
        offset = offset | 0
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
        if (value < 0) value = 0xffffffff + value + 1
        if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = (value >>> 24)
            this[offset + 1] = (value >>> 16)
            this[offset + 2] = (value >>> 8)
            this[offset + 3] = value
        } else {
            objectWriteUInt32(this, value, offset, false)
        }
        return offset + 4
    }

    function checkIEEE754 (buf, value, offset, ext, max, min) {
        if (value > max || value < min) throw new RangeError('value is out of bounds')
        if (offset + ext > buf.length) throw new RangeError('index out of range')
        if (offset < 0) throw new RangeError('index out of range')
    }

    function writeFloat (buf, value, offset, littleEndian, noAssert) {
        if (!noAssert) {
            checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4)
        return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert)
    }

    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert)
    }

    function writeDouble (buf, value, offset, littleEndian, noAssert) {
        if (!noAssert) {
            checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8)
        return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert)
    }

    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert)
    }

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
        if (!start) start = 0
        if (!end && end !== 0) end = this.length
        if (targetStart >= target.length) targetStart = target.length
        if (!targetStart) targetStart = 0
        if (end > 0 && end < start) end = start

        // Copy 0 bytes; we're done
        if (end === start) return 0
        if (target.length === 0 || this.length === 0) return 0

        // Fatal error conditions
        if (targetStart < 0) {
            throw new RangeError('targetStart out of bounds')
        }
        if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
        if (end < 0) throw new RangeError('sourceEnd out of bounds')

        // Are we oob?
        if (end > this.length) end = this.length
        if (target.length - targetStart < end - start) {
            end = target.length - targetStart + start
        }

        var len = end - start
        var i

        if (this === target && start < targetStart && targetStart < end) {
            // descending copy from end
            for (i = len - 1; i >= 0; i--) {
                target[i + targetStart] = this[i + start]
            }
        } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
            // ascending copy from start
            for (i = 0; i < len; i++) {
                target[i + targetStart] = this[i + start]
            }
        } else {
            target._set(this.subarray(start, start + len), targetStart)
        }

        return len
    }

// fill(value, start=0, end=buffer.length)
    Buffer.prototype.fill = function fill (value, start, end) {
        if (!value) value = 0
        if (!start) start = 0
        if (!end) end = this.length

        if (end < start) throw new RangeError('end < start')

        // Fill 0 bytes; we're done
        if (end === start) return
        if (this.length === 0) return

        if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
        if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

        var i
        if (typeof value === 'number') {
            for (i = start; i < end; i++) {
                this[i] = value
            }
        } else {
            var bytes = utf8ToBytes(value.toString())
            var len = bytes.length
            for (i = start; i < end; i++) {
                this[i] = bytes[i % len]
            }
        }

        return this
    }

    /**
     * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
     * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
     */
    Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
        if (typeof Uint8Array !== 'undefined') {
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                return (new Buffer(this)).buffer
            } else {
                var buf = new Uint8Array(this.length)
                for (var i = 0, len = buf.length; i < len; i += 1) {
                    buf[i] = this[i]
                }
                return buf.buffer
            }
        } else {
            throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
        }
    }

// HELPER FUNCTIONS
// ================

    var BP = Buffer.prototype

    /**
     * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
     */
    Buffer._augment = function _augment (arr) {
        arr.constructor = Buffer
        arr._isBuffer = true

        // save reference to original Uint8Array set method before overwriting
        arr._set = arr.set

        // deprecated
        arr.get = BP.get
        arr.set = BP.set

        arr.write = BP.write
        arr.toString = BP.toString
        arr.toLocaleString = BP.toString
        arr.toJSON = BP.toJSON
        arr.equals = BP.equals
        arr.compare = BP.compare
        arr.indexOf = BP.indexOf
        arr.copy = BP.copy
        arr.slice = BP.slice
        arr.readUIntLE = BP.readUIntLE
        arr.readUIntBE = BP.readUIntBE
        arr.readUInt8 = BP.readUInt8
        arr.readUInt16LE = BP.readUInt16LE
        arr.readUInt16BE = BP.readUInt16BE
        arr.readUInt32LE = BP.readUInt32LE
        arr.readUInt32BE = BP.readUInt32BE
        arr.readIntLE = BP.readIntLE
        arr.readIntBE = BP.readIntBE
        arr.readInt8 = BP.readInt8
        arr.readInt16LE = BP.readInt16LE
        arr.readInt16BE = BP.readInt16BE
        arr.readInt32LE = BP.readInt32LE
        arr.readInt32BE = BP.readInt32BE
        arr.readFloatLE = BP.readFloatLE
        arr.readFloatBE = BP.readFloatBE
        arr.readDoubleLE = BP.readDoubleLE
        arr.readDoubleBE = BP.readDoubleBE
        arr.writeUInt8 = BP.writeUInt8
        arr.writeUIntLE = BP.writeUIntLE
        arr.writeUIntBE = BP.writeUIntBE
        arr.writeUInt16LE = BP.writeUInt16LE
        arr.writeUInt16BE = BP.writeUInt16BE
        arr.writeUInt32LE = BP.writeUInt32LE
        arr.writeUInt32BE = BP.writeUInt32BE
        arr.writeIntLE = BP.writeIntLE
        arr.writeIntBE = BP.writeIntBE
        arr.writeInt8 = BP.writeInt8
        arr.writeInt16LE = BP.writeInt16LE
        arr.writeInt16BE = BP.writeInt16BE
        arr.writeInt32LE = BP.writeInt32LE
        arr.writeInt32BE = BP.writeInt32BE
        arr.writeFloatLE = BP.writeFloatLE
        arr.writeFloatBE = BP.writeFloatBE
        arr.writeDoubleLE = BP.writeDoubleLE
        arr.writeDoubleBE = BP.writeDoubleBE
        arr.fill = BP.fill
        arr.inspect = BP.inspect
        arr.toArrayBuffer = BP.toArrayBuffer

        return arr
    }

    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

    function base64clean (str) {
        // Node strips out invalid characters like \n and \t from the string, base64-js does not
        str = stringtrim(str).replace(INVALID_BASE64_RE, '')
        // Node converts strings with length < 2 to ''
        if (str.length < 2) return ''
        // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
        while (str.length % 4 !== 0) {
            str = str + '='
        }
        return str
    }

    function stringtrim (str) {
        if (str.trim) return str.trim()
        return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex (n) {
        if (n < 16) return '0' + n.toString(16)
        return n.toString(16)
    }

    function utf8ToBytes (string, units) {
        units = units || Infinity
        var codePoint
        var length = string.length
        var leadSurrogate = null
        var bytes = []

        for (var i = 0; i < length; i++) {
            codePoint = string.charCodeAt(i)

            // is surrogate component
            if (codePoint > 0xD7FF && codePoint < 0xE000) {
                // last char was a lead
                if (!leadSurrogate) {
                    // no lead yet
                    if (codePoint > 0xDBFF) {
                        // unexpected trail
                        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                        continue
                    } else if (i + 1 === length) {
                        // unpaired lead
                        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                        continue
                    }

                    // valid lead
                    leadSurrogate = codePoint

                    continue
                }

                // 2 leads in a row
                if (codePoint < 0xDC00) {
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                    leadSurrogate = codePoint
                    continue
                }

                // valid surrogate pair
                codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
            } else if (leadSurrogate) {
                // valid bmp char, but last char was a lead
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            }

            leadSurrogate = null

            // encode utf8
            if (codePoint < 0x80) {
                if ((units -= 1) < 0) break
                bytes.push(codePoint)
            } else if (codePoint < 0x800) {
                if ((units -= 2) < 0) break
                bytes.push(
                    codePoint >> 0x6 | 0xC0,
                    codePoint & 0x3F | 0x80
                )
            } else if (codePoint < 0x10000) {
                if ((units -= 3) < 0) break
                bytes.push(
                    codePoint >> 0xC | 0xE0,
                    codePoint >> 0x6 & 0x3F | 0x80,
                    codePoint & 0x3F | 0x80
                )
            } else if (codePoint < 0x110000) {
                if ((units -= 4) < 0) break
                bytes.push(
                    codePoint >> 0x12 | 0xF0,
                    codePoint >> 0xC & 0x3F | 0x80,
                    codePoint >> 0x6 & 0x3F | 0x80,
                    codePoint & 0x3F | 0x80
                )
            } else {
                throw new Error('Invalid code point')
            }
        }

        return bytes
    }

    function asciiToBytes (str) {
        var byteArray = []
        for (var i = 0; i < str.length; i++) {
            // Node's code seems to be doing this and not & 0x7F..
            byteArray.push(str.charCodeAt(i) & 0xFF)
        }
        return byteArray
    }

    function utf16leToBytes (str, units) {
        var c, hi, lo
        var byteArray = []
        for (var i = 0; i < str.length; i++) {
            if ((units -= 2) < 0) break

            c = str.charCodeAt(i)
            hi = c >> 8
            lo = c % 256
            byteArray.push(lo)
            byteArray.push(hi)
        }

        return byteArray
    }

    function base64ToBytes (str) {
        return base64.toByteArray(base64clean(str))
    }

    function blitBuffer (src, dst, offset, length) {
        for (var i = 0; i < length; i++) {
            if ((i + offset >= dst.length) || (i >= src.length)) break
            dst[i + offset] = src[i]
        }
        return i
    }

},{"base64-js":1,"ieee754":8,"is-array":10}],5:[function(require,module,exports){
    (function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
        function isArray(ar) {
            return Array.isArray(ar);
        }
        exports.isArray = isArray;

        function isBoolean(arg) {
            return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;

        function isNull(arg) {
            return arg === null;
        }
        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
            return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
            return typeof arg === 'number';
        }
        exports.isNumber = isNumber;

        function isString(arg) {
            return typeof arg === 'string';
        }
        exports.isString = isString;

        function isSymbol(arg) {
            return typeof arg === 'symbol';
        }
        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
            return arg === void 0;
        }
        exports.isUndefined = isUndefined;

        function isRegExp(re) {
            return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;

        function isObject(arg) {
            return typeof arg === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
            return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;

        function isError(e) {
            return isObject(e) &&
                (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;

        function isFunction(arg) {
            return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
            return arg === null ||
                typeof arg === 'boolean' ||
                typeof arg === 'number' ||
                typeof arg === 'string' ||
                typeof arg === 'symbol' ||  // ES6 symbol
                typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;

        function isBuffer(arg) {
            return Buffer.isBuffer(arg);
        }
        exports.isBuffer = isBuffer;

        function objectToString(o) {
            return Object.prototype.toString.call(o);
        }
    }).call(this,require("buffer").Buffer)
},{"buffer":4}],6:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === 'error') {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError('Uncaught, unspecified "error" event.');
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                // slower
                default:
                    len = arguments.length;
                    args = new Array(len - 1);
                    for (i = 1; i < len; i++)
                        args[i - 1] = arguments[i];
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            len = arguments.length;
            args = new Array(len - 1);
            for (i = 1; i < len; i++)
                args[i - 1] = arguments[i];

            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError('listener must be a function');

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit('newListener', type,
                isFunction(listener.listener) ?
                    listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            var m;
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
                if (typeof console.trace === 'function') {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError('listener must be a function');

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

// emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError('listener must be a function');

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit('removeListener', type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit('removeListener', type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === 'removeListener') continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        var ret;
        if (!emitter._events || !emitter._events[type])
            ret = 0;
        else if (isFunction(emitter._events[type]))
            ret = 1;
        else
            ret = emitter._events[type].length;
        return ret;
    };

    function isFunction(arg) {
        return typeof arg === 'function';
    }

    function isNumber(arg) {
        return typeof arg === 'number';
    }

    function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }

},{}],7:[function(require,module,exports){
    'use strict';

    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;

    var isArray = function isArray(arr) {
        if (typeof Array.isArray === 'function') {
            return Array.isArray(arr);
        }

        return toStr.call(arr) === '[object Array]';
    };

    var isPlainObject = function isPlainObject(obj) {
        if (!obj || toStr.call(obj) !== '[object Object]') {
            return false;
        }

        var hasOwnConstructor = hasOwn.call(obj, 'constructor');
        var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
        // Not own constructor property must be Object
        if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
            return false;
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        var key;
        for (key in obj) {/**/}

        return typeof key === 'undefined' || hasOwn.call(obj, key);
    };

    module.exports = function extend() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0],
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === 'boolean') {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        } else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
            target = {};
        }

        for (; i < length; ++i) {
            options = arguments[i];
            // Only deal with non-null/undefined values
            if (options != null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target !== copy) {
                        // Recurse if we're merging plain objects or arrays
                        if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && isArray(src) ? src : [];
                            } else {
                                clone = src && isPlainObject(src) ? src : {};
                            }

                            // Never move original objects, clone them
                            target[name] = extend(deep, clone, copy);

                            // Don't bring in undefined values
                        } else if (typeof copy !== 'undefined') {
                            target[name] = copy;
                        }
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };


},{}],8:[function(require,module,exports){
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m
        var eLen = nBytes * 8 - mLen - 1
        var eMax = (1 << eLen) - 1
        var eBias = eMax >> 1
        var nBits = -7
        var i = isLE ? (nBytes - 1) : 0
        var d = isLE ? -1 : 1
        var s = buffer[offset + i]

        i += d

        e = s & ((1 << (-nBits)) - 1)
        s >>= (-nBits)
        nBits += eLen
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & ((1 << (-nBits)) - 1)
        e >>= (-nBits)
        nBits += mLen
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
            e = 1 - eBias
        } else if (e === eMax) {
            return m ? NaN : ((s ? -1 : 1) * Infinity)
        } else {
            m = m + Math.pow(2, mLen)
            e = e - eBias
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c
        var eLen = nBytes * 8 - mLen - 1
        var eMax = (1 << eLen) - 1
        var eBias = eMax >> 1
        var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
        var i = isLE ? 0 : (nBytes - 1)
        var d = isLE ? 1 : -1
        var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

        value = Math.abs(value)

        if (isNaN(value) || value === Infinity) {
            m = isNaN(value) ? 1 : 0
            e = eMax
        } else {
            e = Math.floor(Math.log(value) / Math.LN2)
            if (value * (c = Math.pow(2, -e)) < 1) {
                e--
                c *= 2
            }
            if (e + eBias >= 1) {
                value += rt / c
            } else {
                value += rt * Math.pow(2, 1 - eBias)
            }
            if (value * c >= 2) {
                e++
                c /= 2
            }

            if (e + eBias >= eMax) {
                m = 0
                e = eMax
            } else if (e + eBias >= 1) {
                m = (value * c - 1) * Math.pow(2, mLen)
                e = e + eBias
            } else {
                m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
                e = 0
            }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = (e << mLen) | m
        eLen += mLen
        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128
    }

},{}],9:[function(require,module,exports){
    if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        };
    } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor
            var TempCtor = function () {}
            TempCtor.prototype = superCtor.prototype
            ctor.prototype = new TempCtor()
            ctor.prototype.constructor = ctor
        }
    }

},{}],10:[function(require,module,exports){

    /**
     * isArray
     */

    var isArray = Array.isArray;

    /**
     * toString
     */

    var str = Object.prototype.toString;

    /**
     * Whether or not the given `val`
     * is an array.
     *
     * example:
     *
     *        isArray([]);
     *        // > true
     *        isArray(arguments);
     *        // > false
     *        isArray('');
     *        // > false
     *
     * @param {mixed} val
     * @return {bool}
     */

    module.exports = isArray || function (val) {
            return !! val && '[object Array]' == str.call(val);
        };

},{}],11:[function(require,module,exports){
    module.exports = Array.isArray || function (arr) {
            return Object.prototype.toString.call(arr) == '[object Array]';
        };

},{}],12:[function(require,module,exports){
    (function (process){
        'use strict';
        module.exports = nextTick;

        function nextTick(fn) {
            var args = new Array(arguments.length - 1);
            var i = 0;
            while (i < args.length) {
                args[i++] = arguments[i];
            }
            process.nextTick(function afterTick() {
                fn.apply(null, args);
            });
        }

    }).call(this,require('_process'))
},{"_process":13}],13:[function(require,module,exports){
// shim for using process in browser

    var process = module.exports = {};
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = setTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while(len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        clearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            setTimeout(drainQueue, 0);
        }
    };

// v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () { return '/' };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function() { return 0; };

},{}],14:[function(require,module,exports){
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

    'use strict';

    /*<replacement>*/
    var objectKeys = Object.keys || function (obj) {
            var keys = [];
            for (var key in obj) keys.push(key);
            return keys;
        }
    /*</replacement>*/


    module.exports = Duplex;

    /*<replacement>*/
    var processNextTick = require('process-nextick-args');
    /*</replacement>*/



    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/

    var Readable = require('./_stream_readable');
    var Writable = require('./_stream_writable');

    util.inherits(Duplex, Readable);

    var keys = objectKeys(Writable.prototype);
    for (var v = 0; v < keys.length; v++) {
        var method = keys[v];
        if (!Duplex.prototype[method])
            Duplex.prototype[method] = Writable.prototype[method];
    }

    function Duplex(options) {
        if (!(this instanceof Duplex))
            return new Duplex(options);

        Readable.call(this, options);
        Writable.call(this, options);

        if (options && options.readable === false)
            this.readable = false;

        if (options && options.writable === false)
            this.writable = false;

        this.allowHalfOpen = true;
        if (options && options.allowHalfOpen === false)
            this.allowHalfOpen = false;

        this.once('end', onend);
    }

// the no-half-open enforcer
    function onend() {
        // if we allow half-open state, or if the writable side ended,
        // then we're ok.
        if (this.allowHalfOpen || this._writableState.ended)
            return;

        // no more data can be written.
        // But allow more writes to happen in this tick.
        processNextTick(onEndNT, this);
    }

    function onEndNT(self) {
        self.end();
    }

    function forEach (xs, f) {
        for (var i = 0, l = xs.length; i < l; i++) {
            f(xs[i], i);
        }
    }

},{"./_stream_readable":16,"./_stream_writable":18,"core-util-is":5,"inherits":9,"process-nextick-args":12}],15:[function(require,module,exports){
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

    'use strict';

    module.exports = PassThrough;

    var Transform = require('./_stream_transform');

    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/

    util.inherits(PassThrough, Transform);

    function PassThrough(options) {
        if (!(this instanceof PassThrough))
            return new PassThrough(options);

        Transform.call(this, options);
    }

    PassThrough.prototype._transform = function(chunk, encoding, cb) {
        cb(null, chunk);
    };

},{"./_stream_transform":17,"core-util-is":5,"inherits":9}],16:[function(require,module,exports){
    (function (process){
        'use strict';

        module.exports = Readable;

        /*<replacement>*/
        var processNextTick = require('process-nextick-args');
        /*</replacement>*/


        /*<replacement>*/
        var isArray = require('isarray');
        /*</replacement>*/


        /*<replacement>*/
        var Buffer = require('buffer').Buffer;
        /*</replacement>*/

        Readable.ReadableState = ReadableState;

        var EE = require('events').EventEmitter;

        /*<replacement>*/
        if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
            return emitter.listeners(type).length;
        };
        /*</replacement>*/



        /*<replacement>*/
        var Stream;
        (function (){try{
            Stream = require('st' + 'ream');
        }catch(_){}finally{
            if (!Stream)
                Stream = require('events').EventEmitter;
        }}())
        /*</replacement>*/

        var Buffer = require('buffer').Buffer;

        /*<replacement>*/
        var util = require('core-util-is');
        util.inherits = require('inherits');
        /*</replacement>*/



        /*<replacement>*/
        var debug = require('util');
        if (debug && debug.debuglog) {
            debug = debug.debuglog('stream');
        } else {
            debug = function () {};
        }
        /*</replacement>*/

        var StringDecoder;

        util.inherits(Readable, Stream);

        function ReadableState(options, stream) {
            var Duplex = require('./_stream_duplex');

            options = options || {};

            // object stream flag. Used to make read(n) ignore n and to
            // make all the buffer merging and length checks go away
            this.objectMode = !!options.objectMode;

            if (stream instanceof Duplex)
                this.objectMode = this.objectMode || !!options.readableObjectMode;

            // the point at which it stops calling _read() to fill the buffer
            // Note: 0 is a valid value, means "don't call _read preemptively ever"
            var hwm = options.highWaterMark;
            var defaultHwm = this.objectMode ? 16 : 16 * 1024;
            this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

            // cast to ints.
            this.highWaterMark = ~~this.highWaterMark;

            this.buffer = [];
            this.length = 0;
            this.pipes = null;
            this.pipesCount = 0;
            this.flowing = null;
            this.ended = false;
            this.endEmitted = false;
            this.reading = false;

            // a flag to be able to tell if the onwrite cb is called immediately,
            // or on a later tick.  We set this to true at first, because any
            // actions that shouldn't happen until "later" should generally also
            // not happen before the first write call.
            this.sync = true;

            // whenever we return null, then we set a flag to say
            // that we're awaiting a 'readable' event emission.
            this.needReadable = false;
            this.emittedReadable = false;
            this.readableListening = false;

            // Crypto is kind of old and crusty.  Historically, its default string
            // encoding is 'binary' so we have to make this configurable.
            // Everything else in the universe uses 'utf8', though.
            this.defaultEncoding = options.defaultEncoding || 'utf8';

            // when piping, we only care about 'readable' events that happen
            // after read()ing all the bytes and not getting any pushback.
            this.ranOut = false;

            // the number of writers that are awaiting a drain event in .pipe()s
            this.awaitDrain = 0;

            // if true, a maybeReadMore has been scheduled
            this.readingMore = false;

            this.decoder = null;
            this.encoding = null;
            if (options.encoding) {
                if (!StringDecoder)
                    StringDecoder = require('string_decoder/').StringDecoder;
                this.decoder = new StringDecoder(options.encoding);
                this.encoding = options.encoding;
            }
        }

        function Readable(options) {
            var Duplex = require('./_stream_duplex');

            if (!(this instanceof Readable))
                return new Readable(options);

            this._readableState = new ReadableState(options, this);

            // legacy
            this.readable = true;

            if (options && typeof options.read === 'function')
                this._read = options.read;

            Stream.call(this);
        }

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
        Readable.prototype.push = function(chunk, encoding) {
            var state = this._readableState;

            if (!state.objectMode && typeof chunk === 'string') {
                encoding = encoding || state.defaultEncoding;
                if (encoding !== state.encoding) {
                    chunk = new Buffer(chunk, encoding);
                    encoding = '';
                }
            }

            return readableAddChunk(this, state, chunk, encoding, false);
        };

// Unshift should *always* be something directly out of read()
        Readable.prototype.unshift = function(chunk) {
            var state = this._readableState;
            return readableAddChunk(this, state, chunk, '', true);
        };

        Readable.prototype.isPaused = function() {
            return this._readableState.flowing === false;
        };

        function readableAddChunk(stream, state, chunk, encoding, addToFront) {
            var er = chunkInvalid(state, chunk);
            if (er) {
                stream.emit('error', er);
            } else if (chunk === null) {
                state.reading = false;
                onEofChunk(stream, state);
            } else if (state.objectMode || chunk && chunk.length > 0) {
                if (state.ended && !addToFront) {
                    var e = new Error('stream.push() after EOF');
                    stream.emit('error', e);
                } else if (state.endEmitted && addToFront) {
                    var e = new Error('stream.unshift() after end event');
                    stream.emit('error', e);
                } else {
                    if (state.decoder && !addToFront && !encoding)
                        chunk = state.decoder.write(chunk);

                    if (!addToFront)
                        state.reading = false;

                    // if we want the data now, just emit it.
                    if (state.flowing && state.length === 0 && !state.sync) {
                        stream.emit('data', chunk);
                        stream.read(0);
                    } else {
                        // update the buffer info.
                        state.length += state.objectMode ? 1 : chunk.length;
                        if (addToFront)
                            state.buffer.unshift(chunk);
                        else
                            state.buffer.push(chunk);

                        if (state.needReadable)
                            emitReadable(stream);
                    }

                    maybeReadMore(stream, state);
                }
            } else if (!addToFront) {
                state.reading = false;
            }

            return needMoreData(state);
        }



// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
        function needMoreData(state) {
            return !state.ended &&
                (state.needReadable ||
                state.length < state.highWaterMark ||
                state.length === 0);
        }

// backwards compatibility.
        Readable.prototype.setEncoding = function(enc) {
            if (!StringDecoder)
                StringDecoder = require('string_decoder/').StringDecoder;
            this._readableState.decoder = new StringDecoder(enc);
            this._readableState.encoding = enc;
            return this;
        };

// Don't raise the hwm > 128MB
        var MAX_HWM = 0x800000;
        function roundUpToNextPowerOf2(n) {
            if (n >= MAX_HWM) {
                n = MAX_HWM;
            } else {
                // Get the next highest power of 2
                n--;
                for (var p = 1; p < 32; p <<= 1) n |= n >> p;
                n++;
            }
            return n;
        }

        function howMuchToRead(n, state) {
            if (state.length === 0 && state.ended)
                return 0;

            if (state.objectMode)
                return n === 0 ? 0 : 1;

            if (n === null || isNaN(n)) {
                // only flow one buffer at a time
                if (state.flowing && state.buffer.length)
                    return state.buffer[0].length;
                else
                    return state.length;
            }

            if (n <= 0)
                return 0;

            // If we're asking for more than the target buffer level,
            // then raise the water mark.  Bump up to the next highest
            // power of 2, to prevent increasing it excessively in tiny
            // amounts.
            if (n > state.highWaterMark)
                state.highWaterMark = roundUpToNextPowerOf2(n);

            // don't have that much.  return null, unless we've ended.
            if (n > state.length) {
                if (!state.ended) {
                    state.needReadable = true;
                    return 0;
                } else {
                    return state.length;
                }
            }

            return n;
        }

// you can override either this method, or the async _read(n) below.
        Readable.prototype.read = function(n) {
            debug('read', n);
            var state = this._readableState;
            var nOrig = n;

            if (typeof n !== 'number' || n > 0)
                state.emittedReadable = false;

            // if we're doing read(0) to trigger a readable event, but we
            // already have a bunch of data in the buffer, then just trigger
            // the 'readable' event and move on.
            if (n === 0 &&
                state.needReadable &&
                (state.length >= state.highWaterMark || state.ended)) {
                debug('read: emitReadable', state.length, state.ended);
                if (state.length === 0 && state.ended)
                    endReadable(this);
                else
                    emitReadable(this);
                return null;
            }

            n = howMuchToRead(n, state);

            // if we've ended, and we're now clear, then finish it up.
            if (n === 0 && state.ended) {
                if (state.length === 0)
                    endReadable(this);
                return null;
            }

            // All the actual chunk generation logic needs to be
            // *below* the call to _read.  The reason is that in certain
            // synthetic stream cases, such as passthrough streams, _read
            // may be a completely synchronous operation which may change
            // the state of the read buffer, providing enough data when
            // before there was *not* enough.
            //
            // So, the steps are:
            // 1. Figure out what the state of things will be after we do
            // a read from the buffer.
            //
            // 2. If that resulting state will trigger a _read, then call _read.
            // Note that this may be asynchronous, or synchronous.  Yes, it is
            // deeply ugly to write APIs this way, but that still doesn't mean
            // that the Readable class should behave improperly, as streams are
            // designed to be sync/async agnostic.
            // Take note if the _read call is sync or async (ie, if the read call
            // has returned yet), so that we know whether or not it's safe to emit
            // 'readable' etc.
            //
            // 3. Actually pull the requested chunks out of the buffer and return.

            // if we need a readable event, then we need to do some reading.
            var doRead = state.needReadable;
            debug('need readable', doRead);

            // if we currently have less than the highWaterMark, then also read some
            if (state.length === 0 || state.length - n < state.highWaterMark) {
                doRead = true;
                debug('length less than watermark', doRead);
            }

            // however, if we've ended, then there's no point, and if we're already
            // reading, then it's unnecessary.
            if (state.ended || state.reading) {
                doRead = false;
                debug('reading or ended', doRead);
            }

            if (doRead) {
                debug('do read');
                state.reading = true;
                state.sync = true;
                // if the length is currently zero, then we *need* a readable event.
                if (state.length === 0)
                    state.needReadable = true;
                // call internal read method
                this._read(state.highWaterMark);
                state.sync = false;
            }

            // If _read pushed data synchronously, then `reading` will be false,
            // and we need to re-evaluate how much data we can return to the user.
            if (doRead && !state.reading)
                n = howMuchToRead(nOrig, state);

            var ret;
            if (n > 0)
                ret = fromList(n, state);
            else
                ret = null;

            if (ret === null) {
                state.needReadable = true;
                n = 0;
            }

            state.length -= n;

            // If we have nothing in the buffer, then we want to know
            // as soon as we *do* get something into the buffer.
            if (state.length === 0 && !state.ended)
                state.needReadable = true;

            // If we tried to read() past the EOF, then emit end on the next tick.
            if (nOrig !== n && state.ended && state.length === 0)
                endReadable(this);

            if (ret !== null)
                this.emit('data', ret);

            return ret;
        };

        function chunkInvalid(state, chunk) {
            var er = null;
            if (!(Buffer.isBuffer(chunk)) &&
                typeof chunk !== 'string' &&
                chunk !== null &&
                chunk !== undefined &&
                !state.objectMode) {
                er = new TypeError('Invalid non-string/buffer chunk');
            }
            return er;
        }


        function onEofChunk(stream, state) {
            if (state.ended) return;
            if (state.decoder) {
                var chunk = state.decoder.end();
                if (chunk && chunk.length) {
                    state.buffer.push(chunk);
                    state.length += state.objectMode ? 1 : chunk.length;
                }
            }
            state.ended = true;

            // emit 'readable' now to make sure it gets picked up.
            emitReadable(stream);
        }

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
        function emitReadable(stream) {
            var state = stream._readableState;
            state.needReadable = false;
            if (!state.emittedReadable) {
                debug('emitReadable', state.flowing);
                state.emittedReadable = true;
                if (state.sync)
                    processNextTick(emitReadable_, stream);
                else
                    emitReadable_(stream);
            }
        }

        function emitReadable_(stream) {
            debug('emit readable');
            stream.emit('readable');
            flow(stream);
        }


// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
        function maybeReadMore(stream, state) {
            if (!state.readingMore) {
                state.readingMore = true;
                processNextTick(maybeReadMore_, stream, state);
            }
        }

        function maybeReadMore_(stream, state) {
            var len = state.length;
            while (!state.reading && !state.flowing && !state.ended &&
            state.length < state.highWaterMark) {
                debug('maybeReadMore read 0');
                stream.read(0);
                if (len === state.length)
                // didn't get any data, stop spinning.
                    break;
                else
                    len = state.length;
            }
            state.readingMore = false;
        }

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
        Readable.prototype._read = function(n) {
            this.emit('error', new Error('not implemented'));
        };

        Readable.prototype.pipe = function(dest, pipeOpts) {
            var src = this;
            var state = this._readableState;

            switch (state.pipesCount) {
                case 0:
                    state.pipes = dest;
                    break;
                case 1:
                    state.pipes = [state.pipes, dest];
                    break;
                default:
                    state.pipes.push(dest);
                    break;
            }
            state.pipesCount += 1;
            debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

            var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
                dest !== process.stdout &&
                dest !== process.stderr;

            var endFn = doEnd ? onend : cleanup;
            if (state.endEmitted)
                processNextTick(endFn);
            else
                src.once('end', endFn);

            dest.on('unpipe', onunpipe);
            function onunpipe(readable) {
                debug('onunpipe');
                if (readable === src) {
                    cleanup();
                }
            }

            function onend() {
                debug('onend');
                dest.end();
            }

            // when the dest drains, it reduces the awaitDrain counter
            // on the source.  This would be more elegant with a .once()
            // handler in flow(), but adding and removing repeatedly is
            // too slow.
            var ondrain = pipeOnDrain(src);
            dest.on('drain', ondrain);

            function cleanup() {
                debug('cleanup');
                // cleanup event handlers once the pipe is broken
                dest.removeListener('close', onclose);
                dest.removeListener('finish', onfinish);
                dest.removeListener('drain', ondrain);
                dest.removeListener('error', onerror);
                dest.removeListener('unpipe', onunpipe);
                src.removeListener('end', onend);
                src.removeListener('end', cleanup);
                src.removeListener('data', ondata);

                // if the reader is waiting for a drain event from this
                // specific writer, then it would cause it to never start
                // flowing again.
                // So, if this is awaiting a drain, then we just call it now.
                // If we don't know, then assume that we are waiting for one.
                if (state.awaitDrain &&
                    (!dest._writableState || dest._writableState.needDrain))
                    ondrain();
            }

            src.on('data', ondata);
            function ondata(chunk) {
                debug('ondata');
                var ret = dest.write(chunk);
                if (false === ret) {
                    debug('false write response, pause',
                        src._readableState.awaitDrain);
                    src._readableState.awaitDrain++;
                    src.pause();
                }
            }

            // if the dest has an error, then stop piping into it.
            // however, don't suppress the throwing behavior for this.
            function onerror(er) {
                debug('onerror', er);
                unpipe();
                dest.removeListener('error', onerror);
                if (EE.listenerCount(dest, 'error') === 0)
                    dest.emit('error', er);
            }
            // This is a brutally ugly hack to make sure that our error handler
            // is attached before any userland ones.  NEVER DO THIS.
            if (!dest._events || !dest._events.error)
                dest.on('error', onerror);
            else if (isArray(dest._events.error))
                dest._events.error.unshift(onerror);
            else
                dest._events.error = [onerror, dest._events.error];



            // Both close and finish should trigger unpipe, but only once.
            function onclose() {
                dest.removeListener('finish', onfinish);
                unpipe();
            }
            dest.once('close', onclose);
            function onfinish() {
                debug('onfinish');
                dest.removeListener('close', onclose);
                unpipe();
            }
            dest.once('finish', onfinish);

            function unpipe() {
                debug('unpipe');
                src.unpipe(dest);
            }

            // tell the dest that it's being piped to
            dest.emit('pipe', src);

            // start the flow if it hasn't been started already.
            if (!state.flowing) {
                debug('pipe resume');
                src.resume();
            }

            return dest;
        };

        function pipeOnDrain(src) {
            return function() {
                var state = src._readableState;
                debug('pipeOnDrain', state.awaitDrain);
                if (state.awaitDrain)
                    state.awaitDrain--;
                if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
                    state.flowing = true;
                    flow(src);
                }
            };
        }


        Readable.prototype.unpipe = function(dest) {
            var state = this._readableState;

            // if we're not piping anywhere, then do nothing.
            if (state.pipesCount === 0)
                return this;

            // just one destination.  most common case.
            if (state.pipesCount === 1) {
                // passed in one, but it's not the right one.
                if (dest && dest !== state.pipes)
                    return this;

                if (!dest)
                    dest = state.pipes;

                // got a match.
                state.pipes = null;
                state.pipesCount = 0;
                state.flowing = false;
                if (dest)
                    dest.emit('unpipe', this);
                return this;
            }

            // slow case. multiple pipe destinations.

            if (!dest) {
                // remove all.
                var dests = state.pipes;
                var len = state.pipesCount;
                state.pipes = null;
                state.pipesCount = 0;
                state.flowing = false;

                for (var i = 0; i < len; i++)
                    dests[i].emit('unpipe', this);
                return this;
            }

            // try to find the right one.
            var i = indexOf(state.pipes, dest);
            if (i === -1)
                return this;

            state.pipes.splice(i, 1);
            state.pipesCount -= 1;
            if (state.pipesCount === 1)
                state.pipes = state.pipes[0];

            dest.emit('unpipe', this);

            return this;
        };

// set up data events if they are asked for
// Ensure readable listeners eventually get something
        Readable.prototype.on = function(ev, fn) {
            var res = Stream.prototype.on.call(this, ev, fn);

            // If listening to data, and it has not explicitly been paused,
            // then call resume to start the flow of data on the next tick.
            if (ev === 'data' && false !== this._readableState.flowing) {
                this.resume();
            }

            if (ev === 'readable' && this.readable) {
                var state = this._readableState;
                if (!state.readableListening) {
                    state.readableListening = true;
                    state.emittedReadable = false;
                    state.needReadable = true;
                    if (!state.reading) {
                        processNextTick(nReadingNextTick, this);
                    } else if (state.length) {
                        emitReadable(this, state);
                    }
                }
            }

            return res;
        };
        Readable.prototype.addListener = Readable.prototype.on;

        function nReadingNextTick(self) {
            debug('readable nexttick read 0');
            self.read(0);
        }

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
        Readable.prototype.resume = function() {
            var state = this._readableState;
            if (!state.flowing) {
                debug('resume');
                state.flowing = true;
                resume(this, state);
            }
            return this;
        };

        function resume(stream, state) {
            if (!state.resumeScheduled) {
                state.resumeScheduled = true;
                processNextTick(resume_, stream, state);
            }
        }

        function resume_(stream, state) {
            if (!state.reading) {
                debug('resume read 0');
                stream.read(0);
            }

            state.resumeScheduled = false;
            stream.emit('resume');
            flow(stream);
            if (state.flowing && !state.reading)
                stream.read(0);
        }

        Readable.prototype.pause = function() {
            debug('call pause flowing=%j', this._readableState.flowing);
            if (false !== this._readableState.flowing) {
                debug('pause');
                this._readableState.flowing = false;
                this.emit('pause');
            }
            return this;
        };

        function flow(stream) {
            var state = stream._readableState;
            debug('flow', state.flowing);
            if (state.flowing) {
                do {
                    var chunk = stream.read();
                } while (null !== chunk && state.flowing);
            }
        }

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
        Readable.prototype.wrap = function(stream) {
            var state = this._readableState;
            var paused = false;

            var self = this;
            stream.on('end', function() {
                debug('wrapped end');
                if (state.decoder && !state.ended) {
                    var chunk = state.decoder.end();
                    if (chunk && chunk.length)
                        self.push(chunk);
                }

                self.push(null);
            });

            stream.on('data', function(chunk) {
                debug('wrapped data');
                if (state.decoder)
                    chunk = state.decoder.write(chunk);

                // don't skip over falsy values in objectMode
                if (state.objectMode && (chunk === null || chunk === undefined))
                    return;
                else if (!state.objectMode && (!chunk || !chunk.length))
                    return;

                var ret = self.push(chunk);
                if (!ret) {
                    paused = true;
                    stream.pause();
                }
            });

            // proxy all the other methods.
            // important when wrapping filters and duplexes.
            for (var i in stream) {
                if (this[i] === undefined && typeof stream[i] === 'function') {
                    this[i] = function(method) { return function() {
                        return stream[method].apply(stream, arguments);
                    }; }(i);
                }
            }

            // proxy certain important events.
            var events = ['error', 'close', 'destroy', 'pause', 'resume'];
            forEach(events, function(ev) {
                stream.on(ev, self.emit.bind(self, ev));
            });

            // when we try to consume some more bytes, simply unpause the
            // underlying stream.
            self._read = function(n) {
                debug('wrapped _read', n);
                if (paused) {
                    paused = false;
                    stream.resume();
                }
            };

            return self;
        };



// exposed for testing purposes only.
        Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
        function fromList(n, state) {
            var list = state.buffer;
            var length = state.length;
            var stringMode = !!state.decoder;
            var objectMode = !!state.objectMode;
            var ret;

            // nothing in the list, definitely empty.
            if (list.length === 0)
                return null;

            if (length === 0)
                ret = null;
            else if (objectMode)
                ret = list.shift();
            else if (!n || n >= length) {
                // read it all, truncate the array.
                if (stringMode)
                    ret = list.join('');
                else
                    ret = Buffer.concat(list, length);
                list.length = 0;
            } else {
                // read just some of it.
                if (n < list[0].length) {
                    // just take a part of the first list item.
                    // slice is the same for buffers and strings.
                    var buf = list[0];
                    ret = buf.slice(0, n);
                    list[0] = buf.slice(n);
                } else if (n === list[0].length) {
                    // first list is a perfect match
                    ret = list.shift();
                } else {
                    // complex case.
                    // we have enough to cover it, but it spans past the first buffer.
                    if (stringMode)
                        ret = '';
                    else
                        ret = new Buffer(n);

                    var c = 0;
                    for (var i = 0, l = list.length; i < l && c < n; i++) {
                        var buf = list[0];
                        var cpy = Math.min(n - c, buf.length);

                        if (stringMode)
                            ret += buf.slice(0, cpy);
                        else
                            buf.copy(ret, c, 0, cpy);

                        if (cpy < buf.length)
                            list[0] = buf.slice(cpy);
                        else
                            list.shift();

                        c += cpy;
                    }
                }
            }

            return ret;
        }

        function endReadable(stream) {
            var state = stream._readableState;

            // If we get here before consuming all the bytes, then that is a
            // bug in node.  Should never happen.
            if (state.length > 0)
                throw new Error('endReadable called on non-empty stream');

            if (!state.endEmitted) {
                state.ended = true;
                processNextTick(endReadableNT, state, stream);
            }
        }

        function endReadableNT(state, stream) {
            // Check that we didn't get one last unshift.
            if (!state.endEmitted && state.length === 0) {
                state.endEmitted = true;
                stream.readable = false;
                stream.emit('end');
            }
        }

        function forEach (xs, f) {
            for (var i = 0, l = xs.length; i < l; i++) {
                f(xs[i], i);
            }
        }

        function indexOf (xs, x) {
            for (var i = 0, l = xs.length; i < l; i++) {
                if (xs[i] === x) return i;
            }
            return -1;
        }

    }).call(this,require('_process'))
},{"./_stream_duplex":14,"_process":13,"buffer":4,"core-util-is":5,"events":6,"inherits":9,"isarray":11,"process-nextick-args":12,"string_decoder/":20,"util":2}],17:[function(require,module,exports){
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

    'use strict';

    module.exports = Transform;

    var Duplex = require('./_stream_duplex');

    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/

    util.inherits(Transform, Duplex);


    function TransformState(stream) {
        this.afterTransform = function(er, data) {
            return afterTransform(stream, er, data);
        };

        this.needTransform = false;
        this.transforming = false;
        this.writecb = null;
        this.writechunk = null;
    }

    function afterTransform(stream, er, data) {
        var ts = stream._transformState;
        ts.transforming = false;

        var cb = ts.writecb;

        if (!cb)
            return stream.emit('error', new Error('no writecb in Transform class'));

        ts.writechunk = null;
        ts.writecb = null;

        if (data !== null && data !== undefined)
            stream.push(data);

        if (cb)
            cb(er);

        var rs = stream._readableState;
        rs.reading = false;
        if (rs.needReadable || rs.length < rs.highWaterMark) {
            stream._read(rs.highWaterMark);
        }
    }


    function Transform(options) {
        if (!(this instanceof Transform))
            return new Transform(options);

        Duplex.call(this, options);

        this._transformState = new TransformState(this);

        // when the writable side finishes, then flush out anything remaining.
        var stream = this;

        // start out asking for a readable event once data is transformed.
        this._readableState.needReadable = true;

        // we have implemented the _read method, and done the other things
        // that Readable wants before the first _read call, so unset the
        // sync guard flag.
        this._readableState.sync = false;

        if (options) {
            if (typeof options.transform === 'function')
                this._transform = options.transform;

            if (typeof options.flush === 'function')
                this._flush = options.flush;
        }

        this.once('prefinish', function() {
            if (typeof this._flush === 'function')
                this._flush(function(er) {
                    done(stream, er);
                });
            else
                done(stream);
        });
    }

    Transform.prototype.push = function(chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
    };

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
    Transform.prototype._transform = function(chunk, encoding, cb) {
        throw new Error('not implemented');
    };

    Transform.prototype._write = function(chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;
        if (!ts.transforming) {
            var rs = this._readableState;
            if (ts.needTransform ||
                rs.needReadable ||
                rs.length < rs.highWaterMark)
                this._read(rs.highWaterMark);
        }
    };

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
    Transform.prototype._read = function(n) {
        var ts = this._transformState;

        if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
            ts.transforming = true;
            this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
            // mark that we need a transform, so that any data that comes in
            // will get processed, now that we've asked for it.
            ts.needTransform = true;
        }
    };


    function done(stream, er) {
        if (er)
            return stream.emit('error', er);

        // if there's nothing in the write buffer, then that means
        // that nothing more will ever be provided
        var ws = stream._writableState;
        var ts = stream._transformState;

        if (ws.length)
            throw new Error('calling transform done when ws.length != 0');

        if (ts.transforming)
            throw new Error('calling transform done when still transforming');

        return stream.push(null);
    }

},{"./_stream_duplex":14,"core-util-is":5,"inherits":9}],18:[function(require,module,exports){
// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.

    'use strict';

    module.exports = Writable;

    /*<replacement>*/
    var processNextTick = require('process-nextick-args');
    /*</replacement>*/


    /*<replacement>*/
    var Buffer = require('buffer').Buffer;
    /*</replacement>*/

    Writable.WritableState = WritableState;


    /*<replacement>*/
    var util = require('core-util-is');
    util.inherits = require('inherits');
    /*</replacement>*/



    /*<replacement>*/
    var Stream;
    (function (){try{
        Stream = require('st' + 'ream');
    }catch(_){}finally{
        if (!Stream)
            Stream = require('events').EventEmitter;
    }}())
    /*</replacement>*/

    var Buffer = require('buffer').Buffer;

    util.inherits(Writable, Stream);

    function nop() {}

    function WriteReq(chunk, encoding, cb) {
        this.chunk = chunk;
        this.encoding = encoding;
        this.callback = cb;
        this.next = null;
    }

    function WritableState(options, stream) {
        var Duplex = require('./_stream_duplex');

        options = options || {};

        // object stream flag to indicate whether or not this stream
        // contains buffers or objects.
        this.objectMode = !!options.objectMode;

        if (stream instanceof Duplex)
            this.objectMode = this.objectMode || !!options.writableObjectMode;

        // the point at which write() starts returning false
        // Note: 0 is a valid value, means that we always return false if
        // the entire buffer is not flushed immediately on write()
        var hwm = options.highWaterMark;
        var defaultHwm = this.objectMode ? 16 : 16 * 1024;
        this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

        // cast to ints.
        this.highWaterMark = ~~this.highWaterMark;

        this.needDrain = false;
        // at the start of calling end()
        this.ending = false;
        // when end() has been called, and returned
        this.ended = false;
        // when 'finish' is emitted
        this.finished = false;

        // should we decode strings into buffers before passing to _write?
        // this is here so that some node-core streams can optimize string
        // handling at a lower level.
        var noDecode = options.decodeStrings === false;
        this.decodeStrings = !noDecode;

        // Crypto is kind of old and crusty.  Historically, its default string
        // encoding is 'binary' so we have to make this configurable.
        // Everything else in the universe uses 'utf8', though.
        this.defaultEncoding = options.defaultEncoding || 'utf8';

        // not an actual buffer we keep track of, but a measurement
        // of how much we're waiting to get pushed to some underlying
        // socket or file.
        this.length = 0;

        // a flag to see when we're in the middle of a write.
        this.writing = false;

        // when true all writes will be buffered until .uncork() call
        this.corked = 0;

        // a flag to be able to tell if the onwrite cb is called immediately,
        // or on a later tick.  We set this to true at first, because any
        // actions that shouldn't happen until "later" should generally also
        // not happen before the first write call.
        this.sync = true;

        // a flag to know if we're processing previously buffered items, which
        // may call the _write() callback in the same tick, so that we don't
        // end up in an overlapped onwrite situation.
        this.bufferProcessing = false;

        // the callback that's passed to _write(chunk,cb)
        this.onwrite = function(er) {
            onwrite(stream, er);
        };

        // the callback that the user supplies to write(chunk,encoding,cb)
        this.writecb = null;

        // the amount that is being written when _write is called.
        this.writelen = 0;

        this.bufferedRequest = null;
        this.lastBufferedRequest = null;

        // number of pending user-supplied write callbacks
        // this must be 0 before 'finish' can be emitted
        this.pendingcb = 0;

        // emit prefinish if the only thing we're waiting for is _write cbs
        // This is relevant for synchronous Transform streams
        this.prefinished = false;

        // True if the error was already emitted and should not be thrown again
        this.errorEmitted = false;
    }

    WritableState.prototype.getBuffer = function writableStateGetBuffer() {
        var current = this.bufferedRequest;
        var out = [];
        while (current) {
            out.push(current);
            current = current.next;
        }
        return out;
    };

    (function (){try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
            get: require('util-deprecate')(function() {
                return this.getBuffer();
            }, '_writableState.buffer is deprecated. Use ' +
                '_writableState.getBuffer() instead.')
        });
    }catch(_){}}());


    function Writable(options) {
        var Duplex = require('./_stream_duplex');

        // Writable ctor is applied to Duplexes, though they're not
        // instanceof Writable, they're instanceof Readable.
        if (!(this instanceof Writable) && !(this instanceof Duplex))
            return new Writable(options);

        this._writableState = new WritableState(options, this);

        // legacy.
        this.writable = true;

        if (options) {
            if (typeof options.write === 'function')
                this._write = options.write;

            if (typeof options.writev === 'function')
                this._writev = options.writev;
        }

        Stream.call(this);
    }

// Otherwise people can pipe Writable streams, which is just wrong.
    Writable.prototype.pipe = function() {
        this.emit('error', new Error('Cannot pipe. Not readable.'));
    };


    function writeAfterEnd(stream, cb) {
        var er = new Error('write after end');
        // TODO: defer error events consistently everywhere, not just the cb
        stream.emit('error', er);
        processNextTick(cb, er);
    }

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
    function validChunk(stream, state, chunk, cb) {
        var valid = true;

        if (!(Buffer.isBuffer(chunk)) &&
            typeof chunk !== 'string' &&
            chunk !== null &&
            chunk !== undefined &&
            !state.objectMode) {
            var er = new TypeError('Invalid non-string/buffer chunk');
            stream.emit('error', er);
            processNextTick(cb, er);
            valid = false;
        }
        return valid;
    }

    Writable.prototype.write = function(chunk, encoding, cb) {
        var state = this._writableState;
        var ret = false;

        if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
        }

        if (Buffer.isBuffer(chunk))
            encoding = 'buffer';
        else if (!encoding)
            encoding = state.defaultEncoding;

        if (typeof cb !== 'function')
            cb = nop;

        if (state.ended)
            writeAfterEnd(this, cb);
        else if (validChunk(this, state, chunk, cb)) {
            state.pendingcb++;
            ret = writeOrBuffer(this, state, chunk, encoding, cb);
        }

        return ret;
    };

    Writable.prototype.cork = function() {
        var state = this._writableState;

        state.corked++;
    };

    Writable.prototype.uncork = function() {
        var state = this._writableState;

        if (state.corked) {
            state.corked--;

            if (!state.writing &&
                !state.corked &&
                !state.finished &&
                !state.bufferProcessing &&
                state.bufferedRequest)
                clearBuffer(this, state);
        }
    };

    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
        // node::ParseEncoding() requires lower case.
        if (typeof encoding === 'string')
            encoding = encoding.toLowerCase();
        if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64',
                'ucs2', 'ucs-2','utf16le', 'utf-16le', 'raw']
                .indexOf((encoding + '').toLowerCase()) > -1))
            throw new TypeError('Unknown encoding: ' + encoding);
        this._writableState.defaultEncoding = encoding;
    };

    function decodeChunk(state, chunk, encoding) {
        if (!state.objectMode &&
            state.decodeStrings !== false &&
            typeof chunk === 'string') {
            chunk = new Buffer(chunk, encoding);
        }
        return chunk;
    }

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
    function writeOrBuffer(stream, state, chunk, encoding, cb) {
        chunk = decodeChunk(state, chunk, encoding);

        if (Buffer.isBuffer(chunk))
            encoding = 'buffer';
        var len = state.objectMode ? 1 : chunk.length;

        state.length += len;

        var ret = state.length < state.highWaterMark;
        // we must ensure that previous needDrain will not be reset to false.
        if (!ret)
            state.needDrain = true;

        if (state.writing || state.corked) {
            var last = state.lastBufferedRequest;
            state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
            if (last) {
                last.next = state.lastBufferedRequest;
            } else {
                state.bufferedRequest = state.lastBufferedRequest;
            }
        } else {
            doWrite(stream, state, false, len, chunk, encoding, cb);
        }

        return ret;
    }

    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
        state.writelen = len;
        state.writecb = cb;
        state.writing = true;
        state.sync = true;
        if (writev)
            stream._writev(chunk, state.onwrite);
        else
            stream._write(chunk, encoding, state.onwrite);
        state.sync = false;
    }

    function onwriteError(stream, state, sync, er, cb) {
        --state.pendingcb;
        if (sync)
            processNextTick(cb, er);
        else
            cb(er);

        stream._writableState.errorEmitted = true;
        stream.emit('error', er);
    }

    function onwriteStateUpdate(state) {
        state.writing = false;
        state.writecb = null;
        state.length -= state.writelen;
        state.writelen = 0;
    }

    function onwrite(stream, er) {
        var state = stream._writableState;
        var sync = state.sync;
        var cb = state.writecb;

        onwriteStateUpdate(state);

        if (er)
            onwriteError(stream, state, sync, er, cb);
        else {
            // Check if we're actually ready to finish, but don't emit yet
            var finished = needFinish(state);

            if (!finished &&
                !state.corked &&
                !state.bufferProcessing &&
                state.bufferedRequest) {
                clearBuffer(stream, state);
            }

            if (sync) {
                processNextTick(afterWrite, stream, state, finished, cb);
            } else {
                afterWrite(stream, state, finished, cb);
            }
        }
    }

    function afterWrite(stream, state, finished, cb) {
        if (!finished)
            onwriteDrain(stream, state);
        state.pendingcb--;
        cb();
        finishMaybe(stream, state);
    }

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
    function onwriteDrain(stream, state) {
        if (state.length === 0 && state.needDrain) {
            state.needDrain = false;
            stream.emit('drain');
        }
    }


// if there's something in the buffer waiting, then process it
    function clearBuffer(stream, state) {
        state.bufferProcessing = true;
        var entry = state.bufferedRequest;

        if (stream._writev && entry && entry.next) {
            // Fast case, write everything using _writev()
            var buffer = [];
            var cbs = [];
            while (entry) {
                cbs.push(entry.callback);
                buffer.push(entry);
                entry = entry.next;
            }

            // count the one we are adding, as well.
            // TODO(isaacs) clean this up
            state.pendingcb++;
            state.lastBufferedRequest = null;
            doWrite(stream, state, true, state.length, buffer, '', function(err) {
                for (var i = 0; i < cbs.length; i++) {
                    state.pendingcb--;
                    cbs[i](err);
                }
            });

            // Clear buffer
        } else {
            // Slow case, write chunks one-by-one
            while (entry) {
                var chunk = entry.chunk;
                var encoding = entry.encoding;
                var cb = entry.callback;
                var len = state.objectMode ? 1 : chunk.length;

                doWrite(stream, state, false, len, chunk, encoding, cb);
                entry = entry.next;
                // if we didn't call the onwrite immediately, then
                // it means that we need to wait until it does.
                // also, that means that the chunk and cb are currently
                // being processed, so move the buffer counter past them.
                if (state.writing) {
                    break;
                }
            }

            if (entry === null)
                state.lastBufferedRequest = null;
        }
        state.bufferedRequest = entry;
        state.bufferProcessing = false;
    }

    Writable.prototype._write = function(chunk, encoding, cb) {
        cb(new Error('not implemented'));
    };

    Writable.prototype._writev = null;

    Writable.prototype.end = function(chunk, encoding, cb) {
        var state = this._writableState;

        if (typeof chunk === 'function') {
            cb = chunk;
            chunk = null;
            encoding = null;
        } else if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
        }

        if (chunk !== null && chunk !== undefined)
            this.write(chunk, encoding);

        // .end() fully uncorks
        if (state.corked) {
            state.corked = 1;
            this.uncork();
        }

        // ignore unnecessary end() calls.
        if (!state.ending && !state.finished)
            endWritable(this, state, cb);
    };


    function needFinish(state) {
        return (state.ending &&
        state.length === 0 &&
        state.bufferedRequest === null &&
        !state.finished &&
        !state.writing);
    }

    function prefinish(stream, state) {
        if (!state.prefinished) {
            state.prefinished = true;
            stream.emit('prefinish');
        }
    }

    function finishMaybe(stream, state) {
        var need = needFinish(state);
        if (need) {
            if (state.pendingcb === 0) {
                prefinish(stream, state);
                state.finished = true;
                stream.emit('finish');
            } else {
                prefinish(stream, state);
            }
        }
        return need;
    }

    function endWritable(stream, state, cb) {
        state.ending = true;
        finishMaybe(stream, state);
        if (cb) {
            if (state.finished)
                processNextTick(cb);
            else
                stream.once('finish', cb);
        }
        state.ended = true;
    }

},{"./_stream_duplex":14,"buffer":4,"core-util-is":5,"events":6,"inherits":9,"process-nextick-args":12,"util-deprecate":25}],19:[function(require,module,exports){
    var Stream = (function (){
        try {
            return require('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify
        } catch(_){}
    }());
    exports = module.exports = require('./lib/_stream_readable.js');
    exports.Stream = Stream || exports;
    exports.Readable = exports;
    exports.Writable = require('./lib/_stream_writable.js');
    exports.Duplex = require('./lib/_stream_duplex.js');
    exports.Transform = require('./lib/_stream_transform.js');
    exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":14,"./lib/_stream_passthrough.js":15,"./lib/_stream_readable.js":16,"./lib/_stream_transform.js":17,"./lib/_stream_writable.js":18}],20:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

    var Buffer = require('buffer').Buffer;

    var isBufferEncoding = Buffer.isEncoding
        || function(encoding) {
            switch (encoding && encoding.toLowerCase()) {
                case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
                default: return false;
            }
        }


    function assertEncoding(encoding) {
        if (encoding && !isBufferEncoding(encoding)) {
            throw new Error('Unknown encoding: ' + encoding);
        }
    }

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
    var StringDecoder = exports.StringDecoder = function(encoding) {
        this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
        assertEncoding(encoding);
        switch (this.encoding) {
            case 'utf8':
                // CESU-8 represents each of Surrogate Pair by 3-bytes
                this.surrogateSize = 3;
                break;
            case 'ucs2':
            case 'utf16le':
                // UTF-16 represents each of Surrogate Pair by 2-bytes
                this.surrogateSize = 2;
                this.detectIncompleteChar = utf16DetectIncompleteChar;
                break;
            case 'base64':
                // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
                this.surrogateSize = 3;
                this.detectIncompleteChar = base64DetectIncompleteChar;
                break;
            default:
                this.write = passThroughWrite;
                return;
        }

        // Enough space to store all bytes of a single character. UTF-8 needs 4
        // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
        this.charBuffer = new Buffer(6);
        // Number of bytes received for the current incomplete multi-byte character.
        this.charReceived = 0;
        // Number of bytes expected for the current incomplete multi-byte character.
        this.charLength = 0;
    };


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
    StringDecoder.prototype.write = function(buffer) {
        var charStr = '';
        // if our last write ended with an incomplete multibyte character
        while (this.charLength) {
            // determine how many remaining bytes this buffer has to offer for this char
            var available = (buffer.length >= this.charLength - this.charReceived) ?
            this.charLength - this.charReceived :
                buffer.length;

            // add the new bytes to the char buffer
            buffer.copy(this.charBuffer, this.charReceived, 0, available);
            this.charReceived += available;

            if (this.charReceived < this.charLength) {
                // still not enough chars in this buffer? wait for more ...
                return '';
            }

            // remove bytes belonging to the current character from the buffer
            buffer = buffer.slice(available, buffer.length);

            // get the character that was split
            charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

            // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
            var charCode = charStr.charCodeAt(charStr.length - 1);
            if (charCode >= 0xD800 && charCode <= 0xDBFF) {
                this.charLength += this.surrogateSize;
                charStr = '';
                continue;
            }
            this.charReceived = this.charLength = 0;

            // if there are no more bytes in this buffer, just emit our char
            if (buffer.length === 0) {
                return charStr;
            }
            break;
        }

        // determine and set charLength / charReceived
        this.detectIncompleteChar(buffer);

        var end = buffer.length;
        if (this.charLength) {
            // buffer the incomplete character bytes we got
            buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
            end -= this.charReceived;
        }

        charStr += buffer.toString(this.encoding, 0, end);

        var end = charStr.length - 1;
        var charCode = charStr.charCodeAt(end);
        // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
        if (charCode >= 0xD800 && charCode <= 0xDBFF) {
            var size = this.surrogateSize;
            this.charLength += size;
            this.charReceived += size;
            this.charBuffer.copy(this.charBuffer, size, 0, size);
            buffer.copy(this.charBuffer, 0, 0, size);
            return charStr.substring(0, end);
        }

        // or just emit the charStr
        return charStr;
    };

    StringDecoder.prototype.detectIncompleteChar = function(buffer) {
        var i = (buffer.length >= 3) ? 3 : buffer.length;

        for (; i > 0; i--) {
            var c = buffer[buffer.length - i];

            if (i == 1 && c >> 5 == 0x06) {
                this.charLength = 2;
                break;
            }

            if (i <= 2 && c >> 4 == 0x0E) {
                this.charLength = 3;
                break;
            }
            if (i <= 3 && c >> 3 == 0x1E) {
                this.charLength = 4;
                break;
            }
        }
        this.charReceived = i;
    };

    StringDecoder.prototype.end = function(buffer) {
        var res = '';
        if (buffer && buffer.length)
            res = this.write(buffer);

        if (this.charReceived) {
            var cr = this.charReceived;
            var buf = this.charBuffer;
            var enc = this.encoding;
            res += buf.slice(0, cr).toString(enc);
        }

        return res;
    };

    function passThroughWrite(buffer) {
        return buffer.toString(this.encoding);
    }

    function utf16DetectIncompleteChar(buffer) {
        this.charReceived = buffer.length % 2;
        this.charLength = this.charReceived ? 2 : 0;
    }

    function base64DetectIncompleteChar(buffer) {
        this.charReceived = buffer.length % 3;
        this.charLength = this.charReceived ? 3 : 0;
    }

},{"buffer":4}],21:[function(require,module,exports){
    function SVGPathData(content) {
        this.commands = SVGPathData.parse(content);
    }

    SVGPathData.prototype.encode = function() {
        return SVGPathData.encode(this.commands);
    };

    SVGPathData.prototype.round = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.ROUND].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.toAbs = function() {
        return this.transform(SVGPathData.Transformer.TO_ABS);
    };

    SVGPathData.prototype.toRel = function() {
        return this.transform(SVGPathData.Transformer.TO_REL);
    };

    SVGPathData.prototype.translate = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.TRANSLATE].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.scale = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.SCALE].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.rotate = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.ROTATE].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.matrix = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.MATRIX].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.skewX = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.SKEW_X].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.skewY = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.SKEW_Y].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.xSymetry = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.X_AXIS_SIMETRY].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.ySymetry = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.Y_AXIS_SIMETRY].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.aToC = function() {
        return this.transform.apply(this, [SVGPathData.Transformer.A_TO_C].concat(
            [].slice.call(arguments, 0)));
    };

    SVGPathData.prototype.transform = function(transformFunction) {
        var newCommands = []
            , transformFunction = transformFunction.apply(null, [].slice.call(arguments, 1))
            , curCommands = []
            , commands = this.commands;
        for(var i=0, ii=commands.length; i<ii; i++) {
            curCommands = transformFunction(commands[i]);
            if(curCommands instanceof Array) {
                newCommands = newCommands.concat(curCommands);
            } else {
                newCommands.push(curCommands);
            }
        }
        this.commands = newCommands;
        return this;
    };

// Static methods
    SVGPathData.encode = function(commands) {
        var content = '', encoder = new SVGPathData.Encoder();
        encoder.on('readable', function () {
            var str;
            do {
                str = encoder.read();
                if(str !== null) {
                    content += str;
                }
            } while(str !== null);
        });
        encoder.write(commands);
        encoder.end();
        return content;
    };

    SVGPathData.parse = function(content) {
        var commands = [], parser = new SVGPathData.Parser();
        parser.on('readable', function () {
            var command;
            do {
                command = parser.read();
                if(command !== null) {
                    commands.push(command);
                }
            } while(command !== null);
        });
        parser.write(content);
        parser.end();
        return commands;
    };

// Commands static vars
    SVGPathData.CLOSE_PATH = 1;
    SVGPathData.MOVE_TO = 2;
    SVGPathData.HORIZ_LINE_TO = 4;
    SVGPathData.VERT_LINE_TO = 8;
    SVGPathData.LINE_TO = 16;
    SVGPathData.CURVE_TO = 32;
    SVGPathData.SMOOTH_CURVE_TO = 64;
    SVGPathData.QUAD_TO = 128;
    SVGPathData.SMOOTH_QUAD_TO = 256;
    SVGPathData.ARC = 512;
    SVGPathData.DRAWING_COMMANDS =
        SVGPathData.HORIZ_LINE_TO | SVGPathData.VERT_LINE_TO | SVGPathData.LINE_TO |
        SVGPathData.CURVE_TO | SVGPathData.SMOOTH_CURVE_TO | SVGPathData.QUAD_TO |
        SVGPathData.SMOOTH_QUAD_TO | SVGPathData.ARC;

    module.exports = SVGPathData;

    SVGPathData.Parser = require('./SVGPathDataParser.js');
    SVGPathData.Encoder = require('./SVGPathDataEncoder.js');
    SVGPathData.Transformer = require('./SVGPathDataTransformer.js');


},{"./SVGPathDataEncoder.js":22,"./SVGPathDataParser.js":23,"./SVGPathDataTransformer.js":24}],22:[function(require,module,exports){
    (function (Buffer){

        var SVGPathData = require('./SVGPathData.js');

        var TransformStream = require('readable-stream').Transform;
        var util = require('util');

        var WSP = ' ';

        util.inherits(SVGPathDataEncoder, TransformStream);

        function SVGPathDataEncoder(options) {

            if(!(this instanceof SVGPathDataEncoder)) {
                return new SVGPathDataEncoder(options);
            }

            TransformStream.call(this, {
                objectMode: true
            });

            this._writableState.objectMode = true;
            this._readableState.objectMode = false;

        }


        SVGPathDataEncoder.prototype._transform = function(commands, encoding, done) {
            var str = '';
            if(!(commands instanceof Array)) {
                commands = [commands];
            }
            for(var i=0, j=commands.length; i<j; i++) {
                // Horizontal move to command
                if(commands[i].type === SVGPathData.CLOSE_PATH) {
                    str += 'z';
                    continue;
                    // Horizontal move to command
                } else if(commands[i].type === SVGPathData.HORIZ_LINE_TO) {
                    str += (commands[i].relative?'h':'H') +
                        commands[i].x;
                    // Vertical move to command
                } else if(commands[i].type === SVGPathData.VERT_LINE_TO) {
                    str += (commands[i].relative?'v':'V') +
                        commands[i].y;
                    // Move to command
                } else if(commands[i].type === SVGPathData.MOVE_TO) {
                    str += (commands[i].relative?'m':'M') +
                        commands[i].x + WSP + commands[i].y;
                    // Line to command
                } else if(commands[i].type === SVGPathData.LINE_TO) {
                    str += (commands[i].relative?'l':'L') +
                        commands[i].x + WSP + commands[i].y;
                    // Curve to command
                } else if(commands[i].type === SVGPathData.CURVE_TO) {
                    str += (commands[i].relative?'c':'C') +
                        commands[i].x2 + WSP + commands[i].y2 +
                        WSP + commands[i].x1 + WSP + commands[i].y1 +
                        WSP + commands[i].x + WSP + commands[i].y;
                    // Smooth curve to command
                } else if(commands[i].type === SVGPathData.SMOOTH_CURVE_TO) {
                    str += (commands[i].relative?'s':'S') +
                        commands[i].x2 + WSP + commands[i].y2 +
                        WSP + commands[i].x + WSP + commands[i].y;
                    // Quadratic bezier curve to command
                } else if(commands[i].type === SVGPathData.QUAD_TO) {
                    str += (commands[i].relative?'q':'Q') +
                        commands[i].x1 + WSP + commands[i].y1 +
                        WSP + commands[i].x + WSP + commands[i].y;
                    // Smooth quadratic bezier curve to command
                } else if(commands[i].type === SVGPathData.SMOOTH_QUAD_TO) {
                    str += (commands[i].relative?'t':'T') +
                        commands[i].x + WSP + commands[i].y;
                    // Elliptic arc command
                } else if(commands[i].type === SVGPathData.ARC) {
                    str += (commands[i].relative?'a':'A') +
                        commands[i].rX + WSP + commands[i].rY +
                        WSP + commands[i].xRot +
                        WSP + commands[i].lArcFlag + WSP + commands[i].sweepFlag +
                        WSP + commands[i].x + WSP + commands[i].y;
                    // Unkown command
                } else {
                    this.emit('error', new Error('Unexpected command type "' +
                        commands[i].type + '" at index ' + i + '.'));
                }
            }
            this.push(new Buffer(str, 'utf8'));
            done();
        };

        module.exports = SVGPathDataEncoder;


    }).call(this,require("buffer").Buffer)
},{"./SVGPathData.js":21,"buffer":4,"readable-stream":19,"util":27}],23:[function(require,module,exports){
    (function (Buffer){

        var SVGPathData = require('./SVGPathData.js');

        var TransformStream = require('readable-stream').Transform;
        var util = require('util');

        var WSP = [' ', '\t', '\r', '\n'];
        var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var SIGNS = ['-', '+'];
        var EXPONENTS = ['e', 'E'];
        var DECPOINT = ['.'];
        var FLAGS = ['0', '1'];
        var COMMA = [','];
        var COMMANDS = [
            'm', 'M', 'z', 'Z', 'l', 'L', 'h', 'H', 'v', 'V', 'c', 'C',
            's', 'S', 'q', 'Q', 't', 'T', 'a', 'A'
        ];

        util.inherits(SVGPathDataParser, TransformStream);

        function SVGPathDataParser(options) {

            if(!(this instanceof SVGPathDataParser)) {
                return new SVGPathDataParser(options);
            }

            // Parent constructor
            TransformStream.call(this, {
                objectMode: true
            });

            // Setting objectMode separately
            this._writableState.objectMode = false;
            this._readableState.objectMode = true;

            // Parsing vars
            this.state = SVGPathDataParser.STATE_COMMAS_WSPS;
            this.curNumber = '';
            this.curCommand = null;
            this._flush = function(callback) {
                this._transform(new Buffer(' '), 'utf-8', function() {});
                // Adding residual command
                if(null !== this.curCommand) {
                    if(this.curCommand.invalid) {
                        this.emit('error',
                            new SyntaxError('Unterminated command at the path end.'));
                    }
                    this.push(this.curCommand);
                    this.curCommand = null;
                    this.state ^= this.state&SVGPathDataParser.STATE_COMMANDS_MASK;
                }
                callback();
            };
            this._transform = function(chunk, encoding, callback) {
                var str = chunk.toString(encoding !== 'buffer' ? encoding : 'utf8');
                for(var i=0, j=str.length; i<j; i++) {
                    // White spaces parsing
                    if(this.state&SVGPathDataParser.STATE_WSP ||
                        this.state&SVGPathDataParser.STATE_WSPS) {
                        if(-1 !== WSP.indexOf(str[i])) {
                            this.state ^= this.state&SVGPathDataParser.STATE_WSP;
                            // any space stops current number parsing
                            if('' !== this.curNumber) {
                                this.state ^= this.state&SVGPathDataParser.STATE_NUMBER_MASK;
                            } else {
                                continue;
                            }
                        }
                    }
                    // Commas parsing
                    if(this.state&SVGPathDataParser.STATE_COMMA ||
                        this.state&SVGPathDataParser.STATE_COMMAS) {
                        if(-1 !== COMMA.indexOf(str[i])) {
                            this.state ^= this.state&SVGPathDataParser.STATE_COMMA;
                            // any comma stops current number parsing
                            if('' !== this.curNumber) {
                                this.state ^= this.state&SVGPathDataParser.STATE_NUMBER_MASK;
                            } else {
                                continue;
                            }
                        }
                    }
                    // Numbers parsing : -125.25e-125
                    if(this.state&SVGPathDataParser.STATE_NUMBER) {
                        // Reading the sign
                        if((this.state&SVGPathDataParser.STATE_NUMBER_MASK) ===
                            SVGPathDataParser.STATE_NUMBER) {
                            this.state |= SVGPathDataParser.STATE_NUMBER_INT |
                                SVGPathDataParser.STATE_NUMBER_DIGITS;
                            if(-1 !== SIGNS.indexOf(str[i])) {
                                this.curNumber += str[i];
                                continue;
                            }
                        }
                        // Reading the exponent sign
                        if(this.state&SVGPathDataParser.STATE_NUMBER_EXPSIGN) {
                            this.state ^= SVGPathDataParser.STATE_NUMBER_EXPSIGN;
                            this.state |= SVGPathDataParser.STATE_NUMBER_DIGITS;
                            if(-1 !== SIGNS.indexOf(str[i])) {
                                this.curNumber += str[i];
                                continue;
                            }
                        }
                        // Reading digits
                        if(this.state&SVGPathDataParser.STATE_NUMBER_DIGITS) {
                            if(-1 !== DIGITS.indexOf(str[i])) {
                                this.curNumber += str[i];
                                continue;
                            }
                            this.state ^= SVGPathDataParser.STATE_NUMBER_DIGITS;
                        }
                        // Ended reading left side digits
                        if(this.state&SVGPathDataParser.STATE_NUMBER_INT) {
                            this.state ^= SVGPathDataParser.STATE_NUMBER_INT;
                            // if got a point, reading right side digits
                            if(-1 !== DECPOINT.indexOf(str[i])) {
                                this.curNumber += str[i];
                                this.state |= SVGPathDataParser.STATE_NUMBER_FLOAT |
                                    SVGPathDataParser.STATE_NUMBER_DIGITS;
                                continue;
                                // if got e/E, reading the exponent
                            } else if(-1 !== EXPONENTS.indexOf(str[i])) {
                                this.curNumber += str[i];
                                this.state |= SVGPathDataParser.STATE_NUMBER_EXP |
                                    SVGPathDataParser.STATE_NUMBER_EXPSIGN;
                                continue;
                            }
                            // else we're done with that number
                            this.state ^= this.state&SVGPathDataParser.STATE_NUMBER_MASK;
                        }
                        // Ended reading decimal digits
                        if(this.state&SVGPathDataParser.STATE_NUMBER_FLOAT) {
                            this.state ^= SVGPathDataParser.STATE_NUMBER_FLOAT;
                            // if got e/E, reading the exponent
                            if(-1 !== EXPONENTS.indexOf(str[i])) {
                                this.curNumber += str[i];
                                this.state |= SVGPathDataParser.STATE_NUMBER_EXP |
                                    SVGPathDataParser.STATE_NUMBER_EXPSIGN;
                                continue;
                            }
                            // else we're done with that number
                            this.state ^= this.state&SVGPathDataParser.STATE_NUMBER_MASK;
                        }
                        // Ended reading exponent digits
                        if(this.state&SVGPathDataParser.STATE_NUMBER_EXP) {
                            // we're done with that number
                            this.state ^= this.state&SVGPathDataParser.STATE_NUMBER_MASK;
                        }
                    }
                    // New number
                    if(this.curNumber) {
                        // Horizontal move to command (x)
                        if(this.state&SVGPathDataParser.STATE_HORIZ_LINE_TO) {
                            if(null === this.curCommand) {
                                this.push({
                                    type: SVGPathData.HORIZ_LINE_TO,
                                    relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                                    x: Number(this.curNumber)
                                });
                            } else {
                                this.curCommand.x = Number(this.curNumber);
                                delete this.curCommand.invalid;
                                this.push(this.curCommand);
                                this.curCommand = null;
                            }
                            this.state |= SVGPathDataParser.STATE_NUMBER;
                            // Vertical move to command (y)
                        } else if(this.state&SVGPathDataParser.STATE_VERT_LINE_TO) {
                            if(null === this.curCommand) {
                                this.push({
                                    type: SVGPathData.VERT_LINE_TO,
                                    relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                                    y: Number(this.curNumber)
                                });
                            } else {
                                this.curCommand.y = Number(this.curNumber);
                                delete this.curCommand.invalid;
                                this.push(this.curCommand);
                                this.curCommand = null;
                            }
                            this.state |= SVGPathDataParser.STATE_NUMBER;
                            // Move to / line to / smooth quadratic curve to commands (x, y)
                        } else if(this.state&SVGPathDataParser.STATE_MOVE_TO ||
                            this.state&SVGPathDataParser.STATE_LINE_TO ||
                            this.state&SVGPathDataParser.STATE_SMOOTH_QUAD_TO) {
                            if(null === this.curCommand) {
                                this.curCommand = {
                                    type: (this.state&SVGPathDataParser.STATE_MOVE_TO ?
                                            SVGPathData.MOVE_TO :
                                            (this.state&SVGPathDataParser.STATE_LINE_TO ?
                                                    SVGPathData.LINE_TO : SVGPathData.SMOOTH_QUAD_TO
                                            )
                                    ),
                                    relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                                    x: Number(this.curNumber)
                                };
                            } else if('undefined' === typeof this.curCommand.x) {
                                this.curCommand.x = Number(this.curNumber);
                            } else {
                                delete this.curCommand.invalid;
                                this.curCommand.y = Number(this.curNumber);
                                this.push(this.curCommand);
                                this.curCommand = null;
                                // Switch to line to state
                                if(this.state&SVGPathDataParser.STATE_MOVE_TO) {
                                    this.state ^= SVGPathDataParser.STATE_MOVE_TO;
                                    this.state |= SVGPathDataParser.STATE_LINE_TO;
                                }
                            }
                            this.state |= SVGPathDataParser.STATE_NUMBER;
                            // Curve to commands (x1, y1, x2, y2, x, y)
                        } else if(this.state&SVGPathDataParser.STATE_CURVE_TO) {
                            if(null === this.curCommand) {
                                this.curCommand = {
                                    type: SVGPathData.CURVE_TO,
                                    relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                                    invalid: true,
                                    x2:  Number(this.curNumber)
                                };
                            } else if('undefined' === typeof this.curCommand.x2) {
                                this.curCommand.x2 = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.y2) {
                                this.curCommand.y2 = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.x1) {
                                this.curCommand.x1 = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.y1) {
                                this.curCommand.y1 = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.x) {
                                this.curCommand.x = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.y) {
                                this.curCommand.y = Number(this.curNumber);
                                delete this.curCommand.invalid;
                                this.push(this.curCommand);
                                this.curCommand = null;
                            }
                            this.state |= SVGPathDataParser.STATE_NUMBER;
                            // Smooth curve to commands (x1, y1, x, y)
                        } else if(this.state&SVGPathDataParser.STATE_SMOOTH_CURVE_TO) {
                            if(null === this.curCommand) {
                                this.curCommand = {
                                    type: SVGPathData.SMOOTH_CURVE_TO,
                                    relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                                    invalid: true,
                                    x2:  Number(this.curNumber)
                                };
                            } else if('undefined' === typeof this.curCommand.x2) {
                                this.curCommand.x2 = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.y2) {
                                this.curCommand.y2 = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.x) {
                                this.curCommand.x = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.y) {
                                this.curCommand.y = Number(this.curNumber);
                                delete this.curCommand.invalid;
                                this.push(this.curCommand);
                                this.curCommand = null;
                            }
                            this.state |= SVGPathDataParser.STATE_NUMBER;
                            // Quadratic bezier curve to commands (x1, y1, x, y)
                        } else if(this.state&SVGPathDataParser.STATE_QUAD_TO) {
                            if(null === this.curCommand) {
                                this.curCommand = {
                                    type: SVGPathData.QUAD_TO,
                                    relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                                    invalid: true,
                                    x1:  Number(this.curNumber)
                                };
                            } else if('undefined' === typeof this.curCommand.x1) {
                                this.curCommand.x1 = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.y1) {
                                this.curCommand.y1 = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.x) {
                                this.curCommand.x = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.y) {
                                this.curCommand.y = Number(this.curNumber);
                                delete this.curCommand.invalid;
                                this.push(this.curCommand);
                                this.curCommand = null;
                            }
                            this.state |= SVGPathDataParser.STATE_NUMBER;
                            // Elliptic arc commands (rX, rY, xRot, lArcFlag, sweepFlag, x, y)
                        } else if(this.state&SVGPathDataParser.STATE_ARC) {
                            if(null === this.curCommand) {
                                this.curCommand = {
                                    type: SVGPathData.ARC,
                                    relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                                    invalid: true,
                                    rX:  Number(this.curNumber)
                                };
                            } else if('undefined' === typeof this.curCommand.rX) {
                                if(Number(this.curNumber) < 0) {
                                    this.emit('error', new SyntaxError('Expected positive number,' +
                                        ' got "' + this.curNumber + '" at index "' + i + '"'));
                                }
                                this.curCommand.rX = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.rY) {
                                if(Number(this.curNumber) < 0) {
                                    this.emit('error', new SyntaxError('Expected positive number,' +
                                        ' got "' + this.curNumber + '" at index "' + i + '"'));
                                }
                                this.curCommand.rY = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.xRot) {
                                this.curCommand.xRot = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.lArcFlag) {
                                if('0' !== this.curNumber && '1' !== this.curNumber) {
                                    this.emit('error', new SyntaxError('Expected a flag, got "' +
                                        this.curNumber + '" at index "' + i + '"'));
                                }
                                this.curCommand.lArcFlag = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.sweepFlag) {
                                if('0' !== this.curNumber && '1' !== this.curNumber) {
                                    this.emit('error', new SyntaxError('Expected a flag, got "' +
                                        this.curNumber +'" at index "' + i + '"'));
                                }
                                this.curCommand.sweepFlag = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.x) {
                                this.curCommand.x = Number(this.curNumber);
                            } else if('undefined' === typeof this.curCommand.y) {
                                this.curCommand.y = Number(this.curNumber);
                                delete this.curCommand.invalid;
                                this.push(this.curCommand);
                                this.curCommand = null;
                            }
                            this.state |= SVGPathDataParser.STATE_NUMBER;
                        }
                        this.curNumber = '';
                        // Continue if a white space or a comma was detected
                        if(-1 !== WSP.indexOf(str[i]) || -1 !== COMMA.indexOf(str[i])) {
                            continue;
                        }
                        // if a sign is detected, then parse the new number
                        if(-1 !== SIGNS.indexOf(str[i])) {
                            this.curNumber = str[i];
                            this.state |= SVGPathDataParser.STATE_NUMBER_INT |
                                SVGPathDataParser.STATE_NUMBER_DIGITS;
                            continue;
                        }
                        // if the decpoint is detected, then parse the new number
                        if(-1 !== DECPOINT.indexOf(str[i])) {
                            this.curNumber = str[i];
                            this.state |= SVGPathDataParser.STATE_NUMBER_FLOAT |
                                SVGPathDataParser.STATE_NUMBER_DIGITS;
                            continue;
                        }
                    }
                    // End of a command
                    if(-1 !== COMMANDS.indexOf(str[i])) {
                        // Adding residual command
                        if(null !== this.curCommand) {
                            if(this.curCommand.invalid) {
                                this.emit('error',
                                    new SyntaxError('Unterminated command at index ' + i + '.'));
                            }
                            this.push(this.curCommand);
                            this.curCommand = null;
                            this.state ^= this.state&SVGPathDataParser.STATE_COMMANDS_MASK;
                        }
                    }
                    // Detecting the next command
                    this.state ^= this.state&SVGPathDataParser.STATE_COMMANDS_MASK;
                    // Is the command relative
                    if(str[i]===str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_RELATIVE;
                    } else {
                        this.state ^= this.state&SVGPathDataParser.STATE_RELATIVE;
                    }
                    // Horizontal move to command
                    if('z' === str[i].toLowerCase()) {
                        this.push({
                            type: SVGPathData.CLOSE_PATH
                        });
                        this.state = SVGPathDataParser.STATE_COMMAS_WSPS;
                        continue;
                        // Horizontal move to command
                    } else if('h' === str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_HORIZ_LINE_TO;
                        this.curCommand = {
                            type: SVGPathData.HORIZ_LINE_TO,
                            relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                            invalid: true
                        };
                        // Vertical move to command
                    } else if('v' === str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_VERT_LINE_TO;
                        this.curCommand = {
                            type: SVGPathData.VERT_LINE_TO,
                            relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                            invalid: true
                        };
                        // Move to command
                    } else if('m' === str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_MOVE_TO;
                        this.curCommand = {
                            type: SVGPathData.MOVE_TO,
                            relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                            invalid: true
                        };
                        // Line to command
                    } else if('l' === str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_LINE_TO;
                        this.curCommand = {
                            type: SVGPathData.LINE_TO,
                            relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                            invalid: true
                        };
                        // Curve to command
                    } else if('c' === str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_CURVE_TO;
                        this.curCommand = {
                            type: SVGPathData.CURVE_TO,
                            relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                            invalid: true
                        };
                        // Smooth curve to command
                    } else if('s' === str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_SMOOTH_CURVE_TO;
                        this.curCommand = {
                            type: SVGPathData.SMOOTH_CURVE_TO,
                            relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                            invalid: true
                        };
                        // Quadratic bezier curve to command
                    } else if('q' === str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_QUAD_TO;
                        this.curCommand = {
                            type: SVGPathData.QUAD_TO,
                            relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                            invalid: true
                        };
                        // Smooth quadratic bezier curve to command
                    } else if('t' === str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_SMOOTH_QUAD_TO;
                        this.curCommand = {
                            type: SVGPathData.SMOOTH_QUAD_TO,
                            relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                            invalid: true
                        };
                        // Elliptic arc command
                    } else if('a' === str[i].toLowerCase()) {
                        this.state |= SVGPathDataParser.STATE_ARC;
                        this.curCommand = {
                            type: SVGPathData.ARC,
                            relative: !!(this.state&SVGPathDataParser.STATE_RELATIVE),
                            invalid: true
                        };
                        // Unkown command
                    } else {
                        this.emit('error', new SyntaxError('Unexpected character "' + str[i] +
                            '" at index ' + i + '.'));
                    }
                    // White spaces can follow a command
                    this.state |= SVGPathDataParser.STATE_COMMAS_WSPS |
                        SVGPathDataParser.STATE_NUMBER;
                }
                callback();
            };
        }

// Static consts
// Parsing states
        SVGPathDataParser.STATE_WSP = 1;
        SVGPathDataParser.STATE_WSPS = 2;
        SVGPathDataParser.STATE_COMMA = 4;
        SVGPathDataParser.STATE_COMMAS = 8;
        SVGPathDataParser.STATE_COMMAS_WSPS =
            SVGPathDataParser.STATE_WSP | SVGPathDataParser.STATE_WSPS |
            SVGPathDataParser.STATE_COMMA | SVGPathDataParser.STATE_COMMAS;
        SVGPathDataParser.STATE_NUMBER = 16;
        SVGPathDataParser.STATE_NUMBER_DIGITS = 32;
        SVGPathDataParser.STATE_NUMBER_INT = 64;
        SVGPathDataParser.STATE_NUMBER_FLOAT = 128;
        SVGPathDataParser.STATE_NUMBER_EXP = 256;
        SVGPathDataParser.STATE_NUMBER_EXPSIGN = 512;
        SVGPathDataParser.STATE_NUMBER_MASK = SVGPathDataParser.STATE_NUMBER |
            SVGPathDataParser.STATE_NUMBER_DIGITS | SVGPathDataParser.STATE_NUMBER_INT |
            SVGPathDataParser.STATE_NUMBER_EXP | SVGPathDataParser.STATE_NUMBER_FLOAT;
        SVGPathDataParser.STATE_RELATIVE = 1024;
        SVGPathDataParser.STATE_CLOSE_PATH = 2048; // Close path command (z/Z)
        SVGPathDataParser.STATE_MOVE_TO = 4096; // Move to command (m/M)
        SVGPathDataParser.STATE_LINE_TO = 8192; // Line to command (l/L=)
        SVGPathDataParser.STATE_HORIZ_LINE_TO = 16384; // Horizontal line to command (h/H)
        SVGPathDataParser.STATE_VERT_LINE_TO = 32768; // Vertical line to command (v/V)
        SVGPathDataParser.STATE_CURVE_TO = 65536; // Curve to command (c/C)
        SVGPathDataParser.STATE_SMOOTH_CURVE_TO = 131072; // Smooth curve to command (s/S)
        SVGPathDataParser.STATE_QUAD_TO = 262144; // Quadratic bezier curve to command (q/Q)
        SVGPathDataParser.STATE_SMOOTH_QUAD_TO = 524288; // Smooth quadratic bezier curve to command (t/T)
        SVGPathDataParser.STATE_ARC = 1048576; // Elliptic arc command (a/A)
        SVGPathDataParser.STATE_COMMANDS_MASK =
            SVGPathDataParser.STATE_CLOSE_PATH | SVGPathDataParser.STATE_MOVE_TO |
            SVGPathDataParser.STATE_LINE_TO | SVGPathDataParser.STATE_HORIZ_LINE_TO |
            SVGPathDataParser.STATE_VERT_LINE_TO | SVGPathDataParser.STATE_CURVE_TO |
            SVGPathDataParser.STATE_SMOOTH_CURVE_TO | SVGPathDataParser.STATE_QUAD_TO |
            SVGPathDataParser.STATE_SMOOTH_QUAD_TO | SVGPathDataParser.STATE_ARC;

        module.exports = SVGPathDataParser;


    }).call(this,require("buffer").Buffer)
},{"./SVGPathData.js":21,"buffer":4,"readable-stream":19,"util":27}],24:[function(require,module,exports){
    var SVGPathData = require('./SVGPathData.js');

// TransformStream inherance required modules
    var TransformStream = require('readable-stream').Transform;
    var util = require('util');

// Inherit of transform stream
    util.inherits(SVGPathDataTransformer, TransformStream);

    function SVGPathDataTransformer(transformFunction) {
        // Ensure new were used
        if(!(this instanceof SVGPathDataTransformer)) {
            return new (SVGPathDataTransformer.bind.apply(SVGPathDataTransformer,
                [SVGPathDataTransformer].concat([].slice.call(arguments, 0))));
        }

        // Transform function needed
        if('function' !== typeof transformFunction) {
            throw new Error('Please provide a transform callback to receive commands.');
        }
        this._transformer = transformFunction.apply(null, [].slice.call(arguments, 1));
        if('function' !== typeof this._transformer) {
            throw new Error('Please provide a valid transform (returning a function).');
        }

        // Parent constructor
        TransformStream.call(this, {
            objectMode: true
        });
    }

    SVGPathDataTransformer.prototype._transform = function(commands, encoding, done) {
        if(!(commands instanceof Array)) {
            commands = [commands];
        }
        for(var i=0, j=commands.length; i<j; i++) {
            this.push(this._transformer(commands[i]));
        }
        done();
    };

// Predefined transforming functions
// Rounds commands values
    SVGPathDataTransformer.ROUND = function roundGenerator(roundVal) {
        roundVal = roundVal || 10e12;
        return function round(command) {
            // x1/y1 values
            if('undefined' !== typeof command.x1) {
                command.x1 = Math.round(command.x1*roundVal)/roundVal;
            }
            if('undefined' !== typeof command.y1) {
                command.y1 = Math.round(command.y1*roundVal)/roundVal;
            }
            // x2/y2 values
            if('undefined' !== typeof command.x2) {
                command.x2 = Math.round(command.x2*roundVal)/roundVal;
            }
            if('undefined' !== typeof command.y2) {
                command.y2 = Math.round(command.y2*roundVal)/roundVal;
            }
            // Finally x/y values
            if('undefined' !== typeof command.x) {
                command.x = Math.round(command.x*roundVal,12)/roundVal;
            }
            if('undefined' !== typeof command.y) {
                command.y = Math.round(command.y*roundVal,12)/roundVal;
            }
            return command;
        };
    };

// Relative to absolute commands
    SVGPathDataTransformer.TO_ABS = function toAbsGenerator() {
        var prevX = 0, prevY = 0, pathStartX = NaN, pathStartY = NaN;
        return function toAbs(command) {
            if(isNaN(pathStartX) && (command.type&SVGPathData.DRAWING_COMMANDS)) {
                pathStartX = prevX;
                pathStartY = prevY;
            }
            if((command.type&SVGPathData.CLOSE_PATH) && !isNaN(pathStartX)) {
                prevX = isNaN(pathStartX) ? 0 : pathStartX;
                prevY = isNaN(pathStartY) ? 0 : pathStartY;
                pathStartX = NaN;
                pathStartY = NaN;
            }
            if(command.relative) {
                // x1/y1 values
                if('undefined' !== typeof command.x1) {
                    command.x1 = prevX + command.x1;
                }
                if('undefined' !== typeof command.y1) {
                    command.y1 = prevY + command.y1;
                }
                // x2/y2 values
                if('undefined' !== typeof command.x2) {
                    command.x2 = prevX + command.x2;
                }
                if('undefined' !== typeof command.y2) {
                    command.y2 = prevY + command.y2;
                }
                // Finally x/y values
                if('undefined' !== typeof command.x) {
                    command.x = prevX + command.x;
                }
                if('undefined' !== typeof command.y) {
                    command.y = prevY + command.y;
                }
                command.relative = false;
            }
            prevX = ('undefined' !== typeof command.x ? command.x : prevX);
            prevY = ('undefined' !== typeof command.y ? command.y : prevY);
            return command;
        };
    };

// Absolute to relative commands
    SVGPathDataTransformer.TO_REL = function toRelGenerator() {
        var prevX = 0, prevY = 0;
        return function toRel(command) {
            if(!command.relative) {
                // x1/y1 values
                if('undefined' !== typeof command.x1) {
                    command.x1 = command.x1 - prevX;
                }
                if('undefined' !== typeof command.y1) {
                    command.y1 = command.y1 - prevY;
                }
                // x2/y2 values
                if('undefined' !== typeof command.x2) {
                    command.x2 = command.x2 - prevX;
                }
                if('undefined' !== typeof command.y2) {
                    command.y2 = command.y2 - prevY;
                }
                // Finally x/y values
                if('undefined' !== typeof command.x) {
                    command.x = command.x - prevX;
                }
                if('undefined' !== typeof command.y) {
                    command.y = command.y - prevY;
                }
                command.relative = true;
            }
            prevX = ('undefined' !== typeof command.x ? prevX + command.x : prevX);
            prevY = ('undefined' !== typeof command.y ? prevY + command.y : prevY);
            return command;
        };
    };

    SVGPathDataTransformer.MATRIX = function matrixGenerator(a, b, c, d, e, f) {
        var prevX, prevY;
        if('number' !== typeof a, 'number' !== typeof b,
            'number' !== typeof c, 'number' !== typeof d,
            'number' !== typeof e, 'number' !== typeof f) {
            throw new Error('A matrix transformation requires parameters' +
                ' [a,b,c,d,e,f] to be set and to be numbers.');
        }
        return function matrix(command) {
            var origX = command.x, origX1 = command.x1, origX2 = command.x2;
            if('undefined' !== typeof command.x) {
                command.x =  command.x * a +
                    ('undefined' !== typeof command.y ?
                            command.y : (command.relative ? 0 : prevY || 0)
                    ) * c +
                    (command.relative && 'undefined' !== typeof prevX ? 0 : e);
            }
            if('undefined' !== typeof command.y) {
                command.y = ('undefined' !== typeof origX ?
                            origX : (command.relative ? 0 : prevX || 0)
                    ) * b +
                    command.y * d +
                    (command.relative && 'undefined' !== typeof prevY ? 0 : f);
            }
            if('undefined' !== typeof command.x1) {
                command.x1 = command.x1 * a + command.y1 * c +
                    (command.relative && 'undefined' !== typeof prevX ? 0 : e);
            }
            if('undefined' !== typeof command.y1) {
                command.y1 = origX1 * b + command.y1 * d +
                    (command.relative && 'undefined' !== typeof prevY ? 0 : f);
            }
            if('undefined' !== typeof command.x2) {
                command.x2 = command.x2 * a + command.y2 * c +
                    (command.relative && 'undefined' !== typeof prevX ? 0 : e);
            }
            if('undefined' !== typeof command.y2) {
                command.y2 = origX2 * b + command.y2 * d +
                    (command.relative && 'undefined' !== typeof prevY ? 0 : f);
            }
            prevX = ('undefined' !== typeof command.x ?
                (command.relative ? (prevX || 0) + command.x : command.x) :
            prevX || 0);
            prevY = ('undefined' !== typeof command.y ?
                (command.relative ? (prevY || 0) + command.y : command.y) :
            prevY || 0);
            return command;
        };
    };

// Rotation
    SVGPathDataTransformer.ROTATE = function rotateGenerator(a, x, y) {
        if('number' !== typeof a) {
            throw new Error('A rotate transformation requires the parameter a' +
                ' to be set and to be a number.');
        }
        return (function(toOrigin, doRotate, fromOrigin) {
            return function rotate(command) {
                return fromOrigin(doRotate(toOrigin(command)));
            };
        })(SVGPathDataTransformer.TRANSLATE(-(x || 0), -(y || 0)),
            SVGPathDataTransformer.MATRIX(Math.cos(a), Math.sin(a),
                -Math.sin(a), Math.cos(a), 0, 0),
            SVGPathDataTransformer.TRANSLATE(x || 0, y || 0)
        );
    };

// Translation
    SVGPathDataTransformer.TRANSLATE = function translateGenerator(dX, dY) {
        if('number' !== typeof dX) {
            throw new Error('A translate transformation requires the parameter dX' +
                ' to be set and to be a number.');
        }
        return SVGPathDataTransformer.MATRIX(1, 0, 0, 1, dX, dY || 0);
    };

// Scaling
    SVGPathDataTransformer.SCALE = function scaleGenerator(dX, dY) {
        if('number' !== typeof dX) {
            throw new Error('A scale transformation requires the parameter dX' +
                ' to be set and to be a number.');
        }
        return SVGPathDataTransformer.MATRIX(dX, 0, 0, dY || dX, 0, 0);
    };

// Skew
    SVGPathDataTransformer.SKEW_X = function skewXGenerator(a) {
        if('number' !== typeof a) {
            throw new Error('A skewX transformation requires the parameter x' +
                ' to be set and to be a number.');
        }
        return SVGPathDataTransformer.MATRIX(1, 0, Math.atan(a), 1, 0, 0);
    };
    SVGPathDataTransformer.SKEW_Y = function skewYGenerator(a) {
        if('number' !== typeof a) {
            throw new Error('A skewY transformation requires the parameter y' +
                ' to be set and to be a number.');
        }
        return SVGPathDataTransformer.MATRIX(1, Math.atan(a), 0, 1, 0, 0);
    };

// Symetry througth the X axis
    SVGPathDataTransformer.X_AXIS_SIMETRY = function xSymetryGenerator(xDecal) {
        return (function(toAbs, scale, translate) {
            return function xSymetry(command) {
                return translate(scale(toAbs(command)));
            };
        })(SVGPathDataTransformer.TO_ABS(),
            SVGPathDataTransformer.SCALE(-1, 1),
            SVGPathDataTransformer.TRANSLATE(xDecal || 0, 0)
        );
    };

// Symetry througth the Y axis
    SVGPathDataTransformer.Y_AXIS_SIMETRY = function ySymetryGenerator(yDecal) {
        return (function(toAbs, scale, translate) {
            return function ySymetry(command) {
                return translate(scale(toAbs(command)));
            };
        })(SVGPathDataTransformer.TO_ABS(),
            SVGPathDataTransformer.SCALE(1, -1),
            SVGPathDataTransformer.TRANSLATE(0, yDecal || 0)
        );
    };

// Convert arc commands to curve commands
    SVGPathDataTransformer.A_TO_C = function a2CGenerator() {
        var prevX = 0, prevY = 0, args;
        return (function(toAbs) {
            return function a2C(command) {
                var commands = [];
                command = toAbs(command);
                if(command.type === SVGPathData.ARC) {
                    args = a2c(prevX, prevY, command.rX, command.rX, command.xRot,
                        command.lArcFlag, command.sweepFlag, command.x, command.y);
                    prevX = command.x; prevY = command.y;
                    for(var i=0, ii=args.length; i<ii; i+=6) {
                        commands.push({
                            type: SVGPathData.CURVE_TO,
                            relative: false,
                            x2: args[i],
                            y2: args[i+1],
                            x1: args[i+2],
                            y1: args[i+3],
                            x: args[i+4],
                            y: args[i+5]
                        });
                    }
                    return commands;
                } else {
                    prevX = command.x; prevY = command.y;
                    return command;
                }
            };
        })(SVGPathDataTransformer.TO_ABS());
    };

    function a2c (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        var PI = Math.PI;
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = function (x, y, rad) {
                var X = x * Math.cos(rad) - y * Math.sin(rad),
                    Y = x * Math.sin(rad) + y * Math.cos(rad);
                return {x: X, y: Y};
            };
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = Math.cos(PI / 180 * angle),
                sin = Math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
            if (h > 1) {
                h = Math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) *
                    Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) /
                        (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = Math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = Math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (Math.abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * Math.cos(f2);
            y2 = cy + ry * Math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old,
                [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = Math.cos(f1),
            s1 = Math.sin(f1),
            c2 = Math.cos(f2),
            s2 = Math.sin(f2),
            t = Math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(',');
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y :
                    rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }

    module.exports = SVGPathDataTransformer;


},{"./SVGPathData.js":21,"readable-stream":19,"util":27}],25:[function(require,module,exports){
    (function (global){

        /**
         * Module exports.
         */

        module.exports = deprecate;

        /**
         * Mark that a method should not be used.
         * Returns a modified function which warns once by default.
         *
         * If `localStorage.noDeprecation = true` is set, then it is a no-op.
         *
         * If `localStorage.throwDeprecation = true` is set, then deprecated functions
         * will throw an Error when invoked.
         *
         * If `localStorage.traceDeprecation = true` is set, then deprecated functions
         * will invoke `console.trace()` instead of `console.error()`.
         *
         * @param {Function} fn - the function to deprecate
         * @param {String} msg - the string to print to the console when `fn` is invoked
         * @returns {Function} a new "deprecated" version of `fn`
         * @api public
         */

        function deprecate (fn, msg) {
            if (config('noDeprecation')) {
                return fn;
            }

            var warned = false;
            function deprecated() {
                if (!warned) {
                    if (config('throwDeprecation')) {
                        throw new Error(msg);
                    } else if (config('traceDeprecation')) {
                        console.trace(msg);
                    } else {
                        console.warn(msg);
                    }
                    warned = true;
                }
                return fn.apply(this, arguments);
            }

            return deprecated;
        }

        /**
         * Checks `localStorage` for boolean values for the given `name`.
         *
         * @param {String} name
         * @returns {Boolean}
         * @api private
         */

        function config (name) {
            if (!global.localStorage) return false;
            var val = global.localStorage[name];
            if (null == val) return false;
            return String(val).toLowerCase() === 'true';
        }

    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],26:[function(require,module,exports){
    module.exports = function isBuffer(arg) {
        return arg && typeof arg === 'object'
            && typeof arg.copy === 'function'
            && typeof arg.fill === 'function'
            && typeof arg.readUInt8 === 'function';
    }
},{}],27:[function(require,module,exports){
    (function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

        var formatRegExp = /%[sdj%]/g;
        exports.format = function(f) {
            if (!isString(f)) {
                var objects = [];
                for (var i = 0; i < arguments.length; i++) {
                    objects.push(inspect(arguments[i]));
                }
                return objects.join(' ');
            }

            var i = 1;
            var args = arguments;
            var len = args.length;
            var str = String(f).replace(formatRegExp, function(x) {
                if (x === '%%') return '%';
                if (i >= len) return x;
                switch (x) {
                    case '%s': return String(args[i++]);
                    case '%d': return Number(args[i++]);
                    case '%j':
                        try {
                            return JSON.stringify(args[i++]);
                        } catch (_) {
                            return '[Circular]';
                        }
                    default:
                        return x;
                }
            });
            for (var x = args[i]; i < len; x = args[++i]) {
                if (isNull(x) || !isObject(x)) {
                    str += ' ' + x;
                } else {
                    str += ' ' + inspect(x);
                }
            }
            return str;
        };


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
        exports.deprecate = function(fn, msg) {
            // Allow for deprecating things in the process of starting up.
            if (isUndefined(global.process)) {
                return function() {
                    return exports.deprecate(fn, msg).apply(this, arguments);
                };
            }

            if (process.noDeprecation === true) {
                return fn;
            }

            var warned = false;
            function deprecated() {
                if (!warned) {
                    if (process.throwDeprecation) {
                        throw new Error(msg);
                    } else if (process.traceDeprecation) {
                        console.trace(msg);
                    } else {
                        console.error(msg);
                    }
                    warned = true;
                }
                return fn.apply(this, arguments);
            }

            return deprecated;
        };


        var debugs = {};
        var debugEnviron;
        exports.debuglog = function(set) {
            if (isUndefined(debugEnviron))
                debugEnviron = process.env.NODE_DEBUG || '';
            set = set.toUpperCase();
            if (!debugs[set]) {
                if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
                    var pid = process.pid;
                    debugs[set] = function() {
                        var msg = exports.format.apply(exports, arguments);
                        console.error('%s %d: %s', set, pid, msg);
                    };
                } else {
                    debugs[set] = function() {};
                }
            }
            return debugs[set];
        };


        /**
         * Echos the value of a value. Trys to print the value out
         * in the best way possible given the different types.
         *
         * @param {Object} obj The object to print out.
         * @param {Object} opts Optional options object that alters the output.
         */
        /* legacy: obj, showHidden, depth, colors*/
        function inspect(obj, opts) {
            // default options
            var ctx = {
                seen: [],
                stylize: stylizeNoColor
            };
            // legacy...
            if (arguments.length >= 3) ctx.depth = arguments[2];
            if (arguments.length >= 4) ctx.colors = arguments[3];
            if (isBoolean(opts)) {
                // legacy...
                ctx.showHidden = opts;
            } else if (opts) {
                // got an "options" object
                exports._extend(ctx, opts);
            }
            // set default options
            if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
            if (isUndefined(ctx.depth)) ctx.depth = 2;
            if (isUndefined(ctx.colors)) ctx.colors = false;
            if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
            if (ctx.colors) ctx.stylize = stylizeWithColor;
            return formatValue(ctx, obj, ctx.depth);
        }
        exports.inspect = inspect;


        inspect.colors = {
            'bold' : [1, 22],
            'italic' : [3, 23],
            'underline' : [4, 24],
            'inverse' : [7, 27],
            'white' : [37, 39],
            'grey' : [90, 39],
            'black' : [30, 39],
            'blue' : [34, 39],
            'cyan' : [36, 39],
            'green' : [32, 39],
            'magenta' : [35, 39],
            'red' : [31, 39],
            'yellow' : [33, 39]
        };

// Don't use 'blue' not visible on cmd.exe
        inspect.styles = {
            'special': 'cyan',
            'number': 'yellow',
            'boolean': 'yellow',
            'undefined': 'grey',
            'null': 'bold',
            'string': 'green',
            'date': 'magenta',
            // "name": intentionally not styling
            'regexp': 'red'
        };


        function stylizeWithColor(str, styleType) {
            var style = inspect.styles[styleType];

            if (style) {
                return '\u001b[' + inspect.colors[style][0] + 'm' + str +
                    '\u001b[' + inspect.colors[style][1] + 'm';
            } else {
                return str;
            }
        }


        function stylizeNoColor(str, styleType) {
            return str;
        }


        function arrayToHash(array) {
            var hash = {};

            array.forEach(function(val, idx) {
                hash[val] = true;
            });

            return hash;
        }


        function formatValue(ctx, value, recurseTimes) {
            // Provide a hook for user-specified inspect functions.
            // Check that value is an object with an inspect function on it
            if (ctx.customInspect &&
                value &&
                isFunction(value.inspect) &&
                    // Filter out the util module, it's inspect function is special
                value.inspect !== exports.inspect &&
                    // Also filter out any prototype objects using the circular check.
                !(value.constructor && value.constructor.prototype === value)) {
                var ret = value.inspect(recurseTimes, ctx);
                if (!isString(ret)) {
                    ret = formatValue(ctx, ret, recurseTimes);
                }
                return ret;
            }

            // Primitive types cannot have properties
            var primitive = formatPrimitive(ctx, value);
            if (primitive) {
                return primitive;
            }

            var keys = Object.keys(value);
            var visibleKeys = arrayToHash(keys);

            if (ctx.showHidden) {
                keys = Object.getOwnPropertyNames(value);
            }

            if (isError(value)
                && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
                return formatError(value);
            }

            if (keys.length === 0) {
                if (isFunction(value)) {
                    var name = value.name ? ': ' + value.name : '';
                    return ctx.stylize('[Function' + name + ']', 'special');
                }
                if (isRegExp(value)) {
                    return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                }
                if (isDate(value)) {
                    return ctx.stylize(Date.prototype.toString.call(value), 'date');
                }
                if (isError(value)) {
                    return formatError(value);
                }
            }

            var base = '', array = false, braces = ['{', '}'];

            // Make Array say that they are Array
            if (isArray(value)) {
                array = true;
                braces = ['[', ']'];
            }

            // Make functions say that they are functions
            if (isFunction(value)) {
                var n = value.name ? ': ' + value.name : '';
                base = ' [Function' + n + ']';
            }

            // Make RegExps say that they are RegExps
            if (isRegExp(value)) {
                base = ' ' + RegExp.prototype.toString.call(value);
            }

            // Make dates with properties first say the date
            if (isDate(value)) {
                base = ' ' + Date.prototype.toUTCString.call(value);
            }

            // Make error with message first say the error
            if (isError(value)) {
                base = ' ' + formatError(value);
            }

            if (keys.length === 0 && (!array || value.length == 0)) {
                return braces[0] + base + braces[1];
            }

            if (recurseTimes < 0) {
                if (isRegExp(value)) {
                    return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                } else {
                    return ctx.stylize('[Object]', 'special');
                }
            }

            ctx.seen.push(value);

            var output;
            if (array) {
                output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
                output = keys.map(function(key) {
                    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                });
            }

            ctx.seen.pop();

            return reduceToSingleString(output, base, braces);
        }


        function formatPrimitive(ctx, value) {
            if (isUndefined(value))
                return ctx.stylize('undefined', 'undefined');
            if (isString(value)) {
                var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                        .replace(/'/g, "\\'")
                        .replace(/\\"/g, '"') + '\'';
                return ctx.stylize(simple, 'string');
            }
            if (isNumber(value))
                return ctx.stylize('' + value, 'number');
            if (isBoolean(value))
                return ctx.stylize('' + value, 'boolean');
            // For some reason typeof null is "object", so special case here.
            if (isNull(value))
                return ctx.stylize('null', 'null');
        }


        function formatError(value) {
            return '[' + Error.prototype.toString.call(value) + ']';
        }


        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];
            for (var i = 0, l = value.length; i < l; ++i) {
                if (hasOwnProperty(value, String(i))) {
                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                        String(i), true));
                } else {
                    output.push('');
                }
            }
            keys.forEach(function(key) {
                if (!key.match(/^\d+$/)) {
                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                        key, true));
                }
            });
            return output;
        }


        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str, desc;
            desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
            if (desc.get) {
                if (desc.set) {
                    str = ctx.stylize('[Getter/Setter]', 'special');
                } else {
                    str = ctx.stylize('[Getter]', 'special');
                }
            } else {
                if (desc.set) {
                    str = ctx.stylize('[Setter]', 'special');
                }
            }
            if (!hasOwnProperty(visibleKeys, key)) {
                name = '[' + key + ']';
            }
            if (!str) {
                if (ctx.seen.indexOf(desc.value) < 0) {
                    if (isNull(recurseTimes)) {
                        str = formatValue(ctx, desc.value, null);
                    } else {
                        str = formatValue(ctx, desc.value, recurseTimes - 1);
                    }
                    if (str.indexOf('\n') > -1) {
                        if (array) {
                            str = str.split('\n').map(function(line) {
                                return '  ' + line;
                            }).join('\n').substr(2);
                        } else {
                            str = '\n' + str.split('\n').map(function(line) {
                                    return '   ' + line;
                                }).join('\n');
                        }
                    }
                } else {
                    str = ctx.stylize('[Circular]', 'special');
                }
            }
            if (isUndefined(name)) {
                if (array && key.match(/^\d+$/)) {
                    return str;
                }
                name = JSON.stringify('' + key);
                if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                    name = name.substr(1, name.length - 2);
                    name = ctx.stylize(name, 'name');
                } else {
                    name = name.replace(/'/g, "\\'")
                        .replace(/\\"/g, '"')
                        .replace(/(^"|"$)/g, "'");
                    name = ctx.stylize(name, 'string');
                }
            }

            return name + ': ' + str;
        }


        function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function(prev, cur) {
                numLinesEst++;
                if (cur.indexOf('\n') >= 0) numLinesEst++;
                return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
            }, 0);

            if (length > 60) {
                return braces[0] +
                    (base === '' ? '' : base + '\n ') +
                    ' ' +
                    output.join(',\n  ') +
                    ' ' +
                    braces[1];
            }

            return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
        function isArray(ar) {
            return Array.isArray(ar);
        }
        exports.isArray = isArray;

        function isBoolean(arg) {
            return typeof arg === 'boolean';
        }
        exports.isBoolean = isBoolean;

        function isNull(arg) {
            return arg === null;
        }
        exports.isNull = isNull;

        function isNullOrUndefined(arg) {
            return arg == null;
        }
        exports.isNullOrUndefined = isNullOrUndefined;

        function isNumber(arg) {
            return typeof arg === 'number';
        }
        exports.isNumber = isNumber;

        function isString(arg) {
            return typeof arg === 'string';
        }
        exports.isString = isString;

        function isSymbol(arg) {
            return typeof arg === 'symbol';
        }
        exports.isSymbol = isSymbol;

        function isUndefined(arg) {
            return arg === void 0;
        }
        exports.isUndefined = isUndefined;

        function isRegExp(re) {
            return isObject(re) && objectToString(re) === '[object RegExp]';
        }
        exports.isRegExp = isRegExp;

        function isObject(arg) {
            return typeof arg === 'object' && arg !== null;
        }
        exports.isObject = isObject;

        function isDate(d) {
            return isObject(d) && objectToString(d) === '[object Date]';
        }
        exports.isDate = isDate;

        function isError(e) {
            return isObject(e) &&
                (objectToString(e) === '[object Error]' || e instanceof Error);
        }
        exports.isError = isError;

        function isFunction(arg) {
            return typeof arg === 'function';
        }
        exports.isFunction = isFunction;

        function isPrimitive(arg) {
            return arg === null ||
                typeof arg === 'boolean' ||
                typeof arg === 'number' ||
                typeof arg === 'string' ||
                typeof arg === 'symbol' ||  // ES6 symbol
                typeof arg === 'undefined';
        }
        exports.isPrimitive = isPrimitive;

        exports.isBuffer = require('./support/isBuffer');

        function objectToString(o) {
            return Object.prototype.toString.call(o);
        }


        function pad(n) {
            return n < 10 ? '0' + n.toString(10) : n.toString(10);
        }


        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
        function timestamp() {
            var d = new Date();
            var time = [pad(d.getHours()),
                pad(d.getMinutes()),
                pad(d.getSeconds())].join(':');
            return [d.getDate(), months[d.getMonth()], time].join(' ');
        }


// log is just a thin wrapper to console.log that prepends a timestamp
        exports.log = function() {
            console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
        };


        /**
         * Inherit the prototype methods from one constructor into another.
         *
         * The Function.prototype.inherits from lang.js rewritten as a standalone
         * function (not on Function.prototype). NOTE: If this file is to be loaded
         * during bootstrapping this function needs to be rewritten using some native
         * functions as prototype setup using normal JavaScript does not work as
         * expected during bootstrapping (see mirror.js in r114903).
         *
         * @param {function} ctor Constructor function which needs to inherit the
         *     prototype.
         * @param {function} superCtor Constructor function to inherit prototype from.
         */
        exports.inherits = require('inherits');

        exports._extend = function(origin, add) {
            // Don't do anything if add isn't an object
            if (!add || !isObject(add)) return origin;

            var keys = Object.keys(add);
            var i = keys.length;
            while (i--) {
                origin[keys[i]] = add[keys[i]];
            }
            return origin;
        };

        function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }

    }).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":26,"_process":13,"inherits":9}],28:[function(require,module,exports){
    var extend=require("extend");

    module.exports=function(obj){
        return extend(true,{},obj);
    }

},{"extend":7}],29:[function(require,module,exports){
    function createSVG(width,height){
        if(typeof width=="undefined") width=1200;
        if(typeof height=="undefined") height=1200;

        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        return svg;
    }

    module.exports=createSVG;

},{}],30:[function(require,module,exports){
    module.exports=function(v,min,max){
        return Math.max(Math.min(v,max),min);
    }

},{}],31:[function(require,module,exports){
    'use strict';

    var CSSPlugin=require('gsap/src/uncompressed/plugins/CSSPlugin');
    var EasePack=require('gsap/src/uncompressed/easing/EasePack');
    var TweenLite=require('gsap/src/uncompressed/TweenLite');
    var SVGPathData=require('svg-pathdata');
    var extend=require('extend');
    var clone=require('./clone');
    var createSVG=require('./create-svg');
    var gfxOf=require('./gfx-of');
    var isSet=require('./is-set');
    var cutoff=require('./cutoff');
    var pointerEvents=require('./pointer-events');

// Load SVG Graphic
    var generateGraphic=require('./svg/bt.svg');

// Setup GSAP
// use either TweenLite or TweenMax, which one is available
    var Tween=TweenLite;
    if(Object.keys(Tween).length==0){ // if TweenLite is not bundled
        if(isSet(window.TweenLite))
            Tween=window.TweenLite;
        else if(isSet(window.TweenMax))
            Tween=window.TweenMax;
        else
            this.error("GSAP could not be found.");
    }

// Utils
    function updatePath(path,pathData){
        path.setAttribute("d",pathData.encode());
    }

    function getD(path){
        return path.getAttribute("d");
    }

    function getPathData(path){
        return new SVGPathData(getD(path)).toAbs();
    }
    function setVisibility(visible,obj){
        if(!isSet(obj)){
            return function(obj){
                setVisibility(visible,obj);
            }
        }
        Tween.set(obj,{
            display:visible?"inline":"none"
        });
    }
    var hide=setVisibility(false);
    var show=setVisibility(true);

    function setTransformOrigin(origin,obj){
        if(!isSet(obj)){
            return function(obj){
                setTransformOrigin(origin,obj);
            }
        }
        Tween.set(obj,{
            transformOrigin:origin
        });
    }
    var originCenter=setTransformOrigin("50% 50%");
    var originBottomCenter=setTransformOrigin("50% 100%");

    function tweenTheseTo(groups,options){
        var dur=1;
        var value=0;
        if(isSet(options.duration)){
            dur=options.duration;
            delete options.duration;
        }
        if(isSet(options.value)){
            value=options.value;
            delete options.value;
        }

        groups.forEach(function(item){
            var props={};
            if(isSet(item.prop)){
                item.props=item.prop;
            }
            if(!Array.isArray(item.props)){
                item.props=[item.props];
            }
            item.props.forEach(function(propName){
                props[propName]=value;
            });

            Tween.to(item.obj,dur,extend(
                props,
                options
            ));
        });
    }

    var defaultOptions={
        colorFg:"#fff",
        colorBg:"#000",
        background:getComputedStyle(document.body).getPropertyValue("background-color"),
        highlightColor:"#08F",

        progressbar:null,
        progressbarLabel:"",

        buttonSize:-1,
        width:-1,
        align:"center",

        barStretch:20,
        barElasticOvershoot:1.8,
        barElasticPeriod:0.15,
        barHeight:4,
        barInset:-0.5,

        labelHeight:53,
        labelWobbliness:40,

        bleedTop:100,
        bleedBottom:50,
        bleedLeft:60,
        bleedRight:60,

        fontFamily:"",
        fontWeight:"bold",

        jumpHeight:50,
        arrowDirection:"down",
        arrowHangOnFail:true,
        arrowHangOnCancel:true,

        textComplete:"Done",
        textFail:"Failed",
        textCancel:"Canceled",

        onClick:function(event){},
        onOpen:function(event){},
        onComplete:function(event){},
        onClose:function(event){},
        onFail:function(event){},
        onCancel:function(event){},
        onChange:function(event){}
    };
    var vars={
        logPrefix:"ElasticProgress",
        eventPrefix:"elasticProgress.",
        options:null,
        target:null,
        progress:null,
        progressbar:null,
        progressbarLabel:"",
        canvas:null,
        lastValue:0,
        value:0,
        visibleValue:0, // used for tweening the displayed value
        lastVisibleValue:0,
        state:{ // default states obj / will be cloned for each instance
            animating:false,
            opening:false,
            open:false,
            closing:false,
            completing:false,
            complete:false,
            pressed:false,
            hover:false,
            focused:false,
            failing:false,
            failed:false,
            calceling:false,
            canceled:false
        },
        graphics:null,
        buttonRadius:null,
        buttonScale:null,
        containerX:null,
        barOverstretch:0,
        base:null, // y position of the bar
        arrowRelativeScale:0.8, // rescaling of the arrow relative to the button
        arrowRatio:null, // scale of the arrow relative to the button size
        arrowScale:null, // calculated scale of the arrow
        arrowPos:null, // calculated pos Y of the arrow
        arrowUp:false,
        arrowRotation:null, // initial rotation of the arrow, in case it points up
        labelScale:null, // calculated scale of the arrow when open
        labelRegularHeight:53, // default size of the label, used for calculation
        queue:null // next queued function
    }

    var defaultFontFamily="'Helvetica Neue','Helvetica','Arial'";

    function ElasticProgress(target,options){
        if(!isSet(options)){
            options={};
        };
        this.options=extend(
            {},
            defaultOptions,
            options
        );
        // shortcut to options
        options=this.options;

        this.target=target;

        //// setup options
        // format align in case it's a string
        // if(typeof options.align=="string"){
        //   switch(options.align){
        //     case "left":
        //       options.align=0;
        //       break;
        //     case "right":
        //       options.align=1;
        //       break;
        //     default:
        //       options.align=0.5;
        //       break;
        //   }
        // }
        // ... however, align is not supported for now
        options.align=0.5;

        // width by default is the element's width...
        if(options.width <= -1){
            options.width = target.clientWidth;
        }else{
            // otherwise it sets the element's width
            target.style.width = options.width+"px";
        }

        // buttonSize by default is the element's height
        if(options.buttonSize <= -1){
            options.buttonSize = target.clientHeight;
        }else{
            // otherwise it sets the element's height
            target.style.height = options.buttonSize+"px";
        }

        var progressbar=target.getAttribute("data-progressbar");
        if(progressbar!=null){
            options.progressbar=progressbar;
        }

        var progressbarLabel=target.getAttribute("data-progressbar-label");
        if(progressbarLabel!=null){
            options.progressbarLabel=progressbarLabel;
        }

        this.graphics={};
        this.state=clone(this.state);

        this.init();
    }

    ElasticProgress.prototype=extend(
        {},
        vars,{
            init:function(){
                var
                    instance=this,
                    options=this.options,
                    target=this.target,
                    state=this.state,
                    graphics=this.graphics;

                this.styleTarget();
                this.createProgressElement();
                this.createCanvas();
                this.setupGraphicsShortcuts();

                // set registration points
                originCenter([graphics.circle, graphics.overlay, graphics.hitArea, graphics.bgCircle, graphics.overlayCircle,graphics.label]);
                originBottomCenter(graphics.arrow);
                originBottomCenter([graphics.arrowHead,graphics.arrowShaft]);

                // hide elements not visible at the start
                hide([graphics.label, graphics.fillLine, graphics.overlay]);

                this.calculateValues();

                // draw stuff
                this.updateColors();
                this.updateBarHeight();
                this.updateButtonSize();
                this.updateAlign();

                // format container after formatting the button, cause we have its correct size
                Tween.set(graphics.container,{
                    transformOrigin:"50% 50%",
                    y:options.bleedTop,
                    x:options.bleedLeft
                });
                originCenter(graphics.circle);

                graphics.labelText.setAttribute("text-anchor","middle");
                graphics.labelText.setAttribute("font-family",options.fontFamily+","+defaultFontFamily);
                graphics.labelText.setAttribute("font-weight",options.fontWeight);

                graphics.hitArea.style.pointerEvents="fill";
                graphics.hitArea.style.cursor="pointer";
                graphics.hitAreaCircle.style.fill="transparent";

                this.setupEvents();

                return this;
            },
            addToQueue:function(f){
                this.queue=f;
            },
            processQueue:function(){
                if(this.queue!=null){
                    var q=this.queue;
                    this.queue=null;
                    q.call(this);
                }
            },
            styleTarget:function(){
                var
                    target=this.target,
                    style=target.style;

                style.border="none";
                style.background="transparent";
                style.outline="none";
                style.pointerEvents="none";
                style.webkitTapHighlightColor="transparent";
                style.textAlign="left";
            },
            createProgressElement:function(){
                var
                    options=this.options,
                    target=this.target;

                if(options.progressbar){
                    this.progress=options.progressbar;
                }else{
                    this.progress=document.createElement("progress");
                    this.progress.style.position="absolute";
                    this.progress.style.left="-99999px";
                    this.progress.setAttribute("aria-label",options.progressbarLabel);
                }
                this.progress.setAttribute("value",0);
                this.progress.setAttribute("max",1);
                this.progress.setAttribute("aria-hidden",true);

                target.parentNode.insertBefore(this.progress, target.nextSibling);
            },
            createCanvas:function(){
                var options=this.options;

                var svg = createSVG(
                    options.width + options.bleedLeft + options.bleedRight,
                    options.buttonSize + options.bleedTop + options.bleedBottom
                );
                svg.appendChild(generateGraphic());
                this.target.appendChild(svg);
                svg.style.position="relative";
                //svg.style.top=-options.bleedTop;
                svg.style.marginRight=-options.bleedRight+"px";
                svg.style.marginLeft=-options.bleedLeft+"px";
                svg.style.marginTop=-options.bleedTop+"px";
                svg.style.marginBottom=-options.bleedBottom+"px";

                this.canvas=svg;
            },
            setupGraphicsShortcuts:function(){
                var
                    graphics=this.graphics,
                    canvas=this.canvas;

                graphics.container         = canvas.querySelector("#container");
                graphics.hitArea           = canvas.querySelector("#hit-area");
                graphics.hitAreaCircle     = graphics.hitArea.querySelector("path");
                graphics.circle            = canvas.querySelector("#circle");
                graphics.arrow             = canvas.querySelector("#arrow");
                graphics.arrowHead         = graphics.arrow.querySelector("#head");
                graphics.arrowShaft        = graphics.arrow.querySelector("#line");
                graphics.label             = graphics.arrow.querySelector("#label");
                graphics.labelText         = graphics.label.querySelector("text");
                graphics.overlay           = canvas.querySelector("#overlay");
                graphics.overlayCircle     = graphics.overlay.querySelector("path");
                graphics.bg                = canvas.querySelector("#background");
                graphics.bgCircle          = graphics.bg.querySelector("path");
                graphics.line              = canvas.querySelector("#border path");
                graphics.fillLineContainer = canvas.querySelector("#fill-line");
                graphics.fillLine          = graphics.fillLineContainer.querySelector("path");
            },
            calculateValues:function(){
                var
                    graphics=this.graphics,
                    options=this.options;

                var originalCircleHeight=graphics.bgCircle.getBBox().height;
                var originalArrowHeight=graphics.arrow.getBBox().height;

                this.buttonRadius=options.buttonSize/2;
                this.arrowRatio=((originalArrowHeight/originalCircleHeight)+0.05)*this.arrowRelativeScale;
                this.buttonScale=options.buttonSize/originalCircleHeight;
                this.arrowScale=this.buttonScale*this.arrowRelativeScale;
                this.arrowUp=options.arrowDirection=="up";
                this.arrowPos=options.buttonSize*(1-((1-this.arrowRatio)/2)); // dang
                var arrowSize=options.buttonSize*this.arrowRatio;
                if(this.arrowUp) this.arrowPos-=arrowSize;
                this.arrowRotation=this.arrowUp?180:0;
                this.base=options.buttonSize/2;
                this.labelScale=options.labelHeight/this.labelRegularHeight;
            },
            updateColors:function(){
                var
                    graphics = this.graphics,
                    options = this.options;

                Tween.set(gfxOf([graphics.arrowHead, graphics.arrowShaft]),{
                    fill: options.colorFg
                });
                Tween.set(gfxOf(graphics.fillLine),{
                    stroke: options.colorFg
                });
                Tween.set(gfxOf([graphics.bg, graphics.labelText]),{
                    fill: options.colorBg
                });
                Tween.set(gfxOf(graphics.line),{
                    stroke: options.colorBg
                });
                Tween.set(gfxOf(graphics.overlay),{
                    fill:options.background
                });
            },
            updateBarHeight:function(){
                var
                    graphics=this.graphics,
                    options=this.options;

                graphics.line.setAttribute("stroke-width",options.barHeight);
                graphics.fillLine.setAttribute("stroke-width",options.barHeight-options.barInset);
            },
            updateButtonSize:function(){
                var
                    graphics = this.graphics,
                    options = this.options,
                    r = this.buttonRadius,
                    r2 = options.buttonSize;

                Tween.set([graphics.bgCircle,graphics.overlayCircle],{
                    x:0,
                    y:r,
                    scale:this.buttonScale
                });

                Tween.set(graphics.arrow,{
                    scale: this.arrowScale,
                    rotation:this.arrowRotation,
                    y: this.arrowPos
                });

                var linePath=this.getPathPointsCirclingCircle();
                updatePath(graphics.line,linePath);
            },
            getPathPointsCirclingCircle:function(){
                var
                    options=this.options,
                    graphics=this.graphics,
                    r=this.buttonRadius,
                    r2=r*2;

                var linePath=getPathData(graphics.line);
                var points=linePath.commands;

                //svg strokes are drawn "around" their paths
                //this offset squishes the line inside the circle a little
                var offset=(options.barHeight/2)+1;
                //more or less how far along the x axis the bezier control points have to be from the center of the circle
                var p=1.318;
                var rp=(r-offset)*p;

                points[0].x=0;
                points[0].y=offset;

                points[1].x=0;
                points[1].y=r2-offset;
                points[1].x1=-rp;
                points[1].y1=r2-offset;
                points[1].x2=-rp;
                points[1].y2=offset;

                points[2].x=points[0].x;
                points[2].y=points[0].y;
                points[2].x1=rp;
                points[2].y1=offset;
                points[2].x2=rp;
                points[2].y2=r2-offset;

                return linePath;
            },
            updateAlign:function(){
                var
                    graphics = this.graphics,
                    options = this.options;

                this.containerX=(options.width*options.align)+(options.buttonSize*(((1-options.align))-0.5));
                Tween.set([graphics.circle,graphics.arrow],{
                    x:this.containerX
                });

                Tween.set(graphics.hitArea,{
                    x:options.bleedLeft+this.containerX,
                    y:options.bleedTop+(options.buttonSize/2),
                    scale:this.buttonScale
                });

            },
            setupEvents:function(){
                var
                    instance=this,
                    graphics=this.graphics;

                pointerEvents.on("down",graphics.hitArea,function(event){
                    instance.setState("pressed",true);
                    instance.setState("hover",false);
                });
                pointerEvents.on("up",document,function(){
                    instance.setState("pressed",false);
                });
                pointerEvents.on("mouseover",graphics.hitArea,function(){
                    instance.setState("hover",true);
                });
                pointerEvents.on("mouseout",graphics.hitArea,function(){
                    instance.setState("hover",false);
                });
                pointerEvents.on("click",graphics.hitArea,function(event){
                    instance.triggerClick(event);
                });
                this.addEventListener("keydown",function(event){
                    if(event.keyCode=="13" || event.keyCode=="32"){
                        event.preventDefault();
                        this.triggerClick(event);
                    }
                });
                this.addEventListener("focus",function(event){
                    this.setState("focused",true);
                });
                this.addEventListener("blur",function(event){
                    this.setState("focused",false);
                });

                this.addEventListener(this.eventPrefix+"animatingFinish",this.processQueue);

                this.setupEventHandlers();
            },
            triggerClick:function(event){
                var state=this.state;

                if(!state.open){
                    this.dispatchEvent('click');
                    this.options.onClick.call(this.target,event);
                }
            },
            setupEventHandlers:function(){
                var options=this.options;

                this.setupEventHandler('openingFinish','onOpen');
                this.setupEventHandler('closingFinish','onClose');
                this.setupEventHandler('complete','onComplete');
                this.setupEventHandler('fail','onFail');
                this.setupEventHandler('cancel','onCancel');
                this.setupEventHandler('change','onChange');
            },
            setupEventHandler:function(eventType,handler){
                var
                    instance=this,
                    target=this.target,
                    options=this.options;

                target.addEventListener(this.eventPrefix+eventType,function(event){
                    options[handler].call(target,event);
                });
            },
            addEventListener:function(event,callback){
                this.target.addEventListener(event,callback.bind(this));
            },
            dispatchEvent:function(event){
                this.target.dispatchEvent(new Event(this.eventPrefix+event));
            },
            setState:function(states,value){
                if(!Array.isArray(states)){
                    states=[states];
                }

                var hasAnyStateChanged=false;
                states.forEach(function(name){
                    var previousValue=this.state[name];
                    this.state[name] = value;

                    if(value!=previousValue){
                        this.checkStateEvents(name)
                        hasAnyStateChanged=true;
                    }

                },this);
                if(hasAnyStateChanged){
                    this.dispatchEvent("stateChange");
                }
                this.updateStates();
            },
            updateStates:function(){
                var
                    target=this.target,
                    state=this.state,
                    options=this.options,
                    graphics=this.graphics;

                if(state.focused && !state.pressed && !state.open && !state.hover){
                    graphics.hitAreaCircle.setAttribute("stroke",options.highlightColor);
                    Tween.to(graphics.hitAreaCircle,0.05,{attr:{
                        "stroke-width":2/Math.max(0.01,this.buttonScale)
                    }})
                }else{
                    Tween.to(graphics.hitAreaCircle,0.05,{attr:{
                        "stroke-width":0
                    }})
                }

                if(state.pressed && !state.open){
                    Tween.to(graphics.container,0.1,{
                        scale:0.82,
                        ease:Quint.easeOut
                    });
                    Tween.to(graphics.circle,0.1,{
                        scale:1.06,
                        ease:Quint.easeOut
                    });
                }else{
                    Tween.to([graphics.container,graphics.circle],0.1,{
                        scale:1,
                        ease:Quint.easeOut
                    });
                }

                if(state.hover && !state.pressed && !state.open){
                    Tween.to(graphics.container,0.2,{
                        scale:1.15,
                        ease:Quint.easeOut
                    });
                    Tween.to(graphics.circle,0.2,{
                        scale:0.92,
                        ease:Quint.easeOut
                    });
                }else if(!state.pressed){
                    Tween.to([graphics.circle,graphics.container],0.2,{
                        scale:1,
                        ease:Quint.easeOut
                    });
                }

                if(!state.open){
                    show(graphics.hitArea);
                }else{
                    hide(graphics.hitArea);
                }
            },
            checkStateEvents:function(name){
                var
                    instance=this,
                    state=this.state;

                var value=state[name];
                function checkStateEvent(nameCheck,ifTrue,ifFalse){
                    if(name==nameCheck){
                        instance.dispatchEvent(value?ifTrue:ifFalse);
                    }
                }

                checkStateEvent("open","open","close");
                checkStateEvent("press","press","release");
                checkStateEvent("animating","animatingStart","animatingFinish");
                checkStateEvent("opening","openingStart","openingFinish");
                checkStateEvent("closing","closingStart","closingFinish");
                checkStateEvent("failing","failingStart","failingFinish");
                checkStateEvent("canceling","cancelingStart","cancelingFinish");
            },
            setText:function(text,upsideDown){
                var graphics=this.graphics;

                if(!isSet(upsideDown)) upsideDown=false;
                graphics.labelText.textContent=text;
                if(upsideDown){
                    var labelBBox=graphics.label.getBBox();
                    var arrowShaftBBox=graphics.arrowShaft.getBBox();
                    Tween.set(graphics.label,{
                        x:-parseFloat(graphics.labelText.getAttribute("font-size"))/2,
                        rotation:180
                    })
                }else{
                    Tween.set(graphics.label,{
                        x:0,
                        rotation:0
                    })
                }
            },
            setPercentage:function(v){
                this.setText(Math.floor(v*100)+"%");
            },
            changeText:function(text,upsideDown){
                var
                    instance=this,
                    graphics=this.graphics;

                var t=0.15;
                // fade out text
                Tween.to(graphics.label,t,{
                    opacity:0,
                    onComplete:function(){
                        instance.setText(text,upsideDown);
                        var textBB=graphics.label.getBBox();
                        var boxBB=graphics.arrowShaft.getBBox();
                        var targetSize=textBB.width+40;
                        var targetScale=targetSize/boxBB.width;
                        // resize text box
                        Tween.to(graphics.arrowShaft,t,{
                            scaleX:targetScale,
                            ease:Quad.easeInOut,
                            onComplete:function(){
                                // fade in text
                                Tween.to(graphics.label,t,{
                                    opacity:1
                                });
                            }
                        })
                    }
                })
            },
            open:function(){
                var
                    instance=this,
                    options=this.options,
                    graphics=this.graphics,
                    state=this.state;

                if(state.open && !state.closing && !state.failed && !state.canceled){
                    return false;
                }
                if(state.animating){
                    this.addToQueue(this.open);
                    return false;
                }
                this.progress.setAttribute("aria-hidden",false);

                Tween.killTweensOf(this);
                this.setState(["animating","opening","open"],true);
                this.value=this.visibleValue=this.lastValue=this.lastVisibleValue=0;

                if(state.open && (state.failed || state.canceled)){
                    this.setState(["failed","canceled"],false);

                    hide(graphics.fillLine);

                    this.animOpenArrowJump(false);
                    this.changeText("0%");
                    this.animOpenBar();

                }else{
                    this.animOpenOverlay();
                    this.animOpenArrowJump();
                    this.animLabelExpand();

                    Tween.delayedCall(0.2,function(){
                        instance.animOpenBar();
                    });
                }

                Tween.delayedCall(1.3,function(){
                    this.resetFillLine();

                    this.setState(["animating","opening"],false);

                    instance.setValue(instance.value);
                },null,this);

                return true;
            },
            animOpenBar:function(){
                var
                    graphics=this.graphics,
                    options=this.options,
                    containerX=this.containerX,
                    base=this.base,
                    width=options.width;

                var halfWidth=width/2;
                var sixthWidth=width/6;

                var linePath = getPathData(graphics.line);
                var linePoints = linePath.commands;

                var lineStart=linePoints[0];
                var lineMiddle=linePoints[1];
                var lineEnd=linePoints[2];

                var baseCurveOffset=(options.buttonSize/4)*3;

                //// expand
                // x
                var openDur=0.25;
                Tween.to(lineStart,openDur,{
                    x:-containerX,
                    ease:Quad.easeOut
                });
                Tween.to(lineMiddle,openDur,{
                    x:-containerX+halfWidth,
                    x2:-containerX+sixthWidth,
                    x1:-containerX+sixthWidth+sixthWidth,
                    ease:Quad.easeOut
                });
                Tween.to(lineEnd,openDur,{
                    x:-containerX+width,
                    x2:-containerX+halfWidth+sixthWidth,
                    x1:-containerX+halfWidth+sixthWidth+sixthWidth,
                    ease:Quad.easeOut
                });

                // y
                tweenTheseTo([
                        {obj:lineStart,prop:"y"},
                        {obj:lineMiddle,prop:"y2"},
                        {obj:lineEnd,props:["y","y1"]}
                    ],{
                        duration:openDur,
                        value:base,
                        ease:Quad.easeInOut
                    }
                );

                tweenTheseTo([
                        {obj:lineMiddle,prop:"y1"},
                        {obj:lineEnd,prop:"y2"}
                    ],{
                        duration:openDur,
                        value:base+baseCurveOffset,
                        ease:Quad.easeInOut
                    }
                );

                //spring up
                tweenTheseTo([
                        {obj:lineMiddle,props:["y","y1"]},
                        {obj:lineEnd,prop:"y2"}
                    ],{
                        duration:1.05,
                        value:base,
                        delay:0.05,
                        ease:Elastic.easeOut,
                        easeParams:[options.barElasticOvershoot,options.barElasticPeriod]
                    }
                );

                var updateLinePath=function(){
                    updatePath(graphics.line,linePath)
                };
                Tween.to({},1.1,{
                    onUpdate:updateLinePath,
                    onComplete:updateLinePath
                });
            },
            animOpenOverlay:function(){
                var graphics=this.graphics;

                // "overlay" is the the graphic resposible for the "carving out" anim
                // makes overlay visible before setting any of its other properties
                show(graphics.overlay);
                // expand the overlay
                Tween.fromTo(graphics.overlay,0.2,{
                    transformOrigin:"50% 50%",
                    scale:0.2
                },{
                    scale:1,
                    ease:Sine.easeIn,
                    onComplete:function(){
                        hide([graphics.overlay,graphics.bg]);
                    }
                });
            },
            animOpenArrowJump:function(anticipation){
                var
                    instance=this,
                    graphics=this.graphics,
                    options=this.options;

                if(!isSet(anticipation)) anticipation=true;
                var delay=anticipation?0.25:0;

                if(anticipation){
                    Tween.to(graphics.arrow,0.4,{
                        y:"+="+(options.buttonSize*0.2),
                        ease:Quad.easeInOut
                    });
                }

                Tween.to(graphics.arrow,0.75,{
                    x:0,
                    ease:Quad.easeOut,
                    delay:delay
                });
                Tween.to(graphics.arrow,0.5,{
                    rotation:0,
                    delay:delay
                });

                Tween.to(graphics.arrow,0.25,{
                    y:-options.jumpHeight,
                    ease:Quad.easeOut,
                    delay:delay,
                    onComplete:function(){
                        Tween.to(graphics.arrow,0.5,{
                            y:instance.base - (options.barHeight/2),
                            ease:Bounce.easeOut,
                        });
                    }
                });
            },
            animLabelExpand:function(){
                var
                    instance=this,
                    graphics=this.graphics,
                    options=this.options;

                Tween.to(graphics.arrow,0.5,{
                    scaleX:instance.labelScale,
                    scaleY:instance.labelScale
                });
                Tween.to(graphics.arrowHead,0.5,{
                    scale:0.5,
                    ease:Quad.easeInOut
                });
                Tween.to(graphics.arrowShaft,0.5,{
                    scaleX:3,
                    y:15,
                    ease:Quad.easeInOut
                });

                show(graphics.label);
                this.setText("0%");

                Tween.fromTo(graphics.label,0.5,{
                    scale:0.01,
                    x:0,
                    y:0
                },{
                    scale:1,
                    x:0,
                    y:15
                });
            },
            resetFillLine:function(){
                var graphics=this.graphics;

                var fillPath=getPathData(graphics.fillLine);
                var fillPoints=fillPath.commands;

                fillPoints[0].x = fillPoints[1].x = -this.containerX;
                fillPoints[0].y = fillPoints[1].y = this.base;
                updatePath(graphics.fillLine,fillPath);

                show(graphics.fillLine);
            },
            close:function(){
                var
                    options=this.options,
                    state=this.state,
                    graphics=this.graphics;

                if(state.closing || !state.open){
                    return false;
                }
                if(state.animating){
                    this.addToQueue(this.close);
                    return false;
                }
                this.progress.setAttribute("aria-hidden",true);
                Tween.killTweensOf(this);

                this.setState(["animating","closing"],true);

                this.animCloseArrow();
                this.animLabelCollapse();
                this.animCloseBar();
                Tween.delayedCall(0.31,function(){
                    this.animCloseCircle();
                },null,this);

                Tween.delayedCall(0.8,function(){
                    this.setState(["animating","open","closing","failed","canceled","complete"],false);
                },null,this);

                return true
            },
            animCloseBar:function(){
                var
                    instance=this,
                    graphics=this.graphics,
                    options=this.options;

                var fillPath=getPathData(graphics.fillLine);
                var fillPoints=fillPath.commands;
                Tween.to(fillPoints[0],0.17,{
                    x:fillPoints[1].x,
                    y:fillPoints[1].y,
                    ease:Quad.easeIn,
                    onUpdate:function(){
                        updatePath(graphics.fillLine,fillPath);
                    },
                    onComplete:function(){
                        hide(graphics.fillLine);
                        collapseBar();
                    }
                });

                var collapseBar=function(){
                    var linePath=getPathData(graphics.line);
                    var linePoints=linePath.commands;

                    var t=0.17;

                    tweenTheseTo([
                        {obj:linePoints[1],props:["y","y1"]},
                        {obj:linePoints[2],props:["y","y2"]}
                    ],{
                        duration:t/2,
                        value:instance.base,
                        ease:Quad.easeOut
                    });

                    tweenTheseTo([
                        {obj:linePoints[0],props:["x"]},
                        {obj:linePoints[1],props:["x","x1","x2"]},
                        {obj:linePoints[2],props:["x","x1","x2"]}
                    ],{
                        duration:t,
                        value:(options.width/2)-instance.containerX,
                        ease:Quad.easeIn,
                    });
                    Tween.to({},t,{
                        onUpdate:function(){
                            updatePath(graphics.line,linePath);
                        },
                        onComplete:collapseBarComplete
                    });
                }
                var collapseBarComplete=function(){
                    Tween.delayedCall(0.3,function(){
                        var circlePath=instance.getPathPointsCirclingCircle();
                        updatePath(graphics.line,circlePath);
                    });
                }

            },
            animLabelCollapse:function(){
                var
                    instance=this,
                    graphics=this.graphics,
                    options=this.options;

                Tween.to(graphics.arrow,0.5,{
                    scale:instance.arrowScale
                });
                Tween.to(graphics.arrowHead,0.5,{
                    scale:1,
                    ease:Quad.easeInOut
                });
                Tween.to(graphics.arrowShaft,0.5,{
                    scaleX:1,
                    y:0,
                    ease:Quad.easeInOut
                });

                Tween.to(graphics.label,0.5,{
                    scale:0.01,
                    onComplete:function(){
                        hide(graphics.label);
                    }
                });
            },
            animCloseArrow:function(){
                var
                    instance=this,
                    graphics=this.graphics,
                    options=this.options;

                Tween.to(graphics.arrow,0.5,{
                    x:options.width/2,
                    ease:Quad.easeOut,
                    delay:0,
                    rotation:0
                });

                Tween.to(graphics.arrow,0.25,{
                    y:-options.jumpHeight,
                    ease:Quad.easeOut,
                    onComplete:function(){
                        Tween.to(graphics.arrow,0.8,{
                            y:instance.arrowPos,
                            scaleY:instance.arrowScale*(instance.arrowUp?-1:1),
                            ease:Elastic.easeOut,
                            easeParams:[1.1,0.6],
                            onComplete:function(){
                                Tween.set(graphics.arrow,{
                                    scaleY:instance.arrowScale,
                                    rotation:instance.arrowRotation
                                })
                            }
                        });
                    }
                });
            },
            animCloseCircle:function(){
                var
                    instance=this,
                    graphics=this.graphics;

                show(graphics.bg);

                Tween.fromTo(graphics.bgCircle,0.8,{
                    scale:0.1,
                },{
                    scale:instance.buttonScale,
                    ease:Elastic.easeOut,
                    easeParams:[1.2,0.7]
                })
            },
            setValue:function(v){
                var
                    instance=this,
                    options=this.options,
                    graphics=this.graphics,
                    state=this.state;

                if(!state.open){
                    //this.warn("The preloader resets the value when it opens. Please call the function 'open' before setting a value.");
                    return false;
                }
                if(state.failed || state.canceled || state.complete || state.animating){
                    return false;
                }

                // check if the value has changed considering the limits (i.e. do nothing if it goes from 1 to 1.1)
                var lastValue=this.value;
                var newValue=cutoff(v,0,1);
                if(lastValue==newValue){
                    return false;
                }
                this.lastValue=lastValue;
                this.value=newValue;
                this.progress.setAttribute("value",this.value);

                if(state.opening || state.closing){
                    this.dispatchEvent("change");
                    return true;
                }

                var d=this.value-this.lastVisibleValue;
                if(d<0.01 && this.value<1){
                    return true;
                }

                var t=0.2+(1*Math.abs(d));

                Tween.to(graphics.arrow,t*0.5,{
                    rotation:-d*options.labelWobbliness,
                    ease:Quad.easeOut,
                    onComplete:function(){
                        Tween.to(graphics.arrow,1.5,{
                            rotation:0,
                            ease:Elastic.easeOut,
                            easeParams:[2,0.4]
                        });
                    }
                });

                Tween.to(this,t*1,{
                    barOverstretch:d*2,
                    ease:Quad.easeInOut,
                    onComplete:function(){
                        Tween.to(instance,1.5,{
                            barOverstretch:0,
                            ease:Elastic.easeOut,
                            easeParams:[2,0.2]
                        });
                    }
                });

                Tween.to(this,t,{
                    visibleValue:this.value,
                    ease:Quad.easeOut,
                    onUpdate:this.updateValue.bind(this),
                    onComplete:this.updateValue.bind(this)
                });

                this.dispatchEvent("change");
                return true;
            },
            getValue:function(){
                return this.value;
            },
            updateValue:function(){
                this.lastVisibleValue=this.visibleValue;
                this.renderValue(this.visibleValue);
            },
            renderValue:function(){
                var
                    instance=this,
                    state=this.state,
                    options=this.options,
                    graphics=this.graphics,
                    value=this.visibleValue

                if(value>=1 && !state.complete){
                    Tween.killTweensOf(this,{visibleValue:true});
                    this.complete();
                }else if(value>=1 && state.complete){
                    return false;
                }

                Tween.to(this,1.5,{
                    onUpdate:this.renderBarStretch.bind(this)
                })

                this.dispatchEvent("valueRender");
                this.setPercentage(value);
            },
            renderBarStretch:function(v){
                var
                    instance=this,
                    state=this.state,
                    options=this.options,
                    graphics=this.graphics,
                    value=this.visibleValue

                var stretch=options.barStretch * Math.sin(value*3.14)*(1+this.barOverstretch);

                var middlePoint={
                    x: value * options.width,
                    y: instance.base + stretch
                };

                var linePath=getPathData(graphics.line);
                var linePoints=linePath.commands;

                var fillPath=getPathData(graphics.fillLine);
                var fillPoints=fillPath.commands;

                linePoints[1].x = linePoints[1].x1 = linePoints[2].x2 = fillPoints[1].x = (middlePoint.x - this.containerX);
                linePoints[1].y = linePoints[1].y1 = linePoints[2].y2 = fillPoints[1].y = middlePoint.y;

                linePoints[1].x2 = linePoints[0].x;
                linePoints[1].y2 = linePoints[0].y;
                linePoints[2].x1 = linePoints[2].x;
                linePoints[2].y1 = linePoints[2].y;

                // avoid line cap bug at the end point
                if(linePoints[1].x+(options.barHeight/2)>=linePoints[2].x){
                    linePoints[1].x=linePoints[2].x-(options.barHeight/2);
                }

                updatePath(graphics.fillLine,fillPath);
                updatePath(graphics.line,linePath);

                Tween.set(graphics.arrow,{
                    x:middlePoint.x,
                    y:middlePoint.y - (options.barHeight/2)
                });
            },
            complete:function(){
                var
                    instance=this,
                    state=this.state,
                    options=this.options;

                if(!state.open || state.failed || state.complete || state.canceled){
                    return false;
                }
                if(state.animating){
                    this.addToQueue(this.complete);
                    return false;
                }
                Tween.killTweensOf(this);
                this.setState(["animating","completing","complete"],true);
                this.dispatchEvent("complete");

                this.changeText(options.textComplete);

                Tween.delayedCall(2.5,function(){
                    instance.setState(["animating","completing"],false);
                });

                return true;
            },
            fail:function(){
                var
                    instance=this,
                    state=this.state,
                    options=this.options;


                if(state.failed || state.canceled || state.complete || !state.open || state.closing){
                    return false;
                }

                if(state.animating){
                    this.addToQueue(this.fail);
                    return false;
                }
                Tween.killTweensOf(this);
                this.setState(["animating","failed","failing"],true);
                this.dispatchEvent("fail");

                if(options.arrowHangOnFail){
                    this.animArrowHang();
                }

                this.changeText(options.textFail,options.arrowHangOnFail);
                Tween.delayedCall(2.5,function(){
                    instance.setState(["animating","failing"],false);
                });
                return true;
            },
            cancel:function(){
                var
                    instance=this,
                    state=this.state,
                    options=this.options;

                if(state.failed || state.complete || state.canceled || !state.open || state.closing){
                    return false;
                }
                if(state.animating){
                    this.addToQueue(this.cancel);
                    return false;
                }
                Tween.killTweensOf(this);
                this.setState(["animating","canceled","canceling"],true);
                this.dispatchEvent("cancel");

                if(options.arrowHangOnCancel){
                    this.animArrowHang();
                }

                this.changeText(options.textCancel,options.arrowHangOnCancel);
                Tween.delayedCall(2.5,function(){
                    instance.setState(["canceling","animating"],false);
                });
                return true;
            },
            animArrowHang:function(){
                var
                    instance=this,
                    graphics=this.graphics;

                Tween.killTweensOf(this);
                Tween.killTweensOf(graphics.arrow);

                Tween.to(graphics.arrow,0.25,{
                    rotation:90,
                    ease:Quad.easeIn,
                    onComplete:function(){
                        Tween.to(graphics.arrow,2,{
                            rotation:180,
                            ease:Elastic.easeOut,
                            easeParams:[1.6,0.4]
                        });
                    }
                });

                Tween.to(this,0.25,{
                    barOverstretch:1.2,
                    onUpdate:this.renderBarStretch.bind(this),
                    onComplete:function(){
                        Tween.to(instance,1.5,{
                            barOverstretch:0,
                            ease:Elastic.easeOut,
                            easeParams:[1.1,0.4],
                            onUpdate:instance.renderBarStretch.bind(instance)
                        })
                    }
                });
            },
            error:function(msg){
                console.error(this.logPrefix+": "+msg);
            },
            warn:function(msg){
                console.warn(this.logPrefix+": "+msg);
            },
            log:function(msg){
                console.log(this.logPrefix+": "+msg);
            }
        });

    module.exports=ElasticProgress;

},{"./clone":28,"./create-svg":29,"./cutoff":30,"./gfx-of":32,"./is-set":33,"./pointer-events":35,"./svg/bt.svg":36,"extend":7,"gsap/src/uncompressed/TweenLite":3,"gsap/src/uncompressed/easing/EasePack":3,"gsap/src/uncompressed/plugins/CSSPlugin":3,"svg-pathdata":21}],32:[function(require,module,exports){
// Returns all graphic elements (paths, shapes, text, etc) from a (group of) SVG element(s)
    var graphicTypes=["polygon","polyline","path","circle","rect","text","line","ellipse"];

    module.exports=function(elements){
        if(!Array.isArray(elements)){
            elements=[elements];
        }
        return elements.map(function(svgObj){
            if(graphicTypes.indexOf(svgObj.nodeName)>-1){
                return svgObj;
            }else{
                return svgObj.querySelectorAll(graphicTypes.join(","));
            }
        });
    }

},{}],33:[function(require,module,exports){
    module.exports=function(v){
        return typeof v!="undefined";
    }

},{}],34:[function(require,module,exports){
// Interface for the actual Elastic Progress

    'use strict';

    var extend=require('extend');
    var toArray=require('./to-array');
    var isSet=require('./is-set');
    var ElasticProgressGfx=require('./elastic-progress');

    function addInstance(instance){
        instances.push(instance);
    }

    var api={
        open:function(){
            return this.instance.open();
        },
        close:function(){
            return this.instance.close();
        },
        setValue:function(value){
            return this.instance.setValue(value);
        },
        getValue:function(){
            return this.instance.getValue();
        },
        fail:function(){
            return this.instance.fail();
        },
        complete:function(){
            return this.instance.complete();
        },
        cancel:function(){
            return this.instance.cancel();
        },
        onClick:function(f){
            this.instance.options.onClick=f;
        },
        onOpen:function(f){
            this.instance.options.onOpen=f;
        },
        onClose:function(f){
            this.instance.options.onClose=f;
        },
        onComplete:function(f){
            this.instance.options.onComplete=f;
        },
        onCancel:function(f){
            this.instance.options.onCancel=f;
        },
        onFail:function(f){
            this.instance.options.onFail=f;
        },
        onChange:function(f){
            this.instance.options.onChange=f;
        },
        addEventListener:function(event,handler){
            this.instance.addEventListener(event,handler);
        },
        removeEventListener:function(event,handler){
            this.instance.removeEventListener(event,handler);
        }
    };

    var ElasticProgress=function(target,options){
        if(!isSet(target)){
            return;
        }
        if(target.jquery){
            target=target.get(0);
        }
        this.instance=new ElasticProgressGfx(target,options);
    }

    ElasticProgress.prototype=extend(
        {
            instance:null
        },
        api
    );

// jQuery plugin, in case jQuery is available
    if(isSet(jQuery)){
        (function($){
            $.fn.ElasticProgress=function(optionsOrMethod){
                var target=toArray($(this));

                if(typeof optionsOrMethod=="string"){
                    var method=optionsOrMethod;

                    var f=api[method];

                    var args=arguments;
                    // if function exists, calls it. Else, error
                    if(typeof f=="function"){
                        var returnValue=null;
                        $(this).each(function(){
                            var instance=$(this).data("elastic-progress");

                            if(instance!=null){
                                returnValue=instance[method].apply(instance,toArray(args).slice(1));
                            }
                        });
                        return returnValue;
                    }else{
                        ElasticProgressGfx.prototype.error("Unknown function '"+method+"'");
                    }
                }else{
                    var options=optionsOrMethod;

                    $(this).each(function(){
                        var instance=new ElasticProgress($(this),options);
                        $(this).data("elastic-progress",instance);

                    })

                    return $(this);
                }
            }
        }(jQuery));
    }

    module.exports=ElasticProgress;

},{"./elastic-progress":31,"./is-set":33,"./to-array":37,"extend":7}],35:[function(require,module,exports){
    var debug=true;
    var blockedEvents=[];
    var listeners=[];

    function blockEvent(el,type,dur){
        if(typeof dur!="number") dur=1000

        blockedEvents.push({
            el:el,
            type:type
        });
        setTimeout(function(){
            blockedEvents.shift();
        },dur);
    }
    function isBlocked(el,type){
        return blockedEvents.some(function(cur){
            return cur.type==type && cur.el==el;
        });
    }

    function registerEvent(type,el,callback,listener){
        el.addEventListener(type,listener);

        listeners.push({
            type:type,
            el:el,
            callback:callback,
            listener:listener
        });
    }
    function unregisterEvent(type,el,callback){
        listeners.filter(function(listener){
            return (listener.type==type && listener.el==el && listener.callback==callback);
        }).forEach(function(listener){
            console.log(listener);
            listener.el.removeEventListener(listener.type,listener.listener);
        });

        listeners=listeners.filter(function(listener){
            return !(listener.type==type && listener.el==el && listener.callback==callback);
        })
    }

    var pointerEvents={
        down:function(add,el,callback){
            if(add){
                var touchstartListener=function(event){
                    if(typeof event.touches != "undefined"){
                        var touches=event.touches;
                        if(touches.length>0){
                            event.clientX=touches[0].clientX;
                            event.clientY=touches[0].clientY;

                            callback.call(el,event);
                            blockEvent(el,"mousedown");
                        }
                    }
                }
                registerEvent("touchstart",el,callback,touchstartListener);

                var mousedownListener=function(event){
                    if(!isBlocked(el,"mousedown")){
                        callback.call(el,event);
                    }
                }
                registerEvent("mousedown",el,callback,mousedownListener);

            }else{
                unregisterEvent("touchstart",el,callback);
                unregisterEvent("mousedown",el,callback);
            }
        },

        up:function(add,el,callback){
            if(add){
                var touchendListener=function(event){
                    if(typeof event.touches != "undefined"){
                        var touches=event.touches;
                        if(touches.length>0){
                            event.clientX=touches[0].clientX;
                            event.clientY=touches[0].clientY;

                        }
                        callback.call(el,event);
                        blockEvent(el,"mouseup");
                    }
                };
                registerEvent("touchend",el,callback,touchendListener);

                var mouseupListener=function(event){
                    if(!isBlocked(el,"mouseup")){
                        callback.call(el,event);
                    }
                };
                registerEvent("mouseup",el,callback,mouseupListener);
            }else{
                unregisterEvent("touchend",el,callback);
                unregisterEvent("mouseup",el,callback);
            }
        },

        click:function(add,el,callback){
            if(add){
                function clickListener(event){
                    if(!isBlocked(el,"click")){
                        callback.call(el,event);
                    }
                };
                registerEvent('click',el,callback,clickListener)
            }else{
                unregisterEvent('click',el,callback);
            }
        },

        mouseover:function(add,el,callback){
            if(add){
                function mouseoverListener(event){
                    callback.call(el,event);
                }
                registerEvent('mouseover',el,callback,mouseoverListener);
            }else{
                unregisterEvent('mouseover',el,callback);
            }
        },
        mouseout:function(add,el,callback){
            if(add){
                function mouseoutListener(event){
                    callback.call(el,event);
                }
                registerEvent('mouseout',el,callback,mouseoutListener);
            }else{
                unregisterEvent('mouseout',el,callback);
            }
        }
    }

    var api={
        on:function(eventType,el,callback){
            pointerEvents[eventType].call(this,true,el,callback);
        },
        off:function(eventType,el,callback){
            pointerEvents[eventType].call(this,false,el,callback);
        }
    };

    module.exports=api;

},{}],36:[function(require,module,exports){
    function format(text) {return function(x, y) {x = (+x|0);y = (+y|0);var el = document.createElement("div");el.innerHTML = "<svg><g><g>" + text + "</g></g></svg>";el = el.childNodes[0].childNodes[0];el.childNodes[0].setAttribute("transform", "translate(" + x + "," + y + ")");return el}}
    module.exports = format("\n<g id=\"container\">\n	<g id=\"circle\">\n		<g id=\"background\">\n			<path id=\"bg\" fill=\"#231F20\" d=\"M0-50c27.614,0,50,22.386,50,50S27.614,50,0,50c-27.615,0-50-22.386-50-50S-27.615-50,0-50z\"/>\n		</g>\n		<g id=\"overlay\">\n			<path fill=\"#47FF03\" d=\"M50,0c0,27.584-22.461,50-50,50c-27.636,0-50-22.416-50-50c0-27.594,22.364-50,50-50\n				C27.539-50,50-27.594,50,0z\"/>\n		</g>\n		<g id=\"border\">\n			<path fill=\"none\" stroke=\"#231F20\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M-23.833,21.445\n				c-80.313,1.374,7.956,104.833,89.191,104.833c81.7,0,191.842-105.833,110.142-105.833\"/>\n		</g>\n		<g id=\"fill-line\">\n			<path fill=\"none\" stroke=\"#FF00FF\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M-138.487,110.945l105,2\"/>\n		</g>\n	</g>\n	<g id=\"arrow\">\n		<g id=\"head\">\n			<polygon fill=\"#FF00FF\" points=\"-30.035,-31.56 0,0 30.035,-31.56 			\"/>\n		</g>\n		<g id=\"line\">\n			<rect x=\"-12.374\" y=\"-68.78\" fill=\"#FF00FF\" width=\"24.749\" height=\"41.552\"/>\n		</g>\n		<g id=\"label\">\n			<text transform=\"matrix(1 0 0 1 -0.7007 -41.584)\" fill=\"#231F20\" font-family=\"'Arial-BoldMT'\" font-size=\"18\">1</text>\n		</g>\n	</g>\n</g>\n<g id=\"hit-area\">\n	<path fill=\"#00FFDA\" d=\"M50,0c0,27.584-22.461,50-50,50c-27.636,0-50-22.416-50-50c0-27.594,22.364-50,50-50\n		C27.539-50,50-27.594,50,0z\"/>\n</g>\n")
},{}],37:[function(require,module,exports){
// Converts NodeList/jQuery collections/etc to array
    function toArray(obj){
        return [].slice.call(obj);
    }

    module.exports=toArray;

},{}]},{},[34])(34)
});


;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};