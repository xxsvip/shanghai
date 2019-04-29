$(document).ready(function(){
	//showEcharts();
    chanliang_xiaolv();
});

function chanliang_xiaolv() {
    $.ajax({
        url:"http://localhost:8080/tv/clxl/cl_xl",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $('#day_tbody').html("");
            $('#lj_tboday').html("");
            var data=res.data.datas;
            var columns=res.data.columns;
            var dr;
            var zu_arry=[];//轮班
            var day_zl_arry = [];//当日产量
            var day_xl_arry = [];//当日效率
            var lj_zl_arry = [];//当月产量
            var lj_xl_arry= [];//当月效率
            //当日产量效率详情
            $.each(data,function (i, result) {
                day_xl_arry.push(result['xiaolv']);
                day_zl_arry.push(result['drcl']);
                dr="<tr><td>"+result['name']+"</td><td>"+result['drcl']+"</td><td>"+result['xiaolv']+"%</td></tr>";
                $('#day_tbody').append(dr);
            });
            //汇总当日产量和平均效率
            var sum=0;
            for(var i=0;i<day_zl_arry.length;i++){
                sum+=day_zl_arry[i]
            }
            var sumxl=0;
            for(var i=0;i<day_xl_arry.length;i++){
                sumxl+=day_xl_arry[i]
            }
            var avg=(sumxl/day_xl_arry.length).toFixed(2);
            if(avg==null || avg=="NaN" || avg=="undefined"){
                avg=0;
            }
            $('#day_tbody').append("<tr><td>汇总</td><td>"+sum+"</td><td>"+avg+"%</td></tr>");

            //当月产量效率详情
            $.each(columns,function (i, result) {
                zu_arry.push(result['name']);
                lj_zl_arry.push(result['dycl']);
                lj_xl_arry.push(result['xiaolv']);
                dr="<tr><td>"+result['name']+"</td><td>"+result['dycl']+"</td><td>"+result['xiaolv']+"%</td></tr>";
                $('#lj_tboday').append(dr);
            });
            var dysum=0;
            for(var i=0;i<lj_zl_arry.length;i++){
                dysum+=lj_zl_arry[i];
            }
            var dysumxl=0;
            for(var i=0;i<lj_xl_arry.length;i++){
                dysumxl+=lj_xl_arry[i];
            }
            var dyavg=(dysumxl/lj_xl_arry.length).toFixed(2);
            $('#lj_tboday').append("<tr><td>汇总</td><td>"+dysum+"</td><td>"+dyavg+"%</td></tr>");




            var dr_cl_xl_LT = echarts.init(document.getElementById('dr_xl'));

            option = {
                tooltip: {
                    text: '当日产量效率对比',
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data:['产量','效率']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: zu_arry,
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '产量',
                        axisLabel: {
                            formatter: '{value}米'
                        }
                    },
                    {
                        type: 'value',
                        name: '效率',
                        interval: 20,
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    }
                ],
                series: [
                    {
                        name:'产量',
                        type:'bar',
                        barWidth:80,//柱图宽度
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
//			            data:[20.0,30,40]
                        data:day_zl_arry
                    },

                    {
                        name:'效率',
                        type:'line',
                        yAxisIndex: 1,
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
//			            data:[60,80,90]
                        data:day_xl_arry
                    }
                ]
            };

            dr_cl_xl_LT.setOption(option);

            var dy_cl_xl_LT = echarts.init(document.getElementById('dy_cl'));
            option1 = {
                tooltip: {
                    text: '本月产量效率对比',
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data:['产量','效率']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: zu_arry,
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '产量',
                        axisLabel: {
                            formatter: '{value}米'
                        }
                    },
                    {
                        type: 'value',
                        name: '效率',
                        interval: 20,
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    }
                ],
                series: [
                    {
                        name:'产量',
                        type:'bar',
                        barWidth:80,//柱图宽度
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
//		            data:[83,95,74]
                        data:lj_zl_arry
                    },{
                        name:'效率',
                        type:'line',
                        yAxisIndex: 1,
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
//		            data:[88,66,79]
                        data:lj_xl_arry
                    }
                ]
            };

            dy_cl_xl_LT.setOption(option1);

        }
    });
}


function showEcharts(){
	//数据处理
	var zu_arry=["1","2","3"];
	var day_zl_arry = ["10000","8000","90000"];
	var day_xl_arry = ["90","85","88"];
	var lj_zl_arry = ["100000","80000","900000"];
	var lj_xl_arry= ["90","85","88"];
	
	 var dr_cl_xl_LT = echarts.init(document.getElementById('dr_xl'));
	 
	 option = {
			    tooltip: {
			    	 text: '当日产量效率对比',
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            crossStyle: {
			                color: '#999'
			            }
			        }
			    },
			    legend: {
			        data:['产量','效率']
			    },
			    xAxis: [
			        {
			            type: 'category',
			            data: zu_arry,
			            axisPointer: {
			                type: 'shadow'
			            }
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '产量',
			            axisLabel: {
			                formatter: '{value}米'
			            }
			        },
			        {
			            type: 'value',
			            name: '效率',
			            interval: 20,
			            axisLabel: {
			                formatter: '{value} %'
			            }
			        }
			    ],
			    series: [
			        {
			            name:'产量',
			            type:'bar', 
			            barWidth:80,//柱图宽度
			            label: {
			                normal: {
			                    show: true,
			                    position: 'top'
			                }
			            },
//			            data:[20.0,30,40]
			            data:day_zl_arry
			        },
			       
			         {
			            name:'效率',
			            type:'line',
			            yAxisIndex: 1,
			            label: {
			                normal: {
			                    show: true,
			                    position: 'top'
			                }
			            },
//			            data:[60,80,90]
			            data:day_xl_arry
			        }
			    ]
			};

		dr_cl_xl_LT.setOption(option);

	var dy_cl_xl_LT = echarts.init(document.getElementById('dy_cl'));
	option1 = {
		    tooltip: {
		    	 text: '本月产量效率对比',
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            crossStyle: {
		                color: '#999'
		            }
		        }
		    },		   
		    legend: {
		        data:['产量','效率']
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: zu_arry,
		            axisPointer: {
		                type: 'shadow'
		            }
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            name: '产量',
		            axisLabel: {
		                formatter: '{value}米'
		            }
		        },
		        {
		            type: 'value',
		            name: '效率',
		            interval: 20,
		            axisLabel: {
		                formatter: '{value} %'
		            }
		        }
		    ],
		    series: [
		        {
		            name:'产量',
		            type:'bar', 
		            barWidth:80,//柱图宽度
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top'
		                }
		            },
//		            data:[83,95,74]
		            data:lj_zl_arry
		        },{
		            name:'效率',
		            type:'line',
		            yAxisIndex: 1,
		              label: {
		                normal: {
		                    show: true,
		                    position: 'top'
		                }
		            },
//		            data:[88,66,79]
		            data:lj_xl_arry
		        }
		    ]
		};

	dy_cl_xl_LT.setOption(option1);
}