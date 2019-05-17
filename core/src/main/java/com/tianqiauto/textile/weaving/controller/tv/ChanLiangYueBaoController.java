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
@RequestMapping("tv/chanliang")
public class ChanLiangYueBaoController {



    @Autowired
    BaseService baseService;

    @GetMapping("chanliang")
    public String jiangsha_jihua(){
        return "tv/clyb_js";
    }

    @GetMapping(value = "clyb")
    @ApiOperation(value = "产量月报")
    @ResponseBody
    public Result clyb(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_chanliang_yuebao");
        return Result.ok("查询成功",pro);
    }

}
