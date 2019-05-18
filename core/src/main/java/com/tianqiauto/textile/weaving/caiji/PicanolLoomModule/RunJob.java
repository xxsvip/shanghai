package com.tianqiauto.textile.weaving.caiji.PicanolLoomModule;

import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.analysis.*;
import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.bean.ParamVo;
import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.bean.PicanolHost;
import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.dao.ParamDao;
import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.utils.Cache;
import com.tianqiauto.textile.weaving.model.sys.Current_BuJi;
import com.tianqiauto.textile.weaving.util.procedure.core.ProcedureParamUtlis;
import com.tianqiauto.textile.weaving.util.procedure.service.BaseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @Author bjw
 * @Date 2019/5/17 22:24
 */
@Slf4j
@Component("picanolJob")
@EnableScheduling
public class RunJob {



    /**
     * @Author bjw
     * @Date 2019/5/17 22:31
     *
     * 用来多线程请求各种报文到织机，并处理数据保存到缓存中。
     **/
    @Scheduled(fixedRate=100000)
    private void requestPCN() {
        List<List<PicanolHost>> hostLists = Cache.picanolHost;
        for(List<PicanolHost> list : hostLists){
            pcn030Thread.init(list);
            pcn031Thread.init(list);
            pcn110Thread.init(list);
            pcn130Thread.init(list);
        }
    }

    /**
     * @Author bjw
     * @Date 2019/5/17 22:31
     *
     * 把缓存数据写入数据库中...
     * 缓存数据包含 picanol_param、sys_current_buji
    **/
    @Scheduled(fixedRate = 100000)
    private void writerDataBase(){
        long start = System.currentTimeMillis();
        paramDao.batchUpdateParam(ParamVo.getCollection());
        //---------------------------------以下写入布机事实数据表
        List<Current_BuJi> cbjs = new ArrayList<>();
        List<List<PicanolHost>> hostss = Cache.picanolHost;
        for(List<PicanolHost> hosts: hostss){
            for(PicanolHost host:hosts){
                Current_BuJi bj = host.getCurrentBuJi();
                bj.setLastModifyTime(new Date());
                cbjs.add(bj);
            }
        }
        paramDao.saveAll_Current_BuJi(cbjs);//插入current_buji表中
        long end = System.currentTimeMillis();
        log.info("数据存入数据库共耗时："+(end-start)+"毫秒！");
    }

    /**
     * @Author bjw
     * @Date 2019/5/17 22:31
     *
     * 每天7点需要把布机数据归档到归档表中。
     **/
    @Scheduled(cron = "0 11 07 ? * *")
    private void shiftBuJi(){
        ProcedureParamUtlis ppu=new ProcedureParamUtlis();
        baseService.callProcedure("picanol_shift_bj_job",ppu.getList());
    }

    /**
     * @Author bjw
     * @Date 2019/5/17 22:31
     *
     * 同步数据到参数表中
     **/
    @Scheduled(fixedRate = 100000)
    private void run(){
        ProcedureParamUtlis ppu=new ProcedureParamUtlis();
        baseService.callProcedure("sys_current_job",ppu.getList());
    }






    @Autowired
    private PCN030Thread pcn030Thread;
    @Autowired
    private PCN031Thread pcn031Thread;
    @Autowired
    private PCN110Thread pcn110Thread;
    @Autowired
    private PCN130Thread pcn130Thread;
    @Autowired
    private ParamDao paramDao;
    @Autowired
    private BaseService baseService;
}
