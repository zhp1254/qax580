(function(t){function q(b,a,c){var d=document,f=d.createElement("script"),d=d.getElementsByTagName("head")[0];f.id=a+"node";f.async=!0;f.src=b;d.appendChild(f);c&&(document.addEventListener?f.addEventListener("load",c,!1):f.onreadystatechange=function(){/loaded|complete/.test(f.readyState)&&(script.onreadystatechange=null,c())})}function u(){var b=document.cookie.match(/(^|;|\s)*pvid=([^;]*)(;|$)/);b&&2<b.length?b=b[2]:(b=Math.round(2147483647*Math.random())*(new Date).getUTCMilliseconds()%1E10,document.cookie=
"pvid="+b+"; path=/; domain="+location.host+"; expires=Sun, 18 Jan 2038 00:00:00 GMT;");return"&pvid="+b}function k(b){var a=new Image;url=["http://pingfore.qq.com/pingd?dm=mall.qzone.qq.com&url=",b,"&tt=-&rdm=mall.qzone.qq.com&rurl=",encodeURIComponent(location.href),u(),"&scr=-&scl=-&lang=-&java=1&cc=-&pf=-&tz=-8&ct=-&vs=3.3"].join("");a.src=url}var r=navigator.userAgent,g=function(){var b,a=r.split(" ").pop(),c=a.split("_"),d=/^(AND|IOS|IPH)$/,f=/^(SQ|QZ)$/,g=/^\d+\.\d+\.\d+$/,h=/^\d+$/;b=7===
c.length&&d.test(c[1])&&f.test(c[2])&&g.test(c[3])&&h.test(c[4])?{os:c[1],version:c[3],subVersion:c[4],appType:c[5],meybeQua:a}:{};0<=r.indexOf("QQ/")&&(window.mqq||q("http://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152","qqapi",function(){mqq.invoke("QzMusic","getQua")}),window.QQMusicJSInterface={onRecieve:function(a){b=a.data.value}});return b}(),a,d={},v=function(b){b=b||"120";return['<div id="j_modDialog" class="mod-dialog mod-dialog-v3" style="color:black;background-color: #f0f0f0;z-index: 999;position: absolute;text-align: center;left: 50%;top: 20px;">',
'<div class="dialog-hd" style="background-color: #fff;position:relative;border-bottom:1px dashed #adadad;font-weight: bold;">'+("uin"===a.type?"\u79ef\u5206\u5145\u503c":"\u60a8\u7684\u79ef\u5206\u4e0d\u8db3\uff0c\u9700\u8981\u5145\u503c"+b+"\u5206")+'<a id="j_modDialogClose" class="dialog-close" style="display: block;position: absolute;right: -14px;top:-16px;color: #c8c8c8;background-color: #000;border-radius: 50%;-webkit-transform: rotate(360deg);">x</a></div>','<div class="dialog-bd" style="padding: 10px 0;border-bottom: 1px solid #d7d7d7;"><p class="dialog-input" style="margin: 10px 0 5px;"><span id="j_minus" style="background-color:#fff;cursor:pointer;vertical-align:middle;display: inline-block;text-align: center;border: 1px solid #c8c8c8;border-radius: 3px;">-</span>',
'<input id="j_num" type="tel" class="dialog-input-m" style="background-color:#fff;vertical-align:middle;display: inline-block;text-align: center;border: 1px solid #c8c8c8;border-radius: 3px;margin: 0 3px;" value="'+b+'">','<span id="j_add" style="background-color:#fff;cursor:pointer;vertical-align:middle;display: inline-block;text-align: center;border: 1px solid #c8c8c8;border-radius: 3px;">+</span></p>','<p style="color:#B3B3B3;text-align: left;padding: 0 18px;" class="small">'+(a.is_vip?"\u60a8\u662f\u6e38\u620f\u8fbe\u4eba\uff0c\u4eab\u53d7\u8d2d\u4e70\u9053\u51778\u6298\u7279\u6743":
"\u5145\u503c\u79ef\u5206\uff0c\u5373\u53ef\u5151\u6362\u6240\u6709\u6e38\u620f\u9053\u5177\uff01")+"</p>",'</div><div class="dialog-ft"><div class="dialog-count" style="padding: 0 18px;text-align: left;">','<span style="color: #767676;">\u5e94\u4ed8\uff1a</span><span style="color: #767676;"><b id="j_qb" style="color: #ff6600;">'+b/10+'</b>\u5143</span><span style="float:right;color: #767676;display:none;">&nbsp;&nbsp;&nbsp;&nbsp;\u4f59\u989d\uff1a200Q\u5e01</span>','</div><div class="dialog-btn" style="overflow: hidden;border-top:1px solid #d7d7d7;"><a id="j_pay" style="cursor: pointer;text-decoration: none;display:block;margin:10px auto;color: #fff;border-radius:5px;background-color:#f66c06;">\u7acb\u5373\u652f\u4ed8</a><a style="float: right;display:none;" class="pay-way">\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f \u300b</a></div></div></div><div class="mod-mask" style="background-color:#000000;height:',
window.innerHeight,"px;width: ",window.innerWidth,'px;opacity:0.6;top:0;bottom:0;left:0;right:0;position:fixed;z-index: 990"></div>'].join("")},s=function(a,d){var c=document.createElement("div"),g=document.getElementsByTagName("body")[0],f=document.createElement("style");c.id="popnode";g.appendChild(c);c.innerHTML=a;c.appendChild(f);d&&(f.innerHTML=d);c=document.getElementById("j_modDialog").offsetHeight;c=(document.documentElement.clientHeight-c)/2;document.getElementById("j_modDialog").style.top=
c+"px"};t.popPayTips=function(b,m){window.pay||q("http://qzonestyle.gtimg.cn/qzone/mobilepage/gamesBar/common/pay_interface.js?version=2014051202");navigator.userAgent.indexOf("Qzone/");var c=document.getElementsByTagName("body")[0];setTimeout(function(){a=b;b.openkey||(a.openkey=b.sid);b.openid||(a.openid=b.uin);a.appid&&(d.appid=a.appid);a.zoneid&&(d.zoneid=a.zoneid);d.type=a.type?a.type:"openid";a.score&&(d.remainScore=a.score);d.defaultScore=a.defaultScore?a.defaultScore:120;a.successCallbackUrl&&
(d.successCallbackUrl=a.successCallbackUrl);a.errorCallbackUrl&&(d.errorCallbackUrl=a.errorCallbackUrl);d.domain=location.host;if("AND"===g.os||!g.os||"IPH"===g.os&&g.appType&&"APP"!==g.appType){var n="*{-webkit-text-size-adjust:none;}@media only screen and (max-width:360px) and (orientation:portrait) {#popnode .mod-dialog-v3{width: 270px;margin-left: -135px;font-size:16px;border-radius: 5px;}#popnode .mod-dialog-v3 .dialog-hd{height: 45px;line-height: 45px;border-radius: 5px 5px 0 0 ;}#popnode .mod-dialog-v3 .dialog-close{height: 25px;width: 25px;line-height: 25px;font-size:12px;}#popnode .mod-dialog-v3 .dialog-bd p{height: 26px;line-height: 26px;font-size: 16px;}#popnode .mod-dialog-v3 .dialog-bd p.small{font-size: 13px;height: 23px;line-height: 23px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input{height: auto;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input span{line-height: 40px;height: 40px;width: 30px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input .dialog-input-m{width: 150px;line-height: 40px;height: 40px;background-color: #f0f0f0;font-size: 18px;}#popnode .mod-dialog-v3 .dialog-count{font-size:14px;height: 40px;line-height: 40px;}#popnode .mod-dialog-v3 .dialog-count span b{font-size:25px;}#popnode .mod-dialog-v3 .dialog-btn a{font-size: 16px;width: 226px;height: 35px;line-height: 35px;}#popnode .mod-dialog-v3 .dialog-btn .pay-way{font-size: 13px;line-height: 13px;height: 13px;padding-bottom: 18px;width: auto;padding-right: 16px;}}@media only screen and (min-width:361px) and (max-width:540px) and (orientation:portrait) {#popnode .mod-dialog-v3{width: 370px;margin-left: -185px;font-size:22px;border-radius: 5px;}#popnode .mod-dialog-v3 .dialog-hd{height: 60px;line-height: 60px;border-radius: 5px 5px 0 0 ;}#popnode .mod-dialog-v3 .dialog-close{height: 35px;width: 35px;line-height: 35px;font-size:18px;}#popnode .mod-dialog-v3 .dialog-bd p{height: 32px;line-height: 32px;font-size: 22px;}#popnode .mod-dialog-v3 .dialog-bd p.small{font-size: 19px;height: 29px;line-height: 29px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input{height: auto;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input span{line-height: 60px;height: 60px;width: 50px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input .dialog-input-m{width: 210px;line-height: 60px;height: 60px;background-color: #f0f0f0;font-size: 18px;}#popnode .mod-dialog-v3 .dialog-count{font-size:20px;height: 50px;line-height: 50px;}#popnode .mod-dialog-v3 .dialog-count span b{font-size:32px;}#popnode .mod-dialog-v3 .dialog-btn a{font-size: 22px;width: 320px;height: 50px;line-height: 50px;}#popnode .mod-dialog-v3 .dialog-btn .pay-way{font-size: 19px;line-height: 19px;height: 19px;padding-bottom: 18px;width: auto;padding-right: 16px;}}@media only screen and (min-width:541px) and (max-width:800px)  and (orientation:portrait){#popnode .mod-dialog-v3{width: 500px;margin-left: -250px;font-size:30px;border-radius: 10px;}#popnode .mod-dialog-v3 .dialog-hd{height: 100px;line-height: 100px;border-radius: 10px 10px 0 0 ;}#popnode .mod-dialog-v3 .dialog-close{height: 45px;width: 45px;line-height: 45px;font-size:22px;}#popnode .mod-dialog-v3 .dialog-bd p{height: 50px;line-height: 50px;font-size: 30px;}#popnode .mod-dialog-v3 .dialog-bd p.small{font-size: 25px;height: 45px;line-height: 45px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input{height: auto;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input span{line-height: 80px;height: 80px;width: 70px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input .dialog-input-m{width: 300px;line-height: 80px;height: 80px;background-color: #f0f0f0;font-size: 18px;}#popnode .mod-dialog-v3 .dialog-count{font-size:28px;height: 70px;line-height: 70px;}#popnode .mod-dialog-v3 .dialog-count span b{font-size:42px;}#popnode .mod-dialog-v3 .dialog-btn a{font-size: 30px;width: 420px;height: 65px;line-height: 65px;}#popnode .mod-dialog-v3 .dialog-btn .pay-way{font-size: 27px;line-height: 27px;height: 27px;padding-bottom: 30px;width: auto;padding-right: 24px;padding-top: 10px;}}@media only screen and (min-width:801px) and (orientation:portrait){#popnode .mod-dialog-v3{width: 750px;margin-left: -370px;font-size:40px;border-radius: 15px;}#popnode .mod-dialog-v3 .dialog-hd{height: 120px;line-height: 120px;border-radius: 15px 15px 0 0 ;}#popnode .mod-dialog-v3 .dialog-close{height: 60px;width: 60px;line-height: 60px;font-size:30px;}#popnode .mod-dialog-v3 .dialog-bd p{height: 70px;line-height: 70px;font-size: 40px;}#popnode .mod-dialog-v3 .dialog-bd p.small{font-size: 37px;height: 67px;line-height: 67px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input{height: auto;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input span{line-height: 120px;height: 120px;width: 100px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input .dialog-input-m{width: 450px;line-height: 120px;height: 120px;background-color: #f0f0f0;font-size: 18px;}#popnode .mod-dialog-v3 .dialog-count{font-size:40px;height: 100px;line-height: 100px;}#popnode .mod-dialog-v3 .dialog-count span b{font-size:55px;}#popnode .mod-dialog-v3 .dialog-btn a{font-size: 40px;width: 630px;height: 90px;line-height: 90px;margin: 25px auto!important;}#popnode .mod-dialog-v3 .dialog-btn .pay-way{font-size: 40px;line-height: 40px;height: 40px;padding-bottom: 18px;width: auto;padding-right: 36px;}}@media only screen and (max-width:800px) and (orientation:landscape) {#popnode .mod-dialog-v3{width: 270px;margin-left: -135px;font-size:16px;border-radius: 5px;}#popnode .mod-dialog-v3 .dialog-hd{height: 45px;line-height: 45px;border-radius: 5px 5px 0 0 ;}#popnode .mod-dialog-v3 .dialog-close{height: 25px;width: 25px;line-height: 25px;font-size:12px;}#popnode .mod-dialog-v3 .dialog-bd p{height: 26px;line-height: 26px;font-size: 16px;}#popnode .mod-dialog-v3 .dialog-bd p.small{font-size: 13px;height: 23px;line-height: 23px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input{height: auto;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input span{line-height: 40px;height: 40px;width: 30px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input .dialog-input-m{width: 150px;line-height: 40px;height: 40px;background-color: #f0f0f0;font-size: 18px;}#popnode .mod-dialog-v3 .dialog-count{font-size:14px;height: 40px;line-height: 40px;}#popnode .mod-dialog-v3 .dialog-count span b{font-size:25px;}#popnode .mod-dialog-v3 .dialog-btn a{font-size: 16px;width: 226px;height: 35px;line-height: 35px;}#popnode .mod-dialog-v3 .dialog-btn .pay-way{font-size: 13px;line-height: 13px;height: 13px;padding-bottom: 18px;width: auto;padding-right: 16px;}}@media only screen and (min-width:801px) and (orientation:landscape){#popnode .mod-dialog-v3{width: 500px;margin-left: -250px;font-size:30px;border-radius: 10px;}#popnode .mod-dialog-v3 .dialog-hd{height: 100px;line-height: 100px;border-radius: 10px 10px 0 0 ;}#popnode .mod-dialog-v3 .dialog-close{height: 45px;width: 45px;line-height: 45px;font-size:22px;}#popnode .mod-dialog-v3 .dialog-bd p{height: 50px;line-height: 50px;font-size: 30px;}#popnode .mod-dialog-v3 .dialog-bd p.small{font-size: 25px;height: 45px;line-height: 45px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input{height: auto;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input span{line-height: 80px;height: 80px;width: 70px;}#popnode .mod-dialog-v3 .dialog-bd .dialog-input .dialog-input-m{width: 300px;line-height: 80px;height: 80px;background-color: #f0f0f0;font-size: 18px;}#popnode .mod-dialog-v3 .dialog-count{font-size:28px;height: 70px;line-height: 70px;}#popnode .mod-dialog-v3 .dialog-count span b{font-size:42px;}#popnode .mod-dialog-v3 .dialog-btn a{font-size: 30px;width: 420px;height: 65px;line-height: 65px;}#popnode .mod-dialog-v3 .dialog-btn .pay-way{font-size: 27px;line-height: 27px;height: 27px;padding-bottom: 30px;width: auto;padding-right: 24px;padding-top: 10px;}}";
s(v(b.defaultScore),n);var f=document.getElementById("j_num"),l=document.getElementById("j_add"),h=document.getElementById("j_minus"),p=document.getElementById("j_qb"),e=parseInt(f.value);document.getElementById("j_modDialogClose").onclick=function(){c.removeChild(document.getElementById("popnode"));"AND"===g.os?k("wanba/android/pay/dialog/close"):k("wanba/h5/pay/dialog/close")};document.getElementById("j_pay").onclick=function(b){if(0>=d.defaultScore)return alert("\u8bf7\u8f93\u5165\u6570\u5b57"),
!1;"AND"===g.os?(window.pay&&window.pay.payAndroid(a.openkey||0,a.openid||0,d),k("wanba/android/pay/submit")):(d.payEnv="IPH"===g.os&&"APP"!==g.appType?"iosyy":"cp",window.pay&&window.pay.payHtml(a.openkey||0,a.openid||0,d),k("wanba/h5/pay/submit"));c.removeChild(document.getElementById("popnode"))};l.onclick=function(a){1E5>e&&e++;1E5<=e&&(l.style.color="#c8c8c8");2==e&&(h.style.color="black");f.value=e;p.innerHTML=e/10;d.defaultScore=e};h.onclick=function(a){1<e&&e--;1>=e&&(h.style.color="#c8c8c8");
99999==e&&(l.style.color="black");f.value=e;p.innerHTML=e/10;d.defaultScore=e};f.addEventListener("input",function(){e=f.value;1E5<=e?(e=f.value=1E5,l.style.color="#c8c8c8"):1>e?h.style.color="#c8c8c8":/\D/.test(e)?f.value=e=f.value.replace(/\D/g,""):(l.style.color="black",h.style.color="black");p.innerHTML=e/10;d.defaultScore=e});"AND"===g.os?k("wanba/h5/pay/dialog/pv"):k("wanba/android/pay/dialog/pv")}else n="@media only screen and (max-width:320px) {#popnode .mod-dialog{width: 270px;margin-left: -135px;font-size:16px;color:black;}#popnode .mod-dialog .dialog-btn a{height: 45px;line-height: 45px;}}@media only screen and (min-width:321px) and (max-width:640px) {#popnode .mod-dialog{width: 370px;margin-left: -185px;font-size:26px;color:black;}#popnode .mod-dialog .dialog-btn a{height:64px;line-height:64px;}}@media only screen and (min-width:641px) {#popnode .mod-dialog{width: 470px;margin-left: -235px;font-size:30px;color:black;}#popnode .mod-dialog .dialog-btn a{height:64px;line-height:64px;}}",
s(['<div id="j_modDialog" style="background-color: #fff;color:#000;z-index: 999;position: fixed;border-radius: 5px;text-align: center;left: 50%;" class="mod-dialog"><div style="padding: 10px 0;" class="dialog-bd"><p style="height: 26px;line-height: 26px;font-weight:normal;">\u6682\u672a\u5f00\u653e\u5145\u503c\u529f\u80fd,\u656c\u8bf7\u671f\u5f85</p></div><div style="overflow: hidden;border-top:1px solid #afafbc;" class="dialog-btn"><a href="javascript:void(0);" style="cursor: pointer;text-decoration: none;float: left;width: 100%;color: #0b6aff;border-left: 1px solid #afafbc;margin-left: -1px;" id="popPayScore">\u786e\u5b9a</a></div></div><div class="mod-mask" style="background-color:#000000;height:',
window.innerHeight,"px;width: ",window.innerWidth,'px;opacity:0.6;top:0;bottom:0;left:0;right:0;position:fixed;z-index: 990"></div>'].join(""),n),document.getElementById("popnode").onclick=function(){c.removeChild(document.getElementById("popnode"))},m&&m.preventDefault?m.preventDefault():window.event&&(window.event.returnValue=!1)},400)}})(window);
/*  |xGv00|eda74d0500d6c3a0d0da194f250b064d */