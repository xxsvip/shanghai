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
@RequestMapping("tv/luobu")
public class LuoBuYuCeController {



    @Autowired
    BaseService baseService;

    @GetMapping("luobuyuce")
    public String luobuyuce(){
        return "tv/luo_bu_yuce";
    }

    @GetMapping(value = "luo_bu")
    @ApiOperation(value = "了机预测")
    @ResponseBody
    public Result luo_bu(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_luobuyuce");
        return Result.ok("查询成功",pro);
    }

}
