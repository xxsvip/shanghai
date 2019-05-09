

function chanliangyuebao() {
    $.ajax({
        url:"http://localhost:8080/tv/chanliang/clyb",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            var data=res.data.datas;
            var cl=[],rq=[],xl=[];
            var sum=0;
            var sumxl=0;
            $.each(data,function (i, result) {
                cl.push(result['changdu']);
                rq.push(result['riqi']);
                xl.push(result['xiaolv']);
            });
            for(var i=0;i<cl.length;i++){
                sum+=cl[i];
            }
            for(var i=0;i<xl.length;i++){
                sumxl+=xl[i];
            }
            var avg=(sumxl/xl.length).toFixed(2);
            if(avg==null || avg=="NaN" || avg=="undefined"){
                avg=0;
            }
            $("#cl").text(sum);
            $("#xl").text(avg+"%");
            var wd = echarts.init(document.getElementById('grsj_cl'));
            var option = {
                //  	  backgroundColor: '#b8ddf0',
                toolbox: {
                    feature: {
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
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
                legend: {
                    data: ['产量', '效率']
                },
                xAxis: [{
                    type: 'category',
                    data: rq,
                    axisPointer: {
                        type: 'shadow'
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: '产量',

                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                    {
                        type: 'value',
                        name: '效率',
                        min: 0,
                        max: 100,
                        interval: 10,
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    }
                ],
                series: [{
                    name: '产量',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#73bee6'
                        }
                    },
                    data: cl
                },
                    {
                        name: '效率',
                        type: 'line',
                        yAxisIndex: 1,

                        data: xl
                    }
                ]
            };
            wd.setOption(option);

// 使用刚指定的配置项和数据显示图表。
            option.setOption(option);
            window.onresize = function(){
                option.resize()
            };
        }
    });
}

chanliangyuebao();