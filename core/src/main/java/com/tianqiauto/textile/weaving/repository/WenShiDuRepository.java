package com.tianqiauto.textile.weaving.repository;

import com.tianqiauto.textile.weaving.model.base.Dict;
import com.tianqiauto.textile.weaving.model.sys.WenShiDu;
import org.hibernate.validator.constraints.EAN;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface WenShiDuRepository extends JpaRepository<WenShiDu,Long>, JpaSpecificationExecutor<WenShiDu> {

    List<WenShiDu> findAll();

}
