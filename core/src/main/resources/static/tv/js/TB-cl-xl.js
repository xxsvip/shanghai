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
            var zu_arry=[];
            var day_zl_arry = [];
            var day_xl_arry = [];
            var lj_zl_arry = [];
            var lj_xl_arry= [];
            $.each(data,function (i, result) {
                day_xl_arry.push(result['xiaolv']);
                day_zl_arry.push(result['drcl']);
                dr="<tr><td>"+result['name']+"</td><td>"+result['drcl']+"</td><td>"+result['xiaolv']+"%</td></tr>";
                $('#day_tbody').append(dr);
            });
            $.each(columns,function (i, result) {
                zu_arry.push(result['name']);
                lj_zl_arry.push(result['dycl']);
                lj_xl_arry.push(result['xiaolv']);
                dr="<tr><td>"+result['name']+"</td><td>"+result['dycl']+"</td><td>"+result['xiaolv']+"%</td></tr>";
                $('#lj_tboday').append(dr);
            })

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