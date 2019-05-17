package com.tianqiauto.textile.weaving.controller.tv;

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
@RequestMapping("tv/wenshidu")
public class WenShiDuController {

    @Autowired
    WenShiDuRepository wenShiDuRepository;



    @GetMapping("wsd")
    public String jiangsha_jihua(){
        return "tv/wsd";
    }

    @GetMapping(value = "wen_shi_du")
    @ApiOperation(value = "温湿度")
    @ResponseBody
    public Result wen_shi_du(){
        List<WenShiDu> all = wenShiDuRepository.findAll();
        return Result.ok("查询成功",all);
    }

}
