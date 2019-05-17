function dixiaojitai() {
    $.ajax({
        url:"http://localhost:8080/tv/dixiao/dixiao_jitai",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            $('#body').html('');
            var ban=res.data.datas;
           // $("#banci").html(ban[0].banci);
            //$("#lunban").html(ban[0].lunban);
            var data=res.data.columns;
            var item;
            $.each(data,function (i, result) {
                item="<tr><td>"+result['jitaihao']+"</td><td>"+result['pibuguige']+"</td><td>"+result['xiaolv']+"%</td></tr>";
                $('#body').append(item);
            })
        }
    });
}

dixiaojitai();