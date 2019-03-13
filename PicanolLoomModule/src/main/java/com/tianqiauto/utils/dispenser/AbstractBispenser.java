package com.tianqiauto.utils.dispenser;

import com.tianqiauto.bean.PCN;

/**
 *  报文解析接口-bjw
 * @Date 2019/3/6 14:31
 */
public abstract class AbstractBispenser {

    public void run(PCN pcn){
        analysis(pcn);
    }

    public abstract void analysis(PCN request);

}
