package com.tianqiauto.textile.weaving.controller.phone;

import com.tianqiauto.textile.weaving.util.procedure.model.ProcedureContext;
import com.tianqiauto.textile.weaving.util.procedure.service.BaseService;
import com.tianqiauto.textile.weaving.util.result.Result;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("phone/baojing")
public class AppBaoJingController {

    @Autowired
    BaseService baseService;


    @GetMapping("bao_jing")
    public String bao_jing(){
        return "phone/p6_jg";
    }

    @GetMapping(value = "wenshidu")
    @ApiOperation(value = "温湿度报警")
    @ResponseBody
    public Result wenshidubaojing(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_baojing_wenshidu");
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "dixiao")
    @ApiOperation(value = "低效机台报警")
    @ResponseBody
    public Result dixiao(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_baojing_dixiao");
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "lixian")
    @ApiOperation(value = "离线机台报警")
    @ResponseBody
    public Result lixian(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_baojing_lixian");
        return Result.ok("查询成功",pro);
    }

}
