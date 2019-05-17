$(document).ready(function(){
//	showMessages();
//show_Echarts();
    show();
});
//加载左边劳动竞赛人员排名
/*function showMessages(){
		$.ajax({
		  url : "/tv/js/ldjs",
		  type:"POST",
		  dataType:"JSON",
		  success:function(data){		  
			  $('.pl_lists').empty();				
				for (var i = 0; i < data.datas.length; i++) {
					$('.pl_lists').append("<li>"+(i+1)+"."+data.datas[i].xm+"</li>");
				}
				for(var i=0;i<$('.pl_lists li').length;i++){
		  			
		  			if(i<10){
		  				$('.pl_lists li').eq(i).width((50-4*i)+'%');
		  			}else{
		  				$('.pl_lists li').eq(i).width($('.pl_lists li').eq(9).width());
		  			}
		  			
		  		}
			  //加载echars图
//			  show_Echarts(data.datas);
		  },
	  });*/

//}

function show() {
    $.ajax({
        url:"http://localhost:8080/tv/grld/gr_ld",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#gr").html('');
            var data=res.data.datas;
            var item;
            var s=100;
            var j=0;
            var xm_array=[],zl_array=[],sj_array=[];
            $.each(data,function (i, result) {
            	j++;
                item="<li style='width: "+s+"%;'>"+j+"."+result['xingming']+"</li>"
				s-=6;
				$("#gr").append(item);

                if(i<5){
                    xm_array.push(result['xingming']);
                    zl_array.push(result['changdu']);
                    sj_array.push(result['kaitai'])
                }

            });

            var jtsj = echarts.init(document.getElementById('pjjt_sj'));
            jtsj.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data:['开台数']
                },
                xAxis: [
                    {
                        type: 'category',
                        data:xm_array,
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [

                    {
                        type: 'value',
                        name: '开台数',
                        axisLabel: {
                            formatter: '{value}台'
                        }
                    }
                ],
                series: [
                    {
                        name:'开台数',
                        type:'line',
                        label : {
                            normal : {
                                show: true,
                                position: 'top'
                            }
                        },
                        data:sj_array,
                        itemStyle: {
                            normal: {
                                color: '#f18b42'
                            }
                        }
                    }
                ]
            });


            var grcl = echarts.init(document.getElementById('grsj_cl'));
            grcl.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data:['个人产量']
                },
                xAxis: [
                    {
                        type: 'category',
                        data:xm_array,
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [

                    {
                        type: 'value',
                        name: '个人产量',
                        axisLabel: {
                            formatter: '{value} m'
                        }
                    }
                ],
                series: [
                    {
                        name:'个人产量',
                        type:'bar',
                        label : {
                            normal : {
                                show: true,
                                position: 'top'
                            }
                        },
                        data:zl_array,
                        itemStyle: {
                            normal: {
                                /*  barBorderRadius: 20,*/
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#ebff7d'
                                }, {
                                    offset: 1,
                                    color: '#f18b42'
                                }]),

                                areaStyle: {type: 'default'}
                            }
                        }
                    }
                ]
            });
        }
    });

}

	


	
