package com.tianqiauto;

import com.tianqiauto.bean.PicanolHost;
import com.tianqiauto.dao.repository.PicanolHostRepository;
import com.tianqiauto.utils.Cache;
import com.tianqiauto.utils.socket.Server;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
@Order(value = 1)
public class ApplicationStartListener implements CommandLineRunner {

    @Autowired
    private Server server;

    @Resource
    private PicanolHostRepository picanolHostRepository;

    @Value("${Picanol.is-start-server:false}")
    private boolean isStartServer;

    @Value("${Picanol.how-many-machines-a-thread:10}")
    private int machinesThread;//分配线程数据



    @Override
    public void run(String... args) {
        initCache();//初始化缓存
        if (isStartServer) server.run();
        else log.info("----------必佳乐织机采集程序配置关闭，未启动！-------------");        //启动必佳乐采集程序服务端
    }

    private void initCache() {
        List<List<PicanolHost>> picanolHostLists = Cache.picanolHost;
        List<PicanolHost> list = picanolHostRepository.findAll();
        List<PicanolHost> temp = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            temp.add(list.get(i));
            if ((i + 1) % machinesThread == 0 || i + 1 == list.size()) {
                picanolHostLists.add(temp);
                temp = new ArrayList<>();
            }
        }
        log.info("Cache initialization succeeded...");
    }
}
