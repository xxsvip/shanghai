package com.tianqiauto.textile.weaving.service;

import com.tianqiauto.textile.weaving.model.sys.Heyuehao;
import com.tianqiauto.textile.weaving.model.sys.Order;
import com.tianqiauto.textile.weaving.repository.HeYueHaoRepository;
import com.tianqiauto.textile.weaving.repository.OrderRepository;
import com.tianqiauto.textile.weaving.util.JPASql.Container;
import com.tianqiauto.textile.weaving.util.JPASql.DynamicUpdateSQL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @Author bjw
 * @Date 2019/3/14 9:55
 */
@Service
@Transactional
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private HeYueHaoRepository heYueHaoRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Order save(Order order) {
        //order.setStatus(); fixme 添加默认（已创建）先查詢出默认状态然后set进去
        //坯布规格=入库规格=【幅宽/经密/纬密/经纱成分/经纱支数/纬纱支数/纬纱支数/特殊要求】拼接而成
        Set<Heyuehao> temp = new HashSet<>();
        Set<Heyuehao> heyuehaos = order.getHeyuehaos();
        for (Heyuehao heyuehao:heyuehaos){
            temp.add(heYueHaoRepository.save(heyuehao));
        }
        order.setHeyuehaos(temp);
        String pbgg = order.getFukuan() + "\" " + order.getJingshachengfen() + order.getJingshazhishu() + "*" + order.getWeishachengfen() + order.getWeishazhishu() + " "+order.getJingmi()+"*"+order.getWeimi()+" " + order.getTeshuyaoqiu();
        order.setPibuguige(pbgg);
        order.setRukuguige(pbgg);
        return orderRepository.save(order);
    }

    public void deleteById(Long id) {
        orderRepository.deleteById(id);
    }

    public Order findByid(Long id){
        return orderRepository.findById(123L).get();
    }

    public List<Order> findAll(){
        return orderRepository.findAll();
    }

    public int update(Order order) {
        Container RUSql = new DynamicUpdateSQL<>(order).getUpdateSql();
        return jdbcTemplate.update(RUSql.getSql(),RUSql.getParam());
    }
}
