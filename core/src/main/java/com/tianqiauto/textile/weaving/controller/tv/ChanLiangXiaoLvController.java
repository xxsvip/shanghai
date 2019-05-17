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
@RequestMapping("tv/clxl")
public class ChanLiangXiaoLvController {



    @Autowired
    BaseService baseService;

    @GetMapping("clxl")
    public String clxl(){
        return "tv/TB_cl_xl";
    }

    @GetMapping(value = "cl_xl")
    @ApiOperation(value = "产量效率")
    @ResponseBody
    public Result cl_xl(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_changliang_xiaolv_duibi");
        return Result.ok("查询成功",pro);
    }

}
