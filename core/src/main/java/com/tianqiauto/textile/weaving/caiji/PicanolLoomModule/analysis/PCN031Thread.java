package com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.analysis;

import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.bean.PCN;
import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.bean.ParamVo;
import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.utils.BytesUtil;
import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.utils.Cache;
import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.utils.StringUtils;
import com.tianqiauto.textile.weaving.model.sys.Current_BuJi;
import org.springframework.stereotype.Service;

import java.util.Arrays;

/**
 * 请求获取6个班的数据 bjw
 *
 * @Date 2019/3/7 10:38
 */
@Service
public class PCN031Thread extends AbstractAnalysis {

    /**
     * 设置报文体
     *
     * @Date 2019/3/7 15:24
     **/
    @Override
    protected void setRequestPcn(PCN.Body body) {
        body.setId((byte) 31);
        byte[] date = {(byte) 21};
        body.setData(date);
    }

    /**
     * 解析报文把解析的参数放到List容器中
     *
     * @Date 2019/3/7 15:24
     **/
    @Override
    protected void analysisPcn(PCN responsePcn, Current_BuJi currentBuJi) {
        if (null == responsePcn || responsePcn.toString().trim().length() < 1) {
            return;
        }
        String sourceId = responsePcn.getHeader().getSourceId();
        byte[] data = responsePcn.getBody().getData();
        short dqbc = BytesUtil.bytesToShort(data[2]);//当前班次
        ParamVo.addParam(sourceId, "当前班次", String.valueOf(dqbc), "013");

        //机器运行状态信息
        byte[] bitArray = BytesUtil.toBitArray(data[3]);
        ParamVo.addParam(sourceId, "生产状态", String.valueOf(bitArray[7]), "001");//0生产 1停车
        ParamVo.addParam(sourceId, "纬纱停车", String.valueOf(bitArray[6]), "002");
        ParamVo.addParam(sourceId, "经纱停车", String.valueOf(bitArray[5]), "003");
        ParamVo.addParam(sourceId, "紧急停止", String.valueOf(bitArray[4]), "004");
        ParamVo.addParam(sourceId, "手动停止", String.valueOf(bitArray[3]), "005");
        ParamVo.addParam(sourceId, "picks_1000", String.valueOf(bitArray[2]), "006");
        if (bitArray[7] == 0) {//生产
            currentBuJi.setQitingzhuangtai(Cache.yunxing);
            currentBuJi.setYunxingzhuangtai(Cache.yunxing);
        } else {
            currentBuJi.setQitingzhuangtai(Cache.tingzhi);
            currentBuJi.setYunxingzhuangtai(Cache.tingzhi);
        }


        //8个生产数据记录列表 生产数据记录格式（26个字节）
        byte[] totalShift = Arrays.copyOfRange(data, 4, 30);//总班次
        byte[] currentShift = Arrays.copyOfRange(data, 30, 56);//当前班次生产数据
        byte[] shift1 = Arrays.copyOfRange(data, 56, 82);//班次1
        byte[] shift2 = Arrays.copyOfRange(data, 82, 108);//班次2
        byte[] shift3 = Arrays.copyOfRange(data, 108, 134);//班次3
        byte[] shift4 = Arrays.copyOfRange(data, 134, 160);//班次4
        byte[] shift5 = Arrays.copyOfRange(data, 160, 186);//班次5
        byte[] shift6 = Arrays.copyOfRange(data, 186, 212);//班次6
        analysisShift(sourceId, totalShift, currentShift, shift1, shift2, shift3, shift4, shift5, shift6);
        analysisShift(currentShift, currentBuJi);
    }


