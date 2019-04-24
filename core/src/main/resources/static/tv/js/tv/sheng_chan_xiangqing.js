function shengchanxiangqing() {
    $.ajax({
        url:"http://localhost:8080/tv/scxq/shengchan_xiangqing",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $('#body').html('');
            var data=res.data.datas;
            var item;
            $.each(data,function (i, result) {
                item="<tr><td>"+result['pibuguige']+"</td>"+
                     "<td>"+result['name']+"</td><td>"+result['kaitai']+"</td>"+
                     "<td>"+result['drcl']+"</td>"+
                     "<td>"+result['dycl']+"</td><td>"+result['xiaolv']+"%</td></tr>";
                $('#body').append(item);
            })
        }
    });

}

shengchanxiangqing();