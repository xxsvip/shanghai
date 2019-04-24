
    $.ajax({
        url:"http://localhost:8080/tv/buji_jihua",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            var ban=res.data.datas;
            //$("#banci").html(ban[0].banci);
           // $("#lunban").html(ban[0].lunban);
            var data=res.data.columns;
            var item;
            $.each(data,function (i, result) {
                item="<tr><td>"+result['xuhao']+"</td><td>"+result['riqi']+"</td><td>"+result['banci']+"</td><td>"+result['heyuehao']+"</td><td>"+result['jitaihao']+"</td><td>"+result['zhouhao']+"</td><td>"+result['leixing']+"</td><td>"+result['status']+"</td>";
                $('#body').append(item);
            })
        }
    });




