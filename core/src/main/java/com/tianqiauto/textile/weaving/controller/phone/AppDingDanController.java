package com.tianqiauto.textile.weaving.controller.phone;

import com.tianqiauto.textile.weaving.util.procedure.model.ProcedureContext;
import com.tianqiauto.textile.weaving.util.procedure.model.ProcedureParam;
import com.tianqiauto.textile.weaving.util.procedure.service.BaseService;
import com.tianqiauto.textile.weaving.util.result.Result;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("phone/dingdan")
public class AppDingDanController {



    @Autowired
    BaseService baseService;

    @GetMapping("ding_dan")
    public String ding_dan(){
        return "phone/p2_dd";
    }

    @GetMapping(value = "yiwanchengdingdan")
    @ApiOperation(value = "已完成订单进度")
    @ResponseBody
    public Result dingdan(String time){
        List<ProcedureParam> pm = new ArrayList<ProcedureParam>();
        ProcedureParam pp1 = new ProcedureParam(1,time, Types.VARCHAR, "IN");
        pm.add(pp1);
        ProcedureContext pro = baseService.callProcedure("app_dingdan_yiwancheng", pm);
        return Result.ok("查询成功",pro);
    }


    @GetMapping(value = "weiwanchengdingdan")
    @ApiOperation(value = "未完成订单进度")
    @ResponseBody
    public Result nodingdan(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_dingdan_weiwancheng");
        return Result.ok("查询成功",pro);
    }
}
