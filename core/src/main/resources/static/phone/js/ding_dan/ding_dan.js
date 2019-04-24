

mui.init();
(function($, doc) {
    $.init({
        statusBarBackground: '#02bda8'
    });
}(mui, document));

// 设置系统状态栏
function plusReady() {
    // 设置系统状态栏背景为青色
    plus.navigator.setStatusBarBackground("#02bda8");
    // 设置系统状态栏样式为浅色文字
    plus.navigator.setStatusBarStyle("UIStatusBarStyleBlackOpaque");
}
if(window.plus) {
    plusReady();
} else {
    document.addEventListener("plusready", plusReady, false);
};
// 设置系统状态栏 end
mui.ready(function() {
    mui('body').on('tap', 'a', function() {
        if(this.attributes["dataMk"]) {
            return;
        } else {
            //    			   document.location.href=this.href;
            window.location.href = this.href;
        }
    });
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005,
        indicators: true
    });
});

//    	进度条
/*function $(obj) {
    return document.getElementById(obj);
}

function go() {
    $("bar").style.width = parseInt($("bar").style.width) + 1 + "%";
    $("bar").innerHTML = $("bar").style.width;
    if($("bar").style.width == "80%") {
        window.clearInterval(bar);
    }
}
var bar = window.setInterval("go()", 50);
window.onload = function() {
    bar;
}*/
/**
 * 手机端-订单-订单进度
 */
//加载订单进度
	//showDDJD();
//加载订单进度
function showDDJD() {
   $.ajax({
		url : 'mobile/dd/ddjd',
		type : 'GET',
		dataType : "JSON",
		success : function(data) {
			if (data.datas.length > 0) {
				var str = "";
				for (var i = 0; i < data.datas.length; i++) {
					str += "<li>"+
		        	  	 		"<div class=\"graph\"> <strong id=\"bar"+i+"\" style=\"width:1%;\"></strong> </div>"+
		        	  	 	   	 	"<div class=\"pronum\">"+
		        	  	 	   	  	 	"<div class=\"pnl\"><i></i>已交货数量： "+(data.datas[i].jd==null?'':data.datas[i].jd)+"</div>"+
		        	  	 	   	  	  		"<div class=\"pnr\"><i></i>订单数量： "+(data.datas[i].zsl==null?'':data.datas[i].zsl)+"</div>"+
		        	  	 	   	  	  		 "</div>"+
		        	  	 	   	  	  		 "<h2><span>交货期： "+data.datas[i].jssj+"</span>订单号： "+data.datas[i].ddh+" </h2>"+
		        	  	 	   	  	  		 "<p>物料描述： "+data.datas[i].wlms+"</p>"+
		        	  	 	   	  	  		 "<p><span style='margin-right:15px;'>预交日期： "+data.datas[i].yjjq+"</span>细纱日产： "+data.datas[i].rc+"t</p>"+
		        	  	 	   	  	  		 "</li>";
				}
				$('#ddjd_ul').html(str);
				
				
			}else {
				$('#ddjd_ul').html("暂无订单进度信息");
			}
		},
		error : function() {
			alert("异常");
		}
	});
}


function yiwanchengdingdan() {
    var jq=jQuery.noConflict();
    jq.ajax({
        url:"http://localhost:8080/phone/dingdan/yiwanchengdingdan",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
        	jq("#ywcdd").html("");
            var data=res.data.datas;
            var item;
            jq.each(data,function (i, result) {
				item="<li class='mui-table-view-cell mui-collapse'><a class='mui-navigate-right' href='#'>"+
					 "<div class='pronum'><div class='pnl'><i></i>已完成总量： "+result['yiwanchengliang']+"</div>"+
					 "<div class='pnr''><i></i>订单计划总量： "+result['xiadanshuliang']+"</div></div>"+
					 "<h2><span>交货期： "+result['jiaohuoriqi']+"</span>订单号： "+result['dingdanhao']+" </h2>"+
					 "<p>品种： "+result['pibuguige']+"</p></a>"+
					 "<div class='mui-collapse-content mui-scroll-wrapper'><ul class='jindu nenghao'><li>"+
					 "<span class='mui-inline zz_title'>整经追踪</span><div class='chanliang mui-row'><div class='mui-col-xs-4'>"+
					 "<h5>开始生产时间</h5><p>"+result['zjkaishishijian']+"</p></div><div class='mui-col-xs-4'>"+
					 "</div><div class='mui-col-xs-4'>"+
					 "<h5>累计产量</h5><p>"+result['zjchangdu']+"(米)</p></div></div></li><li>"+
                     "<span class='mui-inline zz_title'>浆纱追踪</span><div class='chanliang mui-row'>"+
                     "<div class='mui-col-xs-4'><h5>开始生产时间</h5><p>"+result['jskaishishijian']+"</p></div>"+
                     "<div class='mui-col-xs-4'></div>"+
                     "<div class='mui-col-xs-4'><h5>累计产量</h5><p>"+result['jschangdu']+"(米)</p></div></div></li>"+
                     "<li><span class='mui-inline zz_title'>织布追踪</span><div class='chanliang mui-row'><div class='mui-col-xs-4'>"+
                     "<h5>开始生产时间</h5><p>"+result['zbkaishishijian']+"</p></div><div class='mui-col-xs-4'></div>"+
                     "<div class='mui-col-xs-4'><h5>累计产量</h5><p>"+result['zbchangdu']+"(米)</p></div></div></li><li>"+
                     "<span class='mui-inline zz_title'>入库追踪</span><div class='chanliang mui-row'>"+
                     "<div class='mui-col-xs-4'><h5>首次入库时间</h5><p>"+result['rkkaishishijian']+"</p></div><div class='mui-col-xs-4'></div>"+
                     "<div class='mui-col-xs-4'><h5>入库累计产量</h5><p>"+result['rkchangdu']+"(米)</p></div></div></li></ul></div></li>"
                jq("#ywcdd").append(item);
            })

        }
    });
}


