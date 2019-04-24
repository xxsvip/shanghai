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
@RequestMapping("tv/scxq")
public class ShengChanXiangQingController {



    @Autowired
    BaseService baseService;

    @GetMapping("scxq")
    public String jiangsha_jihua(){
        return "tv/scxq";
    }

    @GetMapping(value = "shengchan_xiangqing")
    @ApiOperation(value = "生产详情 ")
    @ResponseBody
    public Result shengchan_xiangqing(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_shengchan_xiangqing");
        return Result.ok("查询成功",pro);
    }

}
