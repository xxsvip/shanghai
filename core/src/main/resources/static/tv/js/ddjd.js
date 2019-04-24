var yAxisData = [],
	jssjData = [],
	yjjssjData = [],
yjjssj = [],
	jssj = [];


$.ajax({
    url:"http://localhost:8080/tv/dingdan/dingdan_jindu",
    type:"GET",
    dataType:'json',
    data:{},
    success: function(res){
		var data=res.data.datas;
        for(var i = 0; i < data.length; i++) {
            yjjssj.push(data[i].yujijieshu);
            jssj.push(data[i].jiaohuoriqi);
            yAxisData.push(data[i].dingdanhao);
        }
        for(var i = 0; i < jssj.length; i++) {
            jssjData.push(jssj[i]);
            yjjssjData.push(yjjssj[i]);
        }
        var minDate = (jssjData[0] < yjjssjData[0]) ? jssjData[0] : yjjssjData[0];
        minDate = new Date(new Date(minDate) - 1000 * 60 * 60 * 24 * 2)
        var ddjdChart = echarts.init(document.getElementById('ddjd_echarts'));
        ddjdChart.setOption({
            textStyle: {
//		fontSize: 24 //设置字体大小
            },
            tooltip: {
                show: true,
                trigger: 'axis',
                formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                min: new Date(),
                type: 'time',
                boundaryGap: [0, 0.01],
                position: 'top',
                axisLabel: {
                    textStyle: {
                        //              fontSize:20//设置x轴显示字体大小
                    }
                }
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        //              fontSize:20//设置x轴显示字体大小
                    }
                },
                data: yAxisData
            },
            series: [{
                name: '结束时间',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        color: '#000', //设置字体颜色
                        formatter: function(a) {
                            return "[" + a.value + "]"
                        }
                    }
                },
                data: jssjData
            },
                {
                    name: '预计完成时间',
                    type: 'scatter',
                    step: 'start',
                    data: yjjssjData,
                    label: {
                        normal: {
                            show: true,
                            color: '#fff', //设置字体颜色
                            position: 'right',
                            formatter: function(a) {
                                return "[" + a.value + "]"
                            }
                        }
                    }
                }

            ]
        });
    }
});


