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
    bar;


    //低效机台效率范围插件使用
    $('.range-slider').jRange({
        from: 0,
        to: 100,
        step: 1,
        scale: [0, 25, 50, 75, 100],
        format: '%s',
        width: 300,
        showLabels: true,
        isRange: true, //是否显示区间
//					onstatechange:function(){//拖拽时调用的函数
//						console.log($('.range-slider').val())
//					},
        ondragend:function(){//拖拽结束后调用的函数
            console.log($('.range-slider').val()+"-----")
            var strs=[];
            var str=$("#wms").val();

            dixiaojitai(str)
        }
    });

});
//    	进度条
/*function go() {
    var idObj = document.getElementById("bar");
    idObj.style.width = parseInt(idObj.style.width) + 1 + "%";
    idObj.innerHTML = idObj.style.width;
    if(idObj.style.width == "80%") {
        window.clearInterval(bar);
    }
}*/



//布机实时数据
function bjss() {



    $.ajax({
        url:"http://localhost:8080/phone/shebei/buji_shishi",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $('#cp_zl').html("");
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<li><div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['jitaihao']+""/""+result['xingming']+"</div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>品种<span>"+result['pibuguige']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>合约号<span>"+result['name']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>车速<span>"+result['chesu']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl'>效率<span>"+result['xiaolv']+"</span></div></div>"+
                     "<div class='mui-row'><div class='mui-col-xs-3 mui-text-center hzcl fgx'>总经停次数<span>"+result['zongting']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>经停次数<span>"+result['jingting']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>纬停次数<span>"+result['weiting']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl'>十万纬停次数<span>"+result['swwt']+"</span></div></div></li>";
                $('#cp_zl').append(item);
            })
        }
    });
}
bjss();




function dixiaojitai(str) {
    str=$("#wms").val();
    $.ajax({
        url:"http://localhost:8080/phone/shebei/dixiao_jitai",
        type:"GET",
        dataType:'json',
        data:{str:str},
        success: function(res){
            $("#xl").html("");
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<li><div class='chanliang'><div><p>"+result['pibuguige']+"</p><p>"+result['heyuehao']+"</p></div>"+
                     "<div><h5>机台号</h5><p>"+result['jitaihao']+"</p></div>"+
                     "<div class='wd'><h5>运行状态</h5><p>"+result['zhuangtai']+"</p></div>"+
                     "<div class='xl'><h5>生产效率</h5><p>"+result['xiaolv']+" %</p></div></div></li>"
                $("#xl").append(item)
            })
        }
    });
}
dixiaojitai();
//var bar = window.setInterval("go()", 50);


function kaitaitongji() {
    $.ajax({
        url:"http://localhost:8080/phone/shebei/buji_kaitai",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#zb_kttj_box").html("");
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<li><div class='mui-row'>"+
                     "<div class='mui-col-xs-12 mui-text-center cl_bc cs_dxj'>"+result['pibuguige']+"/"+result['name']+"<span style='margin-left: 10px;'>开台数："+result['jitaishu']+"</span></div>"+
                     "<div class='mui-col-xs-12 graph' style='margin-bottom: 5px;'><strong class='bar' id='bar' style='width:"+result['xiaolv']+"%;'>"+result['xiaolv']+"%</strong> </div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>当班总产量<span>"+result['dbcl']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>累计总产量<span>"+result['ljcl']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>计划总产量<span>"+result['xiadanshuliang']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl'>平均效率<span>"+result['xiaolv']+"%</span></div></div></li>"
                $("#zb_kttj_box").append(item);
            })
        }
    });
}

kaitaitongji();