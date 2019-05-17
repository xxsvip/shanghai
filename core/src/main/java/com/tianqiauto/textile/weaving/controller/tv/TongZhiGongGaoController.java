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
@RequestMapping("tv/tongzhigonggao")
public class TongZhiGongGaoController {



    @Autowired
    BaseService baseService;

    @GetMapping("tongzhigonggao")
    public String jiangsha_jihua(){
        return "tv/tong_zhi_gong_gao";
    }

    @GetMapping(value = "tongzhi_gonggao")
    @ApiOperation(value = "通知公告")
    @ResponseBody
    public Result tongzhi_gonggao(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_tongzhigonggao");
        return Result.ok("查询成功",pro);
    }

}
