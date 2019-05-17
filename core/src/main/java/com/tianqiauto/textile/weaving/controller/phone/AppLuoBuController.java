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
@RequestMapping("phone/luobu")
public class AppLuoBuController {

    @Autowired
    BaseService baseService;


    @GetMapping("luobu")
    public String luobu(){
        return "phone/p9_luo_bu";
    }

    @GetMapping(value = "luo_bu")
    @ApiOperation(value = "落布预测")
    @ResponseBody
    public Result luo_bu(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_luobu_yuce");
        return Result.ok("查询成功",pro);
    }



}
