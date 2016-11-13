<?php
session_start();

require_once 'qiniu/autoload.php';

use Qiniu\Auth;

$accessKey = 'A6xQFwp1v68-fYmti-AT8q7FhrwquI0KI1RjUZXB';
$secretKey = '3ujG6gv_JL4gp0CWnK_IYM5abtOxKe1xWBM2dI_-';
$auth = new Auth($accessKey, $secretKey);

$bucket = 'musicroom';
$upToken = $auth->uploadToken($bucket);

if(!$_SESSION['user']['id']){

	?>

		<script>
			swal("你还没有登陆哟","","warning");
			$(".shade").addClass("hidden");
			setTimeout('$(".shade").remove()',600);
		</script>



<?php
} else {

?>
<style>
	/* Button container */
	.progress-button {
		position: relative;
		display: inline-block;
		text-align: center;
		width: auto;
		min-width: 250px;
		margin-bottom: 10px;
	}
	/* Button style */
	.progress-button button {
		display: block;
		margin: 0 auto;
		padding: 0;
		width: 250px;
		height: 70px;
		border: 2px solid #333333;
		border-radius: 10px;
		background: rgba(255,255,255,.9);
		color: #333333;
		letter-spacing: 1px;
		font-size: 18px;
		font-family: 'Montserrat', sans-serif;
		-webkit-tap-highlight-color: transparent;
		-webkit-transition: background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s, border-color 0.3s;
		transition: background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s, border-color 0.3s;
	}

	.progress-button button:hover {
		background-color: rgba(51,51,51,.9);
		color: #ffffff;
	}

	.progress-button button:focus {
		outline: none;
	}

	/* Text (transition for when returning to initial state) */
	.progress-button button span {
		-webkit-transition: opacity 0.3s 0.1s;
		transition: opacity 0.3s 0.1s;
	}

	/* Common style of SVGs */
	.progress-button svg {
		position: absolute;
		top: 0;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		pointer-events: none;
	}

	.progress-button svg path {
		opacity: 0;
		fill: none;
	}

	.progress-button svg.progress-circle path {
		stroke: #333333;
		stroke-width: 5;
	}

	.progress-button svg.checkmark path,
	.progress-button svg.cross path {
		stroke: #fff;
		stroke-linecap: round;
		stroke-width: 4;
		-webkit-transition: opacity 0.1s;
		transition: opacity 0.1s;
	}

	/* Loading, success and error effects */
	.loading.progress-button button {
		width: 70px; /* make a circle */
		border-width: 5px;
		border-color: #ddd;
		-webkit-border-radius: 40px;
		-moz-border-radius: 40px;
		border-radius: 40px;
		background-color: rgba(255,255,255,.1);
		color: #fff;
	}

	.loading.progress-button span {
		-webkit-transition: opacity 0.15s;
		transition: opacity 0.15s;
	}

	.loading.progress-button span,
	.success.progress-button span,
	.error.progress-button span {
		opacity: 0; /* keep it hidden in all states */
	}

	.success.progress-button button,
	.error.progress-button button {
		-webkit-transition: background-color 0.3s, width 0.3s, border-width 0.3s;
		transition: background-color 0.3s, width 0.3s, border-width 0.3s;
	}

	.success.progress-button button {
		border-color: #333333;
		background-color: rgba(51,51,51,.9);
	}

	.error.progress-button button {
		border-color: #FB797E;
		background-color: #FB797E;
	}

	.loading.progress-button svg.progress-circle path,
	.success.progress-button svg.checkmark path,
	.error.progress-button svg.cross path {
		opacity: 1;
		-webkit-transition: stroke-dashoffset 0.3s;
		transition: stroke-dashoffset 0.3s;
	}

	/* Optional elastic effect for the width of the button */
	.elastic.progress-button button {
		/*-webkit-transition: background-color 0.3s, color 0.3s, width 0.3s cubic-bezier(0.25, 0.25, 0.4, 1), border-width 0.3s, border-color 0.3s;*/
		-webkit-transition: background-color 0.3s, color 0.3s, width 0.3s cubic-bezier(0.25, 0.25, 0.4, 1.6), border-width 0.3s, border-color 0.3s;
		transition: background-color 0.3s, color 0.3s, width 0.3s cubic-bezier(0.25, 0.25, 0.4, 1.6), border-width 0.3s, border-color 0.3s;
	}

	.loading.elastic.progress-button button {
		/*-webkit-transition: background-color 0.3s, color 0.3s, width 0.3s cubic-bezier(0.6, 0, 0.75, 0.75), border-width 0.3s, border-color 0.3s;*/
		-webkit-transition: background-color 0.3s, color 0.3s, width 0.3s cubic-bezier(0.6, -0.6, 0.75, 0.75), border-width 0.3s, border-color 0.3s;
		transition: background-color 0.3s, color 0.3s, width 0.3s cubic-bezier(0.6, -0.6, 0.75, 0.75), border-width 0.3s, border-color 0.3s;
	}
	/* Button container end */

	.flp { position:relative;margin: 30px auto 40px auto; width: 100%;}
	.flp div{position: relative; margin: 40px auto 10px auto;width: 100%; }
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
	.frame {
		margin-top:-270px;
		height:auto;
		/*
    background-color:rgba(255,255,255,.95);
    border:solid 2px #222;
    -webkit-box-shadow: 0 0 15px rgba(0,0,0, .95);
    -moz-box-shadow: 0 0 15px rgba(0,0,0, .95);
        box-shadow: 0 0 15px rgba(0,0,0, .95);*/}
    .frameupload{
		position:relative;width:520px;
		margin:10px auto 10px auto;
		height:auto;
		-webkit-transition-duration: .6s;
		-moz-transition-duration: .6s;
		-ms-transition-duration: .6s;
		-o-transition-duration: .6s;
		transition-duration: .6s;}
    .frameupload.hidden {
		opacity:0
	}
	.filespan {
		position: relative;
		display: inline-block;
		width:130px;
		height:50px;
		line-height: 50px;
		text-align: center;
		border:solid 1px #666666;
		-webkit-border-radius: 2px;
		-moz-border-radius: 2px;
		border-radius: 2px;
		background-color: rgba(255,255,255,.9);
	}
	.flp div:after{
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
</style>
<script src="js/upload.js"></script>
<script src="js/qiniu.min.js"></script>
<script>
	var rikitest;
		$(".flp label").each(function(){
			$(this).html("<span class='keyword'>" + $(this).html().split("").join("</span><span class='keyword'>") + "</span>");
			$(".keyword:contains(' ')").html("&nbsp;");
		})
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
		})
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

		var MUSICuploader = Qiniu.uploader({
			runtimes: 'html5,flash,html4',
			browse_button: 'music',
			//uptoken_url: '/upload_token.php',
			uptoken :'<?php echo $upToken; ?>',
			domain: 'http://7xkut8.media1.z0.glb.clouddn.com/',
			container: 'uploader',
			max_file_size: '100mb',
			flash_swf_url: 'js/plupload/Moxie.swf',
			max_retries: 3,
			dragdrop: true,
			drop_element: 'container',
			chunk_size: '4mb',
			auto_start: true,
			filetype:"music_",
			progress:{},
			href:"",
			title:"",
			size:0,
			source:"七牛",
			init: {
				'FilesAdded': function(up, files) {
					plupload.each(files, function(file) {
					});
				},
				'BeforeUpload': function(up, file) {
					[].slice.call( document.querySelectorAll( '#music' ) ).forEach( function( bttn, pos ) {
						MUSICuploader.settings.progress = new UIProgressButton( bttn);
					} );
					up.settings.progress._submit();
					if(debug) console.log("MUSIC_ " + file.type);
					$ftitle = $("#ftitle");
					if(!$ftitle.val()){
						$ftitle.focus();
						$ftitle.val(file.name)
					}
				},
				'UploadProgress': function(up, file) {
					up.settings.progress.setProgress(file.percent*0.01)
				},
				'FileUploaded': function(up, file, info) {
					up.settings.progress.stop( 1 );

					info = eval ( "(" + info + ")");
					up.settings.size=file.size;
					up.settings.title=info.key;
					up.settings.href=up.settings.domain + encodeURIComponent(info.key);

					var $ftitle = $("#ftitle"), $fsinger = $("#fsinger");


					if(!$ftitle.val()||!$fsinger.val()){
						$.ajax({
							url:"getavinfo.php?href=" + up.settings.domain + "&filename=" + info.key,
							type:"GET",
							success:function(data){
								data = eval ( "(" + data + ")" );

								$ftitle.val(data.format.tags.title);

								$fsinger.focus();
								$fsinger.val(data.format.tags.artist);


							}
						})
					}

					// 每个文件上传成功后,处理相关的事情
					// 其中 info 是文件上传成功后，服务端返回的json，形式如
					// {
					//    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
					//    "key": "gogopher.jpg"
					//  }
					// 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

					// var domain = up.getOption('domain');
					// var res = parseJSON(info);
					// var sourceLink = domain + res.key; 获取上传成功后的文件的Url
				},
				'Error': function(up, err, errTip) {
					up.settings.progress.stop( -1 );
					//上传出错时,处理相关的事情
				},
				'UploadComplete': function() {
					//队列文件处理完毕后,处理相关的事情
				},
				'Key': function(up, file) {
					// 若想在前端对每个文件的key进行个性化处理，可以配置该函数
					// 该配置必须要在 unique_names: false , save_key: false 时才生效
					var key = up.settings.filetype + file.size +"bytes" + file.name;
					// do something with key here
					return key
				}
			}
		});

		var Q2 = new  QiniuJsSDK();
		var option2 = {
			runtimes: 'html5,flash,html4',
			browse_button: 'cover1',
			//uptoken_url: '/upload_token.php',
			uptoken :'<?php echo $upToken; ?>',
			domain: 'http://7xkut8.media1.z0.glb.clouddn.com/',
			container: 'uploader',
			max_file_size: '100mb',
			flash_swf_url: 'js/plupload/Moxie.swf',
			max_retries: 3,
			dragdrop: true,
			drop_element: 'container',
			chunk_size: '4mb',
			auto_start: true,
			filetype : "cover_",
			progress:{},
			href:"",
			title:"",
			size:0,
			source:"七牛",
			init: {
				'FilesAdded': function(up, files) {
					plupload.each(files, function(file) {
					});
				},
				'BeforeUpload': function(up, file) {
					[].slice.call( document.querySelectorAll('#cover1') ).forEach( function( bttn, pos ) {
						COVERuploader.settings.progress = new UIProgressButton( bttn);
					} );
					up.settings.progress._submit();
					if(debug) console.log("COVER_ " + file.type);
				},
				'UploadProgress': function(up, file) {
					up.settings.progress.setProgress(file.percent*0.01)
				},
				'FileUploaded': function(up, file, info) {
					up.settings.progress.stop( 1 );
					info = eval ( "(" + info + ")");
					up.settings.size=file.size;
					up.settings.title=info.key;
					up.settings.href=up.settings.domain + encodeURIComponent(info.key);
					// 每个文件上传成功后,处理相关的事情
					// 其中 info 是文件上传成功后，服务端返回的json，形式如
					// {
					//    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
					//    "key": "gogopher.jpg"
					//  }
					// 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

					// var domain = up.getOption('domain');
					// var res = parseJSON(info);
					// var sourceLink = domain + res.key; 获取上传成功后的文件的Url
				},
				'Error': function(up, err, errTip) {
					up.settings.progress.stop( -1 );
					//上传出错时,处理相关的事情
				},
				'UploadComplete': function() {
					//队列文件处理完毕后,处理相关的事情
				},
				'Key': function(up, file) {
					// 若想在前端对每个文件的key进行个性化处理，可以配置该函数
					// 该配置必须要在 unique_names: false , save_key: false 时才生效
					var key = up.settings.filetype + file.size +"bytes" + file.name;
					// do something with key here
					return key
				}
			}
		};
	var COVERuploader
	setTimeout(function(){
		COVERuploader = Q2.uploader(option2);
	},50);
		//var Q3 = new  QiniuJsSDK();
		var option3 = {
			runtimes: 'html5,flash,html4',
			browse_button: 'lrclrc',
			//uptoken_url: '/upload_token.php',
			uptoken :'<?php echo $upToken; ?>',
			domain: 'http://7xkut8.media1.z0.glb.clouddn.com/',
			container: 'uploader',
			max_file_size: '100mb',
			flash_swf_url: 'js/plupload/Moxie.swf',
			max_retries: 3,
			dragdrop: true,
			drop_element: 'container',
			chunk_size: '4mb',
			auto_start: true,
			filetype : "lrc_",
			progress:{},
			href:"",
			title:"",
			size:0,
			source:"七牛",
			init: {
				'FilesAdded': function(up, files) {
					plupload.each(files, function(file) {
					});
				},
				'BeforeUpload': function(up, file) {
					[].slice.call( document.querySelectorAll( '#lrclrc' ) ).forEach( function( bttn, pos ) {
						LRCuploader.settings.progress = new UIProgressButton( bttn);
					} );
					up.settings.progress._submit();
					if(debug) console.log("LRC_ " + file.type);
				},
				'UploadProgress': function(up, file) {
					up.settings.progress.setProgress(file.percent*0.01)
				},
				'FileUploaded': function(up, file, info) {

					up.settings.progress.stop( 1 );
					info = eval ( "(" + info + ")");
					up.settings.size=file.size;
					up.settings.title=info.key;
					up.settings.href=up.settings.domain + encodeURIComponent(info.key);
					// 每个文件上传成功后,处理相关的事情
					// 其中 info 是文件上传成功后，服务端返回的json，形式如
					// {
					//    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
					//    "key": "gogopher.jpg"
					//  }
					// 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

					// var domain = up.getOption('domain');
					// var res = parseJSON(info);
					// var sourceLink = domain + res.key; 获取上传成功后的文件的Url
				},
				'Error': function(up, err, errTip) {
					up.settings.progress.stop( -1 );
					//上传出错时,处理相关的事情
				},
				'UploadComplete': function() {
					//队列文件处理完毕后,处理相关的事情
				},
				'Key': function(up, file) {
					// 若想在前端对每个文件的key进行个性化处理，可以配置该函数
					// 该配置必须要在 unique_names: false , save_key: false 时才生效
					var key = up.settings.filetype + file.size +"bytes" + file.name;
					// do something with key here
					return key
				}
			}
		};
	var LRCuploader
	setTimeout(function() {
		LRCuploader = Q2.uploader(option3);//Q3->q2

	},100);
	//var Q4 = new  QiniuJsSDK();
		var option4 = {
			runtimes: 'html5,flash,html4',
			browse_button: 'background',
			//uptoken_url: '/upload_token.php',
			uptoken :'<?php echo $upToken; ?>',
			domain: 'http://7xkut8.media1.z0.glb.clouddn.com/',
			container: 'uploader',
			max_file_size: '100mb',
			flash_swf_url: 'js/plupload/Moxie.swf',
			max_retries: 3,
			dragdrop: true,
			drop_element: 'container',
			chunk_size: '4mb',
			auto_start: true,
			filetype : "BG_",
			progress:{},
			href:"",
			title:"",
			size:0,
			source:"七牛",
			init: {
				'FilesAdded': function(up, files) {
					plupload.each(files, function(file) {
					});
				},
				'BeforeUpload': function(up, file) {
					[].slice.call( document.querySelectorAll( '#background' ) ).forEach( function( bttn, pos ) {
						BGuploader.settings.progress = new UIProgressButton( bttn);
					} );
					up.settings.progress._submit();
					if(debug) console.log("BG_ " + file.type);
				},
				'UploadProgress': function(up, file) {
					up.settings.progress.setProgress(file.percent*0.01)
				},
				'FileUploaded': function(up, file, info) {
					up.settings.progress.stop( 1 );
					info = eval ( "(" + info + ")");
					up.settings.size=file.size;
					up.settings.title=info.key;
					up.settings.href=up.settings.domain + encodeURIComponent(info.key);
					// 每个文件上传成功后,处理相关的事情
					// 其中 info 是文件上传成功后，服务端返回的json，形式如
					// {
					//    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
					//    "key": "gogopher.jpg"
					//  }
					// 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

					// var domain = up.getOption('domain');
					// var res = parseJSON(info);
					// var sourceLink = domain + res.key; 获取上传成功后的文件的Url
				},
				'Error': function(up, err, errTip) {
					up.settings.progress.stop( -1 );
					//上传出错时,处理相关的事情
				},
				'UploadComplete': function() {
					//队列文件处理完毕后,处理相关的事情
				},
				'Key': function(up, file) {
					// 若想在前端对每个文件的key进行个性化处理，可以配置该函数
					// 该配置必须要在 unique_names: false , save_key: false 时才生效
					var key = up.settings.filetype + file.size +"bytes" + file.name;
					// do something with key here
					return key
				}
			}
		};
	var BGuploader
	setTimeout(function() {
		BGuploader = Q2.uploader(option4);
	},150);
    setTimeout(function(){
        $(".frameupload").removeClass("hidden");
    },10);
		$('[data-ripple]').ripple({ color: 'rgba(255,153.204,.6)' });



	/**
	 * uiProgressButton.js v1.0.0
	 * http://www.codrops.com
	 *
	 * Licensed under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	 *
	 * Copyright 2014, Codrops
	 * http://www.codrops.com
	 */
	;( function( window ) {
		'use strict';

		var transEndEventNames = {
					'WebkitTransition': 'webkitTransitionEnd',
					'MozTransition': 'transitionend',
					'OTransition': 'oTransitionEnd',
					'msTransition': 'MSTransitionEnd',
					'transition': 'transitionend'
				},
				transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
				support = { transitions : Modernizr.csstransitions };

		function extend( a, b ) {
			for( var key in b ) {
				if( b.hasOwnProperty( key ) ) {
					a[key] = b[key];
				}
			}
			return a;
		}

		function SVGEl( el ) {
			this.el = el;
			// the path elements
			this.paths = [].slice.call( this.el.querySelectorAll( 'path' ) );
			// we will save both paths and its lengths in arrays
			this.pathsArr = new Array();
			this.lengthsArr = new Array();
			this._init();
		}

		SVGEl.prototype._init = function() {
			var self = this;
			this.paths.forEach( function( path, i ) {
				self.pathsArr[i] = path;
				path.style.strokeDasharray = self.lengthsArr[i] = path.getTotalLength();
			} );
			// undraw stroke
			this.draw(0);
		};

		// val in [0,1] : 0 - no stroke is visible, 1 - stroke is visible
		SVGEl.prototype.draw = function( val ) {
			for( var i = 0, len = this.pathsArr.length; i < len; ++i ){
				this.pathsArr[ i ].style.strokeDashoffset = this.lengthsArr[ i ] * ( 1 - val );
			}
		};

		function UIProgressButton( el, options ) {
			this.el = el;
			this.options = extend( {}, this.options );
			extend( this.options, options );
			this._init();
		}

		UIProgressButton.prototype.options = {
			// time in ms that the status (success or error will be displayed) - should be at least higher than the transition-duration value defined for the stroke-dashoffset transition of both checkmark and cross strokes
			statusTime : 1500
		};

		UIProgressButton.prototype._init = function() {
			// the button
			this.button = this.el.querySelector( 'button' );
			// progress el
			this.progressEl = new SVGEl( this.el.querySelector( 'svg.progress-circle' ) );
			// the success/error elems
			this.successEl = new SVGEl( this.el.querySelector( 'svg.checkmark' ) );
			this.errorEl = new SVGEl( this.el.querySelector( 'svg.cross' ) );
			// init events
			this._initEvents();
			// enable button
			this._enable();
		};

		UIProgressButton.prototype._initEvents = function() {
			var self = this;
			//this.button.addEventListener( 'click', function() { self._submit(); } );
		};

		UIProgressButton.prototype._submit = function() {
			// by adding the loading class the button will transition to a "circle"
			classie.addClass( this.el, 'loading' );

			var self = this,
					onEndBtnTransitionFn = function( ev ) {
						if( support.transitions ) {
							if( ev.propertyName !== 'width' ) return false;
							this.removeEventListener( transEndEventName, onEndBtnTransitionFn );
						}

						// disable the button - this should have been the first thing to do when clicking the button.
						// however if we do so Firefox does not seem to fire the transitionend event.
						this.setAttribute( 'disabled', '' );

					/*	if( typeof self.options.callback === 'function' ) {
							self.options.callback( self );
						}
						else {
							// fill it (time will be the one defined in the CSS transition-duration property)
							self.setProgress(1);
							self.stop();
						}
						*/
					};

			if( support.transitions ) {
				this.button.addEventListener( transEndEventName, onEndBtnTransitionFn );
			}
			else {
				onEndBtnTransitionFn();
			}
		};

		// runs after the progress reaches 100%
		UIProgressButton.prototype.stop = function( status ) {
			var self = this,
					endLoading = function() {
						// first undraw progress stroke.
						self.progressEl.draw(0);

						if( typeof status === 'number' ) {
							var statusClass = status >= 0 ? 'success' : 'error',
									statusEl = status >=0 ? self.successEl : self.errorEl;

							// draw stroke of success (checkmark) or error (cross).
							statusEl.draw( 1 );
							// add respective class to the element
							classie.addClass( self.el, statusClass );
							// after options.statusTime remove status and undraw the respective stroke. Also enable the button.
					/*		setTimeout( function() {
								classie.remove( self.el, statusClass );
								statusEl.draw(0);
								self._enable();
							}, self.options.statusTime );
							*/
						}
						else {
							self._enable();
						}
						// finally remove class loading.
						classie.removeClass( self.el, 'loading' );
					};

			// give it a time (ideally the same like the transition time) so that the last progress increment animation is still visible.
			setTimeout( endLoading, 300 );
		};

		UIProgressButton.prototype.setProgress = function( val ) {
			this.progressEl.draw( val );
		};

		// enable button
		UIProgressButton.prototype._enable = function() {
			this.button.removeAttribute( 'disabled' );
		};

		// add to global namespace
		window.UIProgressButton = UIProgressButton;

	})( window );
	/**
	 * uiProgressButton.js v1.0.0
	 * end
	 */
	/*!
	 * classie - class helper functions
	 * from bonzo https://github.com/ded/bonzo
	 *
	 * classie.has( elem, 'my-class' ) -> true/false
	 * classie.add( elem, 'my-new-class' )
	 * classie.remove( elem, 'my-unwanted-class' )
	 * classie.toggle( elem, 'my-class' )
	 */
	/*jshint browser: true, strict: true, undef: true */
	/*global define: false */

	( function( window ) {

		'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

		function classReg( className ) {
			return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
		var hasClass, addClass, removeClass;

		if ( 'classList' in document.documentElement ) {
			hasClass = function( elem, c ) {
				return elem.classList.contains( c );
			};
			addClass = function( elem, c ) {
				elem.classList.add( c );
			};
			removeClass = function( elem, c ) {
				elem.classList.remove( c );
			};
		}
		else {
			hasClass = function( elem, c ) {
				return classReg( c ).test( elem.className );
			};
			addClass = function( elem, c ) {
				if ( !hasClass( elem, c ) ) {
					elem.className = elem.className + ' ' + c;
				}
			};
			removeClass = function( elem, c ) {
				elem.className = elem.className.replace( classReg( c ), ' ' );
			};
		}

		function toggleClass( elem, c ) {
			var fn = hasClass( elem, c ) ? removeClass : addClass;
			fn( elem, c );
		}

		var classie = {
			// full names
			hasClass: hasClass,
			addClass: addClass,
			removeClass: removeClass,
			toggleClass: toggleClass,
			// short names
			has: hasClass,
			add: addClass,
			remove: removeClass,
			toggle: toggleClass
		};

// transport
		if ( typeof define === 'function' && define.amd ) {
			// AMD
			define( classie );
		} else {
			// browser global
			window.classie = classie;
		}

	})( window );
	/*!
	 * classie - class helper functions
	 *
	 * end
	 */




</script>

<div class="frameupload hidden">
	<div class="shadeclose">✘</div>
			<form class="flp">
				<div>
					<input type="text" id="ftitle"/>
					<label for="ftitle">歌曲标题</label>
				</div>
				<div>
					<input type="text" id="fsinger"/>
					<label for="fsinger">歌手</label>
				</div>
			</form>
	<div class="upload" id="uploader" style="position:relative;width:100%; margin: 20px auto 20px auto">
		<div class="progress-button" id="music">
			<button><span>上传歌曲</span></button>
			<svg class="progress-circle" width="70" height="70"><path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/></svg>
			<svg class="checkmark" width="70" height="70"><path d="m31.5,46.5l15.3,-23.2"/><path d="m31.5,46.5l-8.5,-7.1"/></svg>
			<svg class="cross" width="70" height="70"><path d="m35,35l-9.3,-9.3"/><path d="m35,35l9.3,9.3"/><path d="m35,35l-9.3,9.3"/><path d="m35,35l9.3,-9.3"/></svg>
		</div>
		<div class="progress-button" style="float: right;" id="cover1">
			<button><span>上传封面</span></button>
			<svg class="progress-circle" width="70" height="70"><path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/></svg>
			<svg class="checkmark" width="70" height="70"><path d="m31.5,46.5l15.3,-23.2"/><path d="m31.5,46.5l-8.5,-7.1"/></svg>
			<svg class="cross" width="70" height="70"><path d="m35,35l-9.3,-9.3"/><path d="m35,35l9.3,9.3"/><path d="m35,35l-9.3,9.3"/><path d="m35,35l9.3,-9.3"/></svg>
		</div>
		<div class="progress-button" id="lrclrc">
			<button><span>上传歌词</span></button>
			<svg class="progress-circle" width="70" height="70"><path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/></svg>
			<svg class="checkmark" width="70" height="70"><path d="m31.5,46.5l15.3,-23.2"/><path d="m31.5,46.5l-8.5,-7.1"/></svg>
			<svg class="cross" width="70" height="70"><path d="m35,35l-9.3,-9.3"/><path d="m35,35l9.3,9.3"/><path d="m35,35l-9.3,9.3"/><path d="m35,35l9.3,-9.3"/></svg>
		</div>
		<div class="progress-button" style="float: right;" id="background">
			<button><span>上传背景</span></button>
			<svg class="progress-circle" width="70" height="70"><path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/></svg>
			<svg class="checkmark" width="70" height="70"><path d="m31.5,46.5l15.3,-23.2"/><path d="m31.5,46.5l-8.5,-7.1"/></svg>
			<svg class="cross" width="70" height="70"><path d="m35,35l-9.3,-9.3"/><path d="m35,35l9.3,9.3"/><path d="m35,35l-9.3,9.3"/><path d="m35,35l9.3,-9.3"/></svg>
		</div>
    </div>

	<div id="fsubmit" role="button" style="position:relative;width:100%;height:60px; line-height:60px;text-align: center; cursor: pointer;margin:50px auto 50px auto;border:solid 2px #333333;background-color: rgba(255,255,255,.8);-webkit-border-radius:10px ;-moz-border-radius:10px ;border-radius: 10px;">
		提交歌曲
	</div>
    
    </div>

<script>
	$("#fsubmit").click(function(){
		$ftitle = $("#ftitle");
		$fsinger = $("#fsinger");

		if($ftitle.val().length<1){
			swal("歌曲名太短","","warning");
			return false
		}
		if($fsinger.val().length<1){
			swal("歌手名太短","","warning");
			return false
		}
		if(!MUSICuploader.settings.href.length){
			swal("还没有上传歌曲","","warning");
			return false
		}

		$.ajax({
			url:"addmusic.php",
			type:"POST",
			data:{
				title:$ftitle.val(),
				singer:$fsinger.val(),
				Mtitle:MUSICuploader.settings.title,
				Msize:MUSICuploader.settings.size,
				Mhref:MUSICuploader.settings.href,
				Msource:MUSICuploader.settings.source,

				Ctitle:COVERuploader.settings.title,
				Csize:COVERuploader.settings.size,
				Chref:COVERuploader.settings.href,
				Csource:COVERuploader.settings.source,

				Ltitle:LRCuploader.settings.title,
				Lsize:LRCuploader.settings.size,
				Lhref:LRCuploader.settings.href,
				Lsource:LRCuploader.settings.source,

				Btitle:BGuploader.settings.title,
				Bsize:BGuploader.settings.size,
				Bhref:BGuploader.settings.href,
				Bsource:BGuploader.settings.source

			},
			success:function(data) {
				data = eval("(" + data + ")");
				$("#fsubmit").unbind();

				if (data.result && data.result == "fault") {
					swal("已经有这首歌啦！", "", "warning");
					$(".shadeclose").trigger("click");
				} else {
					swal("添加成功", data.title + " - " + data.singer, "success");
					$(".shadeclose").trigger("click");
				}

			}
		})

	})
</script>

<?php }
?>