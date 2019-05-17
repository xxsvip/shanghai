package com.tianqiauto.textile.weaving;

import com.tianqiauto.textile.weaving.caiji.PicanolLoomModule.utils.socket.Client;

public class SSTest {
    public static void main(String[] args) {
        byte[] bytes = {(byte)255,0,0,0,0,2,1,0,0,0,2};
        byte[] send = Client.send("210.10.102.104", 3333,bytes);
        for (int i=0;i<send.length;i++){
            System.out.println(send[i]);
        }
    }
}
