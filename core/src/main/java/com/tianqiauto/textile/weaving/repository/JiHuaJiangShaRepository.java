package com.tianqiauto.textile.weaving.repository;

import com.tianqiauto.textile.weaving.model.sys.JiHua_JiangSha;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @Author bjw
 * @Date 2019/3/20 8:51
 */
public interface JiHuaJiangShaRepository extends JpaRepository<JiHua_JiangSha,Long> {

    List<JiHua_JiangSha> findAll();

}
