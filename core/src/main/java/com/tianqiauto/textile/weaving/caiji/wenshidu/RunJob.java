package com.tianqiauto.textile.weaving.caiji.wenshidu;

import com.tianqiauto.textile.weaving.caiji.wenshidu.dao.WenshiduDao;
import com.tianqiauto.textile.weaving.caiji.wenshidu.utils.Cache;
import com.tianqiauto.textile.weaving.util.procedure.core.ProcedureParamUtlis;
import com.tianqiauto.textile.weaving.util.procedure.service.BaseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * bjw
 * @Date 2019/3/7 10:38
 */
@Slf4j
@Component
@EnableScheduling
public class RunJob {

    /**
     * 把温湿度采集数据批量保存到数据库中
     * @Author bjw
     * @Date 2019/5/18 11:27
     **/
    @Scheduled(fixedRate=60000)
    private void update() {
        Long start = System.currentTimeMillis();
        wenshiduDao.batchUpdateParam(Cache.wenShiDus);
        Long end = System.currentTimeMillis();
        log.info("温湿度存入数据库耗时："+(end-start)+"毫秒！");

    }

    /**
     * 温湿度数据记录历史曲线
     * @Author bjw
     * @Date 2019/5/18 11:27
     **/
    @Scheduled(fixedRate = 120000)
    private void run(){
        ProcedureParamUtlis ppu=new ProcedureParamUtlis();
        baseService.callProcedure("pc_history_wenshidu_job",ppu.getList());
    }


    @Autowired
    private BaseService baseService;
    @Autowired
    private WenshiduDao wenshiduDao;
}
