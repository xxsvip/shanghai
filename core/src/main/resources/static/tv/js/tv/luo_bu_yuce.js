function liaojiyuce() {
    $.ajax({
        url:"http://localhost:8080/tv/luobu/luo_bu",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#body").html("");
            var data=res.data.datas;

            var item;
            $.each(data,function (i, result) {
                item="<tr><td>"+result['rownum']+"</td><td>"+result['jitaihao']+"</td><td>"+result['zhuangtai']+"</td>"+
                    "<td>"+result['heyuehao']+"</td><td>"+result['shedingbuchang']+"</td><td>"+result['buchang']+"</td>"+
                    "<td>"+result['zhisuo']+"</td><td>"+result['weimi']+"</td><td>"+result['chesu']+"</td><td>"+result['zhouhao']+"</td>"+
                    "<td>"+result['jingchang']+"</td><td>"+result['bugunzongchang']+"</td><td>"+result['bugunshu']+"</td>"+
                    "<td>"+result['yuceluobu']+"</td><td>"+result['luobushijian']+"分钟</td></tr>";
                $("#body").append(item);
            })
        }
    });
}

liaojiyuce();