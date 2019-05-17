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
@RequestMapping("phone/nenghao")
public class AppNengHaoController {



    @Autowired
    WenShiDuRepository wenShiDuRepository;

    @GetMapping("neng_hao")
    public String ding_dan(){
        return "phone/p5_nh";
    }

    @GetMapping(value = "wenshidu")
    @ApiOperation(value = "温湿度")
    @ResponseBody
    public Result loginApp(String username,String password){
        List<WenShiDu> all = wenShiDuRepository.findAll();
        return Result.ok("查询成功",all);
    }

}
