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
@RequestMapping("tv/grld")
public class GongRenLaoDongController {



    @Autowired
    BaseService baseService;

    @GetMapping("grld")
    public String grld(){
        return "tv/grld_js";
    }

    @GetMapping(value = "gr_ld")
    @ApiOperation(value = "劳动竞赛")
    @ResponseBody
    public Result gr_ld(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_laodongjingsai");
        return Result.ok("查询成功",pro);
    }

}
