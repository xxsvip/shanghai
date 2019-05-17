function rukuchaniang(){
    $.ajax({
        url:"http://localhost:8080/phone/chanliang/rukuchanliang",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#rukuli").html('');
            var columns=res.data.columns;
            var data=res.data.datas;
            var item;
            $("#dangrihuizong").html(columns[0].drchangdu);
            $("#dangyuehuizong").html(columns[0].dychangdu);
            $.each(data,function (i, result) {
                item="<div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['pibuguige']+"/"+result['name']+"</div>"+
                     "<div class='mui-col-xs-6 mui-text-center hzcl'>当日入库累计(米)<span>"+result['drchangdu']+"</span></div>"+
                     "<div class='mui-col-xs-6 mui-text-center hzcl'>当月入库累计(米)<span>"+result['dychangdu']+"</span></div></div>"

                $("#rukuli").append(item);
            });
        }
    })
};

function chanliangpingheng(){
    $.ajax({
        url:"http://localhost:8080/phone/chanliang/chanliangpingheng",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){

            var data=res.data.datas;
            var gongxu=[],dy=[];
            var item;
            $.each(data,function (i, result) {
                item="<li><div div class='chanliang'><div class='add'>"+result['gongxu']+"</div>"+
                     "<div class='add'>"+result['dangri']+"</div>"+
                     "<div class='add'>"+result['dangyue']+"</div></div></li>";
                $("#clph").append(item);
                gongxu.push(result['gongxu']);
                dy.push(result['dangyue'])
            });

            var getOption = function(chartType) {
                var chartOption = {
                    legend: {
                        data: ['各工序产量']
                    },
                    grid: {
                        x: 50,
                        x2: 10,
                        y: 30,
                        y2: 25
                    },
                    tooltip: {
                        trigger: 'axis',

                    },
                    toolbox: {
                        show: false,
                        feature: {
                            mark: {
                                show: true
                            },
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            magicType: {
                                show: true,
                                type: ['line', 'bar']
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    calculable: false,
                    xAxis: [{
                        type: 'category',
                        data: gongxu
                    }],
                    yAxis: [{
                        name: '米',
                        type: 'value',
                        splitArea: {
                            show: true
                        }
                    }],
                    series: [{
                        name: '各工序产量',
                        type: chartType,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        data: dy
                    }]

                };
                return chartOption;
            };

            var byId = function(id) {
                return document.getElementById(id);
            };
            var barChart = echarts.init(byId('lineChart'));
            barChart.setOption(getOption('bar'));
        }
    })
}

rukuchaniang();
chanliangpingheng();


mui.init({
    // 设置系统状态栏 end
    statusBarBackground: '#02bda8'
});
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
    mui("#item1 .dx_title").on("tap", "div", function() {
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).text()=="分品种产量"){
            pinzhongchanliang();
            $('#fpz_cl').removeClass("yc");
            $('#flb_cl').addClass("yc");
            $('#fpz_cl').addClass("xs");
        }else if($(this).text()=="分轮班产量"){
            lunbanchanliang();
            $('#flb_cl').removeClass("yc");
            $('#fpz_cl').addClass("yc");
            $('#flb_cl').addClass("xs");
        }
    })
})



function pinzhongchanliang(){
    $.ajax({
        url:"http://localhost:8080/phone/chanliang/pinzhongchanliang",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#fpz_cl").html("");
            var columns=res.data.columns;

            $("#drcl").html(columns[0].drchangdu);
            $("#xl").html(columns[0].xiaolv+"%");
            $("#dycl").html(columns[0].changdu);
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['pibuguige']+"/"+result['name']+"</div>"+
                    "<div class='mui-col-xs-4 mui-text-center hzcl'>当日生产累计(米)<span>"+result['drchangdu']+"</span></div>"+
                    "<div class='mui-col-xs-4 mui-text-center hzcl'>当月生产累计(米)<span>"+result['dychangdu']+"</span></div>"+
                    "<div class='mui-col-xs-4 mui-text-center hzcl'>效率<span>"+result['xiaolv']+"%</span></div></div>"

                $("#fpz_cl").append(item);
            });
        }
    })
};


function lunbanchanliang(){
    $.ajax({
        url:"http://localhost:8080/phone/chanliang/lunbanchanliang",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#flb_cl").html("");
            var columns=res.data.columns;

            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<div class='mui-row'><div class='mui-col-xs-12 mui-text-center cl_bc'>"+result['name']+"</div>"+
                    "<div class='mui-col-xs-4 mui-text-center hzcl'>当日生产累计(米)<span>"+result['drchangdu']+"</span></div>"+
                    "<div class='mui-col-xs-4 mui-text-center hzcl'>当月生产累计(米)<span>"+result['dychangdu']+"</span></div>"+
                    "<div class='mui-col-xs-4 mui-text-center hzcl'>效率<span>"+result['xiaolv']+"%</span></div></div>"

                $("#flb_cl").append(item);
            });
        }
    })
};



pinzhongchanliang();