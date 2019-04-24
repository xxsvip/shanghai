function zhizhou(){
    $.ajax({
        url:"http://localhost:8080/phone/zhizhou/zhi_zhou_zhuangtai",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $('#zzzt').html("");
           var columns=res.data.columns;
           var data=res.data.datas;
           var item1;
           var item2;
            $.each(columns,function (i, result) {
                item1="<li><div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>汇总</div>"+
                     "<div class='mui-col-xs-4 mui-text-center hzcl fgx'>满纱机下织轴数<span>"+result['jixiaman']+"</span></div>"+
                     "<div class='mui-col-xs-4 mui-text-center hzcl fgx'>机上在用织轴数<span>"+result['bujishang']+"</span></div>"+
                     "<div class='mui-col-xs-2 mui-text-center hzcl fgx'>空轴数<span>"+result['jixiakong']+"</span></div>"+
                     "<div class='mui-col-xs-2 mui-text-center hzcl '>总轴数<span>"+result['zongzhoushu']+"</span></div></div></li>"
                $('#zzzt').append(item1);
            })
            $.each(data,function (i, result) {
                item2="<li><div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['pinzhong']+"/"+result['heyuehao']+"</div>"+
                    "<div class='mui-col-xs-4 mui-text-center hzcl fgx'>织轴状态<span>"+result['zhuangtai']+"</span></div>"+
                    "<div class='mui-col-xs-4 mui-text-center hzcl fgx'>长度<span>"+result['changdu']+"</span></div>"+
                    "<div class='mui-col-xs-4 mui-text-center hzcl fgx'>位置<span>"+result['weizhi']+"</span></div></div></li>"
                $('#zzzt').append(item2);
            })
        }
    });
}

zhizhou();

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