mui.init();
(function($, doc) {
    $.init({
        statusBarBackground: '#02bda8'
    });
}(mui, document));

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
mui.ready(function(){
    mui('body').on('tap','a', function (){
        if( this.attributes["dataMk"]){
            return;
        } else{
//    			   document.location.href=this.href;
            window.location.href=this.href;
        }
    });
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005,
        indicators: true
    });
});

function luobuyuce(){
    $.ajax({
        url:"http://localhost:8080/phone/luobu/luo_bu",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#luobu").html("");
            var data=res.data.datas;
            var lbs="<li><h4 style='text-align: center;'>当班预计落布数："+data.length+"</h4></li>"
            $("#luobu").append(lbs);
            var item;
            var col;
            var j=0;
            $.each(data,function (i, result) {
                j++;
                if(result['luobushijian']<=30){
                    col='mui-badge-red'
                }else {
                    col='mui-badge-green'
                }
                item="<li><h2><span>机台号： "+result['jitaihao']+"</span>NO.  "+j+"</h2>"+
                     "<div class='gb'><p>合约号："+result['name']+"</p><p>预计落布时间："+result['yuceluobu']+"</p>"+
                     "<i class='"+col+"'>落布倒计时："+result['luobushijian']+"分钟</i></div></li>"
                $("#luobu").append(item);
            });
        }
    })
};

luobuyuce();