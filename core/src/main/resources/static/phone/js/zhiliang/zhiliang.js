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


function chengpinzhiliang() {
    $.ajax({
        url:"http://localhost:8080/phone/zhiliang/cp_zl",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#cp_zl").html('');
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<li><div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['pibuguige']+"/"+result['heyuehao']+"</div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>机台号<span>"+result['jitaihao']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>经密<span>"+result['jingmi']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>纬密<span>"+result['weimi']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>布幅<span>"+result['bufu']+"</span></div></div>"+
                     "<div class='mui-row'><div class='mui-col-xs-3 mui-text-center hzcl fgx'>折幅<span>"+result['zhefu']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>米数<span>"+result['mishu']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>重量<span>"+result['zhongliang']+"</span></div>"+
                     "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>克重<span>"+result['kezhong']+"</span></div>"+"</div></li>"
                $("#cp_zl").append(item)
            })
        }
    });
}

function qijizhiliang() {
    $.ajax({
        url:"http://localhost:8080/phone/zhiliang/qj_zl",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#qj_zl").html('');
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<li><div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['pibuguige']+"/"+result['heyuehao']+"</div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>机台号<span>"+result['jitaihao']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>筘号<span>"+result['kouhao']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>总经<span>"+result['zongjing']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>经密<span>"+result['jingmi']+"</span></div></div>"+
                    "<div class='mui-row'><div class='mui-col-xs-3 mui-text-center hzcl fgx'>纬密<span>"+result['weimi']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>筘幅<span>"+result['koufu']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>布幅<span>"+result['bufu']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>机上控制纬密<span>"+result['jishangkongzhiweimi']+"</span></div>"+"</div></li>"
                $("#qj_zl").append(item)
            })
        }
    });
}

function jiangshazhiliang() {
    $.ajax({
        url:"http://localhost:8080/phone/zhiliang/js_zl",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#js_zl").html('');
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<li><div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['pibuguige']+"/"+result['heyuehao']+"</div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>缸号<span>"+result['ganghao']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>粘度秒<span>"+result['niandumiao']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>浆桶含固率<span>"+result['jiangtonghangulv']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>浆槽含固率<span>"+result['jiangcaohangulv']+"</span></div></div>"+
                    "<div class='mui-row'><div class='mui-col-xs-3 mui-text-center hzcl fgx'>上浆率<span>"+result['shangjianglv']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>上浆后强力<span>"+result['shangjianghouqiangli']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>强力增强<span>"+result['qianglizengqiang']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>上浆回潮<span>"+result['shangjianghuichao']+"</span></div>"+
                    "<div class='mui-row'><div class='mui-col-xs-3 mui-text-center hzcl fgx'>整经总长度<span>"+result['zhengjingzongchangdu']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>浆纱总长度<span>"+result['jiangshazongchangdu']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>伸长<span>"+result['shenchang']+"</span></div>"+"</div></li>"
                $("#js_zl").append(item)
            })
        }
    });
}


function yuanshazhiliang() {
    $.ajax({
        url:"http://localhost:8080/phone/zhiliang/ys_zl",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#ys_zl").html('');
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<li><div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['pinming']+"/"+result['pihao']+"</div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>克重回潮<span>"+result['kezhonghuichao']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>单强cn<span>"+result['danqiang']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>条干CV<span>"+result['tiaogan']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>细节-50%<span>"+result['xijie']+"</span></div></div>"+
                    "<div class='mui-row'><div class='mui-col-xs-3 mui-text-center hzcl fgx'>粗结+50%<span>"+result['cujie']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>棉节+200%<span>"+result['mianjie']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>每包实重<span>"+result['meibaoshizhong']+"</span></div>"+
                    "<div class='mui-col-xs-3 mui-text-center hzcl fgx'>实际号数<span>"+result['shijihaoshu']+"</span></div>"+"</div></li>"
                $("#ys_zl").append(item)
            })
        }
    });
}


yuanshazhiliang();
jiangshazhiliang();
qijizhiliang();
chengpinzhiliang();