function liaojiyuce() {
    $.ajax({
        url:"http://localhost:8080/tv/liaoji/liao_ji",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $("#body").html("");
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<tr><td>"+result['rownum']+"</td><td>"+result['jitaihao']+"</td><td>"+result['zhuangtai']+"</td>"+
                    "<td>"+result['heyuehao']+"</td><td>"+result['zhisuo']+"</td><td>"+result['weimi']+"</td><td>"+result['chesu']+"</td>"+
                    "<td>"+result['zhouhao']+"</td><td>"+result['zjc']+"</td><td>"+result['syjc']+"</td>"+
                    "<td>"+result['yuceliaoji']+"</td>"+
                    "<td>"+result['liaojishijian']+"分钟</td></tr>";
                $("#body").append(item);
            })
        }
    });
}

liaojiyuce();