    //生产数据记录格式（26个字节）
    private void analysisShift(String sourceId, byte[]... bytes) {
        for (short i=0;i< bytes.length; i++) {
            byte[] bt = bytes[i];
            short shiftNumber = BytesUtil.bytesToShort(bt[0]); //班次代码
            byte[] param1 = Arrays.copyOfRange(bt, 2, 6);//参数1
            String param1Str = String.valueOf(BytesUtil.bytesToLongWord(param1));
            ParamVo.addParam(sourceId, shiftNumber + "班-参数1", param1Str, getParaNum(i, 14));
            byte[] param2 = Arrays.copyOfRange(bt, 6, 10);//参数2 打纬次数
            String param2Str = String.valueOf(BytesUtil.bytesToLongWord(param2));
            ParamVo.addParam(sourceId, shiftNumber + "班-参数2-打纬次数", param2Str, getParaNum(i, 15));
            byte[] param3 = Arrays.copyOfRange(bt, 10, 14);//参数3 换班经过时间（秒）
            String param3Str = String.valueOf(BytesUtil.bytesToLongWord(param3));
            ParamVo.addParam(sourceId, shiftNumber + "班-参数3-换班经过时间（秒）", param3Str, getParaNum(i, 16));
            byte[] param4 = Arrays.copyOfRange(bt, 14, 18);//参数4 生产时间（秒）
            String param4Str = String.valueOf(BytesUtil.bytesToLongWord(param4));
            ParamVo.addParam(sourceId, shiftNumber + "班-参数4-生产时间（秒）", param4Str, getParaNum(i, 17));
            byte[] param5 = Arrays.copyOfRange(bt, 18, 20);//参数5
            String param5Str = String.valueOf(BytesUtil.bytesToWord(param5));
            ParamVo.addParam(sourceId, shiftNumber + "班-参数5", param5Str, getParaNum(i, 18));
            byte[] param6 = Arrays.copyOfRange(bt, 20, 22);//参数6 其他停车次数
            String param6Str = String.valueOf(BytesUtil.bytesToWord(param6));
            ParamVo.addParam(sourceId, shiftNumber + "班-参数6-其他停车次数", param6Str, getParaNum(i, 19));
            byte[] param7 = Arrays.copyOfRange(bt, 22, 24);//参数7 纬纱停车次数
            String param7Str = String.valueOf(BytesUtil.bytesToWord(param7));
            ParamVo.addParam(sourceId, shiftNumber + "班-参数7-纬纱停车次数", param7Str, getParaNum(i, 20));
            byte[] param8 = Arrays.copyOfRange(bt, 24, 26);//参数8 经纱停车次数
            String param8Str = String.valueOf(BytesUtil.bytesToWord(param8));
            ParamVo.addParam(sourceId, shiftNumber + "班-参数8-经纱停车次数", param8Str, getParaNum(i, 21));
        }
    }

    //记录当前班的数据
    private void analysisShift(byte[] bt, Current_BuJi currentBuJi) {
        byte[] param2 = Arrays.copyOfRange(bt, 6, 10);//参数2 打纬次数
        long param2Str = BytesUtil.bytesToLongWord(param2);
        currentBuJi.setDaweicishu((double)param2Str);

        byte[] param3 = Arrays.copyOfRange(bt, 10, 14);//参数3 换班经过时间（秒）
        long param3Str = BytesUtil.bytesToLongWord(param3);

        byte[] param4 = Arrays.copyOfRange(bt, 14, 18);//参数4 生产时间（秒）
        long param4Str = BytesUtil.bytesToLongWord(param4);
        currentBuJi.setYunxingshijian((int)(param4Str/60));

        byte[] param6 = Arrays.copyOfRange(bt, 20, 22);//参数6 其他停车次数
        int param6Str = BytesUtil.bytesToWord(param6);

        byte[] param7 = Arrays.copyOfRange(bt, 22, 24);//参数7 纬纱停车次数
        int param7Str = BytesUtil.bytesToWord(param7);
        currentBuJi.setWeiting(param7Str);

        byte[] param8 = Arrays.copyOfRange(bt, 24, 26);//参数8 经纱停车次数
        int param8Str = BytesUtil.bytesToWord(param8);
        currentBuJi.setJingting(param8Str);
        currentBuJi.setZongting(param8Str+param6Str+param7Str);//总停

        currentBuJi.setXiaolv(param4Str*0.1/param3Str);//设置效率 = 生产时间 / 换班经过时间
    }

    private String getParaNum(short shiftNumber, int number) {
        return StringUtils.add0Before(3, shiftNumber * 8 + number);
    }

}
