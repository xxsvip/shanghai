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
@RequestMapping("phone/zhizhou")
public class AppZhiZhouController {



    @Autowired
    BaseService baseService;

    @GetMapping("zhi_zhou")
    public String zhi_zhou(){
        return "phone/p7_zhou";
    }

    @GetMapping(value = "zhi_zhou_zhuangtai")
    @ApiOperation(value = "织轴状态")
    @ResponseBody
    public Result zhi_zhou_zhuangtai(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_zhizhouzhuangtai");
        return Result.ok("查询成功",pro);
    }

}
