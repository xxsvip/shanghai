package com.tianqiauto.textile.weaving.controller.tv;

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
@RequestMapping("tv/dixiao")
public class DiXiaoJiTaiController {



    @Autowired
    BaseService baseService;

    @GetMapping("dixiaojitai")
    public String jiangsha_jihua(){
        return "tv/dxjt-bj";
    }

    @GetMapping(value = "dixiao_jitai")
    @ApiOperation(value = "低效机台 ")
    @ResponseBody
    public Result dixiao_jitai(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_dixiaojitai_baojing");
        return Result.ok("查询成功",pro);
    }

}
