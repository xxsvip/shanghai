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
@RequestMapping("phone/liaoji")
public class AppLiaoJiController {

    @Autowired
    BaseService baseService;


    @GetMapping("liaoji")
    public String liaoji(){
        return "phone/p8_liao_ji";
    }

    @GetMapping(value = "liao_ji")
    @ApiOperation(value = "了机预测")
    @ResponseBody
    public Result liao_ji(String time){
        List<ProcedureParam> pm = new ArrayList<ProcedureParam>();
        ProcedureParam pp1 = new ProcedureParam(1,time, Types.VARCHAR, "IN");
        pm.add(pp1);
        ProcedureContext pro = baseService.callProcedure("app_liaoji_yuce", pm);
        return Result.ok("查询成功",pro);
    }



}