function weiwanchengdingdan() {
    var jq=jQuery.noConflict();
    jq.ajax({
        url:"http://localhost:8080/phone/dingdan/weiwanchengdingdan",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            jq("#wwcdd").html("");
            var data=res.data.datas;
            var item;
            var col;
            jq.each(data,function (i, result) {
                if(result['shifouchaoqi']=='未超期'){
                    col='green'
                }else {
                    col='red'
                }

                item="<li class='mui-table-view-cell mui-collapse'><a class='mui-navigate-right' href='#'>"+
                     "<div class='graph'> <strong class='bar' id='bar' style='width:"+result['zongjindu']+"%;'>"+result['zongjindu']+"%</strong> </div>"+
                     "<div class='pronum'><div class='pnl'><i></i>已完成总量： "+result['yiwanchengliang']+"</div>"+
                     "<div class='pnr'><i></i>订单计划总量： "+result['xiadanshuliang']+"</div></div>"+
                     "<h2><span>交货期： "+result['jiaohuoriqi']+"</span>订单号： "+result['dingdanhao']+" </h2>"+
                     "<p><span style='float: right;color: "+col+";'>"+result['shifouchaoqi']+"</span>预交日期： "+result['yujiaoriqi']+"</p>"+
                     "<p>品种： "+result['pibuguige']+"</p></a><div class='mui-collapse-content mui-scroll-wrapper'><ul class='jindu nenghao'><li>"+
                     "<span class='mui-inline zz_title'>整经追踪</span><div class='chanliang mui-row'><div class='mui-col-xs-4'>"+
                     "<h5>开始生产时间</h5><p>"+result['zjkaishishijian']+"</p></div><div class='mui-col-xs-4'>"+
                     "</div><div class='mui-col-xs-4'>"+
                     "<h5>累计产量</h5><p>"+result['zjchangdu']+"(米)</p></div></div></li><li><span class='mui-inline zz_title'>浆纱追踪</span>"+
                     "<div class='chanliang mui-row'><div class='mui-col-xs-4'><h5>开始生产时间</h5><p>"+result['jskaishishijian']+"</p></div>"+
                     "<div class='mui-col-xs-4'></div><div class='mui-col-xs-4'>"+
                     "<h5>累计产量</h5><p>"+result['jschangdu']+"(米)</p></div></div></li>"+
                     "<li><span class='mui-inline zz_title'>织布追踪</span><div class='chanliang mui-row'><div class='mui-col-xs-4'>"+
                     "<h5>开始生产时间</h5><p>"+result['zbkaishishijian']+"</p></div><div class='mui-col-xs-4'></div>"+
                     "<div class='mui-col-xs-4'><h5>累计产量</h5><p>"+result['zbchangdu']+"(米)</p></div></div></li>"+
                     "<li><span class='mui-inline zz_title'>入库追踪</span>"+
                     "<div class='chanliang mui-row'><div class='mui-col-xs-4'><h5>首次入库时间</h5><p>"+result['rkkaishishijian']+"</p></div>"+
                     "<div class='mui-col-xs-4'><h5>入库累计产量</h5><p>"+result['rkchangdu']+"(米)</p></div></div></li></ul></div></li>"
                jq("#wwcdd").append(item);
            })

        }
    });
}
/**
 * 进度条
 */

/*function go(id,bfb) {
	var idObj = document.getElementById(id);
	bfb=(bfb*100).toFixed(2); 
	idObj.style.display="inline-block"
	idObj.style.backgroundColor= "#f8894d";
	idObj.style.width =bfb+"%";
	idObj.innerHTML = idObj.style.width;
	
}*/
weiwanchengdingdan();
yiwanchengdingdan();

