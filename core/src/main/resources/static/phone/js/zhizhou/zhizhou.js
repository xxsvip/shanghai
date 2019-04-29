function zhizhou(zhuangtai){
    var param = encodeURI(zhuangtai);

    $.ajax({
        url:"http://localhost:8080/phone/zhizhou/zhi_zhou_zhuangtai",
        type:"GET",
        dataType:'json',

        data:{zhuangtai:decodeURI(param)},
        success: function(res){
            $('#zzzt').html("");
           var data=res.data.datas;
           var item;
           var wms;
           //用来添加所有的品种和合约号
           var id_arr=[];
            var ss;
           for(var i=0;i<data.length;i++){
               if(zhuangtai=="机下空"){
                ss=''
               }else {
                   ss=data[i].pinzhong+"/"+data[i].heyuehao+"/"+data[i].id
               }

               if(id_arr.indexOf(ss) == -1){
                   id_arr.push(ss)
               }
               //arr.push(data[i].pinzhong+"/"+data[i].heyuehao)
           }
            var dt = []
           for (var i =0;i<id_arr.length;i++){
               var id = {
                   id:id_arr[i],
                   sheBei : []
               }
               for (var j = 0;j<data.length;j++){
                   if(zhuangtai=="机下空"){
                       id.sheBei.push(data[j]);
                   }
                   if(data[j].pinzhong+"/"+data[j].heyuehao+"/"+data[j].id == id_arr[i]){
                       id.sheBei.push(data[j]);
                   }
               }
               dt.push(id)
           }


            $.each(dt,function (i, result) {
                item="<li class='mui-table-view-cell mui-collapse'><a class='mui-navigate-right' href='#'>"+
                     "<div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['id']+"   数量:"+result.sheBei.length+"</div></a>"+
                     "<div class='mui-collapse-content'><ul class='jindu nenghao' id='ul"+i+"'></ul></div></li>"
                $("#zzzt").append(item)
                $.each(result.sheBei,function (j, son) {
                    wms="<li><span class='mui-inline zz_title'>"+son['jitaihao']+"</span>"+
                        "<div class='chanliang mui-row'><div class='mui-col-xs-4'>"+
                        "<h5>轴号</h5><p>"+son['zhouhao']+"</p></div><div class='mui-col-xs-4'>"+
                        "<h5></h5><p></p></div><div class='mui-col-xs-4'><h5>长度</h5><p>"+son['changdu']+"</p></div></div></li>"
                    $("#ul"+i+"").append(wms)
                })

            })
        }
    });
}

function jingzhou(zhuangtai){
    var param = encodeURI(zhuangtai)
    $.ajax({
        url:"http://localhost:8080/phone/zhizhou/jing_zhou_zhuangtai",
        type:"GET",
        dataType:'json',
        data:{zhuangtai:decodeURI(param)},
        success: function(res){
            $('#jzzt').html("");
            var data=res.data.datas;
            var item;
            var wms;
            //用来添加所有的品种和合约号
            var id_arr=[];
            var ss;
            for(var i=0;i<data.length;i++){
                if(zhuangtai=="机下空"){
                    ss=''
                }else {
                    ss=data[i].pinzhong+"/"+data[i].heyuehao+"/"+data[i].id
                }

                if(id_arr.indexOf(ss) == -1){
                    id_arr.push(ss)
                }

            }
            var dt = []
            for (var i =0;i<id_arr.length;i++){
                var id = {
                    id:id_arr[i],
                    sheBei : []
                }
                for (var j = 0;j<data.length;j++){
                    if(zhuangtai=="机下空"){
                        id.sheBei.push(data[j]);
                    }
                    if(data[j].pinzhong+"/"+data[j].heyuehao+"/"+data[j].id == id_arr[i]){
                        id.sheBei.push(data[j]);
                    }
                }
                dt.push(id)
            }


            $.each(dt,function (i, result) {
                item="<li class='mui-table-view-cell mui-collapse'><a class='mui-navigate-right' href='#'>"+
                    "<div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['id']+"   数量:"+result.sheBei.length+"</div></a>"+
                    "<div class='mui-collapse-content'><ul class='jindu nenghao' id='uls"+i+"'></ul></div></li>"
                $("#jzzt").append(item)
                $.each(result.sheBei,function (j, son) {
                    wms="<li><span class='mui-inline zz_title'>"+son['jitaihao']+"</span>"+
                        "<div class='chanliang mui-row'><div class='mui-col-xs-4'>"+
                        "<h5>轴号</h5><p>"+son['zhouhao']+"</p></div><div class='mui-col-xs-4'>"+
                        "<h5></h5><p></p></div><div class='mui-col-xs-4'><h5>长度</h5><p>"+son['changdu']+"</p></div></div></li>"
                    $("#uls"+i+"").append(wms)
                })

            })
        }
    });
}


//zhizhou();

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

    zhizhou($("#zzjxk").text());
    jingzhou($("#jzjxk").text());
    mui("#item1 .dx_title").on("tap", "div", function() {
        if($(this).addClass("active").siblings().removeClass("active")){
            $("#er div").addClass("active").siblings().removeClass("active")
        }
        if($(this).text()=="机下空"){
           zhizhou($("#zzjxk").text());
        }else if($(this).text()=="机下满已穿综"){
            zhizhou($("#zzjxmycz").text());
        }else if($(this).text()=="机下满未穿综"){
            zhizhou($("#zzjxmwcz").text());
        }
    });
    mui("#item1 .c").on("tap", "div", function() {
        if($(this).addClass("active").siblings().removeClass("active")){
            $("#yi div").addClass("active").siblings().removeClass("active")
        }
        if($(this).text()=="布机上"){
            zhizhou($("#zzbjs").text());
        }else if($(this).text()=="机下剪轴未穿综"){
            zhizhou($("#zzjxjzwcz").text());
        }else if($(this).text()=="机下剪轴已穿综"){
            zhizhou($("#zzjxjzycz").text());
        }
    });
    mui("#item2 .dx_title").on("tap", "div", function() {
        $(this).addClass("active").siblings().removeClass("active")

        if($(this).text()=="机下空"){
            jingzhou($("#jzjxk").text());
        }else if($(this).text()=="机下满"){
            jingzhou($("#jzjxm").text());
        }else if($(this).text()=="浆纱机上"){
            jingzhou($("#jzjsjx").text());
        }
    })
});