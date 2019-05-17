
    $.ajax({
        url:"http://localhost:8080/tv/tongzhigonggao/tongzhi_gonggao",
        type:"GET",
        dataType:'json',
        data:{},
        success: function(res){
            var data=res.data.datas;
            $("#time").html(data[0].create_date);
            $("#neirong").html(data[0].neirong);
        }
    });




