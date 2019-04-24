function wenshidu(){
    $.ajax({
        url:"http://localhost:8080/phone/nenghao/wenshidu",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $('#wsd').html("");
            var data=res.data;
            var item;
            $.each(data,function (i, result) {
                item="<li><div class='chanliang'><div class='add'>"+result['name']+"</div><div class='wd'><h5>当前温度</h5><p class='chaoxian'>"+result['wendu']+"</p></div>"+
                     "<div class='sd'><h5>当前湿度</h5><p class='chaoxian'>"+result['shidu']+"</p></div></div></li>";
                $('#wsd').append(item)
            })
        }
    });
}

wenshidu();

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

var getOption = function(chartType) {
    var chartOption = {
        legend: {
            data: ['能耗']
        },
        grid: {
            x: 35,
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
            data: ['2019/01/02', '2019/01/03', '2019/01/03', '2019/01/04', '2019/01/05']
        }],
        yAxis: [{
            name: 'kW·h',
            type: 'value',
            splitArea: {
                show: true
            }
        }],
        series: [{
            name: '能耗',
            type: chartType,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [2.6, 5.9, 3.0, 5.0, 4.0]
        }]
    };
    return chartOption;
};
var byId = function(id) {
    return document.getElementById(id);
};
var barChart = echarts.init(byId('barChart'));
barChart.setOption(getOption('bar'));