package com.tianqiauto.textile.weaving.controller.tv;

import com.tianqiauto.textile.weaving.model.base.Gongxu;
import com.tianqiauto.textile.weaving.model.sys.JiHua_JiangSha;
import com.tianqiauto.textile.weaving.repository.JiHuaJiangShaRepository;
import com.tianqiauto.textile.weaving.util.procedure.model.ProcedureContext;
import com.tianqiauto.textile.weaving.util.procedure.service.BaseService;
import com.tianqiauto.textile.weaving.util.result.Result;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("tv")
public class JiHuaController {


    @Autowired
    BaseService baseService;

    @GetMapping("jiangshajihua")
    public String jiangsha_jihua(){
        return "tv/jiang_sha_jihua";
    }

    @GetMapping("zhengjingjihua")
    public String zheng_jing_jihua(){
        return "tv/zheng_jing_jihua";
    }

    @GetMapping("chuanzongjihua")
    public String chuan_zong_jihua(){
        return "tv/chuan_zong_jihua";
    }

    @GetMapping("zhibujihua")
    public String zhi_bu_jihua(){
        return "tv/zhi_bu_jihua";
    }


    @GetMapping(value = "findJiangSha_JiHua")
    @ApiOperation(value = "浆纱计划详情")
    @ResponseBody
    public Result findJiangSha_JiHua(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_jiangsha_jihua");
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "chuanzong_jihua")
    @ApiOperation(value = "穿综计划详情")
    @ResponseBody
    public Result chuanzong_jihua(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_chuanzong_jihua");
        return Result.ok(pro);
    }

    @GetMapping(value = "zhengjing_jihua")
    @ApiOperation(value = "整经计划详情")
    @ResponseBody
    public Result zhengjing_jihua(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_zhengjing_jihua");
        return Result.ok(pro);
    }

    @GetMapping(value = "buji_jihua")
    @ApiOperation(value = "布机计划详情")
    @ResponseBody
    public Result buji_jihua(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("tv_buji_jihua");
        return Result.ok(pro);
    }
}
