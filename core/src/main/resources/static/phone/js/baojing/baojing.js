mui.init({
    statusBarBackground: '#02bda8'
});
// 设置系统状态栏
function plusReady(){
    // 设置系统状态栏背景为青色
    plus.navigator.setStatusBarBackground( "#02bda8" );
    // 设置系统状态栏样式为浅色文字
    plus.navigator.setStatusBarStyle( "UIStatusBarStyleBlackOpaque" );
}
if(window.plus){
    plusReady();
}else{
    document.addEventListener("plusready",plusReady,false);
};
// 设置系统状态栏 end
mui.ready(function() {
    mui('body').on('tap', 'a', function() {
        if(this.attributes["dataMk"]) {
            return;
        } else {
            window.location.href = this.href;
        }
    });
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005,
        indicators: true
    });
})

function wenshidu() {
    $.ajax({
        url:"http://localhost:8080/phone/baojing/wenshidu",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#wsd_bj").html('');
            var data=res.data.datas;

            if(data.length>0){
                $("#wsd_bj_sl").append("<div class='tx' id='wsd_sl'></div>");
                $("#wsd_sl").html(data.length)
            }else {
                $("#wsd_bj_sl").append("<div id='wsd_sl'></div>");
                $("#wsd_sl").html('')
            }
            var item;
            $.each(data,function (i, result) {
                item="<li>"+
                     "<h2>"+result['name']+"[温湿度超标]报警  实际温度："+result['wendu']+"   实际湿度："+result['shidu']+"</h2>"+
                     "</li>";
                $("#wsd_bj").append(item);
            })
        }
    })
}


function dixiao() {
    $.ajax({
        url:"http://localhost:8080/phone/baojing/dixiao",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#dx").html("");
            var data=res.data.datas;

            if(data.length>0){
                $("#dx_jt").append("<div class='tx' id='dx_sl'></div>");
                $("#dx_sl").html(data.length)
            }else {
                $("#dx_jt").append("<div id='dx_sl'></div>");
                $("#dx_sl").html('')
            }
            var item;
            $.each(data,function (i, result) {
                item="<li><h2>"+result['jitaihao']+"[低效]报警  实际效率:"+result['xiaolv']+"%</h2></li>";
                $("#dx").append(item)
            })
        }
    })
}


function lixian() {
    $.ajax({
        url:"http://localhost:8080/phone/baojing/lixian",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#lx").html("");
            var data=res.data.datas;

            if(data.length>0){
                $("#lx_jt").append("<div class='tx' id='lx_sl'></div>");
                $("#lx_sl").html(data.length)
            }else {
                $("#lx_jt").append("<div id='lx_sl'></div>");
                $("#lx_sl").html('')
            }
            var item;
            $.each(data,function (i, result) {
                item="<li><h2>"+result['jitaihao']+"[离线]报警</h2></li>";
                $("#lx").append(item)
            })
        }
    })
}


lixian();
dixiao();
wenshidu();