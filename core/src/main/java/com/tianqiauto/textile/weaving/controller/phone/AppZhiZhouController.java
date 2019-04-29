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
    public Result zhi_zhou_zhuangtai(String zhuangtai){

        List<ProcedureParam> pm = new ArrayList<ProcedureParam>();
        ProcedureParam pp1 = new ProcedureParam(1,zhuangtai, Types.VARCHAR, "IN");
        pm.add(pp1);
        ProcedureContext pro = baseService.callProcedure("app_zhizhou_zhuangtai", pm);
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "jing_zhou_zhuangtai")
    @ApiOperation(value = "经轴状态")
    @ResponseBody
    public Result jing_zhou_zhuangtai(String zhuangtai){

        List<ProcedureParam> pm = new ArrayList<ProcedureParam>();
        ProcedureParam pp1 = new ProcedureParam(1,zhuangtai, Types.VARCHAR, "IN");
        pm.add(pp1);
        ProcedureContext pro = baseService.callProcedure("app_jingzhou_zhuangtai", pm);
        return Result.ok("查询成功",pro);
    }

}
