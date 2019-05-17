package com.tianqiauto.textile.weaving.controller.phone;

import com.tianqiauto.textile.weaving.util.procedure.model.ProcedureContext;
import com.tianqiauto.textile.weaving.util.procedure.model.ProcedureParam;
import com.tianqiauto.textile.weaving.util.procedure.service.BaseService;
import com.tianqiauto.textile.weaving.util.result.Result;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("phone/shebei")
public class AppSheBeiController {


    @Autowired
    BaseService baseService;

    @GetMapping("she_bei")
    public String she_bei() {
        return "phone/p4_sb";
    }



    @GetMapping(value = "dixiao_jitai")
    @ApiOperation(value = "低效数据")
    @ResponseBody
    public Result dixiao_jitai(String str) {
        String[] strs = str.split(",");
        String zdxl = strs[0];
        String zgxl = strs[1];
        List<ProcedureParam> pm = new ArrayList<ProcedureParam>();
        ProcedureParam pp1 = new ProcedureParam(1,zdxl, Types.VARCHAR, "IN");
        ProcedureParam pp2 = new ProcedureParam(2,zgxl,Types.VARCHAR, "IN");
        pm.add(pp1);
        pm.add(pp2);
        ProcedureContext pro = baseService.callProcedure("app_shebei_dixiao", pm);
        return Result.ok("查询成功",pro);
    }


    @GetMapping(value = "buji_shishi")
    @ApiOperation(value = "布机实时数据")
    @ResponseBody
    public Result buji_shishi(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_shebei_zhibu_shishi");
        return Result.ok("查询成功",pro);
    }



    @GetMapping(value = "buji_kaitai")
    @ApiOperation(value = "布机开台数据")
    @ResponseBody
    public Result buji_kaitai() {
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_shebei_buji_kaitaitongji");
        return Result.ok("查询成功", pro);
    }
}