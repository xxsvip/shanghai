package com.tianqiauto.textile.weaving.controller.phone;

import com.tianqiauto.textile.weaving.model.sys.WenShiDu;
import com.tianqiauto.textile.weaving.repository.WenShiDuRepository;
import com.tianqiauto.textile.weaving.util.procedure.model.ProcedureContext;
import com.tianqiauto.textile.weaving.util.procedure.service.BaseService;
import com.tianqiauto.textile.weaving.util.result.Result;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("phone/chanliang")
public class AppChanLiangController {

    @Autowired
    BaseService baseService;


    @GetMapping("chan_liang")
    public String chan_liang(){
        return "phone/p3_cl";
    }

    @GetMapping(value = "rukuchanliang")
    @ApiOperation(value = "入库产量")
    @ResponseBody
    public Result chanliang(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_chanliang_ruku");
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "chanliangpingheng")
    @ApiOperation(value = "产量平衡")
    @ResponseBody
    public Result chanliangpingheng(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_chanliangpingheng");
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "pinzhongchanliang")
    @ApiOperation(value = "品种产量")
    @ResponseBody
    public Result pinzhongchanliang(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_chanliang_pinzhong");
        return Result.ok("查询成功",pro);
    }

    @GetMapping(value = "lunbanchanliang")
    @ApiOperation(value = "轮班产量")
    @ResponseBody
    public Result lunbanchanliang(){
        ProcedureContext pro = baseService.callProcedureWithOutParams("app_chanliang_banci");
        return Result.ok("查询成功",pro);
    }

}
