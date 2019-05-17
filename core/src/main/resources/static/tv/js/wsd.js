
$(function() {
    $.ajax({
        url:"http://localhost:8080/tv/wenshidu/wen_shi_du",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            var data=res.data;
            var item;
            var item2;
            var j=0;
            var arr=[];
            var wenduarr=[];
            var shiduarr=[];
            $.each(data,function (i, result) {
            	arr.push(i+1);
            	wenduarr.push(result['wendu']);
            	shiduarr.push(result['shidu']);

            	if(i%5==0){
            	    j++;
                    item="<div class='bottom' id='wsd"+j+"'><div><span>"+result['name']+"</span><p class='wd'>"+result['wendu']+"℃</p><p class='sd'>"+result['shidu']+"%RH</p></div></div>";
                    $('#wsd_warp').append(item);
                }else{
                    item2="<div><span>"+result['name']+"</span><p class='wd'>"+result['wendu']+"℃</p><p class='sd'>"+result['shidu']+"%RH</p></div>";
                    $('#wsd'+j+'').append(item2);
                }

            })

            var wd = echarts.init(document.getElementById('wd_echarts'));
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
                    data: ['湿度', '温度']
                },
                xAxis: [{
                    type: 'category',
                    data: arr,
                    axisPointer: {
                        type: 'shadow'
                    }
                }],
                yAxis: [{
                    type: 'value',
                    name: '湿度',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}%RH'
                    }
                },
                    {
                        type: 'value',
                        name: '温度',
                        min: 0,
                        max: 100,
                        interval: 10,
                        axisLabel: {
                            formatter: '{value} °C'
                        }
                    }
                ],
                series: [{
                    name: '湿度',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#73bee6'
                        }
                    },
                    data: shiduarr
                },
                    {
                        name: '温度',
                        type: 'line',
                        yAxisIndex: 1,

                        data: wenduarr
                    }
                ]
            };
            wd.setOption(option);

            for(var i = 0; i < $('#warp .top div').length; i++) {
                $('#warp .top div').eq(i).addClass('fd' + i);
            }
            for(var j = 0; j < $('#warp .bottom div').length; j++) {
                $('#warp .bottom div').eq(j).addClass('fd' + (5 + j));
            }

            function fun(x, y) {

                var index = x;

                setTimeout(function() {
                    //给当前元素添加动画
                    $("#warp .fd" + index).removeClass('animated pulse');
                    $("#warp  .fd" + index).addClass('animated pulse');

                    if(index < y) {

                        index += 1;

                        fun(index, y);
                    }
                }, 2000);
            }

            fun(0, 9);
        }
    });



})