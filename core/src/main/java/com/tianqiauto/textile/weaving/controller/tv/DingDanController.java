package com.tianqiauto.textile.weaving.controller.tv;

import com.tianqiauto.textile.weaving.repository.JiHuaJiangShaRepository;
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
@RequestMapping("tv/dingdan")
public class DingDanController {



    @Autowired
    BaseService baseService;

    @GetMapping("dingdanjindu")
    public String jiangsha_jihua(){
        return "tv/ddjd";
    }

    @GetMapping(value = "dingdan_jindu")
    @ApiOperation(value = "订单进度")
    @ResponseBody
    public Result dingdan_jindu(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_dingdanjindu");
        return Result.ok("查询成功",pro);
    }

}
