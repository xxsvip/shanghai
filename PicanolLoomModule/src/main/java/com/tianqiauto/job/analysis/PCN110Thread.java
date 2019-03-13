package com.tianqiauto.job.analysis;

import com.tianqiauto.bean.PCN;
import com.tianqiauto.bean.ParamVo;
import com.tianqiauto.utils.BytesUtil;
import org.springframework.stereotype.Service;

import java.util.Arrays;

/**
 * 请求获取机器速度 bjw
 * @Date 2019/3/7 10:38
 */
@Service
public class PCN110Thread extends AbstractAnalysis{

    /**
     * 设置报文体
     * @Date 2019/3/7 15:24
     **/
    @Override
    protected void setRequestPcn(PCN.Body body) {
        body.setId((byte)110);
        byte[] date = {(byte)30};
        body.setData(date);
    }

    /**
     * 解析报文把解析的参数放到List容器中
     * @Date 2019/3/7 15:24
     **/
    @Override
    protected void analysisPcn(PCN responsePcn) {
        if (null == responsePcn || responsePcn.toString().trim().length() < 1) {
            return;
        }
        String sourceId = responsePcn.getHeader().getSourceId();
        byte[] data = responsePcn.getBody().getData();
        byte[]  estimated =  Arrays.copyOfRange(data,2,4);//定长
        ParamVo.addParam(sourceId,"速度-estimated",String.valueOf(BytesUtil.bytesToWord(estimated)));
        byte[]  measured =  Arrays.copyOfRange(data,4,6);//定长
        ParamVo.addParam(sourceId,"速度-measured",String.valueOf(BytesUtil.bytesToWord(measured)));
    }
}
