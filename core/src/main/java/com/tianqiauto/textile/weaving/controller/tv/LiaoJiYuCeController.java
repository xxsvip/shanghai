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
@RequestMapping("tv/liaoji")
public class LiaoJiYuCeController {



    @Autowired
    BaseService baseService;

    @GetMapping("liaojiyuce")
    public String liaojiyuce(){
        return "tv/liao_ji_yuce";
    }

    @GetMapping(value = "liao_ji")
    @ApiOperation(value = "了机预测")
    @ResponseBody
    public Result liao_ji(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_liaojiyuce");
        return Result.ok("查询成功",pro);
    }

}
