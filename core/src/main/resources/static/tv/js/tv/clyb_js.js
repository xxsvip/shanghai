

function chanliangyuebao() {
    $.ajax({
        url:"http://localhost:8080/tv/chanliang/clyb",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){

            var data=res.data.datas;
            var cl=[],rq=[];
            $.each(data,function (i, result) {
                cl.push(result['changdu']);
                rq.push(result['riqi'])
            });
            var myChart = echarts.init(document.getElementById('grsj_cl'));

// 指定图表的配置项和数据
            var option = {

                tooltip: {},

                xAxis: {

                    data: rq
                },
                yAxis: {
                    name:'米'
                },
                series: [{
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    type: 'bar',
                    data: cl
                }]
            };

// 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.onresize = function(){
                myChart.resize()
            };
        }
    });
}

chanliangyuebao();