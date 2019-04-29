function chuanzhong_jihua() {
    $.ajax({
        url:"http://localhost:8080/tv/chuanzong_jihua",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $('#body').html('');
            var ban=res.data.datas;

            var data=res.data.columns;
            var item;
            $.each(data,function (i, result) {
                item="<tr><td>"+result['xuhao']+"</td><td>"+result['riqi']+"</td><td>"+result['banci']+"</td><td>"+result['pibuguige']+"</td><td>"+result['heyuehao']+"</td><td>"+result['jitaihao']+"</td><td>"+result['zhoushu']+"</td><td>已生产"+result['status']+"个轴</td><td>";
                $('#body').append(item);
            })
        }
    });

}

chuanzhong_jihua();