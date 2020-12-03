package com.kh.p2p.base.mapper;

import com.kh.p2p.base.domain.Logininfo;
import org.apache.ibatis.annotations.Param;

public interface LogininfoMapper {

    int insert(Logininfo record);
    Long selectCountWithName(String name);
}