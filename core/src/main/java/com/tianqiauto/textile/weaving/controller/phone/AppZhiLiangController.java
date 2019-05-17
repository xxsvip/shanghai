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
@RequestMapping("phone/zhiliang")
public class AppZhiLiangController {

    @Autowired
    BaseService baseService;


    @GetMapping("zhi_liang")
    public String chan_liang(){
        return "phone/p1_zl";
    }

    @GetMapping(value = "cp_zl")
    @ApiOperation(value = "成品质量")
    @ResponseBody
    public Result chengpinzhiliang(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_chengpin_zhiliang");
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "qj_zl")
    @ApiOperation(value = "起机质量")
    @ResponseBody
    public Result qijizhiliang(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_qiji_zhiliang");
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "js_zl")
    @ApiOperation(value = "浆纱质量")
    @ResponseBody
    public Result jiangshaliang(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_jiangsha_zhiliang");
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "ys_zl")
    @ApiOperation(value = "原纱质量")
    @ResponseBody
    public Result yuanshaliang(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_yuansha_zhiliang");
        return Result.ok("查询成功",pro);
    }

}